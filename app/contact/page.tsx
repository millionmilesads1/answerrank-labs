import type { Metadata } from 'next'
import RevealSection from '@/app/components/RevealSection'
import { SparkleIcon, CheckIcon, ArrowRightIcon, WhatsAppIcon, ClockIcon, GlobeIcon, ShieldIcon, BrainIcon } from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Contact — Get Your Free AI Search Audit',
  description: 'Get your free AI Search Visibility Audit from Answer Rank Labs.',
}

const INCLUDES = [
  { icon: BrainIcon, t: 'Brand Visibility Score', d: 'Your exact citation rate across ChatGPT, Gemini, Perplexity, and Bing Copilot — measured against 200+ category queries.' },
  { icon: ShieldIcon, t: 'Competitor Citation Map', d: 'See exactly which competitors are being cited instead of you, and on which platforms, for which queries.' },
  { icon: GlobeIcon, t: 'Category Gap Analysis', d: 'The specific content and citation gaps preventing your brand from appearing in AI answers for your most valuable queries.' },
  { icon: ArrowRightIcon, t: 'GEO Roadmap', d: 'A personalised, prioritised action plan to achieve AI search dominance in your category.' },
]

const STEPS = [
  { n: '01', t: 'Submit your details', d: "We'll reach out within 2 hours via WhatsApp." },
  { n: '02', t: 'Strategy call (30 min)', d: "We learn about your brand, category, and competitive landscape." },
  { n: '03', t: 'Audit delivered in 24h', d: 'Your complete AI Search Visibility Audit arrives within 24 hours.' },
  { n: '04', t: 'Review & decide', d: 'We present findings and recommendations. No pressure, full transparency.' },
]

const T = { p: 'rgba(10,10,15,0.88)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

export default function ContactPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 700, height: 700, top: '-10%', left: '20%', background: 'radial-gradient(circle, rgba(29,78,216,0.06) 0%, transparent 65%)' }} />
      </div>
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">
            <div>
              <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Free for Enterprise Brands</div>
              <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}>
                Get Your Free AI Search <span className="accent-text">Visibility Audit</span>
              </h1>
              <p className="text-lg max-w-[52ch] mb-6" style={{ color: T.s }}>In 24 hours, you'll know exactly where your brand appears in AI search, where it doesn't, and the precise steps to dominate your category — for free.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['50+ brands served', '98% retention rate', 'US and India', 'Results in 30 days'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: T.t }}>
                    <CheckIcon className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} />{t}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-2.5 pt-16">
              {STEPS.slice(0, 3).map(ps => (
                <div key={ps.n} className="stat-chip">
                  <div className="tabular text-xs font-bold mb-0.5" style={{ color: '#1d4ed8' }}>{ps.n}</div>
                  <div className="text-sm font-semibold" style={{ color: T.p }}>{ps.t}</div>
                  <div className="text-xs mt-0.5" style={{ color: T.t }}>{ps.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <RevealSection>
          <section className="py-12 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <LeadCaptureForm headline="Claim Your Free AI Search Audit" subheadline="We'll reach out within 2 hours to schedule a 30-minute discovery call, then deliver your full audit within 24 hours." ctaLabel="Claim My Free AI Search Audit" />
                <div className="mt-4 text-center">
                  <p className="text-xs mb-3" style={{ color: T.t }}>Or connect directly on WhatsApp</p>
                  <a href="https://wa.me/918796394750" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold" style={{ background: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.16)', color: '#16a34a' }}>
                    <WhatsAppIcon className="w-4 h-4" />Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="rounded-2xl p-4 bg-white" style={{ border: '1px solid rgba(22,163,74,0.14)', boxShadow: '0 2px 8px rgba(22,163,74,0.05)' }}>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.4)' }} />
                    <span className="text-sm font-semibold" style={{ color: T.p }}>We're available now</span>
                  </div>
                  <p className="text-xs pl-4" style={{ color: T.t }}>Response guaranteed within 2 hours</p>
                </div>

                <div className="rounded-2xl p-5 bg-white" style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <h3 className="text-sm font-bold mb-4" style={{ color: T.p }}>Your Free Audit Includes</h3>
                  <div className="flex flex-col gap-4">
                    {INCLUDES.map(item => {
                      const Icon = item.icon
                      return (
                        <div key={item.t} className="flex gap-3">
                          <div className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.14)' }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: '#1d4ed8' }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: T.p }}>{item.t}</p>
                            <p className="text-xs leading-relaxed mt-0.5" style={{ color: T.t }}>{item.d}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-2xl p-5 bg-white" style={{ border: '1px solid rgba(29,78,216,0.12)', boxShadow: '0 2px 8px rgba(29,78,216,0.04)' }}>
                  <h3 className="text-sm font-bold mb-4" style={{ color: T.p }}>What Happens Next</h3>
                  <div className="flex flex-col gap-3.5">
                    {STEPS.map(ps => (
                      <div key={ps.n} className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-lg shrink-0 text-[10px] font-bold tabular" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.15)', color: '#1d4ed8' }}>{ps.n}</div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: T.p }}>{ps.t}</p>
                          <p className="text-xs mt-0.5" style={{ color: T.t }}>{ps.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* URGENCY */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-4xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)' }}>
                The Window Is Open. <span style={{ color: 'rgba(10,10,15,0.2)' }}>But Not Forever.</span>
              </h2>
              <p className="text-lg max-w-[52ch] mb-10" style={{ color: T.s }}>AI search category authority is being established right now. The brands building infrastructure today will be extraordinarily difficult to displace.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                {[
                  { s: '8%', l: 'of brands have an AI search strategy', c: '92% gap = your opportunity' },
                  { s: '67%', l: 'of enterprise buyers use AI for vendor research', c: 'and the number is growing' },
                  { s: '3–5×', l: 'higher conversion from AI-referred traffic', c: 'vs. traditional organic' },
                ].map(item => (
                  <div key={item.s} className="stat-chip">
                    <div className="tabular text-2xl font-black leading-none mb-1" style={{ color: '#1d4ed8', letterSpacing: '-0.05em' }}>{item.s}</div>
                    <div className="text-sm font-medium mb-1" style={{ color: T.p }}>{item.l}</div>
                    <div className="text-xs" style={{ color: T.t }}>{item.c}</div>
                  </div>
                ))}
              </div>
              <div className="relative inline-flex items-center justify-center">
                <span aria-hidden="true" className="wa-pulse-ring-1 absolute inset-0 rounded-2xl" style={{ background: 'rgba(37,211,102,0.2)' }} />
                <span aria-hidden="true" className="wa-pulse-ring-2 absolute inset-0 rounded-2xl" style={{ background: 'rgba(37,211,102,0.12)' }} />
                <a href="https://wa.me/918796394750" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-white font-semibold wa-btn">
                  <WhatsAppIcon className="w-5 h-5" />
                  Start on WhatsApp Now
                  <span className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </RevealSection>
      </div>
    </div>
  )
}
