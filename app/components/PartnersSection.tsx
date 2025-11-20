"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/marquee";

export default function PartnersSection() {
    const partnersData = [
        {
            name: "Beyond 9 To 5",
            logo: "/partners/B925.png",
        },
        {
            name: "Video Labs",
            logo: "/partners/VL.png",
        },
        {
            name: "Website Maker",
            logo: "/partners/WM.png",
        },
        {
            name: "Indo Sky",
            logo: "/partners/IS.png",
        },
        {
            name: "Nimbus Collective",
            logo: "/partners/NC.png",
        },
        {
            name: "Interbond",
            logo: "/partners/INTB.png",
        },
    ]

    return (
        <section id="partners" className="py-20">
            <div className=" text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl flex flex-col items-center mx-auto px-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                            GGENK{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                                Partnerships
                            </span>
                        </h2>

                        <p className="text-xl text-white/80 mb-12 leading-relaxed">
                            Kerja sama dengan berbagai partner untuk menghadirkan lebih banyak kesempatan, pengalaman seru, dan ruang berkembang bagi semua.
                        </p>
                    </div>
                    <Marquee items={partnersData} direction="right" speed={45} />
                </motion.div>
            </div>
        </section>
    )
}   