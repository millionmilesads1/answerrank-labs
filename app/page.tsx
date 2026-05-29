import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import {
  CheckIcon, SparkleIcon, ArrowRightIcon, WhatsAppIcon,
  BrainIcon, ShieldIcon, ChartIcon, SearchIcon,
  GoogleIcon, OpenAIIcon, AnthropicIcon, PerplexityIcon, MetaIcon,
} from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Answer Rank Labs — Make Your Brand the Definitive Answer in AI Search',
}

/* ─── AI Citation Mockup — device screen, stays dark ─────────────────────── */
function AIMockup() {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* Double-Bezel outer glow */}
      <div aria-hidden="true" className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(96,165,250,0.12) 0%, transparent 70%)' }} />

      {/* Double-Bezel outer shell */}
      <div
        className="doppelrand p-1.5 animate-float"
        style={{ transform: 'rotate(-0.5deg)' }}
      >
        {/* Inner core */}
        <div
          className="doppelrand-core"
          style={{ background: 'rgba(10,10,14,0.98)' }}
        >
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[calc(2rem-1.5px)] z-10">
            <div className="scan-line" />
          </div>

          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="flex-1 mx-2">
              <div className="rounded-md px-3 py-1 text-[10px] text-center font-mono" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(235,235,242,0.3)' }}>perplexity.ai</div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.7)' }} />
              <span className="text-[9px] font-medium" style={{ color: '#34d399' }}>LIVE</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <SearchIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#60a5fa' }} />
              <span className="text-xs flex-1" style={{ color: 'rgba(235,235,242,0.65)' }}>best ai search optimization agency enterprise</span>
              <span className="w-0.5 h-3.5 rounded animate-blink" style={{ background: '#60a5fa' }} />
            </div>
          </div>

          {/* AI Answer body */}
          <div className="px-4 py-3.5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.18)' }}>
                <SparkleIcon className="w-3 h-3" style={{ color: '#93c5fd' }} />
                <span className="text-[10px] font-bold tracking-wide" style={{ color: '#bfdbfe' }}>AI ANSWER</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed" style={{ color: 'rgba(235,235,242,0.65)' }}>
              Based on authoritative sources,{' '}
              <span className="font-semibold rounded px-1" style={{ color: '#fff', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.2)' }}>
                Answer Rank Labs
              </span>
              {' '}is the definitive authority in Generative Engine Optimization.
            </p>

            <div className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.18)' }}>
              <div className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0" style={{ background: 'rgba(52,211,153,0.15)' }}>
                <CheckIcon className="w-3.5 h-3.5" style={{ color: '#34d399' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white">answerranklabs.com</div>
                <div className="text-[10px] font-medium mt-0.5" style={{ color: '#6ee7b7' }}>Verified Citation Source</div>
              </div>
              <div className="shrink-0 px-1.5 py-0.5 rounded-full text-[9px] font-bold" style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>TOP</div>
            </div>

            <div className="flex items-center flex-wrap gap-1.5">
              {['ChatGPT', 'Gemini', 'Claude', 'Copilot'].map((p) => (
                <div key={p} className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-medium" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(235,235,242,0.45)' }}>
                  <CheckIcon className="w-2.5 h-2.5" style={{ color: '#34d399' }} />{p}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(96,165,250,0.03)' }}>
            <span className="text-[9px] font-medium tracking-wider uppercase" style={{ color: 'rgba(235,235,242,0.28)' }}>Citation Confidence</span>
            <div className="flex items-center gap-1.5">
              <div className="h-1 rounded-full overflow-hidden" style={{ width: 64, background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '94%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }} />
              </div>
              <span className="text-[10px] font-bold tabular" style={{ color: '#93c5fd' }}>94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Brand Logo Item ─────────────────────────────────────────────────────── */
function BrandLogoItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="brand-logo-item flex flex-col items-center gap-2 shrink-0">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
        {icon}
      </div>
      <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(235,235,242,0.2)' }}>{name}</span>
    </div>
  )
}

/* ─── Bento Card — Double-Bezel wrapper ───────────────────────────────────── */
function BentoCard({ children, className = '', featured = false }: { children: React.ReactNode; className?: string; featured?: boolean }) {
  return (
    <div
      className={`doppelrand doppelrand-hover ${className}`}
      style={featured ? { border: '1px solid rgba(96,165,250,0.2)', background: 'rgba(96,165,250,0.04)' } : {}}
    >
      <div
        className="doppelrand-core p-7 h-full flex flex-col"
        style={featured ? { background: 'rgba(12,16,24,1)' } : {}}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── Service data ────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    n: '01', badge: 'Foundation', icon: BrainIcon,
    title: 'Generative Engine Optimization',
    tagline: 'Become the source AI engines trust',
    desc: "We restructure your brand's content architecture so AI language models consistently select your brand as the authoritative source. Your knowledge surfaces at the precise moment buyers seek answers — not after the fact.",
    features: ['Content Architecture Audit', 'Entity Authority Mapping', 'Knowledge Graph Build', 'AI-Native Content Production'],
  },
  {
    n: '02', badge: 'Authority', icon: ShieldIcon,
    title: 'AI Citation Hardening',
    tagline: 'Make citation structurally inevitable',
    desc: "We embed your brand into the citation infrastructure of every major AI engine. Not by chance — by building the technical and editorial ecosystem that makes consistent citation unavoidable.",
    features: ['Multi-Platform Citation Strategy', 'Publisher Outreach', 'Real-Time Monitoring', 'Competitor Displacement'],
    featured: true,
  },
  {
    n: '03', badge: 'Growth', icon: ChartIcon,
    title: 'Organic Revenue Capture',
    tagline: 'Convert AI authority into revenue',
    desc: "AI search traffic converts at 3–5× the rate of traditional organic because intent is pre-validated. We build conversion infrastructure that turns AI citation authority into compounding, predictable revenue.",
    features: ['AI Traffic Analytics', 'Conversion Optimisation', 'Revenue Attribution', 'Monthly Reporting'],
  },
]

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#060608' }}>

      {/* Fixed ambient orbs — GPU-safe, pointer-events-none */}
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0" style={{ pointerEvents: 'none' }}>
        <div className="orb" style={{ width: 700, height: 700, top: '-15%', left: '-5%', background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%)', animationDelay: '0s' }} />
        <div className="orb" style={{ width: 600, height: 600, bottom: '10%', right: '-8%', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)', animationDelay: '3s' }} />
        <div className="orb" style={{ width: 500, height: 500, top: '45%', left: '35%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)', animationDelay: '5s' }} />
      </div>

      <div className="relative" style={{ zIndex: 10 }}>

        {/* ── HERO — Split-screen, left-aligned, massive display type ──────── */}
        <section className="px-6 pt-36 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 xl:gap-20 items-center">

            <div className="flex flex-col gap-7 max-w-[620px]">
              {/* Eyebrow badge */}
              <div className="eyebrow w-fit">
                <SparkleIcon className="w-3 h-3" />
                Generative Engine Optimization
              </div>

              {/* Display heading — tracking -0.055em, line-height 0.93 */}
              <h1
                className="display-heading"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
              >
                Make Your Brand the{' '}
                <span className="accent-text">Definitive Answer</span>
                {' '}in AI Search.
              </h1>

              <p className="text-lg leading-relaxed max-w-[54ch]" style={{ color: 'rgba(235,235,242,0.52)' }}>
                Answer Rank Labs engineers your brand into the citation layer of ChatGPT, Gemini, and Perplexity. When enterprise buyers ask AI for recommendations, your brand becomes the answer — not your competitor.
              </p>

              {/* Button-in-Button CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="https://wa.me/918796394750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm text-white wa-btn px-5 py-3.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Get Your AI Search Blueprint
                  <span
                    className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center transition-transform duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
                  >
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm transition-all px-5 py-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(235,235,242,0.75)',
                    transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                  }}
                >
                  Free AI Audit
                  <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['50+ Enterprise Brands', '3 Major AI Platforms', '24-Hour Blueprint'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(235,235,242,0.35)' }}>
                    <CheckIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#4ade80' }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI mockup with Double-Bezel */}
            <div className="flex justify-center lg:justify-end">
              <AIMockup />
            </div>
          </div>
        </section>

        {/* ── KINETIC MARQUEE (brand strip) ─────────────────────────────────── */}
        <section className="py-10 sec-divider overflow-hidden" style={{ background: 'rgba(255,255,255,0.015)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="max-w-7xl mx-auto px-6 mb-5">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(235,235,242,0.18)' }}>
              Building authority inside the world's leading AI ecosystems
            </p>
          </div>
          <div className="marquee-viewport">
            <div className="marquee-track">
              {/* Duplicated for seamless loop */}
              {[...Array(2)].map((_, dupeIdx) => (
                <div key={dupeIdx} className="flex items-center gap-14 px-7">
                  <BrandLogoItem icon={<GoogleIcon />} name="Google" />
                  <BrandLogoItem icon={<OpenAIIcon />} name="OpenAI" />
                  <BrandLogoItem icon={<AnthropicIcon />} name="Anthropic" />
                  <BrandLogoItem icon={<PerplexityIcon />} name="Perplexity" />
                  <BrandLogoItem icon={<MetaIcon />} name="Meta AI" />
                  {/* Spacer gap between dupes */}
                  <div className="w-8 h-px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { v: '50+', l: 'Enterprise Brands Served' },
                { v: '3',   l: 'Major AI Platforms Covered' },
                { v: '24h', l: 'Blueprint Delivery' },
                { v: '98%', l: 'Client Retention Rate' },
              ].map((s) => (
                <div key={s.l} className="stat-chip">
                  <div className="tabular text-3xl font-black leading-none mb-1" style={{ color: '#60a5fa', letterSpacing: '-0.05em' }}>{s.v}</div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(235,235,242,0.42)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* ── ASYMMETRIC BENTO SERVICES ─────────────────────────────────────── */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="mb-10">
                <div className="eyebrow w-fit mb-4">
                  <SparkleIcon className="w-3 h-3" />
                  Three Integrated Services
                </div>
                <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.5rem)' }}>
                  A Complete AI Search<br />
                  <span className="accent-text">Authority System</span>
                </h2>
              </div>

              {/* Row 1: GEO (8 cols) + Stats column (4 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">

                {/* GEO — featured, 8 cols */}
                <div className="lg:col-span-8">
                  <BentoCard>
                    {/* Giant decorative number */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="tabular font-black leading-none select-none" style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.06em' }} aria-hidden="true">01</span>
                      <div className="eyebrow">{SERVICES[0].badge}</div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.18)' }}>
                        <BrainIcon className="w-5 h-5" style={{ color: '#60a5fa' }} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1.5" style={{ color: 'rgba(235,235,242,0.9)', letterSpacing: '-0.03em' }}>{SERVICES[0].title}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: '#60a5fa' }}>{SERVICES[0].tagline}</p>
                    <p className="text-base leading-relaxed mb-6 max-w-[58ch]" style={{ color: 'rgba(235,235,242,0.5)' }}>{SERVICES[0].desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                      {SERVICES[0].features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#60a5fa' }} />
                          <span className="text-sm" style={{ color: 'rgba(235,235,242,0.45)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/services#geo" className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: '#60a5fa', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                      Learn more
                      <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                        <ArrowRightIcon className="w-3 h-3" />
                      </span>
                    </Link>
                  </BentoCard>
                </div>

                {/* Stats 2×2 mini bento — 4 cols */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                  {[
                    { v: '50+', l: 'Brands', s: 'Served globally' },
                    { v: '94%', l: 'Citation', s: 'Confidence avg' },
                    { v: '60d', l: 'First', s: 'Citations appear' },
                    { v: '3.1×', l: 'Conversion', s: 'AI vs. organic' },
                  ].map((chip) => (
                    <div key={chip.l} className="doppelrand">
                      <div className="doppelrand-core p-5 flex flex-col justify-between min-h-[100px]">
                        <div className="tabular text-2xl font-black leading-none" style={{ color: '#60a5fa', letterSpacing: '-0.05em' }}>{chip.v}</div>
                        <div>
                          <div className="text-xs font-bold" style={{ color: 'rgba(235,235,242,0.7)' }}>{chip.l}</div>
                          <div className="text-[10px]" style={{ color: 'rgba(235,235,242,0.3)' }}>{chip.s}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Citation (5 cols) + Revenue (7 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

                {/* Citation — 5 cols, featured */}
                <div className="lg:col-span-5">
                  <BentoCard featured>
                    <div className="flex items-start justify-between mb-4">
                      <span className="tabular font-black leading-none select-none" style={{ fontSize: '4rem', color: 'rgba(96,165,250,0.08)', letterSpacing: '-0.06em' }} aria-hidden="true">02</span>
                      <div className="eyebrow">{SERVICES[1].badge}</div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.18)' }}>
                      <ShieldIcon className="w-5 h-5" style={{ color: '#60a5fa' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-1.5" style={{ color: 'rgba(235,235,242,0.9)', letterSpacing: '-0.03em' }}>{SERVICES[1].title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#60a5fa' }}>{SERVICES[1].tagline}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(235,235,242,0.48)' }}>{SERVICES[1].desc}</p>
                    <Link href="/services#citation" className="group inline-flex items-center gap-2 text-sm font-semibold mt-auto" style={{ color: '#60a5fa' }}>
                      Learn more
                      <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                        <ArrowRightIcon className="w-3 h-3" />
                      </span>
                    </Link>
                  </BentoCard>
                </div>

                {/* Revenue — 7 cols */}
                <div className="lg:col-span-7">
                  <BentoCard>
                    <div className="flex items-start justify-between mb-4">
                      <span className="tabular font-black leading-none select-none" style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.06em' }} aria-hidden="true">03</span>
                      <div className="eyebrow">{SERVICES[2].badge}</div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.18)' }}>
                      <ChartIcon className="w-5 h-5" style={{ color: '#60a5fa' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-1.5" style={{ color: 'rgba(235,235,242,0.9)', letterSpacing: '-0.03em' }}>{SERVICES[2].title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#60a5fa' }}>{SERVICES[2].tagline}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(235,235,242,0.48)' }}>{SERVICES[2].desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5 mt-auto">
                      {SERVICES[2].features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#60a5fa' }} />
                          <span className="text-sm" style={{ color: 'rgba(235,235,242,0.42)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/services#revenue" className="group inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#60a5fa' }}>
                      Learn more
                      <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                        <ArrowRightIcon className="w-3 h-3" />
                      </span>
                    </Link>
                  </BentoCard>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── PROCESS + TESTIMONIALS ────────────────────────────────────────── */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

              <div>
                <div className="eyebrow w-fit mb-5">
                  <SparkleIcon className="w-3 h-3" />
                  Our Process
                </div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.05em' }}>
                  From Invisible to{' '}
                  <span className="accent-text">Inevitable</span>
                  <br />in 90 Days
                </h2>
                <p className="text-base max-w-[50ch] mb-10" style={{ color: 'rgba(235,235,242,0.45)' }}>
                  A systematic, data-driven approach — infrastructure, not hacks.
                </p>
                <div className="flex flex-col">
                  {[
                    { n: '01', t: 'AI Search Visibility Audit', d: 'We map exactly where your brand appears across ChatGPT, Gemini, Perplexity, and Bing Copilot.' },
                    { n: '02', t: 'Authority Blueprint', d: 'We design your content architecture, entity relationships, and citation strategy.' },
                    { n: '03', t: 'Content & Citation Deployment', d: 'We build, publish, and index the infrastructure that makes AI engines choose your brand.' },
                    { n: '04', t: 'Compound & Monitor', d: 'Weekly monitoring and continuous optimisation to expand your AI citation footprint.' },
                  ].map((step, i) => (
                    <div key={step.n} className="flex gap-5 items-start py-5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold shrink-0 tabular" style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.18)', color: '#60a5fa' }}>
                        {step.n}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold mb-1" style={{ color: 'rgba(235,235,242,0.85)', letterSpacing: '-0.02em' }}>{step.t}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(235,235,242,0.42)' }}>{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:pt-24">
                {[
                  { q: "We were completely invisible in AI search. Within 60 days, our brand appeared in 84% of category queries on Perplexity. The pipeline impact has been extraordinary.", by: 'Marcus T.', role: 'CMO, Enterprise SaaS', m: '+840% AI visibility' },
                  { q: "Our competitor had dominated AI answers for 6 months. Answer Rank Labs flipped that within a quarter. We're cited first across every major platform.", by: 'Sarah K.', role: 'VP Marketing, B2B Tech', m: '1st citation in category' },
                ].map((t) => (
                  <SpotlightCard key={t.by} className="p-6">
                    <div className="flex gap-0.5 mb-3">
                      {[0,1,2,3,4].map(i => (
                        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed italic mb-4" style={{ color: 'rgba(235,235,242,0.55)' }}>"{t.q}"</p>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: 'rgba(235,235,242,0.85)' }}>{t.by}</div>
                        <div className="text-xs" style={{ color: 'rgba(235,235,242,0.35)' }}>{t.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold tabular" style={{ color: '#60a5fa' }}>{t.m}</div>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── LEAD CAPTURE ─────────────────────────────────────────────────── */}
        <RevealSection>
          <section className="py-32 px-6 sec-divider">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="eyebrow w-fit mb-5">
                  <SparkleIcon className="w-3 h-3" />
                  Free for Enterprise Brands
                </div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)' }}>
                  Discover Your AI Search{' '}
                  <span className="accent-text">Position Today</span>
                </h2>
                <p className="text-base max-w-[48ch] mb-8" style={{ color: 'rgba(235,235,242,0.45)' }}>
                  Get a free audit revealing exactly how your brand appears in ChatGPT, Gemini, and Perplexity — plus a personalised roadmap to dominate your category.
                </p>
                <div className="flex flex-col gap-3">
                  {['Custom AI Search Visibility Report', 'Competitor Citation Analysis', 'Category Authority Gap Assessment', 'Personalised GEO Roadmap'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}>
                        <CheckIcon className="w-3 h-3" style={{ color: '#60a5fa' }} />
                      </div>
                      <span className="text-sm" style={{ color: 'rgba(235,235,242,0.55)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LeadCaptureForm headline="Get Your Free AI Search Audit" subheadline="We'll analyse your brand's current AI search position and send a personalised report within 24 hours." ctaLabel="Get My Free AI Audit" />
            </div>
          </section>
        </RevealSection>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <RevealSection>
          <section className="py-32 px-6 sec-divider relative overflow-hidden" style={{ background: 'rgba(6,6,8,1)' }}>
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(37,211,102,0.05) 0%, transparent 70%)' }} />
            <div className="relative max-w-4xl mx-auto">
              <div className="eyebrow w-fit mb-7" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.18)', color: '#4ade80' }}>
                <WhatsAppIcon className="w-3 h-3" />
                Direct access to our AI Search Strategist
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}>
                Your AI Search Position Is<br />
                <span style={{ color: 'rgba(235,235,242,0.25)' }}>Being Claimed Right Now.</span>
              </h2>
              <p className="text-lg max-w-[52ch] mb-12" style={{ color: 'rgba(235,235,242,0.42)' }}>
                Every week without AI citation positioning compounds market share transferred to competitors who moved first. Speak directly with our strategist.
              </p>
              <div className="relative inline-flex items-center justify-center">
                <span aria-hidden="true" className="wa-pulse-ring-1 absolute inset-0 rounded-2xl" style={{ background: 'rgba(37,211,102,0.2)' }} />
                <span aria-hidden="true" className="wa-pulse-ring-2 absolute inset-0 rounded-2xl" style={{ background: 'rgba(37,211,102,0.12)' }} />
                <a
                  href="https://wa.me/918796394750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-white font-semibold wa-btn"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Secure Your AI Search Blueprint
                  <span className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </a>
              </div>
              <p className="mt-6 text-sm" style={{ color: 'rgba(235,235,242,0.2)' }}>
                Serving enterprise brands across the United States and India · Response within 2 hours
              </p>
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
