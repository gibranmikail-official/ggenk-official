"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Smile, Target, Sword, Video, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    const nextGalleryImage = () => {
        if (selectedService !== null) {
            const service = services[selectedService];
            setCurrentGalleryIndex((prev) => (prev + 1) % service.gallery.length);
        }
    };

    const prevGalleryImage = () => {
        if (selectedService !== null) {
            const service = services[selectedService];
            setCurrentGalleryIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);
        }
    };

    const services = [
        {
            icon: Server,
            title: "Discord Server Development",
            description:
                "Kami menyediakan jasa pembuatan dan pengembangan Discord server yang profesional dan menarik. Mulai dari setup channel, role management, bot integration, hingga custom design yang sesuai dengan kebutuhan komunitas Anda.",
            gallery: [
                "/services/server-dev/sd.png",
                "/services/server-dev/sd-15.png",
                "/services/server-dev/sd-16.png",
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
            ],
        },
        {
            icon: Server,
            title: "Website Development",
            description:
                "Kami menyediakan jasa pembuatan dan pengembangan website yang modern, responsif, dan fungsional. Mulai dari landing page, company profile, hingga sistem berbasis web yang disesuaikan dengan kebutuhan bisnis Anda.",
            gallery: [
                "/services/CS.png",
                ],
        },
                {
            icon: Video,
            title: "Video Editing & Video Motion",
            description:
                "Wujudkan ide kreatif Anda menjadi video yang menakjubkan! Kami menyediakan jasa video editing dan motion design untuk berbagai kebutuhan, mulai dari konten social media, promotional video, hingga motion graphics yang eye-catching.",
            gallery: [
                "/services/video-edit/vemd-1.png",
                "/services/video-edit/vemd-2.png",
                "/services/video-edit/vemd-3.mp4",
                "/services/video-edit/vemd-4.mp4",
            ],
        },
        {
            icon: Smile,
            title: "Graphic Design",
            description:
                "Kami menyediakan jasa desain grafis untuk berbagai kebutuhan digital maupun cetak. Mulai dari banner, poster, feed media sosial, hingga konten promosi dengan gaya visual yang menarik dan profesional.",
            gallery: [
                "/services/CS.png",
            ],
        },
        {
            icon: Smile,
            title: "Logo Design",
            description:
                "Wujudkan identitas brand Anda dengan logo yang unik dan bermakna. Kami menyediakan jasa pembuatan logo profesional yang disesuaikan dengan karakter dan nilai bisnis Anda.",
            gallery: [
                "/services/CS.png",
            ],
        },
        {
            icon: Smile,
            title: "Custom Emoji/Sticker",
            description:
                "Buat komunitas Anda lebih hidup dengan emoji dan sticker custom yang unik! Kami menyediakan jasa pembuatan emoji dan sticker berkualitas tinggi yang cocok untuk Discord, Youtube, Twitch, dan platform lainnya.",
            gallery: [
                "/services/custom-sticker/cs-1.png",
                "/services/custom-sticker/cs.png",
                "/services/custom-sticker/cs-2.png",
            ],
        },
        {
            icon: Target,
            title: "Joki Valorant",
            description:
                "Tingkatkan rank Valorant Anda dengan bantuan player berpengalaman! Kami menyediakan jasa joki Valorant yang aman dan terpercaya. Dari Iron hingga Radiant, kami siap membantu Anda mencapai rank impian.",
            gallery: [
                "/services/joki-valorant/jv-1.png",
                "/services/joki-valorant/jv-2.png",
                "/services/joki-valorant/jv-3.png",
            ],
        },
        {
            icon: Sword,
            title: "Genshin Impact",
            description:
                "Butuh bantuan untuk menyelesaikan quest, farming material, atau meningkatkan Adventure Rank di Genshin Impact? Tim kami siap membantu Anda dengan layanan joki yang profesional dan aman untuk akun Anda.",
            gallery: [
                "/services/joki-genshin/jgi-1.png",
                "/services/joki-genshin/jgi-2.png",
                "/services/joki-genshin/jgi-3.png",
                "/services/joki-genshin/jgi-4.png",
            ],
        },
        {
            icon: Smile,
            title: "Roblox Custom Clothing",
            description:
                "Wujudkan ide kreatif Anda menjadi custom clothing yang menakjubkan! Kami menyediakan jasa Design custom clothing untuk Roblox, mulai dari Shirt, T-Shirt hingga pants.",
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
                "/services/custom-jersey/RCC-13.png",
                "/services/custom-jersey/RCC-10.png",
                "/services/custom-jersey/RCC-11.png",
                "/services/custom-jersey/RCC-12.png",
            ],
        },
    ];

    return (
        <section id="services" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>{" "}
                        SERVICES
                    </h2>
                    <p className="text-xl text-white/80">
                        GGENK juga menyediakan beberapa jasa yang mungkin kalian butuhkan
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedService === null ? (
                        // Show all service cards when none is selected
                        services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                                onClick={() => {
                                    setSelectedService(index);
                                    setCurrentGalleryIndex(0);
                                }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                                        >
                                            <service.icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors text-sm">
                                            {service.description.substring(0, 100)}...
                                        </p>

                                        <div className="mt-4 text-orange-400 text-sm font-medium">
                                            Klik untuk melihat gallery →
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        // Show selected service gallery
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="col-span-full"
                        >
                            <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {services[selectedService].title}
                                        </h3>
                                        <p className="text-white/80">
                                            {services[selectedService].description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Main Gallery Image */}
                                <div className="relative mb-6">
                                    <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
                                        {services[selectedService].gallery[currentGalleryIndex].endsWith(
                                            ".mp4"
                                        ) ? (
                                            <div className="w-full h-full flex items-center justify-center bg-black">
                                                <video
                                                    src={
                                                        services[selectedService].gallery[currentGalleryIndex]
                                                    }
                                                    controls
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <Image
                                                src={services[selectedService].gallery[currentGalleryIndex]}
                                                alt={`${services[selectedService].title} - Image ${
                                                    currentGalleryIndex + 1
                                                }`}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>

                                    {/* Navigation Buttons */}
                                    {services[selectedService].gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevGalleryImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={nextGalleryImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                                        {currentGalleryIndex + 1} / {services[selectedService].gallery.length}
                                    </div>
                                </div>

                                {/* Thumbnail Strip */}
                                <div className="w-[75vw] md:w-full overflow-x-auto">
                                    <div className="flex space-x-2 pb-2">
                                        {services[selectedService].gallery.map((image, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                onClick={() => setCurrentGalleryIndex(imgIndex)}
                                                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                                    currentGalleryIndex === imgIndex
                                                        ? "border-orange-500"
                                                        : "border-white/20 hover:border-white/40"
                                                }`}
                                            >
                                                {image.endsWith(".mp4") ? (
                                                    <video
                                                        src={image}
                                                        muted
                                                        loop
                                                        autoPlay
                                                        playsInline
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`${services[selectedService].title} thumbnail ${
                                                            imgIndex + 1
                                                        }`}
                                                        width={80}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
