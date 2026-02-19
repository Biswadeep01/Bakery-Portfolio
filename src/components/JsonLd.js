import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": siteConfig.name,
    "image": [
      `${siteConfig.link}/android-chrome-512x512.png` 
    ],
    "@id": siteConfig.link,
    "url": siteConfig.link,
    "telephone": siteConfig.contact.phone,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address, // Your specific street
      "addressLocality": "Burdwan",
      "addressRegion": "West Bengal",
      "postalCode": "713101", // Standard Burdwan Pin Code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": 23.24109298364691,
      "longitude": 87.87019848805195
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      `${siteConfig.social.facebook}`,
      `${siteConfig.social.instagram}`
    ],
    "servesCuisine": "Bakery, Desserts, Custom Cakes"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}