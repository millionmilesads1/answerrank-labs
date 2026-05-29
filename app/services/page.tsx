import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import {
  BrainIcon, ShieldIcon, ChartIcon, CheckIcon, SparkleIcon,
  ArrowRightIcon, WhatsAppIcon, TargetIcon, GlobeIcon, LightningIcon,
} from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'GEO Services',
  description: 'Three integrated disciplines that engineer your brand into the citation layer of ChatGPT, Gemini, and Perplexity.',
}

const SERVICES = [
  { id: 'geo', n: '01', badge: 'Foundation Service', icon: BrainIcon, title: 'Generative Engine Optimization', tagline: 'Become the source AI engines trust', desc: "We restructure your brand's entire content and knowledge architecture so that AI language models consistently select your brand as the authoritative source for your category.", deliverables: ['Content Architecture Audit & Restructure', 'Entity Authority Mapping', 'Knowledge Graph Optimisation', 'AI-Native Content Strategy & Production', 'Topical Authority Cluster Development', 'Structured Data & Schema Implementation'], timeline: '30-day initial deployment', result: 'Your brand surfaces in AI answers when buyers search for your category' },
  { id: 'citation', n: '02', badge: 'Authority Service', icon: ShieldIcon, title: 'AI Citation Hardening', tagline: 'Make citation structurally inevitable', desc: 'We embed your brand into the citation infrastructure of every major AI engine. ChatGPT, Gemini, Perplexity, and Bing Copilot reference your brand not by chance, but because we build the technical ecosystem that makes consistent citation unavoidable.', deliverables: ['Multi-Platform Citation Strategy', 'Publisher & Authority Site Outreach', 'Backlink Ecosystem Development', 'Digital PR for AI Citation Signals', 'Real-Time Citation Monitoring Dashboard', 'Competitor Citation Displacement'], timeline: '60-day deployment cycle', result: 'Your brand cited first across ChatGPT, Gemini, and Perplexity', featured: true },
  { id: 'revenue', n: '03', badge: 'Growth Service', icon: ChartIcon, title: 'Organic Revenue Capture', tagline: 'Convert AI authority into revenue', desc: "AI search traffic converts at 3–5× the rate of traditional organic search because intent is pre-validated. We build the conversion infrastructure that captures this high-intent traffic and turns AI authority into compounding revenue.", deliverables: ['AI Traffic Analytics & Attribution', 'Conversion Rate Optimisation', 'High-Intent Landing Page Architecture', 'Revenue Funnel Design & Optimisation', 'Monthly Performance Reporting', 'Continuous Conversion Testing'], timeline: 'Ongoing optimisation', result: '3–5× higher conversion rates from AI-referred traffic' },
]

const COMPARISON = [
  { aspect: 'Works on AI platforms', traditional: false, geo: true },
  { aspect: 'Positions brand as the answer', traditional: false, geo: true },
  { aspect: 'Converts high-intent AI traffic', traditional: false, geo: true },
  { aspect: 'Compound authority over time', traditional: false, geo: true },
  { aspect: 'Works on Google blue links', traditional: true, geo: true },
  { aspect: 'Requires keyword stuffing', traditional: true, geo: false },
  { aspect: 'Depends on algorithm updates', traditional: true, geo: false },
]

const T = { p: 'rgba(10,10,15,0.88)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 600, height: 600, top: '-10%', right: '5%', background: 'radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 65%)' }} />
      </div>
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
            <div>
              <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Three Integrated Services</div>
              <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}>
                Your Complete AI Search <span className="accent-text">Authority System</span>
              </h1>
              <p className="text-lg max-w-[52ch] mb-8" style={{ color: T.s }}>Three disciplines. One mission: make your brand the definitive answer every time an enterprise buyer asks AI for a recommendation.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)', color: '#1d4ed8' }}>Get Free Audit <ArrowRightIcon className="w-4 h-4" /></Link>
                <a href="https://wa.me/918796394750" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm text-white wa-btn"><WhatsAppIcon className="w-4 h-4" />Speak to a Strategist</a>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-3 pt-16">
              {[{ l: 'Foundation', s: 'GEO — 30-day deploy' }, { l: 'Authority', s: 'Citation — 60-day deploy' }, { l: 'Growth', s: 'Revenue — Ongoing' }].map(c => (
                <div key={c.l} className="stat-chip"><div className="text-sm font-bold mb-0.5" style={{ color: '#1d4ed8' }}>{c.l}</div><div className="text-xs" style={{ color: T.t }}>{c.s}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <RevealSection>
          <section className="py-12 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
              {SERVICES.map((s, idx) => {
                const Icon = s.icon
                const rev = idx % 2 !== 0
                return (
                  <div key={s.id} id={s.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" style={rev ? { direction: 'rtl' } : {}}>
                    <div style={rev ? { direction: 'ltr' } : {}}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.16)' }}><Icon className="w-5 h-5" style={{ color: '#1d4ed8' }} /></div>
                        <span className="eyebrow">{s.badge}</span>
                        <span className="tabular text-xs font-bold" style={{ color: 'rgba(0,0,0,0.14)' }}>{s.n}</span>
                      </div>
                      <h2 className="display-heading mb-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>{s.title}</h2>
                      <p className="text-base font-semibold mb-4" style={{ color: '#1d4ed8' }}>{s.tagline}</p>
                      <p className="text-base leading-relaxed max-w-[54ch] mb-6" style={{ color: T.s }}>{s.desc}</p>
                      <div className="flex items-center gap-3 p-4 rounded-xl mb-6" style={{ background: 'rgba(29,78,216,0.05)', border: '1px solid rgba(29,78,216,0.12)' }}>
                        <TargetIcon className="w-5 h-5 shrink-0" style={{ color: '#1d4ed8' }} />
                        <p className="text-sm font-medium" style={{ color: '#1e3a8a' }}>{s.result}</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="eyebrow">{s.timeline}</div>
                        <Link href="/contact" className="group inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#1d4ed8' }}>
                          Get Started <span className="w-5 h-5 rounded-full bg-blue-700/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}><ArrowRightIcon className="w-3 h-3" /></span>
                        </Link>
                      </div>
                    </div>
                    <div style={rev ? { direction: 'ltr' } : {}}>
                      <SpotlightCard className="p-7">
                        <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#1d4ed8' }}>What's Included</h3>
                        <ul className="flex flex-col gap-3.5">
                          {s.deliverables.map(d => (
                            <li key={d} className="flex items-start gap-3">
                              <div className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)' }}><CheckIcon className="w-3 h-3" style={{ color: '#1d4ed8' }} /></div>
                              <span className="text-sm leading-relaxed" style={{ color: T.s }}>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </SpotlightCard>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </RevealSection>

        {/* COMPARISON */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <h2 className="display-heading mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>GEO vs. Traditional SEO</h2>
                <p className="text-base max-w-[50ch]" style={{ color: T.s }}>Traditional SEO optimises for Google's algorithm. GEO engineers authority inside the AI models replacing search.</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <div className="grid grid-cols-3 px-6 py-3.5" style={{ background: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Capability</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Traditional SEO</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: '#1d4ed8' }}>GEO</div>
                </div>
                {COMPARISON.map((row, i) => (
                  <div key={row.aspect} className="grid grid-cols-3 px-6 py-3.5 items-center" style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none', background: i % 2 !== 0 ? '#f8fafc' : '#ffffff' }}>
                    <span className="text-sm" style={{ color: T.s }}>{row.aspect}</span>
                    <div className="flex justify-center">
                      {row.traditional ? <CheckIcon className="w-4 h-4" style={{ color: 'rgba(10,10,15,0.22)' }} /> : <span className="w-4 h-px" style={{ background: 'rgba(0,0,0,0.1)' }} />}
                    </div>
                    <div className="flex justify-center">
                      {row.geo ? <CheckIcon className="w-4 h-4" style={{ color: '#1d4ed8' }} /> : <span className="w-4 h-px" style={{ background: 'rgba(0,0,0,0.1)' }} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* LEAD CAPTURE */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>Ready to Own Your Category in <span className="accent-text">AI Search?</span></h2>
                <p className="text-base max-w-[48ch] mb-8" style={{ color: T.s }}>Get a free audit and discover exactly where your brand stands today — and the precise steps to dominate your category.</p>
                <div className="flex flex-col gap-4">
                  {[{ icon: GlobeIcon, text: 'Coverage across ChatGPT, Gemini, Perplexity & Bing Copilot' }, { icon: LightningIcon, text: '24-hour audit delivery guarantee' }, { icon: TargetIcon, text: 'Personalised strategy for your specific industry' }].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.15)' }}><Icon className="w-4 h-4" style={{ color: '#1d4ed8' }} /></div>
                      <span className="text-sm" style={{ color: T.s }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LeadCaptureForm headline="Get Your Free AI Search Audit" subheadline="Tell us about your biggest AI search challenge and we'll show you exactly how to solve it." ctaLabel="Claim My Free Audit" />
            </div>
          </section>
        </RevealSection>
      </div>
    </div>
  )
}
