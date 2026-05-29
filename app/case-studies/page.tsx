import type { Metadata } from 'next'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import { SparkleIcon, CheckIcon, TrendUpIcon, ShieldIcon, ChartIcon, StarIcon } from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Case Studies & Results',
  description: 'Real results from enterprise brands that used GEO to dominate AI search.',
}

const CASES = [
  { id: 'saas', cat: 'Enterprise SaaS', co: 'Series B SaaS, US', headline: 'From Zero AI Citations to Category Leader in 60 Days', challenge: "A Series B enterprise SaaS company had strong Google rankings — but was completely absent from AI search results. When enterprise prospects asked ChatGPT for software recommendations, competitors were named while this brand was invisible.", solution: ['Rebuilt entire content architecture around AI citation patterns', 'Deployed 24 AI-native knowledge assets covering category questions', 'Implemented knowledge graph infrastructure linking brand to category', 'Targeted publisher outreach on 12 high-authority tech media sites'], results: [{ m: '+840%', l: 'AI Search Visibility' }, { m: '60d', l: 'Days to First Citations' }, { m: '12', l: 'AI Platforms Citing' }, { m: '3.2×', l: 'AI Traffic Conversion' }], quote: 'We were completely invisible in AI search. Within 60 days, our brand appeared in 84% of category queries on Perplexity. The pipeline impact has been extraordinary.', by: 'Marcus T., CMO', icon: TrendUpIcon },
  { id: 'b2b', cat: 'B2B Technology', co: 'Series C B2B Tech', headline: 'Displaced a Dominant Competitor from Every AI Search Result', challenge: "A B2B technology company watched a well-funded competitor dominate AI search for 8 months, capturing enterprise leads. Their product was superior — but AI engines consistently recommended the competitor first.", solution: ['Competitive citation analysis across 300+ category queries', 'Superior knowledge graph with 40% more entity relationships', 'Authoritative comparison content positioning brand above competitor', "Citation infrastructure targeting competitor's weak authority domains"], results: [{ m: '78%', l: 'Queries Where Brand Cited First' }, { m: '94d', l: 'Days to Dominance' }, { m: '↓67%', l: 'Competitor Citation Share' }, { m: '+220%', l: 'Enterprise Pipeline' }], quote: "Our competitor had an 8-month head start. Answer Rank Labs systematically dismantled their advantage. We're now cited first across every major platform.", by: 'Sarah K., VP Marketing', icon: ShieldIcon, featured: true },
  { id: 'services', cat: 'Professional Services', co: 'Professional Services, India', headline: 'AI-Referred Leads Close at 2.4× the Rate of Any Other Channel', challenge: "A professional services firm had strong brand recognition but no AI search presence. Prospects were asking AI assistants for recommendations and consistently receiving competitor names — losing deals before they knew a prospect existed.", solution: ['Comprehensive thought leadership ecosystem (32 assets)', 'Positioned key experts as authoritative entities in knowledge graph', 'Citation infrastructure across legal, financial, and business media', 'Conversion tracking to measure AI-referred lead quality'], results: [{ m: '2.4×', l: 'Close Rate: AI vs Others' }, { m: '+180%', l: 'Qualified Lead Volume' }, { m: '91%', l: 'AI Client Retention' }, { m: '41%', l: 'Revenue from AI Leads' }], quote: 'The quality of leads from AI search is unlike anything from any other channel. They arrive pre-sold on our expertise. The close rate is nearly 3× our baseline.', by: 'Dr. Priya R., Managing Partner', icon: ChartIcon },
]

const AGG = [{ v: '50+', l: 'Brands served', s: 'US and India' }, { v: '94%', l: 'Citation confidence', s: 'avg across 3 platforms' }, { v: '60d', l: 'First citations', s: 'avg from engagement' }, { v: '3.1×', l: 'Conversion lift', s: 'AI vs. traditional' }]

const T = { p: 'rgba(235,235,242,0.9)', s: 'rgba(235,235,242,0.5)', t: 'rgba(235,235,242,0.28)' }

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#060608' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 700, height: 600, top: '0%', left: '0%', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)' }} />
      </div>
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
            <div>
              <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Proven Results</div>
              <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}>
                What Happens When <span className="accent-text">AI Knows</span><br />Your Brand
              </h1>
              <p className="text-lg max-w-[52ch]" style={{ color: T.s }}>Real results from enterprise brands that used GEO to engineer their way into the citation layer of ChatGPT, Gemini, and Perplexity.</p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-3 pt-16">
              {AGG.map(s => (
                <div key={s.v} className="stat-chip"><div className="tabular text-xl font-black leading-none mb-1" style={{ color: '#60a5fa', letterSpacing: '-0.05em' }}>{s.v}</div><div className="text-xs font-semibold mb-0.5" style={{ color: T.p }}>{s.l}</div><div className="text-[10px]" style={{ color: T.t }}>{s.s}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <RevealSection>
          <section className="py-12 px-6 sec-divider">
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              {CASES.map(cs => {
                const Icon = cs.icon
                return (
                  <SpotlightCard key={cs.id}>
                    <div className="px-8 py-5 flex items-center justify-between" style={{ background: cs.featured ? 'rgba(96,165,250,0.06)' : 'rgba(255,255,255,0.015)', borderBottom: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.5rem 1.5rem 0 0' }}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.18)' }}><Icon className="w-4 h-4" style={{ color: '#60a5fa' }} /></div>
                        <div><div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#60a5fa' }}>{cs.cat}</div><div className="text-xs mt-0.5" style={{ color: T.t }}>{cs.co}</div></div>
                      </div>
                      {cs.featured && <span className="eyebrow"><StarIcon className="w-3 h-3" />Featured</span>}
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-8 leading-tight" style={{ color: T.p, letterSpacing: '-0.03em' }}>{cs.headline}</h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
                        <div className="flex flex-col gap-5">
                          <div>
                            <h3 className="text-[10px] font-bold tracking-widest uppercase mb-2.5" style={{ color: T.t }}>The Challenge</h3>
                            <p className="text-sm leading-relaxed" style={{ color: T.s }}>{cs.challenge}</p>
                          </div>
                          <div>
                            <h3 className="text-[10px] font-bold tracking-widest uppercase mb-2.5" style={{ color: '#60a5fa' }}>Our Solution</h3>
                            <ul className="flex flex-col gap-2">
                              {cs.solution.map(s => <li key={s} className="flex items-start gap-2.5"><CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#60a5fa' }} /><span className="text-sm" style={{ color: T.s }}>{s}</span></li>)}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: T.t }}>Results Achieved</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {cs.results.map(r => (
                              <div key={r.l} className="doppelrand">
                                <div className="doppelrand-core p-4"><div className="tabular text-2xl font-black leading-none mb-1" style={{ color: '#60a5fa', letterSpacing: '-0.05em' }}>{r.m}</div><div className="text-xs leading-snug" style={{ color: T.t }}>{r.l}</div></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl p-5" style={{ background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.12)' }}>
                        <div className="flex gap-0.5 mb-3">{[0,1,2,3,4].map(i => <StarIcon key={i} className="w-4 h-4" style={{ color: '#f59e0b' }} />)}</div>
                        <p className="text-sm leading-relaxed italic mb-3" style={{ color: T.s }}>"{cs.quote}"</p>
                        <div className="text-sm font-semibold" style={{ color: T.p }}>{cs.by} · <span style={{ color: T.t, fontWeight: 400 }}>{cs.co}</span></div>
                      </div>
                    </div>
                  </SpotlightCard>
                )
              })}
            </div>
          </section>
        </RevealSection>

        {/* LEAD CAPTURE */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Your Turn</div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>These Results Are Reproducible <span className="accent-text">for Your Brand</span></h2>
                <p className="text-base max-w-[48ch] mb-6" style={{ color: T.s }}>Every case study above started with a free AI Search Visibility Audit. That's exactly where your journey begins.</p>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)' }}>
                  <CheckIcon className="w-5 h-5 shrink-0" style={{ color: '#4ade80' }} />
                  <div><p className="text-sm font-bold" style={{ color: T.p }}>98% client retention rate</p><p className="text-xs mt-0.5" style={{ color: T.t }}>GEO results compound — clients stay because authority grows</p></div>
                </div>
              </div>
              <LeadCaptureForm headline="Get Results Like These for Your Brand" subheadline="Start with a free AI Search Visibility Audit. See your exact position today and your path to category dominance." ctaLabel="Get My Free Audit" />
            </div>
          </section>
        </RevealSection>
      </div>
    </div>
  )
}
