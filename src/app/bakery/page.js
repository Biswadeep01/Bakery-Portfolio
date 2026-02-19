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
  halfPoundCakes, 
  normalCakes, 
  premiumCakes,
  kidsCakes,
  blackForestCakes 
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
    blackForest: []
  });
  
  // Optional but recommended: A loading state so the UI doesn't look broken while fetching
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch all categories simultaneously
  const handleGetCakes = async () => {
    setIsLoading(true);
    try {
      // Promise.all fetches all 4 categories at the exact same time for speed
      const [bento, halfPound, normal, premium, kids, blackForest] = await Promise.all([
        fetchCakeImages(bentoCakes),
        fetchCakeImages(halfPoundCakes),
        fetchCakeImages(normalCakes),
        fetchCakeImages(premiumCakes),
        fetchCakeImages(kidsCakes),
        fetchCakeImages(blackForestCakes)
      ]);
      
      // Store them in the single object state
      setAllCakesData({
        bento: bento,
        halfPound: halfPound,
        normal: normal,
        premium: premium,
        kids: kids,
        blackForest: blackForest
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

      {/* Loading Indicator */}
      {isLoading && (
        <div className="container text-center py-5">
            <i className="fas fa-circle-notch fa-spin fs-2 text-gold mb-3"></i>
            <p className="text-muted">Loading fresh cakes...</p>
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

      {/* Add this right before </main> */}
      <style jsx>{`
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