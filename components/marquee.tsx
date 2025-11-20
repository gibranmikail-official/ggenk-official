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
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-primary/10 dark:from-[#0B0C1F] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-primary/10 dark:from-[#0B0C1F] to-transparent" />

      <div
        ref={containerRef}
        className="flex gap-8"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 min-w-[200px] items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              className=" w-full object-cover grayscale transition-all hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
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
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
