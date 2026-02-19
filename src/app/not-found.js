"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function NotFound() {
  return (
    <main className="page-wrapper">
      <Navbar />
      
      <section className="error-section d-flex align-items-center justify-content-center text-center">
        <div className="container reveal-animation">
            
            {/* Animated 404 Graphic */}
            <div className="error-visual mb-4">
                <span className="digit">4</span>
                <div className="cookie-container">
                    <i className="fas fa-cookie-bite text-gold rolling-cookie"></i>
                    {/* Crumbs */}
                    <i className="fas fa-circle crumb crumb-1"></i>
                    <i className="fas fa-circle crumb crumb-2"></i>
                    <i className="fas fa-circle crumb crumb-3"></i>
                </div>
                <span className="digit">4</span>
            </div>

            {/* Text Content */}
            <h1 className="display-4 fw-bold text-red mb-3" style={{fontFamily: 'var(--font-heading)'}}>
                Oops! This page is half-baked.
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
                We couldn't find the page you were looking for. It might have been moved, deleted, or somebody took a bite out of it!
            </p>

            {/* Action Buttons */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/" className="btn btn-gold btn-lg rounded-pill px-5 fw-bold shadow-sm hover-lift">
                    <i className="fas fa-home me-2"></i> Back to Oven
                </Link>
                <Link href="/bakery" className="btn btn-outline-danger btn-lg rounded-pill px-5 fw-bold hover-lift">
                    <i className="fas fa-cake me-2"></i> Explore Cakes
                </Link>
            </div>

        </div>
      </section>

      <Footer />
      <WhatsAppBtn />

      {/* --- Premium CSS Animations --- */}
      <style jsx>{`
        .page-wrapper {
            background-color: #f9f5e8;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .error-section {
            flex-grow: 1;
            padding-top: 120px; /* Account for fixed navbar */
            padding-bottom: 80px;
        }

        /* 404 Typography */
        .error-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: 10rem;
            font-weight: 900;
            color: #740311; /* Brand Red */
            font-family: var(--font-heading);
            line-height: 1;
        }

        /* The Animated Cookie */
        .cookie-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 140px;
        }

        .rolling-cookie {
            font-size: 8rem;
            animation: rollAndBounce 4s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
            color: #edcd6c; /* Brand Gold */
            text-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        @keyframes rollAndBounce {
            0% { transform: translateY(0) rotate(0deg); }
            20% { transform: translateY(-30px) rotate(45deg); }
            40% { transform: translateY(0) rotate(90deg); }
            60% { transform: translateY(-15px) rotate(135deg); }
            80% { transform: translateY(0) rotate(180deg); }
            100% { transform: translateY(0) rotate(180deg); }
        }

        /* Animated Crumbs */
        .crumb {
            position: absolute;
            color: #d4a742;
            font-size: 0.8rem;
            opacity: 0;
            animation: fallCrumbs 4s infinite;
        }
        .crumb-1 { bottom: 10px; right: 20px; animation-delay: 0.2s; }
        .crumb-2 { bottom: -10px; right: 40px; animation-delay: 0.4s; font-size: 0.5rem; }
        .crumb-3 { bottom: 20px; right: -10px; animation-delay: 0.6s; font-size: 0.6rem; }

        @keyframes fallCrumbs {
            0%, 40% { opacity: 0; transform: translateY(-10px); }
            50% { opacity: 1; transform: translateY(0); }
            70%, 100% { opacity: 0; transform: translateY(20px); }
        }

        /* Buttons & Utility */
        .text-red { color: #740311; }
        .text-gold { color: #edcd6c; }
        .btn-gold {
            background-color: #edcd6c;
            color: #740311;
            border: 2px solid #edcd6c;
            transition: all 0.3s ease;
        }
        .btn-gold:hover {
            background-color: transparent;
            color: #740311;
        }
        .btn-outline-danger {
            color: #740311;
            border-color: #740311;
        }
        .btn-outline-danger:hover {
            background-color: #740311;
            color: white;
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(116, 3, 17, 0.15) !important;
        }

        /* Entry Animation */
        .reveal-animation {
            animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes popIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .error-visual { font-size: 6rem; }
            .rolling-cookie { font-size: 5rem; }
            .cookie-container { width: 90px; height: 90px; }
            .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </main>
  );
}