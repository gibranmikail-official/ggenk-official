"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Grid3X3, SquarePlay } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
    const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow");
    const [carouselIndex, setCarouselIndex] = useState(0);

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
                "Pengembangan Discord server untuk komunitas freelancer dengan 5000+ member. Dilengkapi dengan sistem role otomatis, bot custom, dan channel management yang terorganisir. Server ini dikembangkan oleh prodhite, Royikes, Rapleh, JohNest",
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
            title: "Bun's Ninja",
            type: "Discord Server Development",
            thumbnail: "/portfolio/05-buns-Ninja/BN.png",
            description:
                "Server Discord resmi komunitas Abun Sungkar dengan lebih dari 9000+ member aktif! Dibangun dengan sistem otomatisasi yang canggih, mulai dari auto-role, custom bot, hingga manajemen channel yang rapi dan interaktif. Tempat nongkrong seru, diskusi, dan terhubung langsung dengan komunitas Abun Sungkar dalam suasana yang tertata dan menyenangkan. Server ini dikembangkan oleh Royikes",

            images: [
                "/portfolio/05-buns-Ninja/BN.png",
                "/portfolio/05-buns-Ninja/BN-01.png",
                "/portfolio/05-buns-Ninja/BN-02.png",
                "/portfolio/05-buns-Ninja/BN-03.png",
                "/portfolio/05-buns-Ninja/BN-04.png",
                "/portfolio/05-buns-Ninja/BN-05.png",
                "/portfolio/05-buns-Ninja/BN-06.png",
                "/portfolio/05-buns-Ninja/BN-07.png",
                "/portfolio/05-buns-Ninja/BN-08.png",
                "/portfolio/05-buns-Ninja/BN-09.png",
                "/portfolio/05-buns-Ninja/BN-10.png",
                "/portfolio/05-buns-Ninja/BN-11.png",
                "/portfolio/05-buns-Ninja/BN-12.png",
                "/portfolio/05-buns-Ninja/BN-13.png",
            ],
            features: [
                "Auto Role System",
                "Custom Bot Integration",
                "Voice Channel Management",
                "Private Channel",
                "User Leveling",
                "Adjust Permissions",
            ],
            technology: ["Discord", "Discord.Js"],
            integration: ["Discohook", "Moderation Tools", "Youtube"],
            link: "https://discord.gg/bunsninja",
        },
        {
            id: 5,
            title: "IndoSky",
            type: "Discord Server Development",
            thumbnail: "/portfolio/04-indosky/IS.png",
            description:
                "Server Discord resmi komunitas Roblox IndoSky dengan lebih dari 2000+ member aktif! Dilengkapi sistem otomatisasi canggih seperti auto-role, bot custom, ticketing system, hingga manajemen channel yang rapi. Tempat terbaik untuk berkumpul, berdiskusi, dan menikmati pengalaman komunitas Roblox yang seru dan terorganisir. Server ini dikembangkan oleh prodhite.",
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
                "/portfolio/04-indosky/IS-18.png",
                "/portfolio/04-indosky/IS-19.png",
                "/portfolio/04-indosky/IS-20.png",
                "/portfolio/04-indosky/IS-21.png",
                "/portfolio/04-indosky/IS-22.png",
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
            integration: ["Discohook", "Moderation Tools", "Roblox Studio"],
            link: "https://discord.gg/PPu4yPrPad",
        },
        {
            id: 6,
            title: "Aca-demy",
            type: "Discord Server Development",
            thumbnail: "/portfolio/06-aca-demy/AD.png",
            description:
                "Server Discord resmi komunitas Aca (Callista Arum) dengan lebih dari 5000+ member aktif! Dibangun dengan sistem otomatisasi yang canggih, mulai dari auto-role, custom bot, hingga manajemen channel yang rapi dan interaktif. Tempat nongkrong seru, diskusi, dan terhubung langsung dengan komunitas Aca dalam suasana yang tertata dan menyenangkan. Server ini dikembangkan oleh Royikes",

            images: [
                "/portfolio/06-aca-demy/AD.png",
                "/portfolio/06-aca-demy/AD-01.png",
                "/portfolio/06-aca-demy/AD-02.png",
                "/portfolio/06-aca-demy/AD-03.png",
                "/portfolio/06-aca-demy/AD-04.png",
                "/portfolio/06-aca-demy/AD-05.png",
                "/portfolio/06-aca-demy/AD-06.png",
                "/portfolio/06-aca-demy/AD-07.png",
                "/portfolio/06-aca-demy/AD-08.png",
                "/portfolio/06-aca-demy/AD-09.png",
                "/portfolio/06-aca-demy/AD-10.png",
            ],
            features: [
                "Auto Role System",
                "Custom Bot Integration",
                "Voice Channel Management",
                "Private Channel",
                "User Leveling",
                "Adjust Permissions",
            ],
            technology: ["Discord", "Discord.Js"],
            integration: ["Discohook", "Moderation Tools", "Youtube"],
            link: "https://discord.gg/KqdBWf74Vp",
        },
        {
            id: 7,
            title: "Best Friend Studio",
            type: "Graphic Design",
            thumbnail: "/portfolio/07-BFS/BFS.png",
            description:
                "Proyek desain ini dibuat untuk mendukung perayaan 4th Anniversary Fun Padel Tournament yang diselenggarakan oleh Best Friends Studio, sebuah brand yang bergerak di bidang eyelash, nails & beauty. Desain ini menggabungkan elemen visual yang elegan, bersih, dan modern untuk menciptakan identitas acara yang profesional namun tetap ramah dan menarik. Dikerjakan oleh prodhite",

            images: [
                "/portfolio/07-BFS/BFS.png",
                "/portfolio/07-BFS/BFS-1.png",
                "/portfolio/07-BFS/BFS-2.png",
                "/portfolio/07-BFS/BFS-3.png",
                "/portfolio/07-BFS/BFS-4.png",
                "/portfolio/07-BFS/BFS-5.jpg",
                "/portfolio/07-BFS/BFS-6.jpg",
            ],
            features: [
                "Desain Konsisten & Elegan sesuai identitas brand",
                "Net Banner untuk event padel",
                "Voucher Design (Free Treatment, Eyelash Voucher, Talent DNA, Yoga Voucher)",
                "Twibbon Instagram (post & story)",
                "Winners Board untuk pemenang turnamen",
                "Visual minimalis, profesional, dan ramah audiens",
            ],
            technology: ["Adobe Photoshop", "Canva"],
            integration: ["Instagram Post & Story", "Event Branding & Promotion"],
            link: "https://www.instagram.com/bestfriendsstudio/",
        },
        {
            id: 8,
            title: "Yummy Tails",
            type: "Discord Server Development",
            thumbnail: "/portfolio/08-yummytails/YT.png",
            description:
                "Server Discord Quackers — freshly baked & siap dipakai! Dibangun dengan sistem otomatisasi modern untuk pengalaman komunitas yang rapi, nyaman, dan interaktif. Mulai dari auto-role, custom bot, hingga pengelolaan channel yang efisien — semuanya diracik khusus agar komunitas Yummy Tails terasa lebih hidup. Server ini dikembangkan oleh prodhite",

            images: [
                "/portfolio/08-yummytails/YT.png",
                "/portfolio/08-yummytails/YT-01.png",
                "/portfolio/08-yummytails/YT-02.png",
                "/portfolio/08-yummytails/YT-03.png",
                "/portfolio/08-yummytails/YT-04.png",
                "/portfolio/08-yummytails/YT-05.png",
                "/portfolio/08-yummytails/YT-06.png",
                "/portfolio/08-yummytails/YT-07.png",
                "/portfolio/08-yummytails/YT-08.png",
                "/portfolio/08-yummytails/YT-09.png",
                "/portfolio/08-yummytails/YT-10.png",
                "/portfolio/08-yummytails/YT-11.png",
                "/portfolio/08-yummytails/YT-12.png",
                "/portfolio/08-yummytails/YT-13.png",
                "/portfolio/08-yummytails/YT-14.png",
                "/portfolio/08-yummytails/YT-15.png",
                "/portfolio/08-yummytails/YT-16.png",
                "/portfolio/08-yummytails/YT-17.png",
                "/portfolio/08-yummytails/YT-18.png",
                "/portfolio/08-yummytails/YT-19.png",
                "/portfolio/08-yummytails/YT-20.png",
                "/portfolio/08-yummytails/YT-21.png",
                "/portfolio/08-yummytails/YT-22.png",
                "/portfolio/08-yummytails/YT-23.png",
                "/portfolio/08-yummytails/YT-24.png",
                "/portfolio/08-yummytails/YT-25.png",
                "/portfolio/08-yummytails/YT-26.png",
                "/portfolio/08-yummytails/YT-27.png",
            ],
            features: [
                "Auto Role System",
                "Custom Bot Integration",
                "Voice Channel Management",
                "Private Channel",
                "User Leveling",
                "Adjust Permissions",
            ],
            technology: ["Discord", "Discord.Js"],
            integration: ["Discohook", "Moderation Tools", "Youtube"],
            link: "https://discord.gg/KqdBWf74Vp",
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

    const nextCarousel = () => {
        setCarouselIndex((prev) => (prev + 1) % portfolios.length);
    };

    const prevCarousel = () => {
        setCarouselIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);
    };

    // Function to truncate description
    const truncateDescription = (text: string, maxLength: number = 120) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };

    // Check if link is valid (not "#" or empty)
    const isValidLink = (link: string) => {
        return link && link !== "#" && link !== "";
    };

    return (
        <section id="portfolio" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 mt-5">
                        Work{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            GGENK
                        </span>{" "}
                        has done
                    </h2>
                </motion.div>

                {/* View Mode Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex">
                        <button
                            onClick={() => setViewMode("slideshow")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                                viewMode === "slideshow"
                                    ? "bg-orange-500 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <SquarePlay className="w-5 h-5" />
                            Slideshow
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                                viewMode === "grid"
                                    ? "bg-orange-500 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Grid3X3 className="w-5 h-5" />
                            Grid View
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {viewMode === "grid" && (
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
                                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 h-full flex flex-col">
                                    {/* Thumbnail */}
                                    <div className="aspect-video overflow-hidden flex-shrink-0">
                                        <Image
                                            src={portfolio.thumbnail || "/placeholder.svg"}
                                            alt={portfolio.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-2">
                                            <span className="text-orange-400 text-sm font-medium">
                                                {portfolio.type}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors line-clamp-2">
                                            {portfolio.title}
                                        </h3>

                                        <p className="text-white/80 leading-relaxed mb-4 text-sm flex-grow line-clamp-3">
                                            {truncateDescription(portfolio.description, 120)}
                                        </p>

                                        <div className="text-orange-400 text-sm font-medium mt-auto">
                                            Click to view details
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Slideshow View - Compact Size */}
                {viewMode === "slideshow" && (
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            {/* Previous Button - Outside */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevCarousel}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>

                            {/* Slideshow Content */}
                            <div className="flex-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={carouselIndex}
                                        initial={{ opacity: 0, x: 300 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -300 }}
                                        transition={{ duration: 0.5 }}
                                        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
                                    >
                                        <div className="grid lg:grid-cols-2 gap-6 min-h-[400px]">
                                            {/* Image Section - Smaller */}
                                            <div className="relative aspect-video lg:aspect-auto lg:h-full">
                                                <Image
                                                    src={portfolios[carouselIndex].thumbnail || "/placeholder.svg"}
                                                    alt={portfolios[carouselIndex].title}
                                                    width={500}
                                                    height={300}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/30 lg:to-transparent" />
                                            </div>

                                            {/* Content Section - Compact */}
                                            <div className="p-6 flex flex-col justify-center">
                                                <div className="mb-3">
                                                    <span className="text-orange-400 text-sm font-medium">
                                                        {portfolios[carouselIndex].type}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                                                    {portfolios[carouselIndex].title}
                                                </h3>

                                                <p className="text-white/80 leading-relaxed mb-4 text-sm line-clamp-3">
                                                    {truncateDescription(portfolios[carouselIndex].description, 150)}
                                                </p>

                                                <div className="mb-4">
                                                    <h4 className="text-white font-semibold mb-2 text-sm">Features</h4>
                                                    <ul className="text-white/80 space-y-1 text-sm">
                                                        {portfolios[carouselIndex].features.slice(0, 3).map((feature, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                                                                <span className="line-clamp-1">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex flex-wrap gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedPortfolio(carouselIndex);
                                                            setCurrentImageIndex(0);
                                                        }}
                                                        className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm"
                                                    >
                                                        View Details
                                                    </button>
                                                    {isValidLink(portfolios[carouselIndex].link) && (
                                                        <a
                                                            href={portfolios[carouselIndex].link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-sm"
                                                        >
                                                            <span>View Project</span>
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Next Button - Outside */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextCarousel}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {portfolios.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCarouselIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === carouselIndex
                                            ? "bg-orange-500 w-8"
                                            : "bg-white/30 hover:bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Optimized Portfolio Modal */}
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
                                            className="text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Enhanced Image Gallery */}
                                    <div className="relative mb-6">
                                        <div className="aspect-video bg-white/5 rounded-xl overflow-hidden relative">
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
                                            
                                            {/* Image Counter */}
                                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                                {currentImageIndex + 1} / {portfolios[selectedPortfolio].images.length}
                                            </div>
                                        </div>

                                        {/* Enhanced Navigation Buttons */}
                                        {portfolios[selectedPortfolio].images.length > 1 && (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-2xl transition-all border border-white/20"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-2xl transition-all border border-white/20"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            </>
                                        )}

                                        {/* Enhanced Image Thumbnails */}
                                        <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
                                            {portfolios[selectedPortfolio].images.map((image, index) => (
                                                <motion.button
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                                        currentImageIndex === index
                                                            ? "border-orange-500 scale-105"
                                                            : "border-white/20 hover:border-white/40"
                                                    }`}
                                                >
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        width={80}
                                                        height={56}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Enhanced Details Section */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Description</h4>
                                                <p className="text-white/80 leading-relaxed text-sm">
                                                    {portfolios[selectedPortfolio].description}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Features</h4>
                                                <ul className="text-white/80 space-y-2">
                                                    {portfolios[selectedPortfolio].features.map(
                                                        (feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                                                                <span className="text-sm">{feature}</span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Technology</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {portfolios[selectedPortfolio].technology.map(
                                                        (tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full text-sm border border-orange-500/30"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Integration</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {portfolios[selectedPortfolio].integration.map(
                                                        (integration, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-sm border border-purple-500/30"
                                                            >
                                                                {integration}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {isValidLink(portfolios[selectedPortfolio].link) && (
                                                <div className="pt-4">
                                                    <a
                                                        href={portfolios[selectedPortfolio].link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 w-full justify-center"
                                                    >
                                                        <span>View Live Project</span>
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            )}
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