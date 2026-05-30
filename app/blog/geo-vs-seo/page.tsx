import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'
import { SparkleIcon, ArrowRightIcon, CheckIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'GEO vs SEO: What Is the Real Difference in 2025?',
  description: 'GEO vs SEO: traditional SEO targets Google algorithm rankings. GEO engineers your brand into the AI answer layer. Here is what that difference means for revenue in 2025.',
}

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

const COMPARISON_ROWS = [
  { dimension: 'Primary outcome', seo: 'Page ranked in Google blue-link results', geo: 'Brand named inside an AI-generated answer' },
  { dimension: 'User behavior', seo: 'User scans a list of results and clicks a link', geo: 'User reads an AI answer and searches for the named brand' },
  { dimension: 'Conversion intent', seo: 'Mixed — ranges from research to purchase', geo: 'Pre-validated — user has already received a recommendation' },
  { dimension: 'Conversion rate vs organic baseline', seo: '1×', geo: '3 to 5× higher' },
  { dimension: 'Primary authority signal', seo: 'Backlinks from other websites (PageRank)', geo: 'Entity co-occurrence in authoritative third-party sources' },
  { dimension: 'Content structure priority', seo: 'Keyword presence, depth, and topical clusters', geo: 'Direct answers in first 50 words, question headings, structured data' },
  { dimension: 'Works on Google blue links', seo: 'Yes', geo: 'Yes (GEO content meets or exceeds SEO standards)' },
  { dimension: 'Works on AI platforms (ChatGPT, Gemini, Perplexity)', seo: 'No', geo: 'Yes — primary target' },
  { dimension: 'Algorithm dependence', seo: 'High — Google updates can wipe rankings overnight', geo: 'Low — AI authority compounds independently of algorithm changes' },
  { dimension: 'First measurable results', seo: '3 to 6 months', geo: '45 to 90 days for first citations' },
]

const FAQ = [
  {
    q: 'Should I stop doing SEO if I start GEO?',
    a: 'No. GEO and traditional SEO address different user behaviors across different surfaces. Traditional SEO captures the portion of intent that still flows through Google blue-link results. GEO captures the growing portion that now begins inside AI-generated answers. The brands with the strongest total market capture in 2025 are running both disciplines simultaneously, with coordinated content strategy that serves both systems.',
  },
  {
    q: 'Does a strong SEO position help with GEO?',
    a: 'Partially. A strong backlink profile and high domain authority signal that your brand is credible, which is a positive input into AI citation evaluation. However, GEO requires additional and distinct work: entity clarity optimization, content restructuring for AI extraction, and dedicated citation infrastructure building. SEO authority is a starting point, not a substitute.',
  },
  {
    q: 'Which delivers better ROI — GEO or SEO?',
    a: 'For enterprise brands selling high-value products or services, GEO produces higher per-visit revenue because AI search traffic arrives with pre-validated intent. Research from BrightEdge shows AI-referred visitors convert at 3 to 5 times the rate of organic search visitors. However, traditional SEO typically delivers higher total traffic volume. The optimal approach is to run both and let GEO\'s high conversion rate drive revenue efficiency while SEO maintains volume.',
  },
  {
    q: 'How is GEO content different from SEO content?',
    a: 'GEO content prioritizes direct answers in the opening paragraph, uses question-format headings, keeps each section self-contained so AI engines can extract it independently, and includes attributed data points throughout. SEO content prioritizes keyword density, topical depth, and internal linking. The good news is that GEO content structural requirements improve SEO performance as well, so GEO-optimized content tends to rank better in Google simultaneously.',
  },
]

export default function GEOvsSEOPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, top: '-8%', right: '5%', background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">GEO Fundamentals</span>
              <span className="text-xs" style={{ color: T.t }}>May 2025</span>
              <span className="text-xs" style={{ color: T.t }}>8 min read</span>
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              GEO vs SEO: What Is the Real Difference in 2025?
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.s }}>
              Traditional SEO targets your position in Google's ranked list of blue links. GEO engineers your brand into the AI answer layer that now sits above that list and captures intent before a single blue link is ever clicked. The difference between them is structural, not incremental.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['AI Search vs Google', 'Authority Signals', 'Content Strategy', 'Revenue Impact'].map(t => (
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
                  <strong>GEO (Generative Engine Optimization)</strong> targets the AI answer layer of search — getting your brand cited inside ChatGPT, Gemini, and Perplexity answers. <strong>SEO (Search Engine Optimization)</strong> targets your position in Google's ranked list of blue-link results. The two disciplines optimize for different surfaces, use different authority signals, and produce different types of traffic. In 2025, leading brands run both simultaneously.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* MAIN CONTENT */}
        <RevealSection>
          <section className="pb-12 px-6">
            <div className="max-w-3xl mx-auto">

              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Where Does Search Intent Now Live?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                For most of the past two decades, search intent lived entirely in Google's blue-link results. A buyer researching "enterprise cybersecurity vendors" clicked through multiple pages, read, compared, and formed a shortlist. Ranking on page one of Google was the entry point to that process.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                That process has changed. According to research published by BrightEdge in 2024, AI Overviews now appear at the top of over 80 percent of Google searches. More significantly, platforms like Perplexity AI, ChatGPT, and Bing Copilot now conduct that comparative research step autonomously — synthesizing sources and generating a recommendation that names specific brands before the user ever loads a search results page.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                A buyer who asks Perplexity "which GEO agency should we hire" receives a specific recommendation in seconds. The brand named first in that answer has already won most of the intent. Traditional SEO has no mechanism to influence that outcome. GEO does.
              </p>

              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Are the Core Differences Between GEO and SEO?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                The table below maps the most significant differences across the dimensions that matter for enterprise marketing strategy.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* COMPARISON TABLE */}
        <RevealSection>
          <section className="pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <div className="grid grid-cols-3 px-5 py-4" style={{ background: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Dimension</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Traditional SEO</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: '#1d4ed8' }}>GEO</div>
                </div>
                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={row.dimension}
                    className="grid grid-cols-3 px-5 py-4 items-start"
                    style={{ borderBottom: i < COMPARISON_ROWS.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none', background: i % 2 !== 0 ? '#f8fafc' : '#ffffff' }}
                  >
                    <span className="text-sm font-medium pr-4" style={{ color: T.p }}>{row.dimension}</span>
                    <span className="text-sm text-center px-3" style={{ color: T.s }}>{row.seo}</span>
                    <span className="text-sm text-center font-medium px-3" style={{ color: '#1d4ed8' }}>{row.geo}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* DEEPER DIVE */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">

              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Why Do GEO and SEO Use Different Authority Signals?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                Google's PageRank algorithm evaluates authority primarily through hyperlinks. A page that attracts backlinks from credible domains accumulates authority that improves its ranked position. This is why SEO practitioners spend significant resources on link building.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                AI language models do not evaluate backlinks at citation time. They evaluate patterns absorbed during training: how frequently a brand name appears in text corpora alongside category-defining terms, how consistently external sources describe that brand in specific terms, and how clearly the brand's owned content establishes expertise on a defined topic. A brand can have 10,000 backlinks from high-authority domains and still be unknown to AI engines if those backlinks do not come with accompanying mentions that connect the brand to a specific category.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                This is why the authority signals for GEO — entity co-occurrence frequency, third-party mention quality, and content structural clarity — require a dedicated program rather than an extension of existing SEO work.
              </p>

              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How Does GEO Content Differ from SEO Content?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                Both disciplines produce high-quality, authoritative content. The structural requirements diverge in three specific ways.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { title: 'Answer position', body: 'SEO content can build context before reaching its main point. GEO content must answer the primary question in the first 50 words. AI engines extract the first complete answer they find — if yours is buried in paragraph three, a competing page that answers in paragraph one will be extracted instead.' },
                  { title: 'Heading format', body: 'SEO headings are typically descriptive: "Our Services," "How It Works." GEO headings are question-format: "How Does AI Search Optimization Work?" Question headings are extracted by AI engines and matched directly to user queries, dramatically increasing citation frequency for long-tail queries.' },
                  { title: 'Section independence', body: 'SEO content is written as a coherent document where later sections reference earlier ones. GEO content treats each H2 section as a standalone unit — no "as mentioned above" or "see the previous section." AI engines extract individual sections and cite them independently. A section that requires surrounding context is rarely cited.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold tabular" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)', color: '#1d4ed8' }}>{i + 1}</div>
                    <div>
                      <p className="text-sm font-bold mb-1.5" style={{ color: T.p }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related */}
              <div className="rounded-2xl p-6 mt-10" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)' }}>
                <p className="text-sm font-bold mb-3" style={{ color: T.p }}>Related guides on this topic:</p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: '/blog/what-is-generative-engine-optimization', label: 'What Is Generative Engine Optimization? The 2025 Guide' },
                    { href: '/blog/how-to-rank-in-ai-search', label: 'How to Rank in AI Search: The Complete 2025 Playbook' },
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

        {/* THE CASE FOR BOTH */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Should Brands Run GEO and SEO Together?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                Yes. The two disciplines address different user behaviors at different stages of the research cycle. Traditional SEO captures users who are still actively scanning results. GEO captures users who have already received an AI recommendation and are now in validation mode — searching for the specific brand named in the AI answer. That second category converts at a significantly higher rate.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                The practical coordination between the two programs is straightforward. GEO content structural requirements — direct answers, question headings, attributed data — improve SEO performance simultaneously. A page written to GEO standards will generally rank better in Google than a page written exclusively to legacy SEO standards, because Google's Helpful Content system rewards the same clarity and directness that AI engines reward.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                The brands that will own their categories over the next three years are those building both programs now, while AI citation authority is still relatively accessible. As AI search adoption matures, first-mover advantage in AI citation will be as durable as early PageRank leadership was in the early 2000s.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '3-5×', l: 'Higher conversion rate from AI-referred traffic vs standard organic' },
                  { v: '80%+', l: 'Of Google searches now show AI Overviews (BrightEdge, 2024)' },
                ].map(s => (
                  <div key={s.l} className="stat-chip">
                    <div className="tabular text-3xl font-black mb-2" style={{ color: '#1d4ed8', letterSpacing: '-0.05em' }}>{s.v}</div>
                    <div className="text-sm" style={{ color: T.s }}>{s.l}</div>
                  </div>
                ))}
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
                GEO vs SEO: Common Questions
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
                  Build Your GEO Strategy <span className="accent-text">Today</span>
                </h2>
                <p className="text-base max-w-[46ch] mb-8" style={{ color: T.s }}>
                  Get a free audit revealing your current AI search position and a roadmap showing exactly what GEO work will produce the fastest ROI for your specific category.
                </p>
                <div className="flex flex-col gap-3">
                  {['AI citation baseline across 4 major platforms', 'SEO vs GEO gap assessment for your brand', 'Content restructuring priority list', '90-day GEO action plan'].map(item => (
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
                headline="Get Your Free GEO vs SEO Audit"
                subheadline="We will show you exactly where GEO investment will produce the fastest measurable return for your brand."
                ctaLabel="Get My Free Strategy Audit"
              />
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
