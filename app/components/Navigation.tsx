"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
    activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "portfolio", label: "Portfolio" },
        { id: "gallery", label: "Gallery" },
        { id: "testimonial", label: "Testimonial" },
        { id: "contact", label: "Join Discord" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setIsScrolled(scrollTop > 50);
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "backdrop-blur-md bg-black/30 border-b border-white/10 shadow-2xl"
                        : "bg-transparent"
                }`}
            >
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-purple-500"
                        style={{ width: `${scrollProgress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${scrollProgress}%` }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                    />

                    {/* Glow effect */}
                    <motion.div
                        className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-orange-400/50 to-transparent blur-sm"
                        style={{
                            transform: `translateX(${scrollProgress > 5 ? 0 : 100}%)`,
                            opacity: scrollProgress > 5 ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => scrollToSection("home")}
                        >
                            <Image
                                src="/ggenk-logo.png"
                                alt="GGENK Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="text-white font-bold text-xl lg:text-2xl">GGENK</span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        activeSection === item.id
                                            ? "text-orange-400"
                                            : "text-white/80 hover:text-white"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {activeSection === item.id && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-orange-500/20 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md border-l border-white/10 z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Progress Bar */}
                                <div className="w-full h-1 bg-white/10">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-orange-500 to-purple-500"
                                        style={{ width: `${scrollProgress}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>

                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src="/ggenk-logo.png"
                                            alt="GGENK Logo"
                                            width={32}
                                            height={32}
                                            className="rounded-lg"
                                        />
                                        <span className="text-white font-bold text-lg">GGENK</span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Mobile Menu Items */}
                                <div className="flex-1 py-6">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors border-l-4 ${
                                                activeSection === item.id
                                                    ? "text-orange-400 bg-orange-500/10 border-orange-500"
                                                    : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
                                            }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="p-6 border-t border-white/10">
                                    <div className="text-center mb-2">
                                        <span className="text-white/60 text-sm">Scroll Progress: </span>
                                        <span className="text-orange-400 font-semibold">
                                            {Math.round(scrollProgress)}%
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-sm text-center">
                                        © 2025 GGENK Community
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
