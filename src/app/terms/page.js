"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function TermsPage() {

  // Reuse the scroll animation logic
  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
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
    <main style={{ backgroundColor: '#f9f5e8', minHeight: '100vh' }}>
      <Navbar />
      
      {/* --- HEADER --- */}
      <section className="pt-5 mt-5 pb-5 text-center">
        <div className="container pt-4 reveal">
            <h1 className="display-4 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>Good to Know</h1>
            <p className="lead text-muted">Everything you need to know about our cakes, delivery, and policies.</p>
        </div>
      </section>

      <div className="container pb-5">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                
                {/* --- 1. CAKE DESCRIPTION & CARE --- */}
                <div className="card border-0 shadow-sm p-4 p-md-5 mb-5 reveal bg-white" style={{borderRadius: '15px'}}>
                    <div className="d-flex align-items-center mb-4">
                        <i className="fas fa-birthday-cake fs-2 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red">Our Cakes & Care</h3>
                    </div>
                    
                    <div className="mb-4">
                        <h5 className="fw-bold small text-uppercase text-muted">The Ingredients</h5>
                        <p>We use only premium ingredients: Belgian chocolate (Callebaut), high-protein flour, and farm-fresh dairy. We strictly do not use preservatives or premixes. All fruit compotes are made in-house.</p>
                    </div>

                    <div className="mb-4">
                         <h5 className="fw-bold small text-uppercase text-muted">Allergen Info</h5>
                         <p>Our kitchen processes nuts, dairy, and gluten. While we offer eggless options, we cannot guarantee a 100% trace-free environment for severe allergies.</p>
                    </div>

                    <div className="p-3 bg-light rounded border border-warning">
                        <h6 className="fw-bold text-dark mb-2"><i className="fas fa-temperature-low me-2"></i>Storage Instructions</h6>
                        <ul className="mb-0 small text-muted ps-3">
                            <li className="mb-1">Cream cakes must be stored in the refrigerator.</li>
                            <li className="mb-1">Remove from fridge <strong>30-45 minutes</strong> before cutting to allow the sponge to soften.</li>
                            <li>Consume within 48 hours for best taste.</li>
                        </ul>
                    </div>
                </div>

                {/* --- 2. DELIVERY INFORMATION --- */}
                <div className="card border-0 shadow-sm p-4 p-md-5 mb-5 reveal bg-white" style={{borderRadius: '15px'}}>
                    <div className="d-flex align-items-center mb-4">
                        <i className="fas fa-truck fs-2 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red">Delivery Information</h3>
                        <p className="small text-muted mt-2">Delivery product might vary slightly from the image shown.</p>
                    </div>
                    <p className="small text-muted">Product is perishable therefore delivery will be attempted only once.</p>

                    <div className="row g-4 mb-3">
                        <div className="col-md-6">
                            <h6 className="fw-bold">Coverage Area</h6>
                            <p className="small text-muted">We currently deliver within Burdwan Municipality limits and adjacent areas (up to 8km radius from Curzon Gate). </p>
                        </div>
                        <div className="col-md-6">
                             <h6 className="fw-bold">Delivery Slots</h6>
                             <p className="small text-muted">
                                Morning: 10:00 AM - 1:00 PM<br/>
                                Evening: 4:00 PM - 8:00 PM
                             </p>
                        </div>
                    </div>

                    <div className="alert alert-danger bg-light border-danger text-danger d-flex align-items-center" role="alert">
                        <i className="fas fa-exclamation-circle me-3 fs-4"></i>
                        <div className="small">
                            <strong>Fragile Item Policy:</strong><br/>
                            We recommend self-pickup for tiered cakes and 3D custom cakes. While we take utmost care, we are not liable for minor damages caused by road bumps during third-party transit.
                        </div>
                    </div>
                </div>

                {/* --- 3. TERMS & CONDITIONS --- */}
                <div className="card border-0 shadow-sm p-4 p-md-5 reveal bg-white" style={{borderRadius: '15px'}}>
                    <div className="d-flex align-items-center mb-4">
                        <i className="fas fa-file-contract fs-2 text-gold me-3"></i>
                        <h3 className="mb-0 fw-bold text-red">Terms & Conditions</h3>
                    </div>

                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <h6 className="fw-bold mb-1">Ordering Timeline</h6>
                            <p className="small text-muted">Orders must be placed at least <strong>24 hours</strong> in advance. For wedding cakes, we require 1 week notice.</p>
                        </li>
                        <li className="mb-3">
                            <h6 className="fw-bold mb-1">Payment Policy</h6>
                            <p className="small text-muted">A 50% deposit is mandatory to confirm the booking. The remaining balance is due upon delivery/pickup.</p>
                        </li>
                        <li className="mb-0">
                            <h6 className="fw-bold mb-1">Cancellations & Refunds</h6>
                            <p className="small text-muted">
                                - Cancellations made 48+ hours prior: Full Refund.<br/>
                                - Cancellations made 24-48 hours prior: 50% Refund.<br/>
                                - Less than 24 hours: No Refund (as preparation has begun).
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
      </div>

      <Footer />
      <WhatsAppBtn />

      {/* Inline styles for this page */}
      <style jsx>{`
        .text-gold { color: #edcd6c !important; }
        .text-red { color: #740311 !important; }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>
    </main>
  );
}