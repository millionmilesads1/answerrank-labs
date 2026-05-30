import type { Metadata } from 'next'
import Link from 'next/link'
import RevealSection from '@/app/components/RevealSection'
import { SparkleIcon, ArrowRightIcon } from '@/app/components/icons'

export const metadata: Metadata = {
  title: 'AI Search & GEO Blog | Answer Rank Labs',
  description: 'Deep guides on Generative Engine Optimization, AI search ranking, and getting cited by ChatGPT, Gemini, and Perplexity. Written by Answer Rank Labs.',
}

const ARTICLES = [
  {
    slug: 'what-is-generative-engine-optimization',
    category: 'GEO Fundamentals',
    readTime: '9 min read',
    date: 'May 2025',
    title: 'What Is Generative Engine Optimization?',
    excerpt: 'GEO is the discipline of engineering your brand into the citation layer of AI engines. This guide covers what it is, how it works, and why it is now the most important marketing channel for enterprise brands.',
    featured: true,
  },
  {
    slug: 'how-to-rank-in-ai-search',
    category: 'Strategy',
    readTime: '11 min read',
    date: 'May 2025',
    title: 'How to Rank in AI Search: The Complete 2025 Playbook',
    excerpt: 'AI search ranking requires entity authority, structured content architecture, and citation signals. This playbook covers the exact steps that move enterprise brands from invisible to cited.',
    featured: false,
  },
  {
    slug: 'geo-vs-seo',
    category: 'GEO Fundamentals',
    readTime: '8 min read',
    date: 'May 2025',
    title: 'GEO vs SEO: What Is the Real Difference in 2025?',
    excerpt: 'Traditional SEO targets Google algorithm signals. GEO engineers your brand into the AI answer layer that is now replacing search. Here is what that difference means for your pipeline.',
    featured: false,
  },
  {
    slug: 'how-to-get-cited-by-chatgpt',
    category: 'Tactical Guides',
    readTime: '10 min read',
    date: 'May 2025',
    title: 'How to Get Cited by ChatGPT, Gemini, and Perplexity',
    excerpt: 'Getting cited by AI engines is not accidental. It requires specific content structure, entity authority signals, and a publisher ecosystem. This guide covers the exact method that works.',
    featured: false,
  },
  {
    slug: 'google-ai-overviews-optimization',
    category: 'Platform Guides',
    readTime: '10 min read',
    date: 'May 2025',
    title: 'Google AI Overviews Optimization: The Complete 2025 Guide',
    excerpt: 'Google AI Overviews appear at the top of search results and summarize answers from cited sources. This guide explains exactly how to earn a position in those AI-generated summaries.',
    featured: false,
  },
]

const T = { p: 'rgba(10,10,15,0.9)', s: 'rgba(10,10,15,0.52)', t: 'rgba(10,10,15,0.32)' }

export default function BlogIndexPage() {
  const featured = ARTICLES.find(a => a.featured)!
  const rest = ARTICLES.filter(a => !a.featured)

  return (
    <div className="relative min-h-screen" style={{ background: '#ffffff' }}>
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="orb" style={{ width: 600, height: 600, top: '-10%', right: '5%', background: 'radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="eyebrow w-fit mb-5">
              <SparkleIcon className="w-3 h-3" />
              AI Search Intelligence
            </div>
            <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}>
              The <span className="accent-text">GEO & AI Search</span> Blog
            </h1>
            <p className="text-lg max-w-[54ch]" style={{ color: T.s }}>
              Deep guides on Generative Engine Optimization, AI citation strategy, and how enterprise brands win the answer layer of AI search. No fluff. No filler.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <RevealSection>
          <section className="pb-16 px-6 sec-divider">
            <div className="max-w-7xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: T.t }}>Featured</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block doppelrand doppelrand-hover"
                style={{ border: '1px solid rgba(29,78,216,0.15)' }}
              >
                <div className="doppelrand-core p-8 md:p-12 lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="eyebrow">{featured.category}</span>
                      <span className="text-xs" style={{ color: T.t }}>{featured.date}</span>
                      <span className="text-xs" style={{ color: T.t }}>{featured.readTime}</span>
                    </div>
                    <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)' }}>
                      {featured.title}
                    </h2>
                    <p className="text-base leading-relaxed max-w-[60ch]" style={{ color: T.s }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 lg:mt-0 shrink-0">
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#1d4ed8', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                      Read the guide
                      <span className="w-8 h-8 rounded-full bg-blue-700/10 flex items-center justify-center">
                        <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </RevealSection>

        {/* ALL ARTICLES GRID */}
        <RevealSection>
          <section className="py-16 px-6 sec-divider" style={{ background: '#f8fafc' }}>
            <div className="max-w-7xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-8" style={{ color: T.t }}>All Guides</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rest.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block doppelrand doppelrand-hover"
                  >
                    <div className="doppelrand-core p-7 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="eyebrow">{article.category}</span>
                        <span className="text-xs" style={{ color: T.t }}>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: T.p, letterSpacing: '-0.03em' }}>
                        {article.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: T.s }}>
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:translate-x-0.5 transition-transform duration-300" style={{ color: '#1d4ed8', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                        Read guide <ArrowRightIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* BOTTOM CTA */}
        <RevealSection>
          <section className="py-24 px-6 sec-divider">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow w-fit mx-auto mb-5">
                <SparkleIcon className="w-3 h-3" />
                Free for Enterprise Brands
              </div>
              <h2 className="display-heading mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Ready to Apply This to <span className="accent-text">Your Brand?</span>
              </h2>
              <p className="text-base mb-8" style={{ color: T.s }}>
                Get a free AI Search Visibility Audit and discover exactly where your brand stands across ChatGPT, Gemini, and Perplexity today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm"
                style={{ background: '#1d4ed8', color: '#ffffff' }}
              >
                Get Your Free Audit <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </RevealSection>

      </div>
    </div>
  )
}
