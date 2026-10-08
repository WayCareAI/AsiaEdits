'use client'

import { useEffect, useRef } from 'react'

type ReadingProgressProps = {
  targetSelector?: string
}

export function ReadingProgress({
  targetSelector = 'article',
}: ReadingProgressProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let frame = 0

    const update = () => {
      frame = 0
      const target = document.querySelector(targetSelector)
      if (!target) return

      const rect = target.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const progress =
        scrollable <= 0
          ? rect.bottom <= window.innerHeight
            ? 1
            : 0
          : Math.min(1, Math.max(0, -rect.top / scrollable))

      bar.style.transform = `scaleX(${progress})`
    }

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [targetSelector])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[3px] w-full"
    >
      <div
        ref={barRef}
        style={{ transform: 'scaleX(0)' }}
        className="h-full w-full origin-left bg-gradient-to-r from-chart-2 to-primary shadow-[0_0_12px_2px_rgba(56,189,248,0.6)] will-change-transform"
      />
    </div>
  )
}
