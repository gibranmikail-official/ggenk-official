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
            name: "Sky Intelligence Agency",
            logo: "/partners/SIA.png",
        },
        {
            name: "Nimbus Collective",
            logo: "/partners/NC.png",
        },
        {
            name: "Interbond",
            logo: "/partners/INTB.png",
        },
        {
            name: "3DEADESIGN",
            logo: "/partners/3DD.png",
        },
    ]

    return (
        <section id="partners" className="py-20">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl flex flex-col items-center mx-auto px-4">
                        
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-5">
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                                GGENK{" "}
                            </span>
                            Partnerships
                        </h2>

                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Kerja sama dengan berbagai partner untuk menghadirkan lebih banyak kesempatan, pengalaman seru, dan ruang berkembang bagi semua.
                        </p>
                    </div>
                    
                    {/* Marquee dengan direction "right" untuk slide kanan ke kiri */}
                    <div className="container mx-auto">
<Marquee 
                        items={partnersData} 
                        direction="right" 
                        speed={15} 
                    />
                    </div>
                    
                </motion.div>
            </div>
        </section>
    )
}