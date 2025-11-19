"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { splitChars } from "@/lib/splitText";

const Loader = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const strokeRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const maskFillRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strokeChars = splitChars(strokeRef.current!);
    const fillChars = splitChars(fillRef.current!);

    // transform origin baseline supaya huruf tidak meloncat
    gsap.set(strokeChars, { transformOrigin: "center bottom" });
    gsap.set(fillChars, { transformOrigin: "center bottom" });

    // Gradient untuk fill chars nanti
    fillChars.forEach((span) => {
      span.style.background =
        "linear-gradient(90deg, #fa8f3a, #ea5a0e, #bd4b0f)";
      span.style.backgroundClip = "text";
      span.style.webkitBackgroundClip = "text";
      span.style.color = "transparent";
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. STROKE muncul dulu satu-satu
    tl.from(strokeChars, {
      opacity: 0,
      y: 20,
      stagger: 0.06,
      duration: 0.6,
    });

    // Stroke ditulis dari kiri → kanan
    tl.fromTo(
      strokeRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power3.inOut",
      },
      "-=0.3"
    );

    // 2. FILL masuk setelah stroke (mask kiri → kanan)
    tl.fromTo(
      maskFillRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 1.6,
        ease: "power3.inOut",
      },
      "-=1.0"
    );

    // 3. Sweep Light
    tl.fromTo(
      sweepRef.current,
      { x: "-160%" },
      {
        x: "200%",
        duration: 1.3,
        ease: "power2.inOut",
      },
      "-=1.4"
    );

    // 4. Fade Out
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        overlayRef.current!.style.display = "none";
        window.dispatchEvent(new Event("loader-finished"));
      },
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#110516] z-[9999] flex items-center justify-center"
    >
      <div className="relative">
        <div
          ref={strokeRef}
          className="text-7xl md:text-8xl font-extrabold char-fix
            text-transparent tracking-wide select-none leading-none"
          style={{
            WebkitTextStroke: "2px #8a00c4",
          }}
        >
          GGENK
        </div>

        <div className="absolute top-0 left-0 pointer-events-none">
          <div ref={maskFillRef} className="overflow-hidden inline-block">
            <div
              ref={fillRef}
              className="text-7xl md:text-8xl font-extrabold char-fix
                tracking-wide leading-none"
            >
              GGENK
            </div>
          </div>

          {/* Sweep Light */}
          <div
            ref={sweepRef}
            className="absolute top-0 left-[-40%] w-[40%] h-full
              bg-gradient-to-r from-transparent via-white/60 to-transparent
              opacity-80 blur-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;