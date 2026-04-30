import { NextResponse } from 'next/server';

const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitBuckets = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip) ?? [];
  const fresh = bucket.filter((t: number) => now - t < RATE_LIMIT_WINDOW_MS);
  if (fresh.length >= RATE_LIMIT_MAX) {
    rateLimitBuckets.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  rateLimitBuckets.set(ip, fresh);

  if (rateLimitBuckets.size > 1000) {
    rateLimitBuckets.forEach((v, k) => {
      const stillFresh = v.filter((t: number) => now - t < RATE_LIMIT_WINDOW_MS);
      if (stillFresh.length === 0) rateLimitBuckets.delete(k);
      else rateLimitBuckets.set(k, stillFresh);
    });
  }

  return false;
}

async function sendViaResend(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: 'no-api-key' };

  const from = process.env.CONTACT_FROM ?? 'COR Pathways <noreply@corpathway.com>';
  const to = process.env.CONTACT_TO ?? 'blake.safetyconsultant@gmail.com';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: payload.email,
        subject: `New contact form submission from ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      return { ok: false, reason: `resend-${res.status}: ${body.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: `resend-exception: ${(err as Error).message}` };
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { name, email, message, website } = body as Record<string, unknown>;

  // Honeypot: real users never fill the hidden "website" field. Bots usually do.
  // Return ok so the bot doesn't learn it tripped a filter.
  if (typeof website === 'string' && website.trim().length > 0) {
    console.log('[contact] honeypot triggered', { ip, website });
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (typeof name !== 'string' || name.trim().length === 0) {
    errors.name = 'Name is required.';
  } else if (name.length > MAX_NAME) {
    errors.name = `Name must be ${MAX_NAME} characters or fewer.`;
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address.';
  } else if (email.length > MAX_EMAIL) {
    errors.email = `Email must be ${MAX_EMAIL} characters or fewer.`;
  }
  if (typeof message !== 'string' || message.trim().length === 0) {
    errors.message = 'Message is required.';
  } else if (message.length > MAX_MESSAGE) {
    errors.message = `Message must be ${MAX_MESSAGE} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const clean = {
    name: (name as string).trim(),
    email: (email as string).trim(),
    message: (message as string).trim(),
  };

  const sendResult = await sendViaResend(clean);

  // Always log server-side so submissions aren't lost if email delivery fails
  // or if RESEND_API_KEY isn't configured yet.
  console.log('[contact]', {
    ...clean,
    ip,
    receivedAt: new Date().toISOString(),
    delivery: sendResult.ok ? 'sent' : `failed (${sendResult.reason})`,
  });

  return NextResponse.json({ ok: true });
}
