"use client"

import { useRef } from "react"

interface PartnerItem {
  name: string
  logo: string
}

interface MarqueeProps {
  items: PartnerItem[]
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({ items, direction = "left", speed = 30 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden py-8 bg-black/30">
      {/* Gradient overlay untuk efek fade di sisi kiri dan kanan */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary/10 dark:from-[#0B0C1F] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary/10 dark:from-[#0B0C1F] to-transparent" />

      {/* Container marquee */}
      <div
        ref={containerRef}
        className="flex gap-5"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate items untuk efek looping seamless */}
        {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-4"
          >
            <div className="group relative">
              <img
                src={item.logo}
                alt={item.name}
                className="w-auto md:h-24 h-28 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                title={item.name}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}