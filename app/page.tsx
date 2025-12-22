"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import GallerySection from "./components/GallerySection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import FloatingParticles from "./components/FloatingParticles";
import PartnersSection from "./components/PartnersSection";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "portfolio", "gallery", "testimonial", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-900 relative">
            {/* Particle Effects */}
            <ParticleBackground />
            <FloatingParticles />

            {/* Content */}
            <div className="relative z-10">
                <Navigation activeSection={activeSection} />

                <main>
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <PortfolioSection />
                    <GallerySection />
                    <TestimonialSection />
                    <PartnersSection />
                    <MapSection />
                    <ContactSection />
                </main>

                <Footer />
            </div>
        </div>
    );
}
