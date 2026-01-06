"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3, SquarePlay, ZoomIn, Download } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
    const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow");
    const [isZoomed, setIsZoomed] = useState(false);

    const galleries = [
        {
            id: 15,
            title: "GGENK x INDOSKY NEW YEAR PARTY",
            date: "31 December 2025",
            thumbnail: "/gallery/15-newyear/NYP.png",
            images: [
                "/gallery/15-newyear/NYP.png",
                "/gallery/15-newyear/NYP-00.png",
                "/gallery/15-newyear/NYP-01.png",
                "/gallery/15-newyear/NYP-02.png",
                "/gallery/15-newyear/NYP-03.png",
                "/gallery/15-newyear/NYP-04.png",
                "/gallery/15-newyear/NYP-05.png",
                "/gallery/15-newyear/NYP-06.png",
                "/gallery/15-newyear/NYP-07.png",
                "/gallery/15-newyear/NYP-08.png",
                "/gallery/15-newyear/NYP-09.png",
                "/gallery/15-newyear/NYP-10.png",
                "/gallery/15-newyear/NYP-11.png",
                "/gallery/15-newyear/NYP-12.png",
                "/gallery/15-newyear/NYP-13.png",
                "/gallery/15-newyear/NYP-14.png",
                "/gallery/15-newyear/NYP-15.png",
                "/gallery/15-newyear/NYP-16.png",
                "/gallery/15-newyear/NYP-17.png",
                "/gallery/15-newyear/NYP-18.png",
                "/gallery/15-newyear/NYP-19.png",
                "/gallery/15-newyear/NYP-20.png",
                "/gallery/15-newyear/NYP-21.png",
                "/gallery/15-newyear/NYP-22.png",
                "/gallery/15-newyear/NYP-23.png",
                "/gallery/15-newyear/NYP-24.png",
                "/gallery/15-newyear/NYP-25.png",
                "/gallery/15-newyear/NYP-26.png",
                "/gallery/15-newyear/NYP-27.png",
                "/gallery/15-newyear/NYP-28.png",
                "/gallery/15-newyear/NYP-29.png",
                "/gallery/15-newyear/NYP-30.png",
                "/gallery/15-newyear/NYP-31.png",
                "/gallery/15-newyear/NYP-32.png",
                "/gallery/15-newyear/NYP-33.png",
                "/gallery/15-newyear/NYP-34.png",
                "/gallery/15-newyear/NYP-35.png",
                "/gallery/15-newyear/NYP-36.png",
                "/gallery/15-newyear/NYP-37.png",
                "/gallery/15-newyear/NYP-38.png",
                "/gallery/15-newyear/NYP-39.png",
                "/gallery/15-newyear/NYP-40.png",
                "/gallery/15-newyear/NYP-41.png",
                "/gallery/15-newyear/NYP-42.png",
                "/gallery/15-newyear/NYP-43.png",
                "/gallery/15-newyear/NYP-44.png",
                "/gallery/15-newyear/NYP-45.png",
                "/gallery/15-newyear/NYP-46.png",
                "/gallery/15-newyear/NYP-47.png",
                "/gallery/15-newyear/NYP-48.png",
                "/gallery/15-newyear/NYP-49.png",
                "/gallery/15-newyear/NYP-50.png",
                "/gallery/15-newyear/NYP-51.png",
                "/gallery/15-newyear/NYP-52.png",
                "/gallery/15-newyear/NYP-53.png",
                "/gallery/15-newyear/NYP-54.png",
                "/gallery/15-newyear/NYP-55.png",
                "/gallery/15-newyear/NYP-56.png",
                "/gallery/15-newyear/NYP-57.png",
                "/gallery/15-newyear/NYP-58.png",
                "/gallery/15-newyear/NYP-59.png",
                "/gallery/15-newyear/NYP-61.png",
                "/gallery/15-newyear/NYP-62.png",
                "/gallery/15-newyear/NYP-63.png",
                "/gallery/15-newyear/NYP-64.png",
                "/gallery/15-newyear/NYP-65.png",
                "/gallery/15-newyear/NYP-66.png",
                "/gallery/15-newyear/NYP-67.png",
                "/gallery/15-newyear/NYP-68.png",
                "/gallery/15-newyear/NYP-69.png",
                "/gallery/15-newyear/NYP-70.png",
            ],
        },
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

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (selectedGallery !== null) {
                if (e.key === "ArrowLeft") prevImage();
                if (e.key === "ArrowRight") nextImage();
                if (e.key === "Escape") {
                    if (isZoomed) {
                        setIsZoomed(false);
                    } else {
                        setSelectedGallery(null);
                    }
                }
            }
        },
        [selectedGallery, isZoomed, prevImage, nextImage]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const downloadImage = () => {
        if (selectedGallery !== null) {
            const imageUrl = galleries[selectedGallery].images[currentImageIndex];
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = `gallery-${galleries[selectedGallery].title}-${currentImageIndex + 1}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section id="gallery" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-5 mt-5"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Gallery
                        </span>{" "}
                        Moments
                    </h2>
                    <p className="text-lg text-white/80">Momen-momen seru ketika kumpul bareng</p>
                </motion.div>

                {/* View Mode Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1 flex">
                        <button
                            onClick={() => setViewMode("slideshow")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                                viewMode === "slideshow"
                                    ? "bg-orange-500 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <SquarePlay className="w-4 h-4" />
                            Slideshow
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                                viewMode === "grid"
                                    ? "bg-orange-500 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Grid3X3 className="w-4 h-4" />
                            Grid View
                        </button>
                    </div>
                </div>

                {/* Compact 3D Slideshow View */}
                {viewMode === "slideshow" && (
                    <div className="relative">
                        <div className="flex items-center justify-between gap-4 mb-8">
                            {/* Previous Button - Outside */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>

                            {/* Compact Slideshow Container */}
                            <div className="relative h-[400px] flex-1">
                                <AnimatePresence mode="wait">
                                    {galleries.map(
                                        (gallery, index) =>
                                            index === currentSlide && (
                                                <motion.div
                                                    key={gallery.id}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.9,
                                                        x: 100,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        x: 0,
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 100,
                                                            damping: 20,
                                                        },
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        scale: 0.9,
                                                        x: -100,
                                                    }}
                                                    className="absolute inset-0 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedGallery(index);
                                                        setCurrentImageIndex(0);
                                                    }}
                                                >
                                                    <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden h-full hover:bg-white/15 transition-all duration-300">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute inset-0">
                                                                <Image
                                                                    src={
                                                                        gallery.thumbnail ||
                                                                        "/placeholder.svg"
                                                                    }
                                                                    alt={gallery.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                                {/* Gradient Overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                                {/* Content */}
                                                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                                    <h3 className="text-xl font-bold mb-1">
                                                                        {gallery.title}
                                                                    </h3>
                                                                    <p className="text-white/70 text-sm mb-3">
                                                                        {gallery.date}
                                                                    </p>
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="bg-orange-500/20 border border-orange-500/30 text-orange-300 px-2 py-1 rounded-full text-xs">
                                                                            {gallery.images.length} photos
                                                                        </span>
                                                                        <span className="text-white/60 text-xs">
                                                                            Click to view gallery
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )
                                    )}
                                </AnimatePresence>

                                {/* Slide Indicators */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                                    {galleries.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentSlide
                                                    ? "bg-orange-500 scale-125"
                                                    : "bg-white/30 hover:bg-white/50"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Next Button - Outside */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === "grid" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {galleries.map((gallery, index) => (
                            <motion.div
                                key={gallery.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                                onClick={() => {
                                    setSelectedGallery(index);
                                    setCurrentImageIndex(0);
                                }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                    {/* Thumbnail */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                            src={gallery.thumbnail || "/placeholder.svg"}
                                            alt={gallery.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Image Count Badge */}
                                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                                            {gallery.images.length}
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <span className="text-white text-sm font-medium">
                                                View Gallery
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-300 transition-colors">
                                            {gallery.title}
                                        </h3>
                                        <p className="text-white/60 text-xs">{gallery.date}</p>
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
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            >
                                <div className="p-4">
                                    {/* Enhanced Header */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-white truncate">
                                                {galleries[selectedGallery].title}
                                            </h3>
                                            <p className="text-white/60 text-sm">
                                                {galleries[selectedGallery].date} •{" "}
                                                <span className="text-orange-400">
                                                    {currentImageIndex + 1} of{" "}
                                                    {galleries[selectedGallery].images.length}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {/* Zoom Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsZoomed(!isZoomed)}
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all border border-white/20"
                                                title={isZoomed ? "Zoom Out" : "Zoom In"}
                                            >
                                                <ZoomIn className="w-4 h-4" />
                                            </motion.button>

                                            {/* Download Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={downloadImage}
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all border border-white/20"
                                                title="Download Image"
                                            >
                                                <Download className="w-4 h-4" />
                                            </motion.button>

                                            {/* Close Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05, rotate: 90 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedGallery(null)}
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all border border-white/20"
                                            >
                                                <X className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Enhanced Main Image */}
                                    <div className="relative mb-4">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 ${
                                                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                                            }`}
                                            onClick={() => setIsZoomed(!isZoomed)}
                                        >
                                            <Image
                                                src={
                                                    galleries[selectedGallery].images[currentImageIndex] ||
                                                    "/placeholder.svg"
                                                }
                                                alt={`${galleries[selectedGallery].title} - Photo ${
                                                    currentImageIndex + 1
                                                }`}
                                                width={800}
                                                height={600}
                                                className={`w-full transition-all duration-300 ${
                                                    isZoomed
                                                        ? "h-auto max-h-[60vh] object-contain"
                                                        : "h-[400px] object-cover"
                                                }`}
                                            />
                                        </motion.div>

                                        {/* Enhanced Navigation Buttons */}
                                        {galleries[selectedGallery].images.length > 1 && (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={prevImage}
                                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-xl transition-all border border-white/20 shadow-lg"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: 2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={nextImage}
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-xl transition-all border border-white/20 shadow-lg"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            </>
                                        )}
                                    </div>

                                    {/* Enhanced Thumbnail Strip */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex space-x-2 overflow-x-auto pb-2"
                                    >
                                        {galleries[selectedGallery].images.map((image, index) => (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all shadow-md ${
                                                    currentImageIndex === index
                                                        ? "border-orange-500 scale-105 shadow-orange-500/25"
                                                        : "border-white/20 hover:border-white/40"
                                                }`}
                                            >
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    width={64}
                                                    height={48}
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
