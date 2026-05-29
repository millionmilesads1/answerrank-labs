import Link from 'next/link'
import { LogoMark, WhatsAppIcon } from '@/app/components/icons'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#060608' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <span className="text-sm font-bold leading-none block" style={{ color: 'rgba(235,235,242,0.85)', letterSpacing: '-0.02em' }}>Answer Rank Labs</span>
                <span className="text-[10px] leading-none mt-0.5 block" style={{ color: 'rgba(235,235,242,0.28)' }}>answerranklabs.com</span>
              </div>
            </div>
            <p className="text-sm max-w-[280px] leading-relaxed" style={{ color: 'rgba(235,235,242,0.38)' }}>
              Engineering brands into the citation layer of ChatGPT, Gemini, and Perplexity. AI search authority for enterprise brands.
            </p>
            <a href="https://wa.me/918796394750" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-fit text-sm font-semibold" style={{ color: '#4ade80' }}>
              <WhatsAppIcon className="w-4 h-4" />Connect on WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'rgba(235,235,242,0.24)' }}>Services</h4>
            <ul className="flex flex-col gap-2">
              {[{ href: '/services', l: 'GEO Services' }, { href: '/how-it-works', l: 'How It Works' }, { href: '/case-studies', l: 'Case Studies' }, { href: '/contact', l: 'Free AI Audit' }].map(({ href, l }) => (
                <li key={href}><Link href={href} className="text-sm transition-colors" style={{ color: 'rgba(235,235,242,0.38)' }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'rgba(235,235,242,0.24)' }}>Company</h4>
            <ul className="flex flex-col gap-2">
              {[{ href: '/about', l: 'About Us' }, { href: '/contact', l: 'Contact' }].map(({ href, l }) => (
                <li key={href}><Link href={href} className="text-sm transition-colors" style={{ color: 'rgba(235,235,242,0.38)' }}>{l}</Link></li>
              ))}
            </ul>
            <p className="text-xs mt-2" style={{ color: 'rgba(235,235,242,0.2)' }}>United States &amp; India</p>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(235,235,242,0.2)' }}>© 2026 Answer Rank Labs. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'rgba(235,235,242,0.2)' }}>Generative Engine Optimization · AI Search Citation Authority</p>
        </div>
      </div>
    </footer>
  )
}
