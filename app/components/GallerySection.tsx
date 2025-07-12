"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
    const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleries = [
        {
            id: 1,
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
            id: 2,
            title: "Berkala Coffee - Ampera",
            date: "15 Juni 2025",
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
            id: 3,
            title: "Warkop Disko Agam - Kemang",
            date: "1 Juni 2025",
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
            id: 4,
            title: "Soft Launching Beyond 9 to 5",
            date: "1 Juni 2025",
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
            date: "3 Mei 2025",
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
            id: 6,
            title: "Bukber H-1 Lebaran",
            date: "30 Maret 2025",
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
    ];

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
                    <p className="text-xl text-white/80">
                        Momen-momen seru ketika kumpul bareng di dunia nyata
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleries.map((gallery, index) => (
                        <motion.div
                            key={gallery.id}
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
                </div>

                {/* Gallery Modal */}
                <AnimatePresence>
                    {selectedGallery !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedGallery(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                            >
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {galleries[selectedGallery].title}
                                            </h3>
                                            <p className="text-white/60">
                                                {galleries[selectedGallery].date} •{" "}
                                                {galleries[selectedGallery].images.length} photos
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedGallery(null)}
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Main Image */}
                                    <div className="relative mb-6">
                                        <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
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
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Navigation Buttons */}
                                        {galleries[selectedGallery].images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                                            {currentImageIndex + 1} /{" "}
                                            {galleries[selectedGallery].images.length}
                                        </div>
                                    </div>

                                    {/* Thumbnail Strip */}
                                    <div className="flex space-x-2 overflow-x-auto pb-2">
                                        {galleries[selectedGallery].images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                                    currentImageIndex === index
                                                        ? "border-orange-500"
                                                        : "border-white/20 hover:border-white/40"
                                                }`}
                                            >
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    width={80}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
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
