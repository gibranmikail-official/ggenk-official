"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "alphaworks.id",
            title: "Beyond 9 to 5",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Yudha-Rizky.jpg",
            testimonial:
                "GGENK berhasil bikin Discord server yang sangat keren untuk komunitas freelance kami! Sistemnya rapi, bot-nya responsive, dan member jadi lebih aktif. Highly recommended! Proses pengerjaan cepat dan komunikasi sangat baik.",
        },
        {
            id: 2,
            name: "Abun Sungkar (buN)",
            title: "Bun's Ninja",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Abun-Sungkar.jpg",
            testimonial:
                "Gokil! Server gue sekarang keliatan rapi, clean, dan enak dipakai. Role, channel, sampe automod semuanya jelas. Member jadi betah nongkrong — gue tinggal nikmatin aja, nggak perlu pusing setting-setting lagi.",
        },
        {
            id: 3,
            name: "Calista Arum (Aca)",
            title: "Aca-demy",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Callista-Arum.jpg",
            testimonial:
                "Dari awal proses sampe jadi, semuanya dijelasin satu-satu dan super sabar. Fitur belajarnya dibikin terstruktur, ada kategori, ada bot, ada sistem role. Jadi lebih profesional dan gampang dipakai member.",
        },
        {
            id: 4,
            name: "CaptSiren",
            title: "Indo Sky",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/CaptSiren.png",
            testimonial:
                "Bhaappp!! Ini seriuss server gwe jadi sebagus inii?? Jujurr jadi enak di pandang dan bnyk fitur, tiada dua GGENK selalu di hati, dan di ampela",
        },
        {
            id: 5,
            name: "Yummy Tails",
            title: "Quackers",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Yummy.jpeg",
            testimonial:
                "Sat Set No Debat (Paling Cepat dan Best!). Gila, hasilnya literally sat set sat set! Anti-ribet, gak pake mikir keras. Plus point-nya? Effort-ku nol, tapi hasilnya mantul abis. Padahal cuma ngirim - ngirim video TikTok seamless aja langsung jadi, mantulityyyyy!",
        },
        {
            id: 6,
            name: "Rhyz",
            title: "Nimbus Bobax",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/rhyz.png",
            testimonial:
                "Terimakasih bang, discordnya jadi tertata rapih dan termanage dengan baik. Easy look and easy to navigate untuk community. 100% recommended",
        },
        {
            id: 7,
            name: "WEMZ",
            title: "Interbond",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Wemz.png",
            testimonial:
                "masprodhitee server devnya gacor banget responsif, botnya useful, layoutnya juga simple tapi mudah dipahamin buat pemula, navigasinya juga terarah banget dan menyesuaikan user, pokonya gacorrr server developernya🫡🫡",
        },
        {
            id: 8,
            name: "Juan Herman",
            title: "JUCROD",
            service: "Discord Server Development",
            rating: 5,
            avatar: "/testi-pp/Juan-Herman.jpg",
            testimonial:
                "Mantap! Server JUCROD sekarang jauh lebih tertata, ringan, dan keliatan ‘hidup’. Event, announcement, sampai sistem leveling dibuat otomatis. Mudah dikelola, tinggal jalanin komunitasnya aja. Recommended!",
        },
        {
            id: 9,
            name: "Anggana G.",
            title: "PT BFS Bintang Lima",
            service: "Logo Design",
            rating: 5,
            avatar: "/testi-pp/Anggana.png",
            testimonial:
                "Logo yang dihasilkan sangat sesuai dengan visi brand kami. Simpel, berkarakter, dan terlihat profesional. Sangat direkomendasikan!",
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
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    // Auto play carousel - bergerak berdasarkan cardsPerView
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + cardsPerView;
                // Jika sudah mencapai akhir, kembali ke awal
                if (nextIndex >= testimonials.length) {
                    return 0;
                }
                return nextIndex;
            });
        }, 4000); // Ganti slide setiap 4 detik

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, testimonials.length, cardsPerView]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + cardsPerView;
            // Jika sudah mencapai akhir, kembali ke awal
            if (nextIndex >= testimonials.length) {
                return 0;
            }
            return nextIndex;
        });
        // Reset auto play timer ketika manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => {
            const prevIndexNew = prevIndex - cardsPerView;
            // Jika sudah di awal, pindah ke akhir
            if (prevIndexNew < 0) {
                // Cari indeks terakhir yang valid
                let lastValidIndex = testimonials.length - cardsPerView;
                // Pastikan tidak negatif
                while (lastValidIndex < 0 && lastValidIndex + cardsPerView < testimonials.length) {
                    lastValidIndex += cardsPerView;
                }
                return Math.max(0, lastValidIndex);
            }
            return prevIndexNew;
        });
        // Reset auto play timer ketika manual navigation
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToSlide = (index: number) => {
        // Untuk dots, kita akan menuju ke indeks yang merupakan kelipatan dari cardsPerView
        const targetIndex = Math.floor(index / cardsPerView) * cardsPerView;
        setDirection(targetIndex > currentIndex ? 1 : -1);
        setCurrentIndex(targetIndex);
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

    // Hitung jumlah halaman untuk dots
    const totalPages = Math.ceil(testimonials.length / cardsPerView);
    const currentPage = Math.floor(currentIndex / cardsPerView);

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
                                        scale: { duration: 0.3 },
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

                        {/* Dots Indicator - Sekarang berdasarkan halaman */}
                        <div className="flex justify-center space-x-3 mt-8">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index * cardsPerView)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentPage
                                            ? "bg-orange-500 scale-125 shadow-lg shadow-orange-500/50"
                                            : "bg-white/30 hover:bg-white/50 hover:scale-110"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Current Position Indicator */}
                        <div className="text-center mt-4">
                            <span className="text-white/60 text-sm">
                                Halaman {currentPage + 1} dari {totalPages}
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
