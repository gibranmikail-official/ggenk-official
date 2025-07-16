"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Youtube, Heart } from "lucide-react";

export default function Footer() {
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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="White">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
            label: "Discord",
            href: "https://discord.gg/yVpN7nnTWk",
        },
    ];

    return (
        <footer className="py-12 px-4 border-t border-white/10 bg-black/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex flex-row justify-center items-center  gap-7">
                        {/* Logo and Brand */}
                        <div className="flex justify-center items-center space-x-4 mb-8">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                                <Image
                                    src="/ggenk-logo.png"
                                    alt="GGENK Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-lg"
                                />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">GGENK</h3>
                                <p className="text-white/60 text-sm">Community</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex justify-center space-x-4 mb-8">
                            {socialButtons.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300"
                                >
                                    <social.icon className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="space-y-2 text-white/60 text-sm">
                        <p>© 2025 GGENK. All rights reserved.</p>
                        <div className="flex items-center justify-center space-x-1">
                            <span>Built with</span>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <Heart className="w-4 h-4 text-purple-500 fill-current" />
                            </motion.div>
                            <span>for GGENK community</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
