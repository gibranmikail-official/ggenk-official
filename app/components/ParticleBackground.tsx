"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);

    const colors = [
        "rgba(249, 115, 22, 0.6)", // Orange
        "rgba(139, 92, 246, 0.6)", // Purple
        "rgba(255, 255, 255, 0.3)", // White
        "rgba(249, 115, 22, 0.3)", // Light Orange
        "rgba(139, 92, 246, 0.3)", // Light Purple
    ];

    const createParticle = (canvas: HTMLCanvasElement): Particle => {
        const maxLife = Math.random() * 300 + 200;
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: maxLife,
            maxLife: maxLife,
        };
    };

    const updateParticle = (particle: Particle, canvas: HTMLCanvasElement) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life--;

        // Fade out as life decreases
        particle.opacity = (particle.life / particle.maxLife) * 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        return particle.life > 0;
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.restore();
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particlesRef.current = particlesRef.current.filter((particle) => {
            const alive = updateParticle(particle, canvas);
            if (alive) {
                drawParticle(ctx, particle);
            }
            return alive;
        });

        // Add new particles
        while (particlesRef.current.length < 50) {
            particlesRef.current.push(createParticle(canvas));
        }

        animationRef.current = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        resizeCanvas();

        // Initialize particles
        for (let i = 0; i < 50; i++) {
            particlesRef.current.push(createParticle(canvas));
        }

        // Start animation
        animate();

        // Handle resize
        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}
