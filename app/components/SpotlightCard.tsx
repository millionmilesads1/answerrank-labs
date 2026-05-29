'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

/**
 * Double-Bezel card with cursor-spotlight border illumination.
 * GPU-safe: only animates opacity via CSS custom property.
 */
export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const innerRef = useRef<HTMLDivElement>(null)

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  function onMouseLeave() {
    const el = innerRef.current
    if (!el) return
    el.style.removeProperty('--mouse-x')
    el.style.removeProperty('--mouse-y')
  }

  return (
    <div
      ref={innerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  )
}
