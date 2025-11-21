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
            setIsScrolled(scrollTop > 50);
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
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "backdrop-blur-md bg-black/40 border border-white/20 shadow-2xl"
                        : "backdrop-blur-lg bg-black/30 border border-white/15 shadow-xl"
                } rounded-full mx-auto max-w-6xl`}
            >
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => scrollToSection("home")}
                        >
                            <div className="relative">
                                <Image
                                    src="/ggenk-logo.png"
                                    alt="GGENK Logo"
                                    width={36}
                                    height={36}
                                    className="rounded-none"
                                />
                            </div>
                            <span className="text-white font-bold text-xl bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                                GGENK
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        activeSection === item.id
                                            ? "text-white shadow-lg"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {activeSection === item.id && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-orange-400/30 rounded-full border border-orange-400/50"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center">
                                        {item.label}
                                        {activeSection === item.id && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="ml-1 w-1 h-1 bg-orange-400 rounded-full"
                                            />
                                        )}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 rounded-full border border-white/20 bg-white/5 transition-all"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-4 right-4 w-80 max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src="/ggenk-logo.png"
                                            alt="GGENK Logo"
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <span className="text-white font-bold text-lg bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                                            GGENK
                                        </span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white/60 hover:text-white p-2 rounded-full border border-white/20 transition-all"
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                {/* Mobile Menu Items */}
                                <div className="flex-1 py-6 space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-6 py-4 text-lg font-medium transition-all mx-2 rounded-xl ${
                                                activeSection === item.id
                                                    ? "text-white bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-400/30 shadow-lg"
                                                    : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{item.label}</span>
                                                {activeSection === item.id && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="w-2 h-2 bg-orange-400 rounded-full"
                                                    />
                                                )}
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="p-6 border-t border-white/10 bg-white/5">
                                    <p className="text-white/40 text-xs text-center">
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