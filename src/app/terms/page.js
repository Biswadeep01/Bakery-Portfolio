"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/config/site";

export default function TermsPage() {

  // Reveal animation logic
  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50; // Trigger slightly earlier for a smoother feel
        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal(); 
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <main className="page-wrapper">
      <Navbar />
      
      {/* --- HEADER --- */}
      <section className="pt-5 mt-5 pb-4 text-center">
        <div className="container pt-5 header-animate">
            <h1 className="display-4 fw-bold text-red mb-3" style={{fontFamily: 'var(--font-heading)'}}>
                Good to Know
            </h1>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
                Everything you need to know about our artisan cakes, delivery process, and store policies.
            </p>
        </div>
      </section>

      <div className="container pb-5">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                
                {/* --- 1. CAKE DESCRIPTION & CARE --- */}
                <div className="info-card border-0 shadow-sm p-4 p-md-5 mb-5 reveal bg-white">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-birthday-cake fs-3 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>Our Cakes & Care</h3>
                    </div>
                    {/* The ms-md-5 aligns the text perfectly under the heading, skipping the icon space */}
                    <div className="ms-md-5">
                        <div className="mb-4">
                            <h6 className="fw-bold small text-uppercase text-muted letter-spacing-1">The Ingredients</h6>
                            <p className="text-secondary" style={{lineHeight: '1.7'}}>We use only premium ingredients: Premium grade chocolate, high-protein flour, and farm-fresh dairy. We strictly do not use preservatives or premixes. All fruit compotes are made in-house.</p>
                        </div>

                        <div className="mb-4">
                            <h6 className="fw-bold small text-uppercase text-muted letter-spacing-1">Allergen Info</h6>
                            <p className="text-secondary" style={{lineHeight: '1.7'}}>Our kitchen processes nuts, dairy, and gluten. While we offer eggless options, we cannot guarantee a 100% trace-free environment for severe allergies.</p>
                        </div>

                        {/* Premium Callout Box */}
                        <div className="premium-callout mt-4">
                            <h6 className="fw-bold text-dark mb-2 d-flex align-items-center">
                                <i className="fas fa-temperature-low text-gold me-2"></i> Storage Instructions
                            </h6>
                            <ul className="mb-0 text-secondary ps-3" style={{lineHeight: '1.8'}}>
                                <li>Cream cakes must be stored in the refrigerator.</li>
                                <li>Remove from fridge <strong>30-45 minutes</strong> before cutting to allow the sponge to soften.</li>
                                <li>Consume within 48 hours for best taste.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- 2. DELIVERY INFORMATION --- */}
                <div className="info-card border-0 shadow-sm p-4 p-md-5 mb-5 reveal bg-white">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-truck fs-3 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>Delivery Information</h3>
                    </div>
                    
                    {/* FIXED: Text is pulled out of the flex row so it stacks beautifully */}
                    <div className="ms-md-5">
                        <p className="text-secondary mb-4" style={{lineHeight: '1.7'}}>
                            Delivery product might vary slightly from the image shown. Product is perishable therefore delivery will be attempted only once.
                        </p>

                        <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <h6 className="fw-bold text-dark">Coverage Area</h6>
                                <p className="text-secondary small" style={{lineHeight: '1.6'}}>We currently deliver within {siteConfig.contact.locality} Municipality limits and adjacent areas (up to 8km radius {siteConfig.contact.address}).</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-bold text-dark">Delivery Slots</h6>
                                <p className="text-secondary small" style={{lineHeight: '1.6'}}>
                                    <i className="fas fa-sun text-gold me-2 width-20"></i>Morning: 10:00 AM - 1:00 PM<br/>
                                    <i className="fas fa-moon text-gold me-2 width-20 mt-2"></i>Evening: 4:00 PM - 8:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Premium Alert Box */}
                        <div className="premium-alert d-flex align-items-start mt-2">
                            <i className="fas fa-exclamation-circle mt-1 me-3 fs-5"></i>
                            <div>
                                <strong className="d-block mb-1">Fragile Item Policy</strong>
                                <span className="small" style={{lineHeight: '1.6'}}>
                                    We recommend self-pickup for tiered cakes and 3D custom cakes. While we take utmost care, we are not liable for minor damages caused by road bumps during third-party transit.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. TERMS & CONDITIONS --- */}
                <div className="info-card border-0 shadow-sm p-4 p-md-5 reveal bg-white mb-5">
                    <div className="d-flex align-items-center mb-4">
                        <i className="fas fa-file-contract fs-3 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>Terms & Conditions</h3>
                    </div>

                    <div className="ms-md-5">
                        <ul className="list-unstyled custom-list mb-0">
                            <li className="mb-4">
                                <h6 className="fw-bold text-dark mb-2">Ordering Timeline</h6>
                                <p className="text-secondary small mb-0" style={{lineHeight: '1.6'}}>Orders must be placed at least <strong>24 hours</strong> in advance. For wedding cakes, we require 1 week notice.</p>
                            </li>
                            <li className="mb-4">
                                <h6 className="fw-bold text-dark mb-2">Payment Policy</h6>
                                <p className="text-secondary small mb-0" style={{lineHeight: '1.6'}}>A 50% deposit is mandatory to confirm the booking. The remaining balance is due upon delivery/pickup.</p>
                            </li>
                            <li className="mb-0">
                                <h6 className="fw-bold text-dark mb-2">Cancellations & Refunds</h6>
                                <p className="text-secondary small mb-0" style={{lineHeight: '1.6'}}>
                                    <span className="d-block mb-1"><i className="fas fa-circle ms-1 me-2" style={{fontSize: '6px', color: '#edcd6c'}}></i>Cancellations made 48+ hours prior: Full Refund.</span>
                                    <span className="d-block mb-1"><i className="fas fa-circle ms-1 me-2" style={{fontSize: '6px', color: '#edcd6c'}}></i>Cancellations made 24-48 hours prior: 50% Refund.</span>
                                    <span className="d-block"><i className="fas fa-circle ms-1 me-2" style={{fontSize: '6px', color: '#edcd6c'}}></i>Less than 24 hours: No Refund (as preparation has begun).</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </div>

      <Footer />
      <WhatsAppBtn />

      {/* --- PREMIUM CSS --- */}
      <style jsx>{`
        .page-wrapper {
            background-color: #f9f5e8;
            min-height: 100vh;
        }

        /* Brand Colors */
        .text-gold { color: #edcd6c !important; }
        .text-red { color: #740311 !important; }
        .bg-gold { background-color: #edcd6c !important; }
        .letter-spacing-1 { letter-spacing: 1px; }
        .width-20 { width: 20px; text-align: center; }

        /* Smooth Header Entrance */
        .header-animate {
            animation: fadeDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Card Styling */
        .info-card {
            border-radius: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(116, 3, 17, 0.08) !important;
        }

        /* Custom UI Elements */
        .premium-callout {
            background-color: #fffaf5;
            border-left: 4px solid #edcd6c;
            padding: 20px;
            border-radius: 0 12px 12px 0;
        }

        .premium-alert {
            background-color: #fdf0f0;
            border-left: 4px solid #740311;
            color: #740311;
            padding: 20px;
            border-radius: 0 12px 12px 0;
        }

        /* Scroll Animations */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
            .ms-md-5 {
                margin-left: 0 !important;
                margin-top: 15px;
            }
        }
      `}</style>
    </main>
  );
}