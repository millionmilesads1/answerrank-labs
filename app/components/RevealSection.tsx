'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number   /* ms stagger offset */
  threshold?: number
}

/**
 * Wraps content with an IntersectionObserver-driven fade-up reveal.
 * Uses only transform + opacity + filter — GPU-safe, no layout triggers.
 */
export default function RevealSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = '1'
          ob.disconnect()
        }
      },
      { threshold }
    )

    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`reveal-section ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
