import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Online Ordering Restaurant Website',
    description: 'Online Ordering Restaurant Website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="{inter.className}">
        <Notification/>
        <Navbar/>
            {children}
        <Footer/>
        </body>
        </html>
    )
}
