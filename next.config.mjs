/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  async headers() {
    return [
      {
        // This applies these security headers to every single page and route on your site
        source: '/(.*)',
        headers: [
          {
            // 1. Prevents Clickjacking
            // Stops other websites from putting your site in an <iframe> and tricking users into clicking things.
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            // 2. Prevents MIME-Sniffing
            // Stops browsers from trying to guess the file type, forcing them to strictly follow your server's instructions.
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // 3. Controls Referrer Information
            // Ensures you don't leak sensitive URL data (like user IDs or tokens) to external websites when linking out.
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // 4. Enforces HTTPS
            // Tells the browser to ONLY connect to your website via secure HTTPS for the next year.
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            // 5. Cross-Site Scripting (XSS) Protection
            // Stops pages from loading if the browser detects an XSS attack in the request.
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            // 6. Permissions Policy
            // Explicitly blocks your site from using the user's camera, microphone, or location, 
            // ensuring malicious scripts can't secretly access them either.
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
