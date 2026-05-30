import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'
import { SparkleIcon, ArrowRightIcon, CheckIcon, BrainIcon, ShieldIcon, GlobeIcon, LightningIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'How to Get Cited by ChatGPT, Gemini, and Perplexity',
  description: 'Getting cited by ChatGPT, Gemini, and Perplexity requires structured content, entity authority, and a publisher ecosystem. Here is the exact method that works in 2025.',
}

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

const TACTICS = [
  {
    icon: BrainIcon,
    n: '01',
    title: 'Structure every page to answer first',
    body: 'ChatGPT and Perplexity extract content in real time during response generation. They retrieve candidate pages, scan for the most direct and complete answer to the user query, and cite the first page that clearly answers the question. If your page spends three paragraphs on context before reaching the actual answer, a competing page that answers in sentence two will be cited instead. Every page must answer its primary question within the first 50 words — before any preamble, before any context-building, before any brand positioning.',
    tip: 'Test this by reading only the first two sentences of each of your key pages. If the primary question is not answered by then, restructure before doing anything else.',
  },
  {
    icon: ShieldIcon,
    n: '02',
    title: 'Use question-format headings throughout',
    body: 'AI engines match user queries to content headings during the retrieval process. A heading that reads "Our Methodology" produces no match signals. A heading that reads "How Does AI Citation Optimization Work?" matches directly to the query "how does AI citation optimization work" and increases the probability that the section below it gets extracted and cited. Every H2 and H3 on your site should be rephrased as a question that a real buyer would type into ChatGPT or Perplexity.',
    tip: 'The easiest way to find your heading rephrasing opportunities is to pull your Google Search Console query report. Convert your top 20 queries into question-format headings and restructure your content around them.',
  },
  {
    icon: GlobeIcon,
    n: '03',
    title: 'Build your citation footprint in authoritative sources',
    body: 'ChatGPT\'s training data and Perplexity\'s real-time index both weight mentions in authoritative third-party sources extremely heavily. A brand mentioned in Forbes, Harvard Business Review, or a recognized industry publication carries far more weight than the same claim made on the brand\'s own website. A minimum of 15 to 20 distinct authoritative mentions that explicitly connect your brand to your category keywords is the threshold where AI citation frequency becomes consistent rather than sporadic.',
    tip: 'Prioritize publications that AI training pipelines demonstrably index: major news outlets, Wikipedia entries (where applicable), recognized industry associations, and government or academic sources in your field.',
  },
  {
    icon: LightningIcon,
    n: '04',
    title: 'Implement FAQ schema on every content page',
    body: 'FAQPage schema in JSON-LD format signals to both Google (which feeds into its AI systems) and directly crawling AI systems that the page contains structured question-and-answer pairs. Pages with FAQPage schema are extracted for AI answer generation at measurably higher rates than structurally identical pages without it. Every article, service page, and guide on your site should include an FAQ section with a minimum of four questions and corresponding FAQPage schema implementation.',
    tip: 'Place your FAQ section near the bottom of your page and populate it with questions your target buyers actually type into AI engines. Pull your highest-volume informational search queries and convert them directly into FAQ questions.',
  },
  {
    icon: BrainIcon,
    n: '05',
    title: 'Include attributed data points throughout your content',
    body: 'AI engines cite data-backed content at significantly higher rates than opinion-based content. The attribution pattern that maximizes citation is specific: "According to [Named Source], [year], [specific statistic]." Generic claims like "studies show" or "research suggests" do not carry citation weight. Every major claim in your content should be backed by a named, attributed source. Where you do not have external data to cite, include your own research, client case study results, or proprietary analysis with explicit attribution.',
    tip: 'Run a content audit flagging every unattributed claim across your top 20 pages. Replacing each one with an attributed data point from a credible named source is one of the fastest ways to increase citation frequency.',
  },
]

const FAQ = [
  {
    q: 'How long does it take to start getting cited by ChatGPT?',
    a: 'Content restructuring improvements can produce citation appearances in ChatGPT web-browsing mode and Perplexity within 30 to 45 days. Appearing in ChatGPT standard responses (which draw on training data) takes longer because it requires your brand to accumulate authority signals in sources that appear in future training data updates. Most brands see consistent multi-platform citation within 60 to 90 days of a full GEO program deployment.',
  },
  {
    q: 'Does ChatGPT cite websites directly?',
    a: 'ChatGPT with browsing enabled cites websites directly with links. ChatGPT in standard mode draws on training data and names brands without linking to their website. Perplexity cites sources with direct links by default, which is why Perplexity optimization produces immediately measurable referral traffic alongside citation frequency improvements.',
  },
  {
    q: 'Is there a way to submit content to ChatGPT or Gemini directly?',
    a: 'No. There is no direct submission system for training data inclusion. AI citation authority is built indirectly through the signals these models evaluate: authoritative third-party mentions, structured content that retrieval systems can extract, entity clarity across your digital presence, and schema markup that communicates content type explicitly. Attempting to optimize directly for AI systems through manipulation tactics violates usage policies and produces no lasting results.',
  },
  {
    q: 'Which platform — ChatGPT, Gemini, or Perplexity — should I prioritize?',
    a: 'For most enterprise brands, Perplexity should be the first priority because it cites sources with links and produces immediately measurable referral traffic. ChatGPT should be the second priority because of its scale — over 200 million monthly active users as of 2025. Gemini should be prioritized third if your target audience is B2C or consumer-facing, as it has the highest consumer adoption rate through Google integration. A well-executed GEO program improves citation across all three simultaneously.',
  },
]

export default function HowToGetCitedPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, top: '-8%', left: '5%', background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">Tactical Guides</span>
              <span className="text-xs" style={{ color: T.t }}>May 2025</span>
              <span className="text-xs" style={{ color: T.t }}>10 min read</span>
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              How to Get Cited by ChatGPT, Gemini, and Perplexity
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.s }}>
              AI engine citation is not accidental. The brands that appear consistently in ChatGPT, Gemini, and Perplexity answers built that position deliberately through specific content structures, entity authority signals, and a third-party citation ecosystem. This guide covers the exact five-tactic method.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['ChatGPT Citations', 'Gemini Authority', 'Perplexity Ranking', 'Content Structure'].map(t => (
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
                  To get cited by ChatGPT, Gemini, and Perplexity: answer the primary question in the first 50 words of every page, use question-format H2 and H3 headings, build a minimum of 15 authoritative third-party mentions that connect your brand to your category, implement FAQPage schema on every content page, and include attributed data points throughout your content. All five tactics are required — removing any one reduces the effectiveness of the other four.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* HOW AI CITATION WORKS */}
        <RevealSection>
          <section className="pb-12 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How Do AI Engines Actually Decide What to Cite?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                ChatGPT, Gemini, and Perplexity each use a different retrieval architecture, but they share three common evaluation criteria for citation decisions: source authority, content structural clarity, and relevance match to the specific query.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                Source authority is evaluated through training data patterns (for base model responses) and real-time retrieval from indexed sources (for browsing-enabled responses). In both cases, brands that appear consistently across authoritative third-party sources with clear, category-specific descriptions score higher on the authority dimension than brands that only appear on their own website.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                Structural clarity is evaluated at the content level. AI retrieval systems scan pages for the most direct, complete answer to the user's query. The first 100 words of a page carry disproportionate weight. A page structured with the answer first — followed by supporting evidence and context — is cited at measurably higher rates than an identically-authoritative page that builds to its answer slowly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                {[
                  { n: '1', label: 'ChatGPT', stat: '200M+', desc: 'Monthly active users as of 2025. Uses both training data and real-time browsing for citations.' },
                  { n: '2', label: 'Perplexity', stat: '15M+', desc: 'Daily active users. Cites sources with direct links — measurable referral traffic from day one.' },
                  { n: '3', label: 'Gemini', stat: '1B+', desc: 'Monthly users through Google integration. Highest consumer reach of the three major platforms.' },
                ].map(p => (
                  <div key={p.label} className="stat-chip">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#1d4ed8' }}>{p.label}</div>
                    <div className="tabular text-2xl font-black mb-1" style={{ color: T.p, letterSpacing: '-0.05em' }}>{p.stat}</div>
                    <div className="text-xs leading-relaxed" style={{ color: T.t }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* 5 TACTICS */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-5">
                <SparkleIcon className="w-3 h-3" />
                The Five-Tactic Method
              </div>
              <h2 className="display-heading mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Specifically Gets Brands Cited
              </h2>
              <p className="text-base mb-10" style={{ color: T.s }}>
                These five tactics are the highest-impact levers across all three major AI platforms. Execute all five before adding anything else.
              </p>
              <div className="flex flex-col gap-5">
                {TACTICS.map((tactic) => {
                  const Icon = tactic.icon
                  return (
                    <div key={tactic.n} className="doppelrand">
                      <div className="doppelrand-core p-7">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.16)' }}>
                            <Icon className="w-5 h-5" style={{ color: '#1d4ed8' }} />
                          </div>
                          <div>
                            <span className="tabular text-xs font-bold" style={{ color: 'rgba(0,0,0,0.2)' }}>{tactic.n}</span>
                            <h3 className="text-base font-bold" style={{ color: T.p, letterSpacing: '-0.02em' }}>{tactic.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: T.s }}>{tactic.body}</p>
                        <div className="rounded-xl p-4" style={{ background: 'rgba(22,163,74,0.04)', border: '1px solid rgba(22,163,74,0.15)' }}>
                          <p className="text-xs font-bold mb-1" style={{ color: '#16a34a' }}>Implementation note</p>
                          <p className="text-sm leading-relaxed" style={{ color: T.s }}>{tactic.tip}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* PLATFORM DIFFERENCES */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How Do Optimization Priorities Differ Across Platforms?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                ChatGPT, Gemini, and Perplexity have distinct architectures and retrieval behaviors. The five core tactics above apply to all three, but platform-specific nuances determine priority sequencing.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { platform: 'ChatGPT (GPT-4o)', focus: 'Training data authority', priority: 'Third-party mention ecosystem is the most critical lever. ChatGPT\'s base model draws on training data patterns, so consistent presence in authoritative publications produces durable citation authority that persists across model updates. Content structure improvements affect browsing-mode citations more immediately.' },
                  { platform: 'Perplexity AI', focus: 'Real-time retrieval clarity', priority: 'Content structure is the highest-priority lever for Perplexity because it retrieves pages in real time for every query. Direct answers in the first paragraph, question-format headings, and schema markup produce citation improvements within weeks. Perplexity also cites sources with direct links, making it the most immediately measurable platform for ROI tracking.' },
                  { platform: 'Google Gemini', focus: 'Google ecosystem integration', priority: 'Gemini draws heavily on Google\'s search index and Knowledge Graph. Traditional SEO signals — E-E-A-T indicators, structured data, Google Business Profile completeness, and Google Search Console indexing health — are more influential for Gemini citation than for ChatGPT or Perplexity. Brands with strong Google presence start with a meaningful Gemini citation advantage.' },
                ].map(p => (
                  <div key={p.platform} className="p-6 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="eyebrow text-[9px]">{p.focus}</span>
                      <p className="text-sm font-bold" style={{ color: T.p }}>{p.platform}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: T.s }}>{p.priority}</p>
                  </div>
                ))}
              </div>

              {/* Related guides */}
              <div className="rounded-2xl p-6 mt-10" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.08)' }}>
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

        {/* FAQ */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-6">
                <SparkleIcon className="w-3 h-3" />
                Frequently Asked Questions
              </div>
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Getting Cited by AI: Common Questions
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
                  Start Getting Cited by <span className="accent-text">AI Engines</span>
                </h2>
                <p className="text-base max-w-[46ch] mb-8" style={{ color: T.s }}>
                  Get a free audit showing your current citation frequency across ChatGPT, Gemini, and Perplexity — plus a prioritised action plan for the specific content and citation work that will move the needle fastest.
                </p>
                <div className="flex flex-col gap-3">
                  {['Current citation frequency by platform', 'Content structure gap analysis', 'Top citation infrastructure opportunities', 'Schema implementation checklist'].map(item => (
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
                headline="Get Your Free Citation Audit"
                subheadline="We will show you exactly where you stand today and what it takes to get cited consistently across all major AI platforms."
                ctaLabel="Get My Citation Audit"
              />
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
