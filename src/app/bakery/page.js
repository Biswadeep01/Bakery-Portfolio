"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
const CakesClient = dynamic(() => import("@/components/cakesClient"), {
  ssr: false,
});
import { bentoCakes } from "@/data/cakeData";
import { fetchCakeImages } from "@/lib/imageUtils";
import { useEffect } from "react";

export default function CakesPage() {
  const [bentoWithImages, setBentoWithImages] = useState([]);

  const handleGetCakes = async () => {
    try {
      const cakesWithImages = await fetchCakeImages(bentoCakes);
      setBentoWithImages(cakesWithImages);
    } catch {
      console.log("Error fetching cake images");
    }
  };

  useEffect(() => {
    handleGetCakes();
  }, []);

  return (
    <main>
      <Navbar />

      {/* Static Header */}
      <section className="pt-5 mt-5 text-center">
        <div className="container pt-5 reveal">
          <h1
            className="display-4 fw-bold text-red"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Cake Collection
          </h1>
          <p className="lead text-muted">Choose your category below</p>
        </div>
      </section>

      {/* 2. Pass data to the Client Component */}
      <CakesClient bentoCakes={bentoWithImages} />

      <Footer />
      <WhatsAppBtn />
    </main>
  );
}