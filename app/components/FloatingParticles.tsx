"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingParticles() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
            color:
                Math.random() > 0.5
                    ? "rgba(249, 115, 22, 0.4)"
                    : Math.random() > 0.5
                    ? "rgba(139, 92, 246, 0.4)"
                    : "rgba(255, 255, 255, 0.2)",
            xAnim: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            yAnim: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
        }));
        setParticles(generated);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.initialX}%`,
                        top: `${particle.initialY}%`,
                        background: `radial-gradient(circle, ${particle.color}, transparent)`,
                    }}
                    animate={{
                        x: particle.xAnim,
                        y: particle.yAnim,
                        opacity: [0.2, 0.8, 0.3, 0.2],
                        scale: [1, 1.5, 0.8, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
