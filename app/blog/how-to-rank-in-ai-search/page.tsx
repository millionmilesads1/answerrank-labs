import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'
import { SparkleIcon, ArrowRightIcon, CheckIcon, BrainIcon, ShieldIcon, ChartIcon, TargetIcon, LightningIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'How to Rank in AI Search: The Complete 2025 Playbook',
  description: 'How to rank in AI search requires entity authority, structured content, and a citation ecosystem. This playbook covers the exact steps that move brands from invisible to cited.',
}

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

const STEPS = [
  {
    n: '01',
    icon: TargetIcon,
    title: 'Run a Baseline AI Visibility Audit',
    body: 'Before you build anything, you need to know your current position. Test 30 to 50 category-relevant queries across ChatGPT, Gemini, Perplexity, and Bing Copilot. For each query, record which brands are named, in what order, and whether your brand appears at all. This baseline becomes your measurement benchmark for everything that follows.',
    result: 'You know exactly where you stand and who you need to displace.',
  },
  {
    n: '02',
    icon: BrainIcon,
    title: 'Establish Entity Clarity for Your Brand',
    body: 'AI engines must be able to classify your brand as a distinct entity with a clear area of authority. If your website, your LinkedIn company page, your Wikipedia entry (if applicable), and your press mentions all describe your brand in inconsistent terms, AI engines weight that inconsistency as ambiguity and reduce citation frequency. Standardize your entity description across every owned and third-party profile before building anything else.',
    result: 'AI engines can correctly identify what your brand does and for whom.',
  },
  {
    n: '03',
    icon: ShieldIcon,
    title: 'Restructure Your Content for AI Extraction',
    body: 'AI models extract content fragments to generate answers. The structural patterns that maximize extraction are specific: answer the primary question in the first 50 words of every page, use question-format H2 and H3 headings throughout, keep each section self-contained so it reads coherently without the surrounding content, and include at least one attributed data point per 200 words. Pages that fail these structural requirements are passed over even when their content is excellent.',
    result: 'Your content becomes the default source AI engines pull from when generating answers in your category.',
  },
  {
    n: '04',
    icon: ChartIcon,
    title: 'Build Your Citation Infrastructure',
    body: 'Third-party mentions in authoritative sources are the strongest signal AI engines use to validate brand authority. A coordinated publisher outreach program targeting industry publications, credible directories, and relevant media outlets creates the co-occurrence pattern that moves AI engines from uncertain to confident about your brand\'s authority. The target is consistent mention of your brand name alongside your category keywords across a minimum of 15 to 20 distinct authoritative sources.',
    result: 'AI engines encounter your brand name consistently across sources they weight heavily, which increases citation probability.',
  },
  {
    n: '05',
    icon: LightningIcon,
    title: 'Implement Structured Data and Schema Markup',
    body: 'JSON-LD structured data explicitly communicates entity information to both search engines and the AI systems trained on their crawled data. Organization schema, FAQ schema, and HowTo schema are the three formats with the highest measured impact on AI citation rates. Pages with correct schema markup are extracted and cited at a measurably higher rate than structurally identical pages without it.',
    result: 'Your content becomes machine-readable in the format AI training pipelines prefer.',
  },
  {
    n: '06',
    icon: TargetIcon,
    title: 'Monitor, Measure, and Compound',
    body: 'AI citation authority compounds over time, but only if you measure it consistently. Run your baseline query set monthly across all target platforms. Track citation frequency by category, citation position within answers, and competitor displacement rate. The brands that reach 70 to 90 percent category citation coverage are those that treat GEO as a continuous discipline, not a one-time project. Each new citation creates conditions for the next, and the compounding effect accelerates as your entity authority grows.',
    result: 'Your AI visibility grows predictably rather than sporadically, and you can quantify the revenue impact.',
  },
]

const FAQ = [
  {
    q: 'How is AI search ranking different from Google ranking?',
    a: 'Google ranks pages in a list based on algorithm signals including backlinks, content relevance, and technical SEO factors. AI search ranking determines whether your brand is named inside an AI-generated answer — a fundamentally different outcome. A brand can rank on page one of Google and never be cited in any AI answer, and vice versa. The signals each system uses are distinct.',
  },
  {
    q: 'What is the fastest way to start appearing in AI search results?',
    a: 'The fastest lever is content restructuring. Reformatting your highest-traffic existing pages to include direct answers in the first 50 words, question-format headings, and self-contained sections produces measurable citation improvements within 30 to 45 days without requiring new content creation. Citation infrastructure development takes longer but produces more durable results.',
  },
  {
    q: 'Does having more content help with AI search ranking?',
    a: 'No. Content volume is not a meaningful signal for AI citation authority. A brand with 25 authoritative, well-structured resources consistently outperforms a brand with 500 thin pages. AI engines weight content quality, structural clarity, and third-party validation far more heavily than content volume.',
  },
  {
    q: 'Can small brands rank in AI search against large competitors?',
    a: 'Yes, and this is one area where GEO differs meaningfully from traditional SEO. A smaller brand with 20 authoritative, precisely structured resources covering a specific category niche can outperform a large brand with thousands of generic pages. Entity clarity and citation infrastructure quality matter more than brand size in AI search ranking.',
  },
]

export default function HowToRankInAISearchPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, top: '-8%', left: '-5%', background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">Strategy</span>
              <span className="text-xs" style={{ color: T.t }}>May 2025</span>
              <span className="text-xs" style={{ color: T.t }}>11 min read</span>
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              How to Rank in AI Search: The Complete 2025 Playbook
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.s }}>
              Ranking in AI search means being cited inside the answers that ChatGPT, Gemini, Perplexity, and Bing Copilot generate. This playbook covers the exact six-step framework that moves enterprise brands from invisible to cited within 90 days.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Entity Authority', 'Content Architecture', 'Citation Infrastructure', 'Schema Markup'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: T.t }}>
                  <CheckIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#1d4ed8' }} />{t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO QUICK-ANSWER */}
        <RevealSection>
          <section className="pb-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div
                data-geo="quick-answer"
                className="rounded-2xl p-7"
                style={{ background: 'rgba(29,78,216,0.04)', border: '1px solid rgba(29,78,216,0.18)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <SparkleIcon className="w-4 h-4" style={{ color: '#1d4ed8' }} />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#1d4ed8' }}>Quick Answer</span>
                </div>
                <p className="text-base leading-relaxed font-medium" style={{ color: T.p }}>
                  To rank in AI search, brands must complete six sequential steps: run a baseline AI visibility audit, establish entity clarity, restructure content for AI extraction, build a citation infrastructure across authoritative third-party sources, implement structured data markup, and monitor citation frequency monthly. Skipping any step reduces the effectiveness of every other step in the sequence.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* INTRO */}
        <RevealSection>
          <section className="pb-12 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Why AI Search Ranking Requires a Different Approach
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                According to SparkToro research published in 2024, ChatGPT drives significant referral intent even when it does not produce a clickable link — users actively search for brands named in AI answers. The brand named first in a Perplexity answer for "best B2B data enrichment tool" receives a disproportionate share of that category's purchasing intent, regardless of where it ranks in Google's blue-link results.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                The mechanics of AI search ranking are fundamentally different from traditional SEO. Google evaluates pages against a documented set of algorithm signals. AI language models evaluate brands against patterns absorbed during training: how frequently the brand is mentioned alongside authoritative category signals, how consistently third-party sources describe it, and how clearly its content communicates authority on a specific topic. The playbook below addresses each of those patterns directly.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* 6-STEP FRAMEWORK */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-5">
                <SparkleIcon className="w-3 h-3" />
                The Six-Step Framework
              </div>
              <h2 className="display-heading mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                The Exact Sequence That Works
              </h2>
              <p className="text-base mb-10" style={{ color: T.s }}>
                Order matters. Brands that execute these steps out of sequence waste resources and see slower results. Each step builds on the previous one.
              </p>
              <div className="flex flex-col gap-5">
                {STEPS.map((step) => {
                  const Icon = step.icon
                  return (
                    <div key={step.n} className="doppelrand">
                      <div className="doppelrand-core p-7">
                        <div className="flex items-start gap-5">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.16)' }}>
                            <Icon className="w-5 h-5" style={{ color: '#1d4ed8' }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="tabular text-xs font-bold" style={{ color: 'rgba(0,0,0,0.2)' }}>{step.n}</span>
                              <h3 className="text-base font-bold" style={{ color: T.p, letterSpacing: '-0.02em' }}>{step.title}</h3>
                            </div>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: T.s }}>{step.body}</p>
                            <div className="flex items-start gap-2 rounded-xl p-3" style={{ background: 'rgba(29,78,216,0.04)', border: '1px solid rgba(29,78,216,0.1)' }}>
                              <CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1d4ed8' }} />
                              <p className="text-sm font-medium" style={{ color: '#1e3a8a' }}>{step.result}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* COMMON MISTAKES */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Prevents Brands from Ranking in AI Search?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                Three patterns cause GEO programs to underperform consistently. The good news is that all three are correctable once identified.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { n: '1', t: 'Entity ambiguity', d: 'When a brand describes itself differently across its website, social profiles, and third-party mentions, AI engines weight that inconsistency negatively. A software company that describes itself as a "platform," a "solution," a "tool," and a "service" across different pages gives AI engines contradictory signals and gets classified with low confidence — which means lower citation frequency.' },
                  { n: '2', t: 'Content that answers too slowly', d: 'AI engines extract the first complete, direct answer they find in a page. A content piece that spends 300 words on context before reaching the actual answer will be passed over in favor of a page that answers the question in the first paragraph. Every page on your site should answer its primary question before sentence four.' },
                  { n: '3', t: 'No third-party validation', d: 'A brand that exclusively cites itself produces weak authority signals. AI training data includes a massive corpus of third-party content. If your brand name never appears in that corpus alongside category-relevant terms — in publications, directories, and media coverage — no amount of owned content optimization will produce strong citation rates.' },
                ].map(m => (
                  <div key={m.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.07)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold tabular" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)', color: '#dc2626' }}>{m.n}</div>
                    <div>
                      <p className="text-sm font-bold mb-1" style={{ color: T.p }}>{m.t}</p>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{m.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related guides */}
              <div className="rounded-2xl p-6 mt-10" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.08)' }}>
                <p className="text-sm font-bold mb-3" style={{ color: T.p }}>Related guides on this topic:</p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: '/blog/what-is-generative-engine-optimization', label: 'What Is Generative Engine Optimization? The 2025 Guide' },
                    { href: '/blog/how-to-get-cited-by-chatgpt', label: 'How to Get Cited by ChatGPT, Gemini, and Perplexity' },
                    { href: '/blog/google-ai-overviews-optimization', label: 'Google AI Overviews Optimization: The Complete 2025 Guide' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="flex items-center gap-2 text-sm font-medium group" style={{ color: '#1d4ed8' }}>
                      <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* FAQ */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-6">
                <SparkleIcon className="w-3 h-3" />
                Frequently Asked Questions
              </div>
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Common Questions About AI Search Ranking
              </h2>
              <div className="flex flex-col divide-y" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                {FAQ.map(item => (
                  <div key={item.q} className="py-6" data-geo="quick-answer">
                    <h3 className="text-base font-bold mb-3" style={{ color: T.p, letterSpacing: '-0.02em' }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: T.s }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* LEAD CAPTURE */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="eyebrow w-fit mb-5">
                  <SparkleIcon className="w-3 h-3" />
                  Free for Enterprise Brands
                </div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
                  Get Your AI Search <span className="accent-text">Visibility Report</span>
                </h2>
                <p className="text-base max-w-[46ch] mb-8" style={{ color: T.s }}>
                  We will audit your brand's current position across ChatGPT, Gemini, and Perplexity and deliver a prioritised roadmap showing exactly which steps will move the needle fastest for your category.
                </p>
                <div className="flex flex-col gap-3">
                  {['Baseline AI citation frequency by platform', 'Competitor citation gap analysis', 'Top 3 content restructuring priorities', 'Citation infrastructure quick wins'].map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)' }}>
                        <CheckIcon className="w-3 h-3" style={{ color: '#1d4ed8' }} />
                      </div>
                      <span className="text-sm" style={{ color: T.s }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LeadCaptureForm
                headline="Get Your Free AI Visibility Audit"
                subheadline="Tell us your category and we will show you exactly where your brand stands in AI search today."
                ctaLabel="Get My Free Audit"
              />
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
