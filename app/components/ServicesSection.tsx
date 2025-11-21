"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Code, Film, Palette, Origami, Smile, Gamepad2, Shirt } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (selectedService !== null) {
            const service = services[selectedService];
            setCurrentIndex((prev) => (prev + 1) % service.gallery.length);
        }
    };

    const prevSlide = () => {
        if (selectedService !== null) {
            const service = services[selectedService];
            setCurrentIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);
        }
    };

    const services = [
        {
            icon: Code,
            title: "Discord Server Development",
            description: "Jasa pembuatan dan pengembangan Discord server profesional dengan bot integration dan custom design.",
            gallery: [
                "/services/server-dev/sd.png",
                "/services/server-dev/sd-1.png",
                "/services/server-dev/sd-2.png",
                "/services/server-dev/sd-3.png",
                "/services/server-dev/sd-4.png",
                "/services/server-dev/sd-5.png",
                "/services/server-dev/sd-6.png",
                "/services/server-dev/sd-7.png",
                "/services/server-dev/sd-8.png",
                "/services/server-dev/sd-9.png",
                "/services/server-dev/sd-10.png",
                "/services/server-dev/sd-11.png",
                "/services/server-dev/sd-12.png",
                "/services/server-dev/sd-13.png",
                "/services/server-dev/sd-14.png",
                "/services/server-dev/sd-15.png",
                "/services/server-dev/sd-16.png",
            ],
        },
        {
            icon: Code,
            title: "Website Development",
            description: "Pembuatan website modern, responsif, dan fungsional untuk berbagai kebutuhan bisnis.",
            gallery: ["/services/CS.png"],
        },
        {
            icon: Film,
            title: "Video Editing & Motion",
            description: "Video editing dan motion design untuk konten social media dan promotional video.",
            gallery: [
                "/services/video-edit/vemd-1.png",
                "/services/video-edit/vemd-2.png",
                "/services/video-edit/vemd-3.mp4",
                "/services/video-edit/vemd-4.mp4",
            ],
        },
        {
            icon: Palette,
            title: "Graphic Design",
            description: "Desain grafis untuk kebutuhan digital dan cetak dengan visual yang profesional.",
            gallery: ["/services/CS.png"],
        },
        {
            icon: Origami,
            title: "Logo Design",
            description: "Pembuatan logo profesional yang mencerminkan identitas brand Anda.",
            gallery: ["/services/CS.png"],
        },
        {
            icon: Smile,
            title: "Custom Emoji/Sticker",
            description: "Emoji dan sticker custom berkualitas tinggi untuk berbagai platform.",
            gallery: [
                "/services/custom-sticker/cs-1.png",
                "/services/custom-sticker/cs.png",
                "/services/custom-sticker/cs-2.png",
            ],
        },
        {
            icon: Gamepad2,
            title: "Joki Valorant",
            description: "Jasa joki Valorant aman dan terpercaya untuk mencapai rank impian.",
            gallery: [
                "/services/joki-valorant/jv-1.png",
                "/services/joki-valorant/jv-2.png",
                "/portfolio/02-joki-valorant/jv-3.png",
                "/portfolio/02-joki-valorant/jv-4.png",
                "/portfolio/02-joki-valorant/jv-5.png",
                "/portfolio/02-joki-valorant/jv-6.png",
                "/portfolio/02-joki-valorant/jv-7.png",
                "/portfolio/02-joki-valorant/jv-8.png",
                "/portfolio/02-joki-valorant/jv-9.png",
                "/portfolio/02-joki-valorant/jv-10.png",
                "/portfolio/02-joki-valorant/jv-11.png",
                "/portfolio/02-joki-valorant/jv-12.png",
            ],
        },
        {
            icon: Gamepad2,
            title: "Genshin Impact",
            description: "Bantuan quest, farming material, dan meningkatkan Adventure Rank di Genshin Impact.",
            gallery: [
                "/services/joki-genshin/jgi-1.png",
                "/services/joki-genshin/jgi-2.png",
                "/services/joki-genshin/jgi-3.png",
                "/services/joki-genshin/jgi-4.png",
            ],
        },
        {
            icon: Shirt,
            title: "Roblox Custom Clothing",
            description: "Design custom clothing untuk Roblox dengan ide kreatif Anda.",
            gallery: [
                "/services/custom-jersey/RCC.png",
                "/services/custom-jersey/RCC-1.png",
                "/services/custom-jersey/RCC-2.png",
                "/services/custom-jersey/RCC-3.png",
                "/services/custom-jersey/RCC-4.png",
                "/services/custom-jersey/RCC-5.png",
                "/services/custom-jersey/RCC-6.png",
                "/services/custom-jersey/RCC-7.png",
                "/services/custom-jersey/RCC-8.png",
                "/services/custom-jersey/RCC-9.png",
                "/services/custom-jersey/RCC-10.png",
            ],
        },
    ];

    return (
        <section id="services" className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 mt-5">
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>{" "}
                        SERVICES
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                        Berbagai jasa profesional untuk memenuhi kebutuhan kreatif dan gaming Anda
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },  
                            }}
                            onClick={() => {
                                setSelectedService(index);
                                setCurrentIndex(0);
                            }}
                            className="group cursor-pointer"
                        >
                            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 transition-all duration-300 group-hover:bg-white/10 group-hover:border-orange-500/30 h-full">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-orange-300 transition-colors line-clamp-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>
                                        <div className="mt-3 text-orange-400 text-sm font-medium flex items-center">
                                            Lihat Gallery
                                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Gallery */}
                <AnimatePresence>
                    {selectedService !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white truncate">
                                            {services[selectedService].title}
                                        </h3>
                                        <p className="text-white/70 text-sm mt-1 line-clamp-2">
                                            {services[selectedService].description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors flex-shrink-0 ml-4"
                                    >
                                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                </div>

                                {/* Main Content */}
                                <div className="p-6">
                                    {/* Main Image/Video */}
                                    <div className="relative bg-black/20 rounded-xl overflow-hidden mb-6">
                                        <div className="aspect-video flex items-center justify-center">
                                            {services[selectedService].gallery[currentIndex].endsWith(".mp4") ? (
                                                <video
                                                    src={services[selectedService].gallery[currentIndex]}
                                                    controls
                                                    className="max-w-full max-h-full object-contain"
                                                    autoPlay
                                                    muted
                                                />
                                            ) : (
                                                <Image
                                                    src={services[selectedService].gallery[currentIndex]}
                                                    alt={`${services[selectedService].title} - ${currentIndex + 1}`}
                                                    width={800}
                                                    height={450}
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>

                                        {/* Navigation Arrows */}
                                        {services[selectedService].gallery.length > 1 && (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={prevSlide}
                                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20"
                                                >
                                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={nextSlide}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20"
                                                >
                                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </motion.button>
                                            </>
                                        )}

                                        {/* Counter */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                            {currentIndex + 1} / {services[selectedService].gallery.length}
                                        </div>
                                    </div>

                                    {/* Thumbnails */}
                                    {services[selectedService].gallery.length > 1 && (
                                        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                                            {services[selectedService].gallery.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentIndex(index)}
                                                    className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                                        currentIndex === index
                                                            ? "border-orange-500 scale-105"
                                                            : "border-white/20 hover:border-white/40"
                                                    }`}
                                                >
                                                    {item.endsWith(".mp4") ? (
                                                        <div className="w-full h-full bg-black flex items-center justify-center">
                                                            <Film className="w-4 h-4 text-white" />
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={item}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            width={80}
                                                            height={56}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}