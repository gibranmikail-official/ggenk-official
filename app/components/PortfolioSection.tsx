"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
    const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const portfolios = [
        {
            id: 1,
            title: "Valorant Rank Boost",
            type: "Boosting Service",
            thumbnail: "/portfolio/02-joki-valorant/jv-1.png",
            description:
                "Jasa joki Valorant yang berhasil membantu 500+ player mencapai rank impian mereka. Dengan tingkat kepuasan 98% dan zero ban rate.",
            images: [
                "/portfolio/02-joki-valorant/jv-2.png",
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
            features: ["500+ Satisfied Customers", "98% Success Rate", "Zero Ban Rate", "24/7 Support"],
            technology: ["Valorant", "Riot Vanguard", "Valorant Tracker"],
            integration: ["Discord", "Valorant Tracker", "Progress Dashboard"],
            link: "#",
        },
        {
            id: 2,
            title: "Beyond 9 To 5",
            type: "Discord Server Development",
            thumbnail: "/portfolio/01-b925/b925-1.png",
            description:
                "Pengembangan Discord server untuk komunitas freelance dengan 5000+ member. Dilengkapi dengan sistem role otomatis, bot custom, dan channel management yang terorganisir.",
            images: [
                "/portfolio/01-b925/b925-1.png",
                "/portfolio/01-b925/b925-2.png",
                "/portfolio/01-b925/b925-3.png",
                "/portfolio/01-b925/b925-4.png",
                "/portfolio/01-b925/b925-5.png",
                "/portfolio/01-b925/b925-6.png",
                "/portfolio/01-b925/b925-7.png",
                "/portfolio/01-b925/b925-8.png",
                "/portfolio/01-b925/b925-9.png",
                "/portfolio/01-b925/b925-10.png",
                "/portfolio/01-b925/b925-11.png",
                "/portfolio/01-b925/b925-12.png",
                "/portfolio/01-b925/b925-13.png",
                "/portfolio/01-b925/b925-14.png",
            ],
            features: [
                "Auto Role System",
                "Custom Bot Integration",
                "Voice Channel Management",
                "Event Scheduling System",
            ],
            technology: ["Discord", "Discord.Js"],
            integration: ["Discohook", "Moderation Tools"],
            link: "https://discord.gg/YKF8ye34Yp",
        },
        {
            id: 3,
            title: "Custom Emoji Pack - GGENK",
            type: "Custom Sticker/Emoji",
            thumbnail: "/portfolio/03-cs-ggenk/cs-1.png",
            description:
                "Pembuatan 17 custom emoji dengan tema anime untuk Discord server. Setiap emoji dirancang dengan detail tinggi dan konsisten dengan brand identity server.",
            images: ["/portfolio/03-cs-ggenk/cs-1.png", "/portfolio/03-cs-ggenk/cs-2.png"],
            features: ["17 Unique Emojis", "Consistent Art Style", "Multiple Expressions", "High Resolution"],
            technology: ["Adobe Illustrator", "Photoshop", "Procreate"],
            integration: ["Discord"],
            link: "#",
        },
        {
            id: 4,
            title: "IndoSky",
            type: "Discord Server Development",
            thumbnail: "/portfolio/04-indosky/IS.png",
            description:
                "Pengembangan Discord server untuk komunitas Roblox. Dilengkapi dengan sistem role otomatis, bot custom, dan channel management yang terorganisir.",
            images: [
                "/portfolio/04-indosky/IS-13.png",
                "/portfolio/04-indosky/IS-14.png",
                "/portfolio/04-indosky/IS-15.png",
                "/portfolio/04-indosky/IS-16.png",
                "/portfolio/04-indosky/IS-17.png",
                "/portfolio/04-indosky/IS-1.png",
                "/portfolio/04-indosky/IS-2.png",
                "/portfolio/04-indosky/IS-3.png",
                "/portfolio/04-indosky/IS-4.png",
                "/portfolio/04-indosky/IS-5.png",
                "/portfolio/04-indosky/IS-6.png",
                "/portfolio/04-indosky/IS-7.png",
                "/portfolio/04-indosky/IS-8.png",
                "/portfolio/04-indosky/IS-9.png",
                "/portfolio/04-indosky/IS-10.png",
                "/portfolio/04-indosky/IS-11.png",
                "/portfolio/04-indosky/IS-12.png",
            ],
            features: [
                "Auto Role System",
                "Custom Bot Integration",
                "Voice Channel Management",
                "Ticketing System",
                "Invite Tracker",
                "User Leveling",
                "Adjust Permissions",
            ],
            technology: ["Discord", "Discord.Js"],
            integration: ["Discohook", "Moderation Tools"],
            link: "https://discord.gg/PPu4yPrPad",
        },
    ];

    const nextImage = () => {
        if (selectedPortfolio !== null) {
            const portfolio = portfolios[selectedPortfolio];
            setCurrentImageIndex((prev) => (prev + 1) % portfolio.images.length);
        }
    };

    const prevImage = () => {
        if (selectedPortfolio !== null) {
            const portfolio = portfolios[selectedPortfolio];
            setCurrentImageIndex((prev) => (prev - 1 + portfolio.images.length) % portfolio.images.length);
        }
    };

    return (
        <section id="portfolio" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Work{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>{" "}
                        has done
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((portfolio, index) => (
                        <motion.div
                            key={portfolio.id}
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
                                setSelectedPortfolio(index);
                                setCurrentImageIndex(0);
                            }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                {/* Thumbnail */}
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={portfolio.thumbnail || "/placeholder.svg"}
                                        alt={portfolio.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-2">
                                        <span className="text-orange-400 text-sm font-medium">
                                            {portfolio.type}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                                        {portfolio.title}
                                    </h3>

                                    <p className="text-white/80 leading-relaxed mb-4 text-sm">
                                        {portfolio.description.substring(0, 120)}...
                                    </p>

                                    <div className="text-orange-400 text-sm font-medium">
                                        Click to view details
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Modal */}
                <AnimatePresence>
                    {selectedPortfolio !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedPortfolio(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            >
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-orange-400 text-sm font-medium">
                                                {portfolios[selectedPortfolio].type}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white">
                                                {portfolios[selectedPortfolio].title}
                                            </h3>
                                        </div>
                                        <button
                                            onClick={() => setSelectedPortfolio(null)}
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="relative mb-6">
                                        <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
                                            <Image
                                                src={
                                                    portfolios[selectedPortfolio].images[currentImageIndex] ||
                                                    "/placeholder.svg"
                                                }
                                                alt={`${portfolios[selectedPortfolio].title} - Image ${
                                                    currentImageIndex + 1
                                                }`}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Navigation Buttons */}
                                        {portfolios[selectedPortfolio].images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Thumbnails */}
                                        <div className="flex justify-center mt-4 space-x-2">
                                            {portfolios[selectedPortfolio].images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                                                        currentImageIndex === index
                                                            ? "border-orange-500"
                                                            : "border-white/20 hover:border-white/40"
                                                    }`}
                                                >
                                                    <Image
                                                        src={
                                                            portfolios[selectedPortfolio].images[index] ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={`Thumbnail ${index + 1}`}
                                                        width={64}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Description</h4>
                                            <p className="text-white/80 leading-relaxed mb-4">
                                                {portfolios[selectedPortfolio].description}
                                            </p>

                                            <h4 className="text-white font-semibold mb-3">Features</h4>
                                            <ul className="text-white/80 space-y-1">
                                                {portfolios[selectedPortfolio].features.map(
                                                    (feature, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Technology</h4>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {portfolios[selectedPortfolio].technology.map(
                                                    (tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <h4 className="text-white font-semibold mb-3">Integration</h4>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {portfolios[selectedPortfolio].integration.map(
                                                    (integration, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {integration}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <a
                                                href={portfolios[selectedPortfolio].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                                            >
                                                <span>View Project</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
