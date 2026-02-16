export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Layer Bites",
    "image": [
      "https://layerbites.com/android-chrome-512x512.png" 
    ],
    "@id": "https://layerbites.com",
    "url": "https://layerbites.com",
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
      "https://www.facebook.com/share/1CzpGvNQHf/?mibextid=wwXIfr",
      "https://www.instagram.com/lovebites167?igsh=MXJxMnp2ejNkODA2cA%3D%3D&utm_source=qr"
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