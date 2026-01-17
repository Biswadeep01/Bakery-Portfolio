import "./globals.css";
// We import Google Fonts via the Next.js optimization tool
import { Playfair_Display, Lato } from 'next/font/google';
import JsonLd from "@/components/JsonLd";
import BootstrapClient from "@/components/BootstrapClient"; // We will create this next
import { Suspense } from "react";
import Loading from "./loading";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700'] 
});

const lato = Lato({ 
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '700'] 
});

export const metadata = {
  metadataBase: new URL('https://www.serasoven.in'), // Replace with your actual domain
  title: {
    default: "Layer Bites | Best Bakery in Burdwan",
    template: "%s | Layer Bites Bardhaman"
  },
  description: "Order premium custom cakes, bento cakes, and gift hampers in Burdwan (Bardhaman), West Bengal. Freshly baked, organic ingredients, and home delivery available.",
  keywords: [
    "Bakery in Burdwan", 
    "Cake delivery Burdwan", 
    "Best birthday cakes Bardhaman", 
    "Custom cakes West Bengal", 
    "Layer Bites",
    "Bento cakes Burdwan"
  ],
  authors: [{ name: "Layer Bites" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Layer Bites | Artisan Bakery in Burdwan",
    description: "Premium cakes and pastries in Bardhaman. Order on WhatsApp!",
    url: 'https://www.serasoven.in',
    siteName: "Layer Bites",
    images: [
      {
        url: '/og-image.jpg', // You should add a nice banner image in public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <JsonLd />
        <Suspense fallback={<Loading />}>
           {children}
        </Suspense>
        <BootstrapClient />
      </body>
    </html>
  );
}