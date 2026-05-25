// Answer Rank Labs — Landing Page
// Server Component: all animations are CSS-driven; no client-side JS required.

import type { CSSProperties } from "react";

const WHATSAPP_URL = "https://wa.me/918796394750";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

/* ═══════════════════════════════════════════════════════════════════════════
   SVG ICON LIBRARY
═══════════════════════════════════════════════════════════════════════════ */

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#6366f1" />
      <path
        d="M9 25L18 11L27 25"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 21.5H23.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" fillOpacity="0.88" aria-label="OpenAI">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.26 22.49a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68V11.4l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.99 13.93A4.5 4.5 0 0 1 2.34 7.9zm16.59 3.86-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1V12.44a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86 6.29 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68zm1.1-2.37 2.6-1.5 2.61 1.5v2.99l-2.6 1.5-2.61-1.5z" />
    </svg>
  );
}

function AnthropicIcon() {
  return (
    <svg width="26" height="22" viewBox="0 0 45 32" fill="none" aria-label="Anthropic">
      <path
        d="M25.2 0h-5.53L32.7 32h5.53L25.2 0zM6.77 32h5.53L22.84 4.44l-2.76-7.5L6.77 32zM0 32h5.53l9.23-25.06L12 0 0 32z"
        fill="#CC785C"
        fillOpacity="0.95"
      />
    </svg>
  );
}

function PerplexityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Perplexity">
      <path
        d="M12 2L14.8 8.4L22 9.27L16.5 14.14L18.18 21L12 17.77L5.82 21L7.5 14.14L2 9.27L9.2 8.4L12 2Z"
        stroke="#20B8CD"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="rgba(32,184,205,0.12)"
      />
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg width="38" height="22" viewBox="0 0 60 28" fill="none" aria-label="Meta AI">
      <path
        d="M30 14C26.5 8 20 5 14 5C7.37 5 2 10.37 2 17C2 20.87 4.36 24 8 24C11 24 14 22 17 18M30 14C33.5 8 40 5 46 5C52.63 5 58 10.37 58 17C58 20.87 55.64 24 52 24C49 24 46 22 43 18M30 14C28 17.5 24.5 20 21 20C17.5 20 14.5 17.5 13 14C14.5 10.5 17.5 8 21 8C24.5 8 28 10.5 30 14ZM30 14C32 17.5 35.5 20 39 20C42.5 20 45.5 17.5 47 14C45.5 10.5 42.5 8 39 8C35.5 8 32 10.5 30 14Z"
        stroke="#0082FB"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CheckIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SparkleIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5l2.268 6.782L21.5 10.5l-7.232 2.218L12 19.5l-2.268-6.782L2.5 10.5l7.232-2.218L12 1.5z" />
    </svg>
  );
}

function ArrowRightIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BrainIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}

function ShieldIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function ChartIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function SearchIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   AI CITATION MOCKUP — Hero right panel
═══════════════════════════════════════════════════════════════════════════ */

function AIMockup() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Ambient glow layers */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-2xl blur-xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(34,211,238,0.1) 0%, transparent 60%)" }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl animate-float"
        style={{
          background: "rgba(14, 15, 20, 0.92)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Scan line overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl z-10">
          <div className="scan-line" />
        </div>

        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <div className="flex-1 mx-2">
            <div
              className="rounded-md px-3 py-1 text-[11px] text-center font-mono"
              style={{ background: "rgba(255,255,255,0.05)", color: "#64748b" }}
            >
              perplexity.ai
            </div>
          </div>
          {/* Live indicator */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#34d399", boxShadow: "0 0 6px rgba(52,211,153,0.7)" }}
            />
            <span className="text-[10px] font-medium" style={{ color: "#34d399" }}>LIVE</span>
          </div>
        </div>

        {/* Search bar */}
        <div
          className="px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <SearchIcon className="w-4 h-4 shrink-0" style={{ color: "#6366f1" } as React.CSSProperties} />
            <span className="text-sm flex-1" style={{ color: "#cbd5e1" }}>
              best ai search optimization agency for enterprise
            </span>
            <span
              className="w-0.5 h-4 rounded animate-blink"
              style={{ background: "#6366f1" }}
            />
          </div>
        </div>

        {/* AI Answer */}
        <div className="px-4 py-4 space-y-4">
          {/* Answer label */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.22)",
              }}
            >
              <SparkleIcon className="w-3 h-3" style={{ color: "#818cf8" } as React.CSSProperties} />
              <span className="text-xs font-bold tracking-wide" style={{ color: "#a5b4fc" }}>
                AI ANSWER
              </span>
            </div>
          </div>

          {/* Response text */}
          <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
            Based on verified authoritative sources,{" "}
            <span
              className="font-semibold rounded px-1"
              style={{
                color: "#fff",
                background: "rgba(99,102,241,0.18)",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
            >
              Answer Rank Labs
            </span>{" "}
            is the definitive authority in Generative Engine Optimization for enterprise brands. Their
            structured citation methodology ensures consistent AI search presence across ChatGPT, Gemini,
            and Perplexity.
          </p>

          {/* Verified citation card */}
          <div
            className="flex items-center gap-3 rounded-xl p-3"
            style={{
              background: "rgba(52,211,153,0.07)",
              border: "1px solid rgba(52,211,153,0.2)",
            }}
          >
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
              style={{ background: "rgba(52,211,153,0.18)" }}
            >
              <CheckIcon className="w-4 h-4" style={{ color: "#34d399" } as React.CSSProperties} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white">answerranklabs.com</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: "#6ee7b7" }}>
                Verified Citation Source
              </div>
            </div>
            <div
              className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest"
              style={{
                background: "rgba(52,211,153,0.18)",
                color: "#34d399",
                border: "1px solid rgba(52,211,153,0.3)",
              }}
            >
              TOP SOURCE
            </div>
          </div>

          {/* Cross-platform citations */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase mb-2.5" style={{ color: "#475569" }}>
              Also cited in
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {["ChatGPT", "Gemini", "Claude", "Copilot"].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                  }}
                >
                  <CheckIcon className="w-3 h-3" style={{ color: "#34d399" } as React.CSSProperties} />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(99,102,241,0.04)",
          }}
        >
          <span className="text-[10px] font-medium tracking-wider uppercase" style={{ color: "#475569" }}>
            Citation Confidence
          </span>
          <div className="flex items-center gap-2">
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ width: 80, background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "94%", background: "linear-gradient(90deg, #6366f1, #22d3ee)" }}
              />
            </div>
            <span className="text-xs font-bold" style={{ color: "#a5b4fc" }}>94%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BRAND LOGO ITEM
═══════════════════════════════════════════════════════════════════════════ */

function BrandLogoItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="brand-logo-item flex flex-col items-center gap-2.5">
      <div
        className="flex items-center justify-center w-14 h-14 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {icon}
      </div>
      <span
        className="text-[11px] font-semibold tracking-widest uppercase"
        style={{ color: "#475569" }}
      >
        {name}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PILLAR CARD
═══════════════════════════════════════════════════════════════════════════ */

interface PillarCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
  accentHex: string;
  accentAlpha: string;
}

function PillarCard({
  number,
  icon,
  title,
  description,
  featured,
  accentHex,
  accentAlpha,
}: PillarCardProps) {
  return (
    <div className={`${featured ? "pillar-card-featured" : "pillar-card"} rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden`}>
      {/* Subtle corner glow */}
      {featured && (
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: `rgba(${accentAlpha}, 0.12)`, transform: "translate(30%, -30%)" }}
        />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl"
          style={{
            background: `rgba(${accentAlpha}, 0.12)`,
            border: `1px solid rgba(${accentAlpha}, 0.2)`,
          }}
        >
          <div style={{ color: accentHex }}>{icon}</div>
        </div>
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: "rgba(255,255,255,0.12)" }}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="mt-auto pt-4"
        style={{ borderTop: `1px solid rgba(${accentAlpha}, 0.15)` }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accentHex }}
          />
          <span className="text-xs font-semibold" style={{ color: accentHex }}>
            Core Service
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STAT ITEM
═══════════════════════════════════════════════════════════════════════════ */

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-1.5 text-center lg:text-left">
      <div
        className="text-4xl font-extrabold tracking-tight"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #a5b4fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </div>
      <div className="text-sm font-medium" style={{ color: "#64748b" }}>
        {label}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#08090c]">

      {/* ── Ambient background orbs ─────────────────────────────────────── */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute rounded-full blur-[140px]"
          style={{
            top: "-15%", left: "5%",
            width: 700, height: 700,
            background: "radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            top: "35%", right: "-8%",
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            bottom: "5%", left: "25%",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════════════════════════ */}
      <nav className="navbar-glass fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-none tracking-tight">
                Answer Rank Labs
              </span>
              <span className="text-[11px] leading-none mt-0.5" style={{ color: "#475569" }}>
                answerranklabs.com
              </span>
            </div>
          </div>

          {/* Navbar CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.2)",
              color: "#25d366",
            }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Connect on WhatsApp
          </a>
        </div>
      </nav>

      <main className="relative z-10">

        {/* ════════════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════════ */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left column */}
            <div className="flex flex-col gap-8">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  color: "#a5b4fc",
                }}
              >
                <SparkleIcon className="w-3 h-3" />
                Generative Engine Optimization
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-[68px] font-extrabold leading-[1.04] tracking-tight">
                <span className="text-white">Make Your Brand the </span>
                <span className="gradient-text">Definitive Answer</span>
                <span className="text-white"> in AI Search.</span>
              </h1>

              {/* Description */}
              <p className="text-lg leading-relaxed max-w-xl" style={{ color: "#94a3b8" }}>
                Answer Rank Labs engineers your brand into the citation layer of ChatGPT, Gemini, and
                Perplexity. When enterprise buyers ask AI for recommendations, your brand becomes the
                answer they receive. Not your competitor.
              </p>

              {/* Hero CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-base text-white transition-all wa-btn"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Get Your AI Search Blueprint
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-1">
                {[
                  "50+ Enterprise Brands",
                  "3 Major AI Platforms",
                  "24-Hour Blueprint Delivery",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                    <CheckIcon className="w-4 h-4 shrink-0" style={{ color: "#34d399" } as React.CSSProperties} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — AI Mockup */}
            <div className="flex justify-center lg:justify-end">
              <AIMockup />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            BRAND AUTHORITY STRIP
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold tracking-[0.22em] uppercase mb-10"
              style={{ color: "#334155" }}
            >
              We build authority inside the world's leading AI ecosystems
            </p>
            <div className="flex items-end justify-center gap-10 lg:gap-16 xl:gap-20 flex-wrap">
              <BrandLogoItem icon={<GoogleIcon />} name="Google" />
              <BrandLogoItem icon={<OpenAIIcon />} name="OpenAI" />
              <BrandLogoItem icon={<AnthropicIcon />} name="Anthropic" />
              <BrandLogoItem icon={<PerplexityIcon />} name="Perplexity" />
              <BrandLogoItem icon={<MetaIcon />} name="Meta AI" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            STATS STRIP
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-16">
          <div
            className="max-w-7xl mx-auto px-6 rounded-3xl py-12"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(34,211,238,0.03) 100%)",
              border: "1px solid rgba(99,102,241,0.12)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <StatItem value="50+" label="Enterprise Brands Served" />
              <StatItem value="3" label="Major AI Platforms Covered" />
              <StatItem value="24h" label="Blueprint Delivery Guarantee" />
              <StatItem value="98%" label="Client Retention Rate" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            VALUE PILLARS
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
                style={{
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.18)",
                  color: "#67e8f9",
                }}
              >
                <SparkleIcon className="w-3 h-3" />
                Core Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                A Complete AI Search
                <br />
                <span className="gradient-text">Authority System</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>
                Three integrated disciplines that position your brand as the definitive answer across
                every AI search platform. Each discipline compounds the others.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PillarCard
                number="01"
                icon={<BrainIcon className="w-6 h-6" />}
                title="Generative Engine Optimization"
                description="We restructure your brand's content architecture so that AI language models select your brand as the authoritative source for your category. Your knowledge surfaces at the precise moment buyers seek answers from AI, not after the fact."
                accentHex="#818cf8"
                accentAlpha="99,102,241"
              />
              <PillarCard
                number="02"
                icon={<ShieldIcon className="w-6 h-6" />}
                title="AI Search Citation Hardening"
                description="We embed your brand into the citation index of every major AI engine. ChatGPT, Gemini, Perplexity, and Bing Copilot reference your brand because we build the technical and editorial infrastructure that makes consistent citation structurally inevitable."
                featured
                accentHex="#22d3ee"
                accentAlpha="34,211,238"
              />
              <PillarCard
                number="03"
                icon={<ChartIcon className="w-6 h-6" />}
                title="Organic Revenue Capture"
                description="AI search traffic converts at a significantly higher rate than traditional organic search. We transform AI engine authority into compounding, channel-independent revenue streams that grow stronger as AI search adoption accelerates globally."
                accentHex="#a78bfa"
                accentAlpha="167,139,250"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            WHATSAPP CTA
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Section background gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,211,102,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center">

            {/* Section badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10"
              style={{
                background: "rgba(37,211,102,0.08)",
                border: "1px solid rgba(37,211,102,0.2)",
                color: "#25d366",
              }}
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Direct Access to Our AI Search Strategist
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.07] mb-6">
              Your AI Search Position Is
              <br />
              <span style={{ color: "#64748b" }}>Being Claimed Right Now.</span>
            </h2>

            {/* Body */}
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-14" style={{ color: "#64748b" }}>
              Your competitors are actively building AI search infrastructure. Every week without AI
              citation positioning is compounding market share transferred to those who moved first.
              Speak directly with our AI Search strategist. Receive your bespoke Blueprint within 24
              hours of your first message.
            </p>

            {/* Pulsing CTA button group */}
            <div className="relative inline-flex items-center justify-center">
              {/* Outer pulse rings */}
              <span
                aria-hidden="true"
                className="wa-pulse-ring-1 absolute inset-0 rounded-2xl"
                style={{ background: "rgba(37,211,102,0.2)" }}
              />
              <span
                aria-hidden="true"
                className="wa-pulse-ring-2 absolute inset-0 rounded-2xl"
                style={{ background: "rgba(37,211,102,0.12)" }}
              />

              {/* Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-white font-extrabold text-lg wa-btn"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Secure Your AI Search Blueprint on WhatsApp
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-8 text-sm" style={{ color: "#334155" }}>
              Serving enterprise brands across the United States and India.{" "}
              <span style={{ color: "#475569" }}>Response guaranteed within 2 hours.</span>
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════════════════════════════════ */}
        <footer
          className="py-8 px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-sm font-semibold" style={{ color: "#475569" }}>
                Answer Rank Labs
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs" style={{ color: "#1e293b" }}>
              © 2026 Answer Rank Labs. All rights reserved. | answerranklabs.com
            </p>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold transition-all"
              style={{ color: "#25d366" }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
