"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ContactSection() {
    const handleJoinDiscord = () => {
        window.open("https://discord.gg/yVpN7nnTWk", "_blank");
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                        Tertarik untuk join{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK?
                        </span>
                    </h2>

                    <p className="text-xl text-white/80 mb-12 leading-relaxed">
                        Bergabunglah dengan komunitas terbaik! Dapatkan teman baru, main game bareng, dan
                        rasakan pengalaman seru bersama Community GGENK.
                    </p>

                    <motion.button
                        onClick={handleJoinDiscord}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
                    >
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative z-10 flex items-center space-x-3">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            <span>Join Discord GGENK</span>
                            <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    </motion.button>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-8 text-white/60"
                    >
                        <p className="text-sm">Klik button di atas untuk bergabung ke Discord server GGENK</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
