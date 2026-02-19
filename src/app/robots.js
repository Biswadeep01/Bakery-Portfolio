import { siteConfig } from "@/config/site";

export default function robots() {
  const baseUrl = siteConfig.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: Block private admin folders if you had them
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}