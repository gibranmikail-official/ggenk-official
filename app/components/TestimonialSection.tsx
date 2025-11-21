"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Yudha Rizky",
            title: "Beyond 9 to 5",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "GGENK berhasil bikin Discord server yang sangat keren untuk komunitas freelance kami! Sistemnya rapi, bot-nya responsive, dan member jadi lebih aktif. Highly recommended! Proses pengerjaan cepat dan komunikasi sangat baik.",
        },
        {
            id: 2,
            name: "Sari Indah",
            title: "Creative Design Hub",
            service: "Custom Emoji/Sticker",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Emoji custom yang dibuat GGENK sangat lucu dan unik! Sekarang chat di Discord jadi lebih seru dan ekspresif. Kualitas gambarnya juga HD banget. Desainnya sesuai dengan karakter brand kami.",
        },
        {
            id: 3,
            name: "Budi Santoso",
            title: "Valorant Indonesia",
            service: "Jasa Joki Valorant",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Dari Silver langsung naik ke Diamond dalam seminggu! Prosesnya aman, komunikasi lancar, dan hasilnya memuaskan. Thanks GGENK! Player yang ditugaskan sangat profesional dan memahami game dengan baik.",
        },
        {
            id: 4,
            name: "Maya Putri",
            title: "Content Creator",
            service: "Video Editing",
            rating: 4,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Video editing untuk konten YouTube channel aku jadi keren banget! Transisinya smooth, color grading-nya pas, dan sesuai dengan brief yang aku kasih. Proses revisi juga cepat dan memuaskan.",
        },
        {
            id: 5,
            name: "Doni Pratama",
            title: "Genshin Impact Community",
            service: "Jasa Joki Genshin Impact",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "AR 60 dalam waktu singkat! GGENK juga bantuin farming material dan weapon. Akun aman, progress cepat, pelayanan memuaskan! Sangat recommended untuk yang sibuk tapi ingin progress cepat.",
        },
        {
            id: 6,
            name: "Lisa Anggraini",
            title: "Brand Owner",
            service: "Motion Design",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Logo animation dan motion graphics untuk brand aku dibuat dengan sangat profesional. Hasil akhirnya exceed expectation! Pasti bakal order lagi. Tim kreatifnya sangat memahami kebutuhan client.",
        },
        {
            id: 7,
            name: "Rizky Maulana",
            title: "Gaming Enthusiast",
            service: "Jasa Joki Valorant",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Rankku stuck di Gold berbulan-bulan, tapi setelah pakai jasa ini langsung naik ke Diamond! Cepat, aman, dan komunikatif banget. Bener-bener worth it! Laporan progress diberikan secara rutin.",
        },
        {
            id: 8,
            name: "Fahri Ramadhan",
            title: "Genshin Impact Player",
            service: "Jasa Joki Genshin Impact",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Mau farming artifact tapi nggak punya waktu. Untung ada jasa ini, akun aman, pelayanan ramah, dan progressnya cepet banget. Recommended banget! Hasil artifactnya juga bagus-bagus.",
        },
        {
            id: 9,
            name: "Dewi Anggraini",
            title: "YouTuber",
            service: "Video Editing",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Editing-nya bener-bener keren, hasilnya sesuai ekspektasi! Transisi halus, efeknya pas, dan audio mixing-nya juga clean. Channel YouTube-ku jadi makin pro! Engagement meningkat signifikan.",
        },
        {
            id: 10,
            name: "Alvin Kurniawan",
            title: "Marketing Manager",
            service: "Motion Design",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Order animasi buat brand campaign, hasilnya clean dan profesional banget. Brief langsung dipahami, dan revisi cepat. Udah pasti bakal repeat order! Kualitas premium dengan harga terjangkau.",
        },
        {
            id: 11,
            name: "Putri Aulia",
            title: "Community Manager",
            service: "Custom Sticker/Emoji",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Stiker-nya lucu-lucu dan ekspresif banget! Jadi makin seru chatting pakai stiker buatan sendiri. Fast response juga. Makasih banyak! Desainnya original dan tidak ada duplikat.",
        },
        {
            id: 12,
            name: "Dimas Aditya",
            title: "Personal Brand",
            service: "Custom Sticker/Emoji",
            rating: 5,
            avatar: "/testimoni/pp.png",
            testimonial:
                "Logo buat brand personal aku dibikin modern dan unik. Sekalian minta versi sticker-nya juga, dan hasilnya keren parah! Desainnya bener-bener ngangkat image brand-ku. Very satisfied!",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [cardsPerView, setCardsPerView] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Responsive cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    // Auto play carousel - bergerak satu-satu
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Ganti slide setiap 4 detik

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, testimonials.length]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        // Reset auto play timer ketika manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        // Reset auto play timer ketika manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        // Reset auto play timer ketika manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    // Pause auto play on hover
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
            />
        ));
    };

    // Get visible testimonials based on current index and cards per view
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < cardsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section id="testimonial" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-1 mt-5"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Clients
                        </span>{" "}
                        Say
                    </h2>
                    <p className="text-xl text-white/80">
                        Testimoni dari mereka yang sudah merasakan layanan GGENK
                    </p>
                </motion.div>

                {/* Main Container dengan Tombol di Samping */}
                <div 
                    className="relative flex items-center gap-6"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Previous Button - Left Side */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevSlide}
                        className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    {/* Carousel Container */}
                    <div className="flex-1 overflow-hidden">
                        <div ref={carouselRef} className="overflow-hidden relative">
                            <AnimatePresence mode="wait" custom={direction} initial={false}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(offset.x, velocity.x);

                                        if (swipe < -swipeConfidenceThreshold) {
                                            nextSlide();
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            prevSlide();
                                        }
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7"
                                >
                                    {visibleTestimonials.map((testimonial, index) => (
                                        <motion.div
                                            key={`${testimonial.id}-${currentIndex}-${index}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            whileHover={{
                                                scale: 1.02,
                                                y: -5,
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group relative"
                                        >
                                            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 h-full transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 min-h-[420px] flex flex-col">
                                                {/* Glow Effect */}
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                                                {/* Content - Gambar di Tengah */}
                                                <div className="relative z-10 flex flex-col flex-1 items-center text-center">
                                                    {/* Avatar di Tengah */}
                                                    <div className="relative mb-4">
                                                        <div className="relative">
                                                            <Image
                                                                src={testimonial.avatar || "/placeholder.svg"}
                                                                alt={testimonial.name}
                                                                width={70}
                                                                height={70}
                                                                className="rounded-full border-2 border-white/20 group-hover:border-orange-500/50 transition-colors duration-300 mx-auto"
                                                            />
                                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                        </div>
                                                    </div>

                                                    {/* Nama, Gelar/Komunitas, dan Service */}
                                                    <div className="mb-4 w-full">
                                                        <h4 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors duration-300 mb-1">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-orange-400 text-sm font-medium mb-1">
                                                            {testimonial.title}
                                                        </p>
                                                        <p className="text-white/60 text-xs">
                                                            {testimonial.service}
                                                        </p>
                                                    </div>

                                                    {/* Rating di Tengah */}
                                                    <div className="flex items-center justify-center space-x-1 mb-4">
                                                        {renderStars(testimonial.rating)}
                                                        <span className="text-white/60 text-xs ml-2">
                                                            ({testimonial.rating}.0)
                                                        </span>
                                                    </div>

                                                    {/* Testimonial Text */}
                                                    <blockquote className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300 flex-1 text-sm line-clamp-5">
                                                        "{testimonial.testimonial}"
                                                    </blockquote>
                                                </div>

                                                {/* Hover Border Animation */}
                                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 p-[2px]">
                                                        <div className="w-full h-full rounded-2xl bg-transparent" />
                                                    </div>
                                                </div>

                                                {/* Corner Accents */}
                                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile Navigation Buttons */}
                        <div className="flex md:hidden justify-center space-x-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center space-x-3 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                        ? "bg-orange-500 scale-125 shadow-lg shadow-orange-500/50" 
                                        : "bg-white/30 hover:bg-white/50 hover:scale-110"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Current Position Indicator */}
                        <div className="text-center mt-4">
                            <span className="text-white/60 text-sm">
                                {currentIndex + 1} / {testimonials.length}
                            </span>
                        </div>
                    </div>

                    {/* Next Button - Right Side */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextSlide}
                        className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/20 flex-shrink-0"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}