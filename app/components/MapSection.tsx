"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Music, Instagram } from "lucide-react";
import { useRef } from "react";

export default function MapSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Smooth animation untuk scroll up/down
    const opacity = useTransform(scrollYProgress, 
        [0, 0.2, 0.8, 1], 
        [0, 1, 1, 0]
    );
    
    const scale = useTransform(scrollYProgress, 
        [0, 0.2, 0.8, 1], 
        [0.95, 1, 1, 0.95]
    );
    
    const y = useTransform(scrollYProgress, 
        [0, 0.2, 0.8, 1], 
        [40, 0, 0, -40]
    );

    const contactInfo = [
        {
            icon: MapPin,
            title: "Alamat",
            description: "Rassa Kopi, Jl. Taman Kemang No.21, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730"
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            description: "Senin - Jumat 09.00 - 23.00",
            details: "Sabtu 15.00 - 01.00 | Minggu Tutup"
        },
        {
            icon: Instagram,
            title: "Instagram",
            description: "@rassakopi"
        },
        {
            icon: Music,
            title: "TikTok",
            description: "@rassakopi"
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity, scale, y }}
            id="location"
            className="py-16 px-4 relative overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-orange-900/20 opacity-80" />
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                    linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header dengan animasi - ukuran lebih kecil */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-5">
                        Tempat Nongkrong Favorit{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>
                    </h2>
                    <p className="text-white/70 text-base max-w-xl mx-auto">
                        Yuk mampir ke basecamp kita! Tempat nyaman buat kumpul, ngopi, 
                        dan ngobrol santai bareng teman-teman.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left Column - Contact Info dengan staggered animation - ukuran lebih kecil */}
                    <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    x: 8,
                                    transition: { duration: 0.3 }
                                }}
                                className="group"
                            >
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                    <div className="flex items-start gap-3">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-md group-hover:shadow-orange-500/25"
                                        >
                                            <info.icon className="w-5 h-5 text-white" />
                                        </motion.div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                                                {info.title}
                                            </h3>
                                            <p className="text-white/80 text-sm mb-1 group-hover:text-white transition-colors leading-relaxed">
                                                {info.description}
                                            </p>
                                            {info.details && (
                                                <p className="text-orange-300 font-semibold text-sm group-hover:text-orange-200 transition-colors">
                                                    {info.details}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Map dengan animation - ukuran lebih kecil */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.4 }
                        }}
                        className="relative"
                    >
                        {/* Map Container dengan glass effect - ukuran lebih kecil */}
                        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden h-full min-h-[400px]">
                            {/* Glow effect di border */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-transparent to-purple-500 p-[1px]">
                                    <div className="w-full h-full rounded-xl bg-transparent" />
                                </div>
                            </div>

                            {/* Map */}
                            <div className="relative h-full w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0567211298953!2d106.810324!3d-6.2562584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15a579f006b%3A0x8afaa10888cbd3b8!2sRassa%20Kopi!5e0!3m2!1sen!2sid!4v1766125922446!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="md:grayscale transition-all duration-500 hover:grayscale-0"
                                />
                            </div>

                            {/* Overlay Gradient - ukuran lebih kecil */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}