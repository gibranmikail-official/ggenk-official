"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Music, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function MapSection() {
    const sectionRef = useRef(null);
    const [activeMap, setActiveMap] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Smooth animation untuk scroll up/down
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

    // Data untuk 2 lokasi
    const locations = [
        {
            name: "Rassa Kopi",
            fullName: "Rassa Kopi - Kemang",
            address: "Jl. Taman Kemang No.21, Jakarta Selatan, 12730",
            embedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0567211298953!2d106.810324!3d-6.2562584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15a579f006b%3A0x8afaa10888cbd3b8!2sRassa%20Kopi!5e0!3m2!1sen!2sid!4v1766125922446!5m2!1sen!2sid",
            description: "Basecamp utama GGENK di Jakarta Selatan",
            instagram: "@rassakopi",
            tiktok: "@rassakopi",
            hours: "Senin - Jumat 09.00 - 23.00",
            hoursDetail: "Sabtu 17.00 - 01.00 | Minggu Tutup",
        },
        {
            name: "Nwansa Coffee",
            fullName: "Nwansa Coffee - Menteng",
            address: "Jl. Surabaya No. 2, Menteng, Jakarta Pusat, 10310",
            embedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.472406092702!2d106.83850177586785!3d-6.201239560750501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f33d3ff98109%3A0xd931b70abd2be73c!2sNwansa%20Coffee%2C%20Menteng!5e0!3m2!1sen!2sid!4v1772957664371!5m2!1sen!2sid",
            description: "Basecamp kedua GGENK di Jakarta Pusat",
            instagram: "@nwansacoffee",
            tiktok: "@nwansacoffee",
            hours: "Senin - Minggu 07.00 - 19.00",
            hoursDetail: "Buka setiap hari",
        },
    ];

    // Contact info untuk lokasi yang aktif
    const contactInfo = [
        {
            icon: MapPin,
            title: "Alamat",
            description: locations[activeMap].address,
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            description: locations[activeMap].hours,
            details: locations[activeMap].hoursDetail,
        },
        {
            icon: Instagram,
            title: "Instagram",
            description: locations[activeMap].instagram,
        },
        {
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            ),
            title: "TikTok",
            description: locations[activeMap].tiktok,
        },
    ];

    // Navigasi slider
    const nextMap = () => {
        setActiveMap((prev) => (prev + 1) % locations.length);
    };

    const prevMap = () => {
        setActiveMap((prev) => (prev - 1 + locations.length) % locations.length);
    };

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
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                    linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header dengan animasi */}
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
                        Yuk mampir ke basecamp kita! Tersedia di 2 lokasi strategis buat kumpul, ngopi, dan
                        ngobrol santai bareng teman-teman.
                    </p>

                    {/* Location Switcher Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        {locations.map((location, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveMap(index)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    activeMap === index
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 border border-orange-400"
                                        : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
                                }`}
                            >
                                {location.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left Column - Contact Info dengan staggered animation */}
                    <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    x: 8,
                                    transition: { duration: 0.3 },
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

                        {/* Location Description */}
                        <motion.div
                            key={activeMap}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="backdrop-blur-md bg-orange-500/20 border border-orange-500/30 rounded-xl p-4"
                        >
                            <p className="text-white/90 text-sm">
                                <span className="font-bold text-orange-400">📍 Sekarang di: </span>
                                {locations[activeMap].description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Map dengan animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.4 },
                        }}
                        className="relative"
                    >
                        {/* Map Container dengan glass effect */}
                        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden h-full min-h-[400px]">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevMap}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-orange-500/80 transition-all duration-300 border border-white/20 hover:border-orange-500/50"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextMap}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-orange-500/80 transition-all duration-300 border border-white/20 hover:border-orange-500/50"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Location Indicator */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                                <span className="text-white text-sm font-semibold">
                                    {locations[activeMap].fullName}
                                </span>
                            </div>

                            {/* Glow effect di border */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-transparent to-purple-500 p-[1px]">
                                    <div className="w-full h-full rounded-xl bg-transparent" />
                                </div>
                            </div>

                            {/* Map dengan animasi slide */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMap}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative h-full w-full"
                                >
                                    <iframe
                                        src={locations[activeMap].embedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="md:grayscale transition-all duration-500 hover:grayscale-0"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {locations.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveMap(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            activeMap === index
                                                ? "w-8 bg-gradient-to-r from-orange-400 to-orange-600"
                                                : "w-2 bg-white/50 hover:bg-white/80"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
