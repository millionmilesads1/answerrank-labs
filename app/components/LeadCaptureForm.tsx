'use client'

import { useActionState } from 'react'
import { useEffect, useRef } from 'react'
import { submitLead, type LeadState } from '@/app/actions'
import { ArrowRightIcon, WhatsAppIcon, CheckIcon, SparkleIcon } from '@/app/components/icons'

const initialState: LeadState = { status: 'idle' }

interface LeadCaptureFormProps {
  headline?: string
  subheadline?: string
  ctaLabel?: string
  compact?: boolean
}

export default function LeadCaptureForm({
  headline = 'Get Your Free AI Search Visibility Audit',
  subheadline = 'Discover exactly where your brand stands in AI search. Delivered within 24 hours.',
  ctaLabel = 'Get My Free AI Audit',
  compact = false,
}: LeadCaptureFormProps) {
  const [state, formAction, pending] = useActionState(submitLead, initialState)
  const waRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (state.status === 'success' && state.whatsappUrl) waRef.current?.focus()
  }, [state.status, state.whatsappUrl])

  if (state.status === 'success' && state.whatsappUrl) {
    return (
      <div className="lead-form-card p-8 text-center">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-2xl mx-auto mb-4"
          style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}
        >
          <CheckIcon className="w-6 h-6" style={{ color: '#4ade80' }} />
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: 'rgba(235,235,242,0.92)' }}>Request Received</h3>
        <p className="text-sm mb-5" style={{ color: 'rgba(235,235,242,0.48)' }}>
          Connect with our AI Search Strategist on WhatsApp. Your personalised audit arrives within 24 hours.
        </p>
        <a
          ref={waRef}
          href={state.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-white wa-btn"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Open WhatsApp &amp; Send
          <ArrowRightIcon className="w-4 h-4" />
        </a>
        <p className="mt-4 text-xs" style={{ color: 'rgba(235,235,242,0.3)' }}>Response within 2 hours · No spam</p>
      </div>
    )
  }

  return (
    <div className="lead-form-card">
      {!compact && (
        <div
          className="px-7 py-5"
          style={{
            background: 'rgba(96,165,250,0.06)',
            borderBottom: '1px solid rgba(96,165,250,0.12)',
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <SparkleIcon className="w-3.5 h-3.5" style={{ color: '#60a5fa' }} />
            <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#60a5fa' }}>
              Free AI Search Audit
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug mb-1.5" style={{ color: 'rgba(235,235,242,0.9)' }}>{headline}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(235,235,242,0.45)' }}>{subheadline}</p>
        </div>
      )}

      <form action={formAction} className={compact ? 'p-6' : 'p-7'}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lead-name" className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(235,235,242,0.38)' }}>
                Your Name <span style={{ color: '#60a5fa' }}>*</span>
              </label>
              <input id="lead-name" name="name" type="text" required placeholder="Jane Smith" className="form-input" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lead-company" className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(235,235,242,0.38)' }}>
                Company <span style={{ color: '#60a5fa' }}>*</span>
              </label>
              <input id="lead-company" name="company" type="text" required placeholder="Acme Corp" className="form-input" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lead-email" className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(235,235,242,0.38)' }}>
              Work Email <span style={{ color: '#60a5fa' }}>*</span>
            </label>
            <input id="lead-email" name="email" type="email" required placeholder="jane@company.com" className="form-input" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lead-challenge" className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(235,235,242,0.38)' }}>
              Your Biggest AI Search Challenge
            </label>
            <select id="lead-challenge" name="challenge" className="form-input form-select">
              <option value="">Select a challenge…</option>
              <option value="invisible">My brand is invisible in AI answers</option>
              <option value="competitor">Competitor dominates AI search results</option>
              <option value="understand">I want to understand GEO for my business</option>
              <option value="strategy">I need a full AI search strategy</option>
            </select>
          </div>

          {state.status === 'error' && state.error && (
            <p
              className="text-sm px-4 py-3 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)', color: '#fca5a5' }}
              role="alert"
            >
              {state.error}
            </p>
          )}

          {/* Button-in-Button CTA pattern */}
          <button
            type="submit"
            disabled={pending}
            className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white transition-all wa-btn disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {pending ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <WhatsAppIcon className="w-5 h-5" />
                {ctaLabel}
                <span
                  className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </>
            )}
          </button>

          <p className="text-center text-xs" style={{ color: 'rgba(235,235,242,0.28)' }}>
            No spam · Response within 2 hours · US &amp; India
          </p>
        </div>
      </form>
    </div>
  )
}
