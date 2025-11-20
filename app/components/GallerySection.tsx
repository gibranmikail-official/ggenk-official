"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3, Play, SquarePlay } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
    const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow");

    const galleries = [
        {
            id: 14,
            title: "Rassa Kopi Kemang",
            date: "18 Oktober 2025",
            thumbnail: "/gallery/14-RK/RK-01.jpg",
            images: [
                "/gallery/14-RK/RK-01.jpg",
                "/gallery/14-RK/RK-02.jpg",
                "/gallery/14-RK/RK-03.jpg",
                "/gallery/14-RK/RK-04.jpg",
                "/gallery/14-RK/RK-05.jpg",
                "/gallery/14-RK/RK-06.jpg",
                "/gallery/14-RK/RK-07.jpg",
                "/gallery/14-RK/RK-00.jpg",
                "/gallery/14-RK/RK-08.jpg",
                "/gallery/14-RK/RK-09.jpg",
                "/gallery/14-RK/RK-10.jpg",
                "/gallery/14-RK/RK-12.jpg",
                "/gallery/14-RK/RK-13.jpg",
                "/gallery/14-RK/RK-14.jpg",
                "/gallery/14-RK/RK-15.jpg",
                "/gallery/14-RK/RK-16.jpg",
                "/gallery/14-RK/RK-17.jpg",
                "/gallery/14-RK/RK-18.jpg",
                "/gallery/14-RK/RK-19.jpg",
                "/gallery/14-RK/RK-20.jpg",
                "/gallery/14-RK/RK-21.jpg",
                "/gallery/14-RK/RK-22.jpg",
                "/gallery/14-RK/RK-23.jpg",
                "/gallery/14-RK/RK-24.jpg",
                "/gallery/14-RK/RK-25.jpg",
                "/gallery/14-RK/RK-26.jpg",
            ],
        },
        {
            id: 13,
            title: "BBQ - G-House",
            date: "27 September 2025",
            thumbnail: "/gallery/13-BBQ-2/BBQ-1.jpg",
            images: [
                "/gallery/13-BBQ-2/BBQ-1.jpg",
                "/gallery/13-BBQ-2/BBQ-2.jpg",
                "/gallery/13-BBQ-2/BBQ-3.jpg",
                "/gallery/13-BBQ-2/BBQ-4.jpg",
                "/gallery/13-BBQ-2/BBQ-5.jpg",
                "/gallery/13-BBQ-2/BBQ-6.jpg",
                "/gallery/13-BBQ-2/BBQ-7.jpg",
                "/gallery/13-BBQ-2/BBQ-8.jpg",
                "/gallery/13-BBQ-2/BBQ-9.jpg",
                "/gallery/13-BBQ-2/BBQ-10.jpg",
                "/gallery/13-BBQ-2/BBQ-11.jpg",
                "/gallery/13-BBQ-2/BBQ-12.jpg",
                "/gallery/13-BBQ-2/BBQ-13.jpg",
                "/gallery/13-BBQ-2/BBQ-14.jpg",
                "/gallery/13-BBQ-2/BBQ-15.jpg",
                "/gallery/13-BBQ-2/BBQ-16.jpg",
                "/gallery/13-BBQ-2/BBQ-17.jpg",
                "/gallery/13-BBQ-2/BBQ-18.jpg",
                "/gallery/13-BBQ-2/BBQ-19.jpg",
                "/gallery/13-BBQ-2/BBQ-20.jpg",
                "/gallery/13-BBQ-2/BBQ-21.jpg",
                "/gallery/13-BBQ-2/BBQ-22.jpg",
                "/gallery/13-BBQ-2/BBQ-23.jpg",
                "/gallery/13-BBQ-2/BBQ-24.jpg",
                "/gallery/13-BBQ-2/BBQ-25.jpg",
                "/gallery/13-BBQ-2/BBQ-26.jpg",
                "/gallery/13-BBQ-2/BBQ-27.jpg",
                "/gallery/13-BBQ-2/BBQ-28.jpg",
            ],
        },
        {
            id: 12,
            title: "Rassa Kopi Kemang",
            date: "13 September 2025",
            thumbnail: "/gallery/12-ggxis/GGxIS.png",
            images: [
                "/gallery/12-ggxis/GGxIS-1.jpg",
                "/gallery/12-ggxis/GGxIS-18.jpg",
                "/gallery/12-ggxis/GGxIS-19.jpg",
                "/gallery/12-ggxis/GGxIS-20.jpg",
                "/gallery/12-ggxis/GGxIS-21.jpg",
                "/gallery/12-ggxis/GGxIS-2.jpg",
                "/gallery/12-ggxis/GGxIS-3.jpg",
                "/gallery/12-ggxis/GGxIS-4.jpg",
                "/gallery/12-ggxis/GGxIS-5.jpg",
                "/gallery/12-ggxis/GGxIS-6.jpg",
                "/gallery/12-ggxis/GGxIS-7.jpg",
                "/gallery/12-ggxis/GGxIS-8.jpg",
                "/gallery/12-ggxis/GGxIS-9.jpg",
                "/gallery/12-ggxis/GGxIS-10.jpg",
                "/gallery/12-ggxis/GGxIS-11.jpg",
                "/gallery/12-ggxis/GGxIS-12.jpg",
                "/gallery/12-ggxis/GGxIS-13.jpg",
                "/gallery/12-ggxis/GGxIS-14.jpg",
                "/gallery/12-ggxis/GGxIS-15.jpg",
                "/gallery/12-ggxis/GGxIS-16.jpg",
                "/gallery/12-ggxis/GGxIS-17.jpg",
                "/gallery/12-ggxis/GGxIS-22.jpg",
                "/gallery/12-ggxis/GGxIS-23.jpg",
                "/gallery/12-ggxis/GGxIS-24.jpg",
                "/gallery/12-ggxis/GGxIS-25.jpg",
                "/gallery/12-ggxis/GGxIS-26.jpg",
                "/gallery/12-ggxis/GGxIS-27.jpg",
                "/gallery/12-ggxis/GGxIS-28.jpg",
                "/gallery/12-ggxis/GGxIS-29.jpg",
                "/gallery/12-ggxis/GGxIS-30.jpg",
                "/gallery/12-ggxis/GGxIS-31.jpg",
                "/gallery/12-ggxis/GGxIS-32.jpg",
            ],
        },
        // {
        //     id: 11,
        //     title: "GGENK x Interbond - Lippo mall Kemang",
        //     date: "26 Juli 2025",
        //     thumbnail: "/gallery/11-kemvil/IntbxGG.png",
        //     images: [
        //         "/gallery/11-kemvil/kmv-1.jpg",
        //         "/gallery/11-kemvil/kmv-2.jpg",
        //         "/gallery/11-kemvil/kmv-3.jpg",
        //         "/gallery/11-kemvil/kmv-4.jpg",
        //         "/gallery/11-kemvil/kmv-5.jpg",
        //         "/gallery/11-kemvil/kmv-6.jpg",
        //         "/gallery/11-kemvil/kmv-7.jpg",
        //     ],
        // },
        {
            id: 10,
            title: "BBQ - G-House",
            date: "20 Juli 2025",
            thumbnail: "/gallery/10-BBQ/BBQ-1.jpg",
            images: [
                "/gallery/10-BBQ/BBQ-1.jpg",
                "/gallery/10-BBQ/BBQ-2.jpg",
                "/gallery/10-BBQ/BBQ-3.jpg",
                "/gallery/10-BBQ/BBQ-4.jpg",
                "/gallery/10-BBQ/BBQ-5.jpg",
                "/gallery/10-BBQ/BBQ-6.jpg",
                "/gallery/10-BBQ/BBQ-7.jpg",
                "/gallery/10-BBQ/BBQ-8.jpg",
            ],
        },
        {
            id: 9,
            title: "Menanti Senja - Cipete",
            date: "28 Juni 2025",
            thumbnail: "/gallery/01-menanti-senja/ms-1.jpg",
            images: [
                "/gallery/01-menanti-senja/ms-1.jpg",
                "/gallery/01-menanti-senja/ms-2.jpg",
                "/gallery/01-menanti-senja/ms-3.jpg",
                "/gallery/01-menanti-senja/ms-4.jpg",
                "/gallery/01-menanti-senja/ms-5.jpg",
                "/gallery/01-menanti-senja/ms-6.jpg",
                "/gallery/01-menanti-senja/ms-7.jpg",
                "/gallery/01-menanti-senja/ms-8.jpg",
                "/gallery/01-menanti-senja/ms-9.jpg",
                "/gallery/01-menanti-senja/ms-10.jpg",
            ],
        },
        {
            id: 8,
            title: "Berkala Coffee - Ampera",
            date: "15 June 2025",
            thumbnail: "/gallery/02-berkala-coffee/bc-1.jpg",
            images: [
                "/gallery/02-berkala-coffee/bc-1.jpg",
                "/gallery/02-berkala-coffee/bc-2.jpg",
                "/gallery/02-berkala-coffee/bc-3.jpg",
                "/gallery/02-berkala-coffee/bc-4.jpg",
                "/gallery/02-berkala-coffee/bc-5.jpg",
                "/gallery/02-berkala-coffee/bc-6.jpg",
                "/gallery/02-berkala-coffee/bc-7.jpg",
                "/gallery/02-berkala-coffee/bc-8.jpg",
            ],
        },
        {
            id: 7,
            title: "Warkop Disko Agam - Kemang",
            date: "1 June 2025",
            thumbnail: "/gallery/03-warkop-agam/wda-1.jpg",
            images: [
                "/gallery/03-warkop-agam/wda-1.jpg",
                "/gallery/03-warkop-agam/wda-2.jpg",
                "/gallery/03-warkop-agam/wda-3.jpg",
                "/gallery/03-warkop-agam/wda-4.jpg",
                "/gallery/03-warkop-agam/wda-5.jpg",
                "/gallery/03-warkop-agam/wda-6.jpg",
                "/gallery/03-warkop-agam/wda-7.jpg",
                "/gallery/03-warkop-agam/wda-8.jpg",
                "/gallery/03-warkop-agam/wda-9.jpg",
            ],
        },
        {
            id: 6,
            title: "Soft Launching Beyond 9 to 5",
            date: "1 June 2025",
            thumbnail: "/gallery/04-b925/b925-1.png",
            images: [
                "/gallery/04-b925/b925-2.jpg",
                "/gallery/04-b925/b925-3.jpg",
                "/gallery/04-b925/b925-4.jpg",
                "/gallery/04-b925/b925-5.jpg",
                "/gallery/04-b925/b925-6.jpg",
                "/gallery/04-b925/b925-7.jpg",
                "/gallery/04-b925/b925-8.jpg",
            ],
        },
        {
            id: 5,
            title: "NYCheesecake Croissant & Coffee",
            date: "3 May 2025",
            thumbnail: "/gallery/05-nycheescake/nycc-4.jpg",
            images: [
                "/gallery/05-nycheescake/nycc-1.jpg",
                "/gallery/05-nycheescake/nycc-2.jpg",
                "/gallery/05-nycheescake/nycc-3.jpg",
                "/gallery/05-nycheescake/nycc-4.jpg",
                "/gallery/05-nycheescake/nycc-5.jpg",
                "/gallery/05-nycheescake/nycc-6.jpg",
                "/gallery/05-nycheescake/nycc-7.jpg",
                "/gallery/05-nycheescake/nycc-8.jpg",
                "/gallery/05-nycheescake/nycc-9.png",
                "/gallery/05-nycheescake/nycc-10.jpg",
            ],
        },
        {
            id: 4,
            title: "Bukber H-1 Lebaran",
            date: "30 March 2025",
            thumbnail: "/gallery/06-bukber/bkr-3.png",
            images: [
                "/gallery/06-bukber/bkr-1.png",
                "/gallery/06-bukber/bkr-2.png",
                "/gallery/06-bukber/bkr-3.png",
                "/gallery/06-bukber/bkr-4.jpg",
                "/gallery/06-bukber/bkr-5.jpg",
                "/gallery/06-bukber/bkr-6.jpg",
                "/gallery/06-bukber/bkr-7.jpg",
                "/gallery/06-bukber/bkr-8.jpg",
                "/gallery/06-bukber/bkr-9.jpg",
                "/gallery/06-bukber/bkr-10.jpg",
            ],
        },
        {
            id: 3,
            title: "Perbakin Shooting Club",
            date: "29 September 2024",
            thumbnail: "/gallery/07-perbakin/pbm-2.jpg",
            images: [
                "/gallery/07-perbakin/pbm-1.jpg",
                "/gallery/07-perbakin/pbm-2.jpg",
                "/gallery/07-perbakin/pbm-3.jpg",
                "/gallery/07-perbakin/pbm-4.jpg",
                "/gallery/07-perbakin/pbm-5.jpg",
                "/gallery/07-perbakin/pbm-6.jpg",
                "/gallery/07-perbakin/pbm-7.jpg",
                "/gallery/07-perbakin/pbm-8.jpg",
                "/gallery/07-perbakin/pbm-9.jpg",
                "/gallery/07-perbakin/pbm-10.jpg",
                "/gallery/07-perbakin/pbm-11.jpg",
                "/gallery/07-perbakin/pbm-12.jpg",
            ],
        },
        {
            id: 2,
            title: "Skayris Graduation",
            date: "7 September 2024",
            thumbnail: "/gallery/08-skayris-grad/sg-1.jpg",
            images: [
                "/gallery/08-skayris-grad/sg-1.jpg",
                "/gallery/08-skayris-grad/sg-2.jpg",
                "/gallery/08-skayris-grad/sg-3.jpg",
                "/gallery/08-skayris-grad/sg-4.jpg",
                "/gallery/08-skayris-grad/sg-5.jpg",
                "/gallery/08-skayris-grad/sg-6.jpg",
                "/gallery/08-skayris-grad/sg-7.jpg",
                "/gallery/08-skayris-grad/sg-8.jpg",
                "/gallery/08-skayris-grad/sg-9.jpg",
                "/gallery/08-skayris-grad/sg-10.jpg",
                "/gallery/08-skayris-grad/sg-11.jpg",
                "/gallery/08-skayris-grad/sg-12.jpg",
                "/gallery/08-skayris-grad/sg-13.jpg",
                "/gallery/08-skayris-grad/sg-14.jpg",
            ],
        },
        {
            id: 1,
            title: "Java Jazz 2024",
            date: "26 May 2024",
            thumbnail: "/gallery/09-java-jazz/jj-1.jpg",
            images: [
                "/gallery/09-java-jazz/jj-1.jpg",
                "/gallery/09-java-jazz/jj-2.jpg",
                "/gallery/09-java-jazz/jj-3.jpg",
                "/gallery/09-java-jazz/jj-4.jpg",
                "/gallery/09-java-jazz/jj-5.jpg",
                "/gallery/09-java-jazz/jj-6.jpg",
                "/gallery/09-java-jazz/jj-7.jpg",
                "/gallery/09-java-jazz/jj-8.jpg",
                "/gallery/09-java-jazz/jj-9.jpg",
                "/gallery/09-java-jazz/jj-10.jpg",
                "/gallery/09-java-jazz/jj-11.jpg",
                "/gallery/09-java-jazz/jj-12.jpg",
                "/gallery/09-java-jazz/jj-13.jpg",
            ],
        },
    ];

    // Auto-rotate slideshow
    useEffect(() => {
        if (viewMode === "slideshow") {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % galleries.length);
            }, 7000);
            return () => clearInterval(interval);
        }
    }, [viewMode, galleries.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % galleries.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + galleries.length) % galleries.length);
    };

    const nextImage = () => {
        if (selectedGallery !== null) {
            const gallery = galleries[selectedGallery];
            setCurrentImageIndex((prev) => (prev + 1) % gallery.images.length);
        }
    };

    const prevImage = () => {
        if (selectedGallery !== null) {
            const gallery = galleries[selectedGallery];
            setCurrentImageIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
        }
    };

    return (
        <section id="gallery" className="py-20 px-4">
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
                            Gallery
                        </span>{" "}
                        Moments
                    </h2>
                    <p className="text-xl text-white/80">Momen-momen seru ketika kumpul bareng</p>
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

                {/* 3D Slideshow View */}
                {viewMode === "slideshow" && (
                    <div className="relative h-[600px] mb-12">
                        <AnimatePresence mode="wait">
                            {galleries.map((gallery, index) => (
                                index === currentSlide && (
                                    <motion.div
                                        key={gallery.id}
                                        initial={{ 
                                            opacity: 0,
                                            scale: 0.8,
                                            x: 300
                                        }}
                                        animate={{ 
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20
                                            }
                                        }}
                                        exit={{ 
                                            opacity: 0,
                                            scale: 0.8,
                                            x: -300
                                        }}
                                        className="absolute inset-0 cursor-pointer"
                                        onClick={() => {
                                            setSelectedGallery(index);
                                            setCurrentImageIndex(0);
                                        }}
                                    >
                                        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden h-full">
                                            {/* Main Image with Enhanced Effects */}
                                            <div className="relative w-full h-full">
                                                <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-700">
                                                    <div className="relative w-full h-full overflow-hidden rounded-3xl">
                                                        <Image
                                                            src={gallery.thumbnail || "/placeholder.svg"}
                                                            alt={gallery.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        {/* Gradient Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                                        
                                                        {/* Content */}
                                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                            <motion.h3 
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.3 }}
                                                                className="text-3xl font-bold mb-2"
                                                            >
                                                                {gallery.title}
                                                            </motion.h3>
                                                            <motion.p 
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.4 }}
                                                                className="text-white/80 mb-4"
                                                            >
                                                                {gallery.date}
                                                            </motion.p>
                                                            <motion.div 
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.5 }}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <span className="bg-orange-500/20 border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full text-sm">
                                                                    {gallery.images.length} photos
                                                                </span>
                                                                <span className="text-white/60 text-sm">
                                                                    Click to view gallery
                                                                </span>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110 z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                            {galleries.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentSlide
                                            ? "bg-orange-500 scale-125"
                                            : "bg-white/30 hover:bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === "grid" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {galleries.map((gallery, index) => (
                            <motion.div
                                key={gallery.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                                onClick={() => {
                                    setSelectedGallery(index);
                                    setCurrentImageIndex(0);
                                }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                    {/* Thumbnail */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                            src={gallery.thumbnail || "/placeholder.svg"}
                                            alt={gallery.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Image Count Badge */}
                                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                            {gallery.images.length} photos
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                            <span className="text-white font-medium">Click to view gallery</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                                            {gallery.title}
                                        </h3>
                                        <p className="text-white/60 text-sm">{gallery.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Enhanced Gallery Modal */}
                <AnimatePresence>
                    {selectedGallery !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedGallery(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
                            >
                                <div className="p-6">
                                    {/* Enhanced Header */}
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <motion.h3 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-3xl font-bold text-white mb-2"
                                            >
                                                {galleries[selectedGallery].title}
                                            </motion.h3>
                                            <motion.p 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-white/60 text-lg"
                                            >
                                                {galleries[selectedGallery].date} •{" "}
                                                <span className="text-orange-400">
                                                    {galleries[selectedGallery].images.length} photos
                                                </span>
                                            </motion.p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSelectedGallery(null)}
                                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/60 hover:text-white p-3 rounded-xl transition-all border border-white/20"
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.button>
                                    </div>

                                    {/* Enhanced Main Image */}
                                    <div className="relative mb-8">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                        >
                                            <Image
                                                src={
                                                    galleries[selectedGallery].images[currentImageIndex] ||
                                                    "/placeholder.svg"
                                                }
                                                alt={`${galleries[selectedGallery].title} - Photo ${
                                                    currentImageIndex + 1
                                                }`}
                                                width={1200}
                                                height={800}
                                                className="w-full h-full object-contain"
                                            />
                                        </motion.div>

                                        {/* Enhanced Navigation Buttons */}
                                        {galleries[selectedGallery].images.length > 1 && (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: -5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={prevImage}
                                                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20 shadow-lg"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={nextImage}
                                                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20 shadow-lg"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </motion.button>
                                            </>
                                        )}

                                        {/* Enhanced Image Counter */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-lg text-white px-6 py-3 rounded-2xl text-lg border border-white/20 shadow-lg"
                                        >
                                            <span className="text-orange-400 font-semibold">
                                                {currentImageIndex + 1}
                                            </span>{" "}
                                            /{" "}
                                            {galleries[selectedGallery].images.length}
                                        </motion.div>
                                    </div>

                                    {/* Enhanced Thumbnail Strip */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex space-x-4 overflow-x-auto pb-4"
                                    >
                                        {galleries[selectedGallery].images.map((image, index) => (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border-2 transition-all shadow-lg ${
                                                    currentImageIndex === index
                                                        ? "border-orange-500 scale-110 shadow-orange-500/25"
                                                        : "border-white/20 hover:border-white/40"
                                                }`}
                                            >
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    width={96}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}