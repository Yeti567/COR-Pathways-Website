'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/* ─────────────────────────────────────────────
   NAV DATA
───────────────────────────────────────────── */
const PLATFORM_ITEMS = [
  {
    icon: '🎯',
    title: 'COR Audit Dashboard',
    subtitle: 'Track all 14 COR elements in real time',
    href: '/platform/cor-audit',
  },
  {
    icon: '🏅',
    title: 'Certifications & Training',
    subtitle: 'Employee certs, training matrix, expiry alerts',
    href: '/platform/certifications-training',
  },
  {
    icon: '📋',
    title: 'Forms & Inspections',
    subtitle: 'Digital forms for every COR requirement',
    href: '/platform/forms-inspections',
  },
  {
    icon: '📁',
    title: 'Documents & Libraries',
    subtitle: 'Document control and six master libraries',
    href: '/platform/documents-libraries',
  },
]

const SERVICES_ITEMS = [
  {
    icon: '🏆',
    title: 'COR Certification Consulting',
    subtitle: 'Full COR 2020 certification — Ontario',
    href: '/consulting',
  },
  {
    icon: '🛡️',
    title: 'Health & Safety Program Management',
    subtitle: 'SE-COR program management — AB, BC, SK',
    href: '/consulting#western-canada',
  },
]

/* ─────────────────────────────────────────────
   CHEVRON ICON
───────────────────────────────────────────── */
function ChevronDown({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        display: 'inline-block',
        marginLeft: '4px',
        transition: 'transform 200ms ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        verticalAlign: 'middle',
      }}
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   HAMBURGER / CLOSE ICONS
───────────────────────────────────────────── */
function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   DROPDOWN PANEL
───────────────────────────────────────────── */
function DropdownPanel({ items, footerText, footerHref, visible, onClose }) {
  return (
    <div
      role="menu"
      aria-hidden={!visible}
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '280px',
        background: '#163258',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        border: '1px solid rgba(74,144,196,0.2)',
        padding: '1rem',
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible
          ? 'translateX(-50%) translateY(0)'
          : 'translateX(-50%) translateY(-6px)',
        transition: 'opacity 200ms ease, transform 200ms ease',
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          role="menuitem"
          tabIndex={visible ? 0 : -1}
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background 150ms ease',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
          onFocus={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <span style={{ fontSize: '18px', lineHeight: 1, marginTop: '1px', flexShrink: 0 }}>
            {item.icon}
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-dm-sans)',
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '12px',
                fontFamily: 'var(--font-dm-sans)',
                lineHeight: 1.4,
              }}
            >
              {item.subtitle}
            </span>
          </span>
        </Link>
      ))}

      {/* Footer */}
      <div
        style={{
          marginTop: '8px',
          paddingTop: '10px',
          borderTop: '1px solid rgba(74,144,196,0.2)',
        }}
      >
        <Link
          href={footerHref}
          role="menuitem"
          tabIndex={visible ? 0 : -1}
          onClick={onClose}
          style={{
            display: 'block',
            color: '#34D399',
            fontSize: '13px',
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 500,
            padding: '4px 12px',
            textDecoration: 'none',
            transition: 'opacity 150ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          {footerText}
        </Link>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MOBILE DRAWER
───────────────────────────────────────────── */
function MobileDrawer({ open, onClose, pathname }) {
  const isActive = (href) => pathname === href

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(320px, 90vw)',
          height: '100dvh',
          background: '#0D1F3C',
          zIndex: 1999,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          {/* Logo */}
          <Link href="/" onClick={onClose} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/cor pathway logo trans.png"
              alt="COR Pathways"
              width={140}
              height={38}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>

            {/* Platform — expanded by default */}
            <li>
              <span
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '16px 0 8px',
                }}
              >
                Platform
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {PLATFORM_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 0 10px 12px',
                        color: isActive(item.href) ? '#34D399' : '#ffffff',
                        fontSize: '16px',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 500,
                        textDecoration: 'none',
                        borderLeft: '2px solid #34D399',
                        marginLeft: '4px',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{item.icon}</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Services — expanded by default */}
            <li>
              <span
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '16px 0 8px',
                }}
              >
                Services
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {SERVICES_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 0 10px 12px',
                        color: isActive(item.href) ? '#34D399' : '#ffffff',
                        fontSize: '16px',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 500,
                        textDecoration: 'none',
                        borderLeft: '2px solid #34D399',
                        marginLeft: '4px',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{item.icon}</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Direct links */}
            {[
              { label: 'Compliance', href: '/compliance' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'About', href: '/about' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    color: isActive(item.href) ? '#34D399' : '#ffffff',
                    fontSize: '18px',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(74,144,196,0.1)',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Sign In */}
            <li>
              <Link
                href="https://2026-core.vercel.app/login"
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '18px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(74,144,196,0.1)',
                }}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA button */}
        <div style={{ paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link
            href="/contact"
            onClick={onClose}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              background: '#059669',
              color: '#ffffff',
              fontSize: '15px',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.07)',
              color: '#ffffff',
              fontSize: '15px',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Book a Free Consultation
          </Link>
          <a
            href="tel:7808325158"
            style={{
              display: 'block',
              textAlign: 'center',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              color: '#34D399',
              textDecoration: 'none',
              paddingTop: '4px',
              letterSpacing: '0.01em',
            }}
          >
            📞 tel. 780-832-5158
          </a>
        </div>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────
   MAIN NAV COMPONENT
───────────────────────────────────────────── */
export default function Nav() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState(null) // 'platform' | 'services' | null
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  const isActive = useCallback(
    (href) => pathname === href,
    [pathname]
  )

  const isDropdownActive = useCallback(
    (items) => items.some((item) => pathname === item.href || pathname.startsWith(item.href)),
    [pathname]
  )

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* Close dropdown on route change */
  useEffect(() => {
    setOpenDropdown(null)
    setMobileOpen(false)
  }, [pathname])

  /* Keyboard: Escape closes dropdown */
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  /* ── Hover handlers with 150ms delay ── */
  const handleMouseEnterDropdown = useCallback((key) => {
    clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(key)
    }, 150)
  }, [])

  const handleMouseLeaveDropdown = useCallback(() => {
    clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }, [])

  const handleDropdownClick = useCallback((key) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }, [])

  /* ── Shared nav link style ── */
  const navLinkStyle = (active) => ({
    color: active ? '#34D399' : 'rgba(255,255,255,0.7)',
    fontSize: '14px',
    fontFamily: 'var(--font-dm-sans)',
    fontWeight: 500,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px 4px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    transition: 'color 150ms ease',
    whiteSpace: 'nowrap',
    position: 'relative',
  })

  return (
    <>
      <header
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          background: 'rgba(13,31,60,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(74,144,196,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* ── LEFT: Logo ── */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/cor pathway logo trans.png"
              alt="COR Pathways"
              width={160}
              height={44}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* ── CENTER: Desktop nav ── */}
          <nav
            aria-label="Main navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {/* Platform dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnterDropdown('platform')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'platform'}
                onClick={() => handleDropdownClick('platform')}
                style={navLinkStyle(
                  openDropdown === 'platform' || isDropdownActive(PLATFORM_ITEMS)
                )}
                onMouseEnter={(e) => {
                  if (openDropdown !== 'platform' && !isDropdownActive(PLATFORM_ITEMS)) {
                    e.currentTarget.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDropdown !== 'platform' && !isDropdownActive(PLATFORM_ITEMS)) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }
                }}
              >
                Platform
                <ChevronDown open={openDropdown === 'platform'} />
              </button>
              <DropdownPanel
                items={PLATFORM_ITEMS}
                footerText="Included free with all consulting engagements →"
                footerHref="/pricing"
                visible={openDropdown === 'platform'}
                onClose={() => setOpenDropdown(null)}
              />
            </div>

            {/* Services dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnterDropdown('services')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'services'}
                onClick={() => handleDropdownClick('services')}
                style={navLinkStyle(
                  openDropdown === 'services' || isDropdownActive(SERVICES_ITEMS)
                )}
                onMouseEnter={(e) => {
                  if (openDropdown !== 'services' && !isDropdownActive(SERVICES_ITEMS)) {
                    e.currentTarget.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDropdown !== 'services' && !isDropdownActive(SERVICES_ITEMS)) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }
                }}
              >
                Services
                <ChevronDown open={openDropdown === 'services'} />
              </button>
              <DropdownPanel
                items={SERVICES_ITEMS}
                footerText="Not sure what you need? Book a free consultation →"
                footerHref="/contact"
                visible={openDropdown === 'services'}
                onClose={() => setOpenDropdown(null)}
              />
            </div>

            {/* Direct links */}
            {[
              { label: 'Compliance', href: '/compliance' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'About', href: '/about' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={navLinkStyle(isActive(item.href))}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT: Actions ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexShrink: 0,
            }}
          >
            {/* Phone — desktop only */}
            <a
              href="tel:7808325158"
              className="nav-phone"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#34D399' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              📞 tel. 780-832-5158
            </a>

            {/* Sign In — hidden on mobile */}
            <Link
              href="https://2026-core.vercel.app/login"
              className="sign-in-link"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 150ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >
              Sign In
            </Link>

            {/* Start Free Trial — hidden on mobile */}
            <Link
              href="/contact"
              className="cta-button"
              style={{
                background: '#059669',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                padding: '9px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background 150ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#047857' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#059669' }}
            >
              Book a Free Consultation
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="hamburger-button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
              }}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .sign-in-link {
            display: none !important;
          }
          .cta-button {
            display: none !important;
          }
          .nav-phone {
            display: none !important;
          }
          .hamburger-button {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .hamburger-button {
            display: none !important;
          }
        }

        /* Focus visible for keyboard nav */
        .desktop-nav a:focus-visible,
        .desktop-nav button:focus-visible {
          outline: 2px solid #34D399;
          outline-offset: 2px;
          border-radius: 4px;
        }

        [role="menuitem"]:focus-visible {
          outline: 2px solid #34D399;
          outline-offset: 2px;
          border-radius: 6px;
        }
      `}</style>
    </>
  )
}
