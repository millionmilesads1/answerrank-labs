import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import SpotlightCard from '@/app/components/SpotlightCard'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'
import { SparkleIcon, ArrowRightIcon, CheckIcon, BrainIcon, ChartIcon, ShieldIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'What Is Generative Engine Optimization (GEO)? [2025]',
  description: 'Generative Engine Optimization (GEO) engineers your brand into the citation layer of ChatGPT, Gemini, and Perplexity. Learn how it works and why it matters in 2025.',
}

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

const FAQ = [
  {
    q: 'Is GEO the same as AI SEO?',
    a: 'No. AI SEO typically refers to using artificial intelligence tools to improve traditional Google rankings. GEO is a fundamentally different discipline that optimizes your brand to be cited inside the answers AI engines generate, not just to appear in blue-link results below them.',
  },
  {
    q: 'How long does GEO take to produce results?',
    a: 'Most brands see their first verifiable AI citations within 45 to 90 days of deploying a structured GEO program. Citation frequency and category dominance compound over the following 6 to 12 months as authority signals accumulate across the AI training ecosystem.',
  },
  {
    q: 'Does GEO replace traditional SEO?',
    a: 'No. GEO and traditional SEO are complementary. Traditional SEO captures intent on Google blue-link results. GEO captures intent inside AI-generated answers where a growing percentage of enterprise research now begins. The brands winning in 2025 are running both disciplines simultaneously.',
  },
  {
    q: 'Which AI platforms does GEO target?',
    a: 'A well-executed GEO program targets ChatGPT, Google Gemini, Perplexity AI, Bing Copilot, and Claude. Each platform has a distinct citation ecosystem and content preference, which is why platform-specific strategy is essential rather than a one-size-fits-all approach.',
  },
  {
    q: 'Do you need a large content library to start GEO?',
    a: 'No. GEO is not primarily a volume game. A brand with 20 authoritative, well-structured resources outperforms a brand with 500 thin pages every time. The discipline focuses on depth, entity clarity, and citation infrastructure, not content volume.',
  },
]

export default function WhatIsGEOPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, top: '-8%', right: '0%', background: 'radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* ARTICLE HERO */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">GEO Fundamentals</span>
              <span className="text-xs" style={{ color: T.t }}>May 2025</span>
              <span className="text-xs" style={{ color: T.t }}>9 min read</span>
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              What Is Generative Engine Optimization?
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.s }}>
              Generative Engine Optimization (GEO) is the discipline of structuring your brand's content, entity authority, and citation signals so that AI language models consistently select your brand as the cited source when generating answers. It is the primary growth channel for enterprise brands in the AI search era.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['ChatGPT Optimization', 'Gemini Citations', 'Perplexity Ranking', 'AI Authority Building'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: T.t }}>
                  <CheckIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#1d4ed8' }} />{t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO QUICK-ANSWER BLOCK */}
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
                  <strong>Generative Engine Optimization (GEO)</strong> is the practice of optimizing your brand's digital presence so that AI engines — ChatGPT, Gemini, Perplexity, and Bing Copilot — consistently cite your brand as an authoritative source when generating answers to user queries. Unlike traditional SEO, which targets algorithm-ranked blue links, GEO targets the AI answer layer that now sits above those links and is increasingly where enterprise purchasing research begins.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* MAIN CONTENT */}
        <RevealSection>
          <section className="pb-16 px-6">
            <div className="max-w-3xl mx-auto prose-article">

              {/* Why GEO exists */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Why Did GEO Emerge as a Discipline?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                According to Gartner research published in 2024, 30 percent of web browsing sessions will be screenless by 2028 — meaning users will receive answers directly without ever loading a webpage. That trajectory started in 2023 when ChatGPT crossed 100 million monthly active users faster than any consumer technology in recorded history.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                The consequence for brands is structural. When a senior buyer at a 500-person company asks ChatGPT "which AI search optimization agency should we partner with," the answer it generates names specific brands. Those brands did not appear by chance. They earned their position through deliberate optimization of the signals AI engines use to evaluate authority and trustworthiness.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                Traditional SEO had no answer for this. Ranking on page one of Google does not guarantee — or even meaningfully improve — your chances of being cited in an AI-generated answer. The content structures, authority signals, and citation ecosystems that AI engines evaluate are fundamentally different from what Google's PageRank system rewards. GEO was born as the discipline that addresses this gap.
              </p>

              {/* How AI engines decide what to cite */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How Do AI Engines Decide Which Brands to Cite?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                AI language models do not crawl the web in real time the way Google does. They form associations during training based on co-occurrence patterns — how frequently a brand name appears alongside authoritative topic signals, how consistently third-party sources describe that brand in the same terms, and how much structured, citable content exists that explicitly connects the brand to a specific category or expertise area.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
                {[
                  { icon: BrainIcon, title: 'Entity Clarity', desc: 'AI engines must be able to identify your brand as a distinct entity with a clear area of authority. Ambiguous or scattered positioning reduces citation frequency.' },
                  { icon: ShieldIcon, title: 'Third-Party Validation', desc: 'Citations from authoritative publications, industry directories, and credible media sources signal to AI engines that your brand is widely recognized as legitimate.' },
                  { icon: ChartIcon, title: 'Content Structure', desc: 'AI models extract information from well-structured content. Pages with clear H2 headings, direct answers, and structured data are cited at measurably higher rates.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="doppelrand">
                    <div className="doppelrand-core p-5 h-full flex flex-col">
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl mb-3 shrink-0" style={{ background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.18)' }}>
                        <Icon className="w-4 h-4" style={{ color: '#1d4ed8' }} />
                      </div>
                      <p className="text-sm font-bold mb-1.5" style={{ color: T.p }}>{title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                The brands that AI engines cite most consistently share three observable characteristics: they have clear entity authority in a defined category, they are mentioned in authoritative third-party sources that AI training data includes, and their owned content uses structural patterns that make extraction and citation straightforward.
              </p>

              {/* What GEO involves */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Does a GEO Program Actually Involve?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                A structured GEO program has three integrated workstreams. Cutting one reduces the effectiveness of the other two — which is why fragmented approaches produce inconsistent results.
              </p>

              <div className="flex flex-col divide-y my-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                {[
                  { n: '01', t: 'Content Architecture Audit and Restructure', d: 'Every piece of existing content is evaluated against the structural patterns that AI engines prefer: direct answers in the first 50 words, question-format headings, self-contained sections, and attributed data points. Content that fails these criteria is restructured or replaced.' },
                  { n: '02', t: 'Entity Authority and Knowledge Graph Build', d: 'Your brand is mapped as a distinct entity with defined authority signals: category ownership, expertise scope, key personnel, and verifiable credentials. This entity map is then reinforced through structured data implementation and coordinated off-site citation building.' },
                  { n: '03', t: 'Citation Infrastructure Development', d: 'A network of authoritative third-party mentions is built through publisher outreach, digital PR, industry directory optimization, and strategic content partnerships. The goal is consistent co-occurrence of your brand name with category-defining search terms across sources that AI training pipelines index.' },
                ].map(step => (
                  <div key={step.n} className="flex gap-5 py-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold shrink-0 tabular" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.16)', color: '#1d4ed8' }}>{step.n}</div>
                    <div>
                      <p className="text-base font-semibold mb-1.5" style={{ color: T.p, letterSpacing: '-0.02em' }}>{step.t}</p>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                The three workstreams compound over time. Early citation wins validate your entity signals and trigger additional citations. Those citations reinforce the authority map, which improves the quality of future content placements. A brand that starts GEO with 4 percent AI category visibility can realistically reach 60 to 80 percent within 12 months through disciplined execution of all three workstreams.
              </p>

              {/* How GEO differs from SEO */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How Is GEO Different from Traditional SEO?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                The difference is structural, not incremental. Traditional SEO improves your position in a ranked list of results. GEO determines whether you appear inside the answer itself — before the ranked list even loads for the user.
              </p>

              <div className="rounded-2xl overflow-hidden my-8" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="grid grid-cols-3 px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Signal</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: T.t }}>Traditional SEO</div>
                  <div className="text-center text-[10px] font-bold tracking-widest uppercase" style={{ color: '#1d4ed8' }}>GEO</div>
                </div>
                {[
                  { s: 'Primary target', seo: 'Google blue-link position', geo: 'AI-generated answer inclusion' },
                  { s: 'Key authority signal', seo: 'Backlink profile (PageRank)', geo: 'Entity co-occurrence + citation ecosystem' },
                  { s: 'Content structure', seo: 'Keyword density and topical depth', geo: 'Direct answers, structured data, question headings' },
                  { s: 'Result type', seo: 'Clickable ranked link', geo: 'Named citation inside AI answer' },
                  { s: 'Traffic behavior', seo: 'High volume, mixed intent', geo: 'Lower volume, pre-validated buying intent' },
                  { s: 'Conversion rate vs baseline', seo: '1×', geo: '3 to 5×' },
                ].map((row, i) => (
                  <div key={row.s} className="grid grid-cols-3 px-5 py-3.5 items-start" style={{ borderBottom: i < 5 ? '1px solid rgba(0,0,0,0.05)' : 'none', background: i % 2 !== 0 ? '#f8fafc' : '#ffffff' }}>
                    <span className="text-sm font-medium" style={{ color: T.p }}>{row.s}</span>
                    <span className="text-sm text-center" style={{ color: T.s }}>{row.seo}</span>
                    <span className="text-sm text-center font-medium" style={{ color: '#1d4ed8' }}>{row.geo}</span>
                  </div>
                ))}
              </div>

              {/* What results look like */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Do Real GEO Results Look Like?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                GEO results are measurable in three ways: citation frequency (how often your brand appears in AI answers across a defined query set), citation position (whether your brand is named first or later in an answer), and revenue attribution (pipeline generated through AI-referred traffic).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  { q: '"We were completely invisible in AI search. Within 60 days, our brand appeared in 84% of category queries on Perplexity. The pipeline impact has been extraordinary."', by: 'Marcus T.', role: 'CMO, Enterprise SaaS', m: '+840% AI visibility' },
                  { q: '"Our competitor had dominated AI answers for 6 months. Answer Rank Labs flipped that within a quarter. We are now cited first across every major platform."', by: 'Sarah K.', role: 'VP Marketing, B2B Tech', m: '1st citation in category' },
                ].map(t => (
                  <SpotlightCard key={t.by} className="p-6">
                    <div className="flex gap-0.5 mb-3">
                      {[0,1,2,3,4].map(i => (
                        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed italic mb-4" style={{ color: T.s }}>"{t.q}"</p>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: T.p }}>{t.by}</div>
                        <div className="text-xs" style={{ color: T.t }}>{t.role}</div>
                      </div>
                      <div className="text-sm font-bold tabular" style={{ color: '#1d4ed8' }}>{t.m}</div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {/* Who needs GEO */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Which Brands Need GEO Right Now?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                GEO produces the highest return for brands whose buyers conduct research before purchasing. That covers most B2B categories and an expanding range of high-consideration B2C categories including financial services, healthcare, legal, and luxury goods.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                The urgency is highest for brands operating in competitive categories where one or two competitors are already actively building AI citation authority. Because AI citation authority compounds — each citation makes the next one more likely — brands that delay cede ground that becomes increasingly expensive to reclaim.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                According to research from BrightEdge published in 2024, AI Overviews now appear at the top of over 80 percent of Google searches. The brands cited inside those overviews capture attention before a single blue link is ever read. That dynamic will only intensify as AI search adoption accelerates.
              </p>

              {/* Where to start */}
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Where Should a Brand Start with GEO?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                The starting point is always a baseline visibility audit. You need to know where you currently stand before you can build a credible roadmap. That means testing 30 to 50 category-relevant queries across ChatGPT, Gemini, and Perplexity and mapping which brands appear, how often, and in what position.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                Once the baseline is established, GEO strategy follows a consistent priority order: entity clarity first (make sure AI engines can correctly identify what your brand does and for whom), content restructure second (ensure your owned assets are structured for AI extraction), and citation infrastructure third (build the third-party mention ecosystem that reinforces everything else).
              </p>

              <div className="rounded-2xl p-6 my-6" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.08)' }}>
                <p className="text-sm font-bold mb-3" style={{ color: T.p }}>Related guides on this topic:</p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: '/blog/how-to-rank-in-ai-search', label: 'How to Rank in AI Search: The Complete 2025 Playbook' },
                    { href: '/blog/how-to-get-cited-by-chatgpt', label: 'How to Get Cited by ChatGPT, Gemini, and Perplexity' },
                    { href: '/blog/geo-vs-seo', label: 'GEO vs SEO: What Is the Real Difference in 2025?' },
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
                Common Questions About Generative Engine Optimization
              </h2>
              <div className="flex flex-col divide-y" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                {FAQ.map((item) => (
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
                  See Where Your Brand Stands in <span className="accent-text">AI Search Today</span>
                </h2>
                <p className="text-base max-w-[46ch] mb-8" style={{ color: T.s }}>
                  Get a free audit showing exactly how your brand appears across ChatGPT, Gemini, and Perplexity, plus a personalised roadmap to dominate your category.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Custom AI Search Visibility Report',
                    'Competitor Citation Analysis',
                    'Category Authority Gap Assessment',
                    'Personalised GEO Roadmap',
                  ].map(item => (
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
                headline="Get Your Free GEO Audit"
                subheadline="We will analyse your brand's current AI search position and deliver a personalised report within 24 hours."
                ctaLabel="Get My Free GEO Audit"
              />
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
