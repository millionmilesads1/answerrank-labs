import type { Metadata } from 'next'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import { SparkleIcon, CheckIcon, ClockIcon, SearchIcon, DocumentIcon, BrainIcon, ShieldIcon, ChartIcon } from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'How GEO Works',
  description: 'Our 5-phase process takes your brand from invisible to inevitable in AI search in 90 days.',
}

const PHASES = [
  { n: '01', week: 'Week 1', icon: SearchIcon, title: 'AI Search Visibility Audit', desc: "We conduct a comprehensive audit of your brand's current presence across every major AI search platform — 200+ category query variations across ChatGPT, Gemini, Perplexity, and Bing Copilot. The result is a precise visibility map.", deliverables: ['Brand Visibility Score across 4 platforms', 'Competitor Citation Analysis', 'Category Query Mapping (200+)', 'Gap Analysis Report'] },
  { n: '02', week: 'Week 2', icon: DocumentIcon, title: 'Authority Blueprint', desc: "We design your brand's complete AI authority architecture — your content ecosystem, entity relationships, knowledge graph strategy, and citation target list. The strategic foundation everything subsequent builds on.", deliverables: ['Entity Authority Map', 'Content Architecture Framework', 'Citation Target Priority List (50+)', 'Knowledge Graph Strategy'] },
  { n: '03', week: 'Weeks 3–5', icon: BrainIcon, title: 'Content Architecture Build', desc: "Our team executes your blueprint — creating, restructuring, and optimising every content asset your brand needs to become the authoritative source. Structured, factual, interconnected. Citation infrastructure, not blog posts.", deliverables: ['AI-Native Content (20+ assets)', 'Structured Data & Schema', 'Topical Authority Clusters', 'Internal Knowledge Network'] },
  { n: '04', week: 'Weeks 6–10', icon: ShieldIcon, title: 'Citation Deployment', desc: "We deploy your off-site citation infrastructure — placing your brand across the publisher ecosystem, authority sites, and digital properties that AI engines trust. This creates the external signal density that makes AI citation structurally inevitable.", deliverables: ['Publisher Outreach & Placement (30+)', 'Digital PR for AI Citation Signals', 'Authority Backlink Build', 'Wikipedia / Wikidata Validation'] },
  { n: '05', week: 'Ongoing', icon: ChartIcon, title: 'Monitor, Compound & Expand', desc: "AI search authority compounds over time. We continuously monitor your citation footprint, track competitor movements, and expand into adjacent categories. Monthly reporting with precision metrics: citation rate, share of AI voice, revenue attribution.", deliverables: ['Weekly Citation Monitoring', 'Share of AI Voice Tracking', 'Competitor Displacement Analysis', 'Revenue Attribution Dashboard'] },
]

const FAQS = [
  { q: 'How long until I see results?', a: 'Initial citation improvements typically appear within 30–45 days. Measurable increases occur around weeks 6–8. Full category authority is established within 90 days for most clients.' },
  { q: 'Does this work if my competitors are already dominating AI search?', a: "Yes. AI citation is not a fixed-sum game. Our Citation Displacement process specifically targets competitor-dominated queries and systematically replaces them with your brand." },
  { q: 'What makes GEO different from regular SEO?', a: "Traditional SEO optimises for Google's algorithm. GEO engineers your brand's presence inside the training data, retrieval indices, and citation patterns of AI language models." },
  { q: 'Do I need to be a large enterprise?', a: "Our services are calibrated for brands with serious market ambitions — typically companies with $5M+ in revenue. The ROI is most dramatic where category leadership translates directly to significant revenue." },
  { q: 'How do you measure success?', a: "We track: (1) Brand Citation Rate across target platforms, (2) Share of AI Voice in your category, (3) AI-Referred Traffic volume, and (4) Revenue Attribution from AI-referred visitors." },
]

const T = { p: 'rgba(235,235,242,0.9)', s: 'rgba(235,235,242,0.5)', t: 'rgba(235,235,242,0.28)' }

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#060608' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 600, height: 600, top: '-5%', left: '20%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)' }} />
      </div>
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-start">
            <div>
              <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />5-Phase Process</div>
              <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}>
                From Invisible to <span className="accent-text">Inevitable</span><br />in 90 Days
              </h1>
              <p className="text-lg max-w-[52ch] mb-6" style={{ color: T.s }}>A systematic, data-driven process that engineers your brand into the citation layer of every major AI search platform — not by chance, but by design.</p>
              <div className="flex items-center gap-0 flex-wrap gap-y-2">
                {['Wk 1', 'Wk 2', 'Wks 3–5', 'Wks 6–10', 'Ongoing'].map((w, i) => (
                  <div key={w} className="flex items-center">
                    {i > 0 && <div className="w-5 h-px mx-1.5" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                    <span className="eyebrow text-[9px]">{w}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-3 pt-16">
              {[{ v: '30–45', l: 'Days to first citations' }, { v: '90', l: 'Days to category authority' }, { v: '24h', l: 'Audit delivery' }].map(c => (
                <div key={c.l} className="stat-chip"><div className="tabular text-xl font-black leading-none mb-1" style={{ color: '#60a5fa', letterSpacing: '-0.05em' }}>{c.v}</div><div className="text-xs" style={{ color: T.t }}>{c.l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* PHASES */}
        <RevealSection>
          <section className="py-12 px-6 sec-divider">
            <div className="max-w-4xl mx-auto">
              {PHASES.map((phase, idx) => {
                const Icon = phase.icon
                return (
                  <div key={phase.n} className="relative flex gap-8 py-10" style={{ borderTop: idx > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div className="flex flex-col items-center shrink-0 w-12">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl" style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.18)' }}>
                        <Icon className="w-5 h-5" style={{ color: '#60a5fa' }} />
                      </div>
                      {idx < PHASES.length - 1 && <div className="w-px mt-4" style={{ background: 'rgba(96,165,250,0.2)', height: 40 }} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="eyebrow">{phase.week}</span>
                        <span className="tabular text-xs font-bold" style={{ color: 'rgba(255,255,255,0.12)' }}>{phase.n}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3" style={{ color: T.p, letterSpacing: '-0.03em' }}>{phase.title}</h2>
                      <p className="text-base leading-relaxed max-w-[60ch] mb-5" style={{ color: T.s }}>{phase.desc}</p>
                      <div className="rounded-xl p-4" style={{ background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.12)' }}>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: '#60a5fa' }}>Deliverables</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {phase.deliverables.map(d => (
                            <div key={d} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ background: '#60a5fa' }} />
                              <span className="text-sm" style={{ color: T.s }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </RevealSection>

        {/* TIMELINE */}
        <RevealSection>
          <section className="py-20 px-6 sec-divider" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <div className="max-w-5xl mx-auto">
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>What to Expect, When</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
                {[{ period: 'Days 1–30', title: 'Foundation & Audit', items: ['Complete AI Search Audit', 'Authority Blueprint Delivered', 'Content Architecture Begins'] }, { period: 'Days 30–60', title: 'Build & Deploy', items: ['20+ AI-Native Content Assets Live', 'Structured Data Deployed', 'Citation Outreach Begins'], featured: true }, { period: 'Days 60–90', title: 'Authority & Results', items: ['First AI Citation Improvements', 'Share of AI Voice Tracking Live', 'Revenue Attribution Active'] }].map(t => (
                  <div key={t.period} className="p-7" style={{ background: t.featured ? 'rgba(96,165,250,0.07)' : '#0c0c10' }}>
                    <span className="eyebrow mb-4 inline-block">{t.period}</span>
                    <h3 className="text-base font-bold mb-4" style={{ color: T.p }}>{t.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {t.items.map(item => (
                        <li key={item} className="flex items-start gap-2"><CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: t.featured ? '#60a5fa' : 'rgba(235,235,242,0.3)' }} /><span className="text-sm" style={{ color: T.s }}>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* FAQ */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>Common Questions</h2>
              <div className="flex flex-col gap-2">
                {FAQS.map(faq => (
                  <SpotlightCard key={faq.q} className="p-6">
                    <h3 className="text-base font-semibold mb-2.5" style={{ color: T.p }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: T.s }}>{faq.a}</p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* LEAD CAPTURE */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Start Your Journey</div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>Begin with a Free <span className="accent-text">AI Search Audit</span></h2>
                <p className="text-base max-w-[48ch] mb-6" style={{ color: T.s }}>The first step is understanding exactly where you stand. We'll audit your current AI search presence and show you the precise path to category dominance.</p>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.15)' }}>
                  <ClockIcon className="w-5 h-5 shrink-0" style={{ color: '#60a5fa' }} />
                  <div><p className="text-sm font-bold" style={{ color: T.p }}>Audit delivered in 24 hours</p><p className="text-xs mt-0.5" style={{ color: T.t }}>Response to your enquiry within 2 hours</p></div>
                </div>
              </div>
              <LeadCaptureForm headline="Start Your 5-Phase GEO Journey" subheadline="Get your free AI Search Visibility Audit and see exactly where Phase 1 will take you." ctaLabel="Begin My Audit" />
            </div>
          </section>
        </RevealSection>
      </div>
    </div>
  )
}
