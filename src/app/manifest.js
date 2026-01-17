export default function manifest() {
  return {
    name: "Layer Bites | Artisan Bakery",
    short_name: "Layer Bites",
    description: "Experience the taste of luxury in every bite. Order custom cakes and pastries.",
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f5e8', // Your light cream color
    theme_color: '#740311',       // Your primary red brand color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}