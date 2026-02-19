import "./globals.css";
// We import Google Fonts via the Next.js optimization tool
import { Playfair_Display, Lato } from 'next/font/google';
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site"; // Import site configuration for dynamic data
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
  metadataBase: new URL(siteConfig.url || "http://localhost:3000"), // Use dynamic siteConfig.url
  title: {
    default: `${siteConfig.name} | Best Bakery in Burdwan`,
    template: "%s | %s" // Use both site name and template
  },
  description: "Order premium custom cakes, bento cakes, and gift hampers in Burdwan (Bardhaman), West Bengal. Freshly baked, organic ingredients, and home delivery available.",
  keywords: [
    "Bakery in Burdwan", 
    "Cake delivery Burdwan", 
    "Best birthday cakes Bardhaman", 
    "Custom cakes West Bengal", 
    `${siteConfig.name} bakery`, // Dynamic brand keyword
    "Bento cakes Burdwan"
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | Artisan Bakery in Burdwan`,
    description: "Premium cakes and pastries in Bardhaman. Order on WhatsApp!",
    url: siteConfig.url,
    siteName: siteConfig.name,
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