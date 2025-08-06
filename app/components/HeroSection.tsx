"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

export default function HeroSection() {
    const socialButtons = [
        { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ggenk.official" },
        {
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            ),
            label: "Tiktok",
            href: "https://www.tiktok.com/@ggenk.official",
        },
        { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@GGENK.OFFICIAL" },
        {
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
            label: "Discord",
            href: "https://discord.gg/yVpN7nnTWk",
        },
        {
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12.1 21q-.425 0-.712-.288T11.1 20q0-.175.075-.363t.225-.337l4.625-4.625l-.725-.725l-4.6 4.625q-.15.15-.325.225t-.375.075q-.425 0-.713-.287T9 17.875q0-.25.075-.413t.2-.287L13.9 12.55l-.7-.7l-4.625 4.6q-.15.15-.325.225t-.4.075q-.4 0-.7-.3t-.3-.7q0-.2.075-.375t.225-.325l4.625-4.625l-.725-.7l-4.6 4.625q-.125.125-.3.2t-.425.075q-.425 0-.713-.288t-.287-.712q0-.2.075-.375t.225-.325L10.6 7.35l3.75 3.775q.275.275.65.438t.75.162q.8 0 1.4-.563t.6-1.437q0-.35-.125-.725t-.45-.7L12.7 3.825q.425-.4.95-.613T14.7 3q.65 0 1.2.213t1 .662l4.225 4.25q.45.45.663 1T22 10.4q0 .5-.225 1.012t-.65.938L12.8 20.7q-.2.2-.35.25t-.35.05Zm-8.575-8l-.65-.65q-.425-.4-.65-.95T2 10.25q0-.65.25-1.2t.625-.925L7.1 3.875q.4-.4.95-.638T9.125 3q.675 0 1.2.188t1.025.687L16.475 9q.15.15.225.325t.075.375q0 .4-.3.7t-.7.3q-.225 0-.375-.063t-.325-.237l-4.5-4.45L3.525 13Z" />
                </svg>
            ),
            label: "Top up Game",
            href: "https://ggenkofficial.my.id",
        },
        {
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12.1 21q-.425 0-.712-.288T11.1 20q0-.175.075-.363t.225-.337l4.625-4.625l-.725-.725l-4.6 4.625q-.15.15-.325.225t-.375.075q-.425 0-.713-.287T9 17.875q0-.25.075-.413t.2-.287L13.9 12.55l-.7-.7l-4.625 4.6q-.15.15-.325.225t-.4.075q-.4 0-.7-.3t-.3-.7q0-.2.075-.375t.225-.325l4.625-4.625l-.725-.7l-4.6 4.625q-.125.125-.3.2t-.425.075q-.425 0-.713-.288t-.287-.712q0-.2.075-.375t.225-.325L10.6 7.35l3.75 3.775q.275.275.65.438t.75.162q.8 0 1.4-.563t.6-1.437q0-.35-.125-.725t-.45-.7L12.7 3.825q.425-.4.95-.613T14.7 3q.65 0 1.2.213t1 .662l4.225 4.25q.45.45.663 1T22 10.4q0 .5-.225 1.012t-.65.938L12.8 20.7q-.2.2-.35.25t-.35.05Zm-8.575-8l-.65-.65q-.425-.4-.65-.95T2 10.25q0-.65.25-1.2t.625-.925L7.1 3.875q.4-.4.95-.638T9.125 3q.675 0 1.2.188t1.025.687L16.475 9q.15.15.225.325t.075.375q0 .4-.3.7t-.7.3q-.225 0-.375-.063t-.325-.237l-4.5-4.45L3.525 13Z" />
                </svg>
            ),
            label: "Support GGENK",
            href: "https://saweria.co/ggenkofficial",
        },
    ];

    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl lg:text-7xl font-bold text-white mb-6"
                    >
                        WELCOME TO{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg text-white/80 mb-8 leading-relaxed"
                    >
                        Community yang cocok buat kamu yang suka main game bareng (mabar), ngobrol santai, dan
                        melakukan banyak hal positif lainnya! Di Community ini, kita nggak cuma seru-seruan di
                        dunia virtual, tapi juga sering kumpul di dunia nyata untuk mempererat kebersamaan.
                    </motion.p>

                    {/* Social Media Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                    >
                        {socialButtons.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-3 flex items-center space-x-2 hover:bg-orange-500/20 transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors" />
                                <span className="text-white text-sm font-medium">{social.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        onClick={scrollToAbout}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    >
                        Lihat Lebih Lanjut
                    </motion.button>
                </motion.div>

                {/* Right Content - Logo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 1, -1, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl scale-110" />
                        <Image
                            src="/ggenk-logo.png"
                            alt="GGENK Logo"
                            width={400}
                            height={400}
                            className="relative z-10 drop-shadow-2xl w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
