import { Resend } from 'resend'

const MAX_NAME = 200
const MAX_COMPANY = 200
const MAX_EMAIL = 320
const MAX_PHONE = 50
const MAX_PROVINCE = 50
const MAX_SERVICE = 100
const MAX_EMPLOYEES = 50
const MAX_MESSAGE = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const rateLimitBuckets = new Map()

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const real = request.headers.get('x-real-ip')
  if (real) return real
  return 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const bucket = rateLimitBuckets.get(ip) || []
  const fresh = bucket.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (fresh.length >= RATE_LIMIT_MAX) {
    rateLimitBuckets.set(ip, fresh)
    return true
  }
  fresh.push(now)
  rateLimitBuckets.set(ip, fresh)

  if (rateLimitBuckets.size > 1000) {
    rateLimitBuckets.forEach((v, k) => {
      const stillFresh = v.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
      if (stillFresh.length === 0) rateLimitBuckets.delete(k)
      else rateLimitBuckets.set(k, stillFresh)
    })
  }

  return false
}

function validate(body) {
  const errors = {}
  const fields = [
    ['fullName', 'Full name', MAX_NAME, true],
    ['companyName', 'Company name', MAX_COMPANY, true],
    ['email', 'Email', MAX_EMAIL, true],
    ['phone', 'Phone', MAX_PHONE, true],
    ['province', 'Province', MAX_PROVINCE, true],
    ['service', 'Service', MAX_SERVICE, true],
    ['employees', 'Employees', MAX_EMPLOYEES, false],
    ['message', 'Message', MAX_MESSAGE, false],
  ]

  for (const [key, label, max, required] of fields) {
    const value = body[key]
    if (typeof value !== 'string') {
      if (required) errors[key] = `${label} is required.`
      continue
    }
    const trimmed = value.trim()
    if (required && trimmed.length === 0) {
      errors[key] = `${label} is required.`
    } else if (value.length > max) {
      errors[key] = `${label} must be ${max} characters or fewer.`
    }
  }

  if (typeof body.email === 'string' && body.email.trim().length > 0 && !EMAIL_RE.test(body.email)) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

async function sendViaResend(payload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: 'no-api-key' }

  const from = process.env.CONTACT_FROM || 'COR Pathways <noreply@corpathways.com>'
  const to = process.env.CONTACT_TO || 'blake.safetyconsultant@gmail.com'

  const text =
    `Full Name: ${payload.fullName}\n` +
    `Company: ${payload.companyName}\n` +
    `Email: ${payload.email}\n` +
    `Phone: ${payload.phone}\n` +
    `Province: ${payload.province}\n` +
    `Service: ${payload.service}\n` +
    (payload.employees ? `Employees: ${payload.employees}\n` : '') +
    (payload.message ? `\nMessage:\n${payload.message}` : '')

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `New inquiry from ${payload.fullName} (${payload.companyName})`,
      text,
    })
    if (error) {
      return { ok: false, reason: `resend-error: ${error.message || error.name || 'unknown'}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, reason: `resend-exception: ${err.message}` }
  }
}

export async function POST(request) {
  const ip = getClientIp(request)

  if (isRateLimited(ip)) {
    return Response.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 },
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return Response.json({ error: 'Invalid payload' }, { status: 400 })
  }

  // Honeypot: real users never fill the hidden "website" field.
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    console.log('[contact] honeypot triggered', { ip, website: body.website })
    return Response.json({ ok: true })
  }

  const errors = validate(body)
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 422 })
  }

  const clean = {
    fullName: body.fullName.trim(),
    companyName: body.companyName.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    province: body.province.trim(),
    service: body.service.trim(),
    employees: typeof body.employees === 'string' ? body.employees.trim() : '',
    message: typeof body.message === 'string' ? body.message.trim() : '',
  }

  const sendResult = await sendViaResend(clean)

  console.log('[contact]', {
    ...clean,
    ip,
    receivedAt: new Date().toISOString(),
    delivery: sendResult.ok ? 'sent' : `failed (${sendResult.reason})`,
  })

  return Response.json({ ok: true })
}
