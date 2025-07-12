"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Yudha Rizky",
            avatar: "/testimoni/pp.png",
            service: "Discord Server Development",
            rating: 5,
            testimonial:
                "GGENK berhasil bikin Discord server yang sangat keren untuk komunitas freelance kami! Sistemnya rapi, bot-nya responsive, dan member jadi lebih aktif. Highly recommended!",
        },
        {
            id: 2,
            name: "Sari Indah",
            avatar: "/testimoni/pp.png",
            service: "Custom Emoji/Sticker",
            rating: 5,
            testimonial:
                "Emoji custom yang dibuat GGENK sangat lucu dan unik! Sekarang chat di Discord jadi lebih seru dan ekspresif. Kualitas gambarnya juga HD banget.",
        },
        {
            id: 3,
            name: "Budi Santoso",
            avatar: "/testimoni/pp.png",
            service: "Jasa Joki Valorant",
            rating: 5,
            testimonial:
                "Dari Silver langsung naik ke Diamond dalam seminggu! Prosesnya aman, komunikasi lancar, dan hasilnya memuaskan. Thanks GGENK!",
        },
        {
            id: 4,
            name: "Maya Putri",
            avatar: "/testimoni/pp.png",
            service: "Video Editing",
            rating: 4,
            testimonial:
                "Video editing untuk konten YouTube channel aku jadi keren banget! Transisinya smooth, color grading-nya pas, dan sesuai dengan brief yang aku kasih.",
        },
        {
            id: 5,
            name: "Doni Pratama",
            avatar: "/testimoni/pp.png",
            service: "Jasa Joki Genshin Impact",
            rating: 5,
            testimonial:
                "AR 60 dalam waktu singkat! GGENK juga bantuin farming material dan weapon. Akun aman, progress cepat, pelayanan memuaskan!",
        },
        {
            id: 6,
            name: "Lisa Anggraini",
            avatar: "/testimoni/pp.png",
            service: "Motion Design",
            rating: 5,
            testimonial:
                "Logo animation dan motion graphics untuk brand aku dibuat dengan sangat profesional. Hasil akhirnya exceed expectation! Pasti bakal order lagi.",
        },
        {
            id: 7,
            name: "Rizky Maulana",
            avatar: "/testimoni/pp.png",
            service: "Jasa Joki Valorant",
            rating: 5,
            testimonial:
                "Rankku stuck di Gold berbulan-bulan, tapi setelah pakai jasa ini langsung naik ke Diamond! Cepat, aman, dan komunikatif banget. Bener-bener worth it!",
        },
        {
            id: 8,
            name: "Fahri Ramadhan",
            avatar: "/testimoni/pp.png",
            service: "Jasa Joki Genshin Impact",
            rating: 5,
            testimonial:
                "Mau farming artifact tapi nggak punya waktu. Untung ada jasa ini, akun aman, pelayanan ramah, dan progressnya cepet banget. Recommended banget!",
        },
        {
            id: 9,
            name: "Dewi Anggraini",
            avatar: "/testimoni/pp.png",
            service: "Video Editing",
            rating: 5,
            testimonial:
                "Editing-nya bener-bener keren, hasilnya sesuai ekspektasi! Transisi halus, efeknya pas, dan audio mixing-nya juga clean. Channel YouTube-ku jadi makin pro!",
        },
        {
            id: 10,
            name: "Alvin Kurniawan",
            avatar: "/testimoni/pp.png",
            service: "Motion Design",
            rating: 5,
            testimonial:
                "Order animasi buat brand campaign, hasilnya clean dan profesional banget. Brief langsung dipahami, dan revisi cepat. Udah pasti bakal repeat order!",
        },
        {
            id: 11,
            name: "Putri Aulia",
            avatar: "/testimoni/pp.png",
            service: "Custom Sticker/Emoji",
            rating: 5,
            testimonial:
                "Stiker-nya lucu-lucu dan ekspresif banget! Jadi makin seru chatting pakai stiker buatan sendiri. Fast response juga. Makasih banyak!",
        },
        {
            id: 12,
            name: "Dimas Aditya",
            avatar: "/testimoni/pp.png",
            service: "Custom Sticker/Emoji",
            rating: 5,
            testimonial:
                "Logo buat brand personal aku dibikin modern dan unik. Sekalian minta versi sticker-nya juga, dan hasilnya keren parah! Desainnya bener-bener ngangkat image brand-ku.",
        },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
            />
        ));
    };

    return (
        <section id="testimonial" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="group relative"
                        >
                            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/30">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-purple-500/0 group-hover:from-orange-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="relative">
                                            <Image
                                                src={testimonial.avatar || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full border-2 border-white/20 group-hover:border-orange-500/50 transition-colors"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold group-hover:text-orange-300 transition-colors">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-white/60 text-sm">{testimonial.service}</p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-4">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                                        "{testimonial.testimonial}"
                                    </blockquote>
                                </div>

                                {/* Hover Border Animation */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-transparent to-purple-500 p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-transparent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
