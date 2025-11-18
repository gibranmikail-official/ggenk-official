import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GGENK Official",
    description:
        "Community yang cocok buat kamu yang suka main game bareng (mabar), ngobrol santai, dan melakukan banyak hal positif lainnya!",
    keywords: "gaming, community, discord, mabar, indonesia, ggenk",
    authors: [{ name: "GGENK" }],
    openGraph: {
        title: "GGENK Official",
        description: "Join komunitas terbaik di Indonesia!",
        type: "website",
        locale: "id_ID",
    },
    generator: "Gibran Mikail",
    icons: {
        icon: "/ggenk-logo.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={inter.className} suppressHydrationWarning>
                {children}<Loader />
            </body>
        </html>
    );
}
