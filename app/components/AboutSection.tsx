"use client";

import { motion } from "framer-motion";
import { Gamepad2, MessageCircle, BookOpen, Users } from "lucide-react";

export default function AboutSection() {
    const features = [
        {
            icon: Gamepad2,
            title: "Mabar Seru",
            description: "Ajak teman atau cari partner baru untuk main berbagai game favorit bareng.",
        },
        {
            icon: MessageCircle,
            title: "Ngobrol Santai",
            description: "Tempat nyaman buat sharing cerita, curhat, atau sekadar ketawa bareng.",
        },
        {
            icon: BookOpen,
            title: "Sharing Knowledge",
            description: "Bertukar ilmu dan pengalaman, mulai dari teknologi, hobi, sampai tips sehari-hari.",
        },
        {
            icon: Users,
            title: "Kumpul IRL (In Real Life)",
            description: "Kopdar seru buat memperkuat persahabatan di luar dunia digital.",
        },
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Apa yang akan kamu dapatkan di{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK?
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="group relative"
                        >
                            {/* Liquid Glass Card */}
                            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                                    >
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Border Animation */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-transparent to-purple-500 p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-transparent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
