import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'
import { SparkleIcon, ArrowRightIcon, CheckIcon, BrainIcon, ShieldIcon, ChartIcon, TargetIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'Google AI Overviews Optimization: The Complete 2025 Guide',
  description: 'Google AI Overviews optimization means structuring content to appear in AI-generated search summaries. This guide covers exactly how it works and what to do in 2025.',
}

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

const REQUIREMENTS = [
  {
    icon: BrainIcon,
    n: '01',
    title: 'E-E-A-T signals that demonstrate real expertise',
    body: 'Google\'s systems evaluate Experience, Expertise, Authoritativeness, and Trust before deciding whether to include content in an AI Overview. Pages with clear author credentials, named sources with verifiable expertise, first-person experience statements, and specific numbers and outcomes score higher on E-E-A-T than anonymous, generic, or vague content. Every key content page on your site should include an author byline with a linked author profile that demonstrates relevant credentials.',
  },
  {
    icon: ShieldIcon,
    n: '02',
    title: 'Direct answers in the first paragraph',
    body: 'Google\'s AI Overview system scans content for the most direct, complete answer to a search query. The first paragraph of each page carries disproportionate weight in this evaluation. Pages that answer the primary search query within the first 50 words are included in AI Overviews at measurably higher rates than pages that build context before reaching the answer. This requires rewriting the opening paragraph of most existing content — but produces faster results than any other single optimization.',
  },
  {
    icon: ChartIcon,
    n: '03',
    title: 'Schema markup that communicates content type',
    body: 'JSON-LD structured data tells Google\'s systems what type of content a page contains and how to extract its components. For AI Overview eligibility, the three highest-impact schema types are Article (for editorial content), FAQPage (for question-and-answer sections), and HowTo (for step-by-step guides). Pages with accurate schema markup are parsed and classified more efficiently, which increases their inclusion probability in AI Overviews for relevant queries.',
  },
  {
    icon: TargetIcon,
    n: '04',
    title: 'Question-format headings aligned to search queries',
    body: 'AI Overview extraction works by matching heading text to query patterns. A heading that reads "Benefits of AI Search Optimization" produces no query match signal. A heading that reads "What Are the Benefits of AI Search Optimization?" matches directly to the query and triggers extraction of the content below it. Every H2 and H3 heading on your key pages should be converted to a question format that mirrors how real users phrase queries to Google.',
  },
  {
    icon: BrainIcon,
    n: '05',
    title: 'Freshness and consistent update cadence',
    body: 'According to Google\'s own documentation, AI Overviews prioritize recently updated content for queries where freshness matters. Implementing a quarterly content review schedule — updating key statistics, adding new examples, and refreshing introduction sections — signals freshness to Google\'s systems and maintains AI Overview inclusion over time. A page that was included six months ago and has not been updated since is at higher risk of being replaced by fresher content from a competitor.',
  },
  {
    icon: ChartIcon,
    n: '06',
    title: 'Verified crawler access for AI systems',
    body: 'Google\'s AI Overview system processes content through Googlebot. Any robots.txt configuration that blocks Googlebot also prevents AI Overview inclusion. More specifically, confirm that your robots.txt does not block GoogleOther — Google\'s designated crawler for AI training and feature development. Many sites that inadvertently block GoogleOther through overly broad disallow rules are excluded from AI Overviews regardless of their content quality.',
  },
]

const FAQ = [
  {
    q: 'What are Google AI Overviews?',
    a: 'Google AI Overviews are AI-generated summaries that appear at the top of Google search results pages, above the ranked blue-link results. They synthesize information from multiple sources to directly answer a user\'s search query. Google introduced AI Overviews as the successor to Search Generative Experience (SGE) in 2024. According to BrightEdge research, AI Overviews now appear in over 80 percent of Google searches, making inclusion a significant traffic and visibility opportunity for brands.',
  },
  {
    q: 'How is Google AI Overviews optimization different from traditional SEO?',
    a: 'Traditional SEO targets your page\'s ranked position in Google\'s blue-link results. AI Overviews optimization targets your content\'s inclusion in the AI-generated summary above those results. The signals differ: traditional SEO weights backlinks and topical authority heavily; AI Overviews weight content structural clarity, E-E-A-T indicators, schema markup, and direct answer format. Many pages that rank on page one of Google are never included in AI Overviews because they fail the structural requirements.',
  },
  {
    q: 'Does appearing in AI Overviews reduce click-through rates?',
    a: 'Early data from 2024 shows mixed results. For simple informational queries, AI Overview inclusion does reduce clicks to the cited source because users get their answer without clicking. For complex or high-intent queries — product comparisons, service evaluations, how-to guides with nuance — AI Overview inclusion actually increases click-through rates because it positions the cited brand as the authoritative source and drives users to the page for the complete information. Enterprise brands should focus AI Overview optimization on high-intent queries rather than generic informational ones.',
  },
  {
    q: 'What content types appear most often in Google AI Overviews?',
    a: 'According to SEMrush research published in 2024, how-to content, FAQ pages, comparison guides, and definition/explainer articles appear most frequently in AI Overviews. Product pages and commercial landing pages appear significantly less often. Brands targeting AI Overview inclusion should prioritize creating educational content that answers specific questions their target buyers ask during the research phase of the buying cycle.',
  },
  {
    q: 'Can you be penalized for trying to optimize for AI Overviews?',
    a: 'Manipulation attempts — such as creating thin content specifically to match AI Overview patterns, keyword stuffing, or using structured data to misrepresent content type — can result in Google manual actions. Legitimate optimization for AI Overviews involves improving genuine content quality, implementing accurate schema markup, and restructuring real information to be more directly accessible. This type of optimization aligns with Google\'s Helpful Content guidelines rather than violating them.',
  },
]

export default function GoogleAIOverviewsPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 500, height: 500, top: '-8%', right: '0%', background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">Platform Guides</span>
              <span className="text-xs" style={{ color: T.t }}>May 2025</span>
              <span className="text-xs" style={{ color: T.t }}>10 min read</span>
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              Google AI Overviews Optimization: The Complete 2025 Guide
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.s }}>
              Google AI Overviews appear at the top of search results and synthesize answers from cited sources before a user ever sees a blue link. Brands included in these AI-generated summaries capture attention, authority, and intent at the highest point of the search experience. This guide covers the six requirements for consistent AI Overview inclusion in 2025.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['AI Overview Eligibility', 'E-E-A-T Optimization', 'Schema Markup', 'Content Structure'].map(t => (
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
                  <strong>Google AI Overviews optimization</strong> means structuring your content to meet six requirements: strong E-E-A-T signals, direct answers in the first paragraph, accurate schema markup (Article, FAQPage, HowTo), question-format headings aligned to search queries, consistent content freshness through regular updates, and verified Googlebot crawler access. Pages that meet all six requirements are included in AI Overviews at significantly higher rates than those that meet only some.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* CONTEXT */}
        <RevealSection>
          <section className="pb-12 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Exactly Are Google AI Overviews?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                Google AI Overviews are AI-generated summaries that appear at the top of Google search results pages, above all ranked content. They pull information from multiple sources, synthesize it, and present a direct answer to the user's query — with citations to the pages they drew from.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: T.s }}>
                Google introduced AI Overviews as the production successor to Search Generative Experience (SGE) in 2024. According to BrightEdge research, AI Overviews now appear in over 80 percent of Google searches. That number is highest for informational queries, where AI Overviews appear in over 90 percent of searches, and lower for transactional queries, where they appear in approximately 40 percent.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                The commercial significance is substantial. A brand whose content is cited in an AI Overview for a high-intent category query is presented as an authoritative source before a user even processes the ranked results below. That positioning advantage is compounding — brands cited consistently in AI Overviews build perception as the category authority over time, independent of their actual ranked position in blue-link results.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 my-6">
                {[
                  { v: '80%+', l: 'Of Google searches now trigger AI Overviews (BrightEdge, 2024)' },
                  { v: '90%+', l: 'Of informational queries show AI Overviews' },
                  { v: '40%', l: 'Of transactional queries include AI Overviews' },
                ].map(s => (
                  <div key={s.l} className="stat-chip">
                    <div className="tabular text-2xl font-black mb-1.5" style={{ color: '#1d4ed8', letterSpacing: '-0.05em' }}>{s.v}</div>
                    <div className="text-xs leading-relaxed" style={{ color: T.t }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* 6 REQUIREMENTS */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-5">
                <SparkleIcon className="w-3 h-3" />
                Six Requirements
              </div>
              <h2 className="display-heading mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Does a Page Need to Appear in AI Overviews?
              </h2>
              <p className="text-base mb-10" style={{ color: T.s }}>
                Google has not published a definitive AI Overview eligibility checklist. What follows is derived from analysis of pages that consistently appear versus those that do not, published research from BrightEdge, SEMrush, and Zyppy, and Google's own Helpful Content and E-E-A-T guidance documentation.
              </p>
              <div className="flex flex-col gap-5">
                {REQUIREMENTS.map((req) => {
                  const Icon = req.icon
                  return (
                    <div key={req.n} className="doppelrand">
                      <div className="doppelrand-core p-7">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: 'rgba(29,78,216,0.07)', border: '1px solid rgba(29,78,216,0.16)' }}>
                            <Icon className="w-5 h-5" style={{ color: '#1d4ed8' }} />
                          </div>
                          <div>
                            <span className="tabular text-xs font-bold" style={{ color: 'rgba(0,0,0,0.2)' }}>{req.n}</span>
                            <h3 className="text-base font-bold" style={{ color: T.p, letterSpacing: '-0.02em' }}>{req.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: T.s }}>{req.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* WHAT TO AVOID */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                What Prevents Content from Appearing in AI Overviews?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: T.s }}>
                Three patterns reliably exclude content from AI Overview inclusion. Each is correctable with targeted optimization work.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Thin content with no demonstrated expertise', body: 'Google\'s Helpful Content system actively penalizes content that covers a topic superficially without demonstrating genuine knowledge. Pages produced primarily to match keyword patterns rather than to serve a reader\'s actual informational need are systematically excluded from AI Overviews. The signal Google uses is the absence of specific detail — named sources, exact numbers, real examples, and first-person experience are all indicators of genuine depth that AI Overview algorithms look for.' },
                  { title: 'Structured data that misrepresents content type', body: 'Implementing FAQPage schema on a page that does not contain an actual FAQ section, or HowTo schema on a page that is not a step-by-step guide, triggers a structured data quality flag. Google\'s systems compare schema declarations against page content, and mismatches reduce AI Overview eligibility for the flagged page. Always implement schema markup that accurately reflects the content structure of the page it is on.' },
                  { title: 'Slow page speed and poor Core Web Vitals', body: 'Google\'s AI Overview system inherits its source eligibility criteria from Google\'s general quality assessments. Pages with Largest Contentful Paint above 2.5 seconds, Cumulative Layout Shift above 0.1, or Interaction to Next Paint above 200ms are evaluated with reduced quality scores across all Google systems including AI Overview eligibility. Core Web Vitals performance is a prerequisite, not a bonus.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold tabular" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)', color: '#dc2626' }}>{i + 1}</div>
                    <div>
                      <p className="text-sm font-bold mb-1.5" style={{ color: T.p }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: T.s }}>{item.body}</p>
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

        {/* PRIORITY SEQUENCE */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Where Should You Start with AI Overviews Optimization?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: T.s }}>
                Prioritize by impact and implementation speed. Not all optimization work produces equal results, and starting in the wrong place delays measurable improvements.
              </p>
              <div className="flex flex-col divide-y" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                {[
                  { priority: 'Week 1 to 2', action: 'Verify Googlebot and GoogleOther access in robots.txt. Fix any blocking rules. This is a prerequisite — no other optimization matters if your content cannot be crawled.' },
                  { priority: 'Week 2 to 4', action: 'Restructure the opening paragraph of your top 20 highest-traffic pages. Move the direct answer to the first two sentences. This single change produces the fastest AI Overview inclusion improvement.' },
                  { priority: 'Week 3 to 6', action: 'Convert all H2 and H3 headings on key pages to question format. Align heading text to the exact queries your target buyers type into Google. Use Google Search Console to identify your highest-volume informational queries.' },
                  { priority: 'Week 4 to 8', action: 'Implement FAQPage, Article, and HowTo schema markup across all eligible content pages. Validate with Google\'s Rich Results Test after each implementation.' },
                  { priority: 'Ongoing monthly', action: 'Review AI Overview appearance across your target query set. Update stale statistics, add fresh examples, and refresh introductions on pages that have not been updated in the past 90 days.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 py-5">
                    <div className="w-24 shrink-0">
                      <span className="text-xs font-bold" style={{ color: '#1d4ed8' }}>{step.priority}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: T.s }}>{step.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* FAQ */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider">
            <div className="max-w-3xl mx-auto">
              <div className="eyebrow w-fit mb-6">
                <SparkleIcon className="w-3 h-3" />
                Frequently Asked Questions
              </div>
              <h2 className="display-heading mb-10" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Google AI Overviews: Common Questions
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
          <section className="py-24 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="eyebrow w-fit mb-5">
                  <SparkleIcon className="w-3 h-3" />
                  Free for Enterprise Brands
                </div>
                <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
                  Get Your AI Overviews <span className="accent-text">Eligibility Audit</span>
                </h2>
                <p className="text-base max-w-[46ch] mb-8" style={{ color: T.s }}>
                  We will audit your top content pages against all six AI Overview requirements and deliver a prioritised fix list with projected impact scores for each item.
                </p>
                <div className="flex flex-col gap-3">
                  {['E-E-A-T signal assessment across key pages', 'Schema markup completeness audit', 'Content structure scoring vs AI Overview criteria', 'Googlebot access verification report', 'Priority fix list with effort vs impact ranking'].map(item => (
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
                headline="Get Your Free AI Overviews Audit"
                subheadline="We will assess your current eligibility and deliver a clear action plan for consistent Google AI Overview inclusion."
                ctaLabel="Get My Free Overviews Audit"
              />
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
