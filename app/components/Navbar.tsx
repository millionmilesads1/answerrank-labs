'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoMark, WhatsAppIcon } from '@/app/components/icons'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Fluid Island Pill — light glass ──────────────────────────── */}
      <nav
        className="navbar-pill fixed top-5 left-1/2 -translate-x-1/2 z-50 px-2 h-12 flex items-center gap-1"
        style={{ width: 'max-content', maxWidth: 'calc(100vw - 2rem)', minWidth: 280 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-1 pr-3 shrink-0 cursor-pointer">
          <LogoMark />
          <span
            className="text-sm font-semibold leading-none hidden sm:block"
            style={{ color: 'rgba(10,10,15,0.85)', letterSpacing: '-0.02em' }}
          >
            Answer Rank Labs
          </span>
        </Link>

        {/* Separator */}
        <div className="hidden lg:block w-px h-5 mx-1" style={{ background: 'rgba(0,0,0,0.1)' }} />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer"
              style={{
                color: pathname === href ? 'rgba(10,10,15,0.9)' : 'rgba(10,10,15,0.45)',
                background: pathname === href ? 'rgba(0,0,0,0.06)' : 'transparent',
                fontWeight: pathname === href ? 600 : 500,
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-px h-5 mx-1" style={{ background: 'rgba(0,0,0,0.1)' }} />

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-2 pr-1">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 cursor-pointer"
            style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)', color: '#1d4ed8' }}
          >
            Free Audit
          </Link>
          <a
            href="https://wa.me/918796394750"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 cursor-pointer"
            style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)', color: '#16a34a' }}
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile hamburger — morphs to X */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full ml-auto shrink-0 cursor-pointer transition-all duration-300"
          style={{ color: 'rgba(10,10,15,0.65)', background: open ? 'rgba(0,0,0,0.06)' : 'transparent' }}
        >
          <span className="relative w-5 h-3.5 block">
            <span
              className="absolute left-0 right-0 h-[1.5px] rounded-full origin-center transition-all duration-500"
              style={{
                top: 0,
                background: 'currentColor',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
              }}
            />
            <span
              className="absolute left-0 right-0 h-[1.5px] rounded-full origin-center transition-all duration-500"
              style={{
                bottom: 0,
                background: 'currentColor',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
              }}
            />
          </span>
        </button>
      </nav>

      {/* ── Full-screen light overlay (mobile) ───────────────────────── */}
      <div
        className="lg:hidden fixed inset-0 z-40 flex flex-col justify-between px-8 py-10 transition-all duration-500"
        style={{
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {/* Top: logo */}
        <div className="flex items-center gap-2 pt-2">
          <LogoMark />
          <span className="text-sm font-semibold" style={{ color: 'rgba(10,10,15,0.5)' }}>Answer Rank Labs</span>
        </div>

        {/* Middle: nav links — staggered reveal */}
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map(({ href, label }, i) => (
            <div
              key={href}
              style={{
                transform: open ? 'translateY(0)' : 'translateY(40px)',
                opacity: open ? 1 : 0,
                transition: `transform 0.55s cubic-bezier(0.32,0.72,0,1) ${open ? i * 70 + 80 : 0}ms, opacity 0.45s ease ${open ? i * 70 + 80 : 0}ms`,
              }}
            >
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block text-4xl font-bold leading-none py-3 transition-colors duration-200 cursor-pointer"
                style={{
                  color: pathname === href ? 'rgba(10,10,15,0.9)' : 'rgba(10,10,15,0.32)',
                  letterSpacing: '-0.04em',
                }}
              >
                {label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom: CTAs */}
        <div
          className="flex flex-col gap-3"
          style={{
            transform: open ? 'translateY(0)' : 'translateY(24px)',
            opacity: open ? 1 : 0,
            transition: `transform 0.55s cubic-bezier(0.32,0.72,0,1) ${open ? NAV_LINKS.length * 70 + 100 : 0}ms, opacity 0.45s ease ${open ? NAV_LINKS.length * 70 + 100 : 0}ms`,
          }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-full text-center py-4 rounded-2xl text-sm font-semibold cursor-pointer"
            style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)', color: '#1d4ed8' }}
          >
            Get Free Audit
          </Link>
          <a
            href="https://wa.me/918796394750"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
            style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)', color: '#16a34a' }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
