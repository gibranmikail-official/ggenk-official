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
    desktopSpeed?: number
    mobileSpeed?: number
  }

  export function Marquee({ items, direction = "left", desktopSpeed = 30, mobileSpeed = 15  }: MarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null)


    const desktopRef = useRef<HTMLDivElement>(null)
    const mobileRef = useRef<HTMLDivElement>(null)

    return (
      <div className="relative overflow-hidden py-8 bg-black/0">
        {/* Gradient overlay untuk efek fade di sisi kiri dan kanan */}
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-purple-900/40 via-purple-900/20 to-transparent dark:from-[#0B0C1F]/60" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-orange-900/40 via-orange-900/20 to-transparent dark:from-[#0B0C1F]/60" />

        {/* Desktop */}
        <div className="hidden lg:block overflow-hidden">
          <div
            ref={desktopRef}
            className="flex gap-16 w-max"
            style={{
              animation: `marquee-desktop-${direction} ${desktopSpeed}s linear infinite`,
            }}
          >
            {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={`desktop-${index}`}
                className="flex flex-col gap-4 min-w-[50px] items-center justify-center shrink-0"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-36 object-contain md:grayscale transition-all duration-300 md:hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden overflow-hidden">
          <div
            ref={mobileRef}
            className="flex gap-8 w-max"
            style={{
              animation: `marquee-mobile-${direction} ${mobileSpeed}s linear infinite`,
            }}
          >
            {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={`mobile-${index}`}
                className="flex flex-col gap-4 min-w-[50px] items-center justify-center shrink-0"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-20 object-contain md:grayscale transition-all duration-300 md:hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes marquee-desktop-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          @keyframes marquee-desktop-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes marquee-mobile-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          @keyframes marquee-mobile-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          /* Performance optimizations */
          .w-max {
            will-change: transform;
          }
        `}</style>
      </div>
    )
  }