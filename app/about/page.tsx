import type { Metadata } from 'next'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import { SparkleIcon, CheckIcon, BrainIcon, ShieldIcon, GlobeIcon, LightningIcon } from '@/app/components/icons'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Answer Rank Labs was founded to solve the most urgent visibility crisis in modern marketing: brands invisible in AI search.',
}

const VALUES = [
  { icon: BrainIcon, t: 'Infrastructure Over Hacks', d: 'We build citation infrastructure, not temporary tricks. Every strategy compounds in value as AI search matures.' },
  { icon: ShieldIcon, t: 'Systematic Precision', d: 'AI citation is measurable and engineerable. We bring rigorous data analysis and repeatable methodology to every engagement.' },
  { icon: GlobeIcon, t: 'Client Authority First', d: 'Our success metric is your authority growth. We measure citation rate, share of AI voice, and revenue attribution — not vanity metrics.' },
  { icon: LightningIcon, t: 'Speed to Authority', d: 'The window to establish first-mover AI search authority is closing. We move with urgency because every week matters.' },
]

const DIFF = [
  { n: '01', t: 'Proprietary Citation Intelligence', d: "We track brand mentions across 40+ AI model deployments, giving us real-time intelligence on citation patterns no competitor can match." },
  { n: '02', t: 'AI-Native Content Framework', d: 'Our content methodology was developed specifically for AI retrieval — not adapted from traditional SEO.' },
  { n: '03', t: 'Cross-Platform Authority', d: "We don't optimise for one AI engine. Our infrastructure works across ChatGPT, Gemini, Perplexity, Claude, and Bing Copilot." },
  { n: '04', t: 'Dual-Market Expertise', d: 'With deep roots in the United States and India, we understand nuanced differences in how AI search behaves across both markets.' },
]

const T = { p: 'rgba(10,10,15,0.88)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

export default function AboutPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 600, height: 600, top: '-5%', right: '5%', background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />
      </div>
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">
            <div>
              <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Our Mission</div>
              <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}>
                We Exist Because <span className="accent-text">AI Changed</span><br />Everything
              </h1>
              <p className="text-lg max-w-[52ch]" style={{ color: T.s }}>Answer Rank Labs was founded on a single conviction: the brands that own AI search will own their markets. We exist to make sure our clients are those brands.</p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-3 pt-16">
              {[{ v: '2023', l: 'Founded' }, { v: '50+', l: 'Clients' }, { v: '98%', l: 'Retention' }, { v: '3', l: 'AI Platforms' }].map(s => (
                <div key={s.l} className="stat-chip">
                  <div className="tabular text-xl font-black leading-none mb-1" style={{ color: '#1d4ed8', letterSpacing: '-0.05em' }}>{s.v}</div>
                  <div className="text-xs" style={{ color: T.t }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORIGIN */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Why We Built This</div>
                <h2 className="display-heading mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>The Moment We Saw the Problem</h2>
                <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: T.s }}>
                  <p>In 2023, we observed something alarming: enterprise brands with years of SEO investment and strong Google rankings were completely invisible when prospects asked AI assistants for recommendations.</p>
                  <p>Traditional SEO agencies were still optimising for keyword rankings. But their clients' prospects weren't typing keywords anymore — they were having conversations with AI. Only brands that had built AI search infrastructure were being recommended.</p>
                  <p>We founded Answer Rank Labs to solve this systematically. Not with experimental tactics or hacks, but with a repeatable, data-driven methodology that engineers brand authority into the citation layer of AI search engines.</p>
                </div>
              </div>
              <div className="p-7 rounded-2xl" style={{ background: 'rgba(29,78,216,0.04)', border: '1px solid rgba(29,78,216,0.1)' }}>
                <h3 className="text-base font-bold mb-5" style={{ color: T.p }}>Why the Urgency Is Real</h3>
                <div className="flex flex-col gap-3.5">
                  {['67% of enterprise buyers now use AI assistants for vendor research', 'AI search queries convert at 3–5× the rate of traditional search', 'Brands establishing AI authority today will own their categories for years', 'Only 8% of brands currently have any systematic AI search strategy'].map(fact => (
                    <div key={fact} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1d4ed8' }} />
                      <span className="text-sm leading-relaxed" style={{ color: T.s }}>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* VALUES */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-5xl mx-auto">
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>How We Operate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VALUES.map(v => {
                  const Icon = v.icon
                  return (
                    <SpotlightCard key={v.t} className="p-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.15)' }}>
                        <Icon className="w-5 h-5" style={{ color: '#1d4ed8' }} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: T.p }}>{v.t}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{v.d}</p>
                    </SpotlightCard>
                  )
                })}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* DIFFERENTIATORS */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <div className="eyebrow w-fit mb-4"><SparkleIcon className="w-3 h-3" />Our Edge</div>
                <h2 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>What Separates Answer Rank Labs</h2>
              </div>
              {DIFF.map((d) => (
                <div key={d.n} className="feature-row">
                  <div className="grid grid-cols-1 md:grid-cols-[60px_220px_1fr] gap-6 md:gap-10 items-start">
                    <span className="hidden md:block tabular font-black font-mono leading-none text-4xl" style={{ color: 'rgba(0,0,0,0.06)' }}>{d.n}</span>
                    <h3 className="text-base font-bold tracking-tight pt-0.5" style={{ color: T.p }}>{d.t}</h3>
                    <p className="text-base leading-relaxed" style={{ color: T.s }}>{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* MARKETS */}
        <RevealSection>
          <section className="py-20 px-6 sec-divider">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { flag: '🇺🇸', m: 'United States', d: "Deep expertise in US enterprise technology, SaaS, professional services, and B2B sectors. We understand how US enterprise buyers use AI assistants in their purchase process." },
                { flag: '🇮🇳', m: 'India', d: "India's digital transformation is accelerating AI search adoption faster than any other market. We have native expertise in the sectors driving India's enterprise growth." },
              ].map(m => (
                <SpotlightCard key={m.m} className="p-7">
                  <div className="text-4xl mb-4 select-none" aria-hidden="true">{m.flag}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: T.p }}>{m.m}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.s }}>{m.d}</p>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </RevealSection>

        {/* LEAD CAPTURE */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="eyebrow w-fit mb-5"><SparkleIcon className="w-3 h-3" />Work With Us</div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>Ready to Build <span className="accent-text">Lasting AI Authority?</span></h2>
                <p className="text-base max-w-[48ch] mb-8" style={{ color: T.s }}>We work with a small number of enterprise brands at a time to ensure every engagement delivers category-defining results.</p>
                <div className="flex flex-col gap-3">
                  {['US & India enterprise brands', 'Response within 2 business hours', 'Free audit with no obligation'].map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckIcon className="w-4 h-4 shrink-0" style={{ color: '#1d4ed8' }} />
                      <span className="text-sm" style={{ color: T.s }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LeadCaptureForm headline="Let's Talk About Your AI Search Position" subheadline="Tell us about your brand and we'll show you exactly how to dominate AI search in your category." ctaLabel="Start the Conversation" />
            </div>
          </section>
        </RevealSection>
      </div>
    </div>
  )
}
