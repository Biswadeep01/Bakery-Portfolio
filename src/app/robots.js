export default function robots() {
  const baseUrl = 'https://www.layerbites.in'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: Block private admin folders if you had them
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}