"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ImageLoader from "@/components/ImageLoader";
import OrderModal from "@/components/OrderModal";
import ProductDetailsModal from "@/components/ProductDetailsModal"; // Import the new modal
import { bentoCakes, premiumBentoCakes } from "@/data/cakeData";

export default function CakesPage() {
  const [viewProduct, setViewProduct] = useState(null); // Shows details
  const [orderProduct, setOrderProduct] = useState(null); // Shows order form
  
  const formatForOrder = (item) => ({
      name: item.name,
      price: item.price,
      images: item.images, // Array from cakeData
      flavors: item.flavors,
      weight: item.weight,
      servings: item.servings,
      desc: item.desc || "Delicious artisan cake." // Fallback description
  });

  useEffect(() => {
      const reveal = () => {
        var reveals = document.querySelectorAll('.reveal, .reveal-left');
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
    <main>
      <Navbar />
      
      {/* Header */}
      <section className="pt-5 mt-5 text-center">
        <div className="container pt-5 reveal">
            <h1 className="display-4 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>Our Cake Collection</h1>
            <p className="lead text-muted">Choose your category below</p>
        </div>
      </section>

      {/* SECTION 1: BENTO CAKES */}
      <section className="section-padding">
        <div className="container">
            <h3 className="text-red mb-4 ps-3" style={{borderLeft: '5px solid #edcd6c'}}>Bento Cakes</h3>
            <div className="row g-4">
                {bentoCakes.map((cake) => (
                    <div key={cake.id} className="col-md-6 col-lg-4">
                        <CakeItem 
                            cake={cake} 
                            // 1. Click triggers Details Modal
                            onViewDetails={() => setViewProduct(cake)}
                            // 2. Click triggers Order Modal directly
                            onOrder={() => setOrderProduct(formatForOrder(cake))}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 2: PREMIUM BENTO */}
      <section className="section-padding bg-white">
        <div className="container">
            <h3 className="text-red mb-4 ps-3" style={{borderLeft: '5px solid #edcd6c'}}>Premium Series</h3>
            <div className="row g-4">
                {premiumBentoCakes.map((cake) => (
                    <div key={cake.id} className="col-md-6 col-lg-4">
                        <CakeItem 
                            cake={cake} 
                            onViewDetails={() => setViewProduct(cake)}
                            onOrder={() => setOrderProduct(formatForOrder(cake))}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBtn />

      {/* --- MODALS --- */}

      {/* 1. PRODUCT DETAILS MODAL */}
      {viewProduct && (
        <ProductDetailsModal 
            product={viewProduct} 
            onClose={() => setViewProduct(null)}
            onOrderClick={(item) => {
                // Close details, Open Order Form
                setViewProduct(null);
                setOrderProduct(formatForOrder(item));
            }}
        />
      )}

      {/* 2. ORDER FORM MODAL */}
      {orderProduct && (
        <OrderModal 
            cake={orderProduct} 
            onClose={() => setOrderProduct(null)} 
        />
      )}

    </main>
  );
}

// Local Component for the individual card
function CakeItem({ cake, onOrder, onViewDetails }) {
    return (
        <div 
            className="card h-100 border-0 shadow-sm hover-lift bg-white" 
            style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease' }}
        >
            {/* Clickable Image Area */}
            <div style={{height: '260px', cursor: 'pointer', position: 'relative'}} onClick={onViewDetails} className="product-image-container">
                <ImageLoader src={cake.images[0]} alt={cake.name} className="w-100 h-100" />
                
                {/* Hover Overlay Hint */}
                <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100" 
                     style={{background: 'rgba(0,0,0,0.2)', opacity: 0, transition: '0.3s'}}>
                    <span className="btn btn-light btn-sm rounded-pill px-3 shadow">Quick View</span>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                
                {/* Clickable Title Area */}
                <div style={{cursor: 'pointer'}} onClick={onViewDetails}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0 text-red" style={{fontFamily: 'var(--font-heading)'}}>{cake.name}</h5>
                        <span className="badge bg-success">{cake.price}</span>
                    </div>
                    
                    {/* Weight & Servings Icons */}
                    <div className="d-flex gap-3 mb-3 small text-muted">
                        {cake.weight && <span><i className="fas fa-weight-hanging text-danger me-1"></i>{cake.weight}</span>}
                        {cake.servings && <span><i className="fas fa-users text-danger me-1"></i>{cake.servings}</span>}
                    </div>

                    {/* Flavor Tags */}
                    <div className="mb-4">
                        <small className="text-muted d-block mb-1 text-uppercase fw-bold" style={{fontSize: '0.7rem'}}>Flavors</small>
                        <div>
                            {cake.flavors.map((flav, i) => (
                                <span key={i} className="badge bg-light text-dark border me-1 mb-1 fw-normal" style={{fontSize: '0.75rem'}}>
                                    {flav}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <button onClick={onOrder} className="btn btn-outline-danger w-100 rounded-pill fw-bold">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Local CSS for hover effect */}
            <style jsx>{`
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
                .product-image-container:hover .overlay { opacity: 1 !important; }
            `}</style>
        </div>
    );
}