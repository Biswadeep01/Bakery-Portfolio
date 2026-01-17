export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Sera's Oven",
    "image": [
      "https://www.serasoven.in/android-chrome-512x512.png" 
    ],
    "@id": "https://www.serasoven.in",
    "url": "https://www.serasoven.in",
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Baker Street, Golden Lane", // Your specific street
      "addressLocality": "Burdwan",
      "addressRegion": "West Bengal",
      "postalCode": "713101", // Standard Burdwan Pin Code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2324,  // Approximate Lat for Burdwan
      "longitude": 87.8615  // Approximate Long for Burdwan
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
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage"
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