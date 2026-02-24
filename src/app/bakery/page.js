"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
const CakesClient = dynamic(() => import("@/components/cakesClient"), {
  ssr: false,
});

// Import all the new category data
import { 
  cakeCategories, 
  bentoCakes, 
  premiumBentoCakes,
  halfPoundCakes, 
  normalCakes, 
  premiumCakes,
  kidsCakes,
  blackForestCakes,
  whiteForestCakes,
  under499Cakes,
  under599Cakes 
} from "@/data/cakeData";
import { fetchCakeImages } from "@/lib/imageUtils";

export default function CakesPage() {
  // 1. State to hold all cakes mapped by their category ID
  const [allCakesData, setAllCakesData] = useState({
    bento: [],
    halfPound: [],
    normal: [],
    premium: [],
    kids: [],
    blackForest: [],
    whiteForest: [],
    premiumBento: [],
    under499: [],
    under599: []
  });
  
  // Optional but recommended: A loading state so the UI doesn't look broken while fetching
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch all categories simultaneously
  const handleGetCakes = async () => {
    setIsLoading(true);
    try {
      // Promise.all fetches all 4 categories at the exact same time for speed
      const [bento, premiumBento, halfPound, normal, premium, kids, blackForest, whiteForest, under499, under599] = await Promise.all([
        fetchCakeImages(bentoCakes),
        fetchCakeImages(premiumBentoCakes),
        fetchCakeImages(halfPoundCakes),
        fetchCakeImages(normalCakes),
        fetchCakeImages(premiumCakes),
        fetchCakeImages(kidsCakes),
        fetchCakeImages(blackForestCakes),
        fetchCakeImages(whiteForestCakes),
        fetchCakeImages(under499Cakes),
        fetchCakeImages(under599Cakes)
      ]);
      
      // Store them in the single object state
      setAllCakesData({
        bento: bento,
        premiumBento: premiumBento,
        halfPound: halfPound,
        normal: normal,
        premium: premium,
        kids: kids,
        blackForest: blackForest,
        whiteForest: whiteForest,
        under499: under499,
        under599: under599
      });
    } catch (error) {
      console.error("Error fetching cake images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetCakes();
  }, []);

  return (
    <main style={{ backgroundColor: '#f9f5e8', minHeight: '100vh' }}>
      <Navbar />

      {/* Static Header */}
      <section className="pt-5 mt-5 text-center">
        {/* REMOVED 'reveal' AND ADDED 'header-animate' */}
        <div className="container pt-5 header-animate"> 
          <h1
            className="display-4 fw-bold text-red"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Cake Collection
          </h1>
          <p className="lead text-muted">Choose your category below</p>
        </div>
      </section>

      {/* Premium Loading Indicator */}
      {isLoading && (
        <div className="container text-center py-5 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="loader-container position-relative d-flex justify-content-center align-items-center mb-4">
            <div className="spinner-ring position-absolute"></div>
            <i className="fas fa-birthday-cake text-gold pulsing-cake z-index-1"></i>
          </div>

          {/* Elegant Loading Text */}
          <h3 className="fw-bold text-red loading-text mb-1" style={{fontFamily: 'var(--font-heading)'}}>
            Warming the ovens...
          </h3>
          <p className="text-muted small text-uppercase mb-0" style={{ letterSpacing: '2px' }}>
            Preparing fresh cakes
          </p>
        </div>
      )}

      {/* 3. Pass the categories array and the fetched images object down */}
      {!isLoading && (
        <CakesClient 
          categories={cakeCategories} 
          allCakes={allCakesData} 
        />
      )}
      <Footer />
      <WhatsAppBtn />
      <style jsx>{`
        .text-red { color: #740311; }
        .text-gold { color: #edcd6c; }

        /* The Container */
        .loader-container {
            width: 100px;
            height: 100px;
        }

        /* The Spinning Ring */
        .spinner-ring {
            width: 100%;
            height: 100%;
            border: 3px solid rgba(237, 205, 108, 0.2);
            border-top: 3px solid #740311;
            border-bottom: 3px solid #edcd6c;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
        }

        /* The Pulsing Icon */
        .pulsing-cake {
            font-size: 2rem;
            animation: pulse 1.5s ease-in-out infinite;
            filter: drop-shadow(0 5px 10px rgba(237, 205, 108, 0.3));
        }

        /* The Fading Text */
        .loading-text {
            animation: textFade 1.5s ease-in-out infinite;
        }

        /* Keyframes */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
            0% { transform: scale(0.9); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(0.9); opacity: 0.7; }
        }
        @keyframes textFade {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
        }
        .header-animate {
            animation: fadeDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .text-gold { color: #edcd6c; }
      `}</style>
    </main>
  );
}