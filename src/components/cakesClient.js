"use client";

import { useState, useEffect } from "react";
import OrderModal from "@/components/OrderModal";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import CakeItem from "@/components/CakeItem"; 

export default function CakesClient({ categories, allCakes }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  const formatForOrder = (item) => ({
      name: item.name,
      price: item.price,
      images: item.images || [], 
      flavors: item.flavors || [],
      weight: item.weight,
      servings: item.servings,
      desc: item.desc || "Delicious artisan cake."
  });

  return (
    <>
      <section className="section-padding pb-5">
        <div className="container">
            
            {/* By wrapping the views in a div with a dynamic 'key', 
              React treats it as a new element, which naturally re-triggers our CSS entry animations!
            */}
            <div key={activeCategory ? activeCategory : 'home'} className="animate-view">
                
                {/* --- VIEW 1: PREMIUM CATEGORY CARDS --- */}
                {!activeCategory && (
                    <div className="row g-4">
                        {categories.map((cat, index) => (
                            <div 
                                key={cat.id} 
                                className="col-md-6 col-lg-6"
                                // Add staggered delay based on index for a waterfall effect
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div 
                                    className="card h-100 border-0 overflow-hidden text-white category-card shadow-lg rounded-4"
                                    onClick={() => setActiveCategory(cat.id)}
                                    style={{cursor: 'pointer', height: '350px'}}
                                >
                                    {/* Background Image with Zoom Effect */}
                                    <div className="bg-img-container h-100 w-100 position-absolute top-0 start-0">
                                        <img 
                                            src={cat.image} 
                                            alt={cat.title} 
                                            className="w-100 h-100 object-fit-cover cat-bg-img" 
                                            onError={(e) => e.target.src = '/assets/about.png'} 
                                        />
                                    </div>
                                    
                                    {/* Gradient Overlay */}
                                    <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100"></div>

                                    {/* Content */}
                                    <div className="card-body position-relative z-index-1 d-flex flex-column justify-content-end p-4 p-md-5">
                                        <div className="content-wrapper">
                                            <span className="badge bg-gold text-dark mb-3 px-3 py-2 text-uppercase fw-bold letter-spacing-1">
                                                Explore
                                            </span>
                                            <h2 className="display-6 fw-bold mb-2 text-white" style={{fontFamily: 'var(--font-heading)'}}>
                                                {cat.title}
                                            </h2>
                                            <p className="lead text-white-50 mb-0 fs-6">
                                                {cat.desc}
                                            </p>
                                        </div>
                                        {/* Animated Hover Arrow */}
                                        <div className="hover-arrow mt-4">
                                            <i className="fas fa-arrow-right fs-4 text-gold"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- VIEW 2: PRODUCT GRID --- */}
                {activeCategory && (
                    <div>
                        {/* Elegant Back Button & Category Title */}
                        <div className="d-flex align-items-center mb-5 pb-3 border-bottom position-relative">
                            <button 
                                className="btn btn-back me-4 shadow-sm" 
                                onClick={() => setActiveCategory(null)}
                            >
                                <i className="fas fa-arrow-left me-2"></i> Back
                            </button>
                            <div>
                                <h6 className="text-uppercase text-muted fw-bold mb-1" style={{letterSpacing: '2px', fontSize: '0.75rem'}}>Category</h6>
                                <h2 className="text-red mb-0 fw-bold display-6" style={{fontFamily: 'var(--font-heading)'}}>
                                    {categories.find(c => c.id === activeCategory)?.title}
                                </h2>
                            </div>
                        </div>

                        {/* Staggered Product Grid */}
                        <div className="row g-4">
                            {allCakes[activeCategory]?.map((cake, index) => (
                                <div 
                                    key={cake.id} 
                                    className="col-md-6 col-lg-4 stagger-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CakeItem 
                                        cake={cake} 
                                        onViewDetails={() => setViewProduct(cake)}
                                        onOrder={() => setOrderProduct(formatForOrder(cake))}
                                    />
                                </div>
                            ))}
                            
                            {/* Empty State */}
                            {(!allCakes[activeCategory] || allCakes[activeCategory].length === 0) && (
                                <div className="col-12 text-center py-5 fade-in">
                                    <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm mb-4" style={{width: '100px', height: '100px'}}>
                                        <i className="fas fa-hat-wizard fs-1 text-gold"></i>
                                    </div>
                                    <h3 className="text-red" style={{fontFamily: 'var(--font-heading)'}}>Baking in progress...</h3>
                                    <p className="text-muted">We are adding new cakes to this section soon.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* --- MODALS --- */}
      {viewProduct && (
        <ProductDetailsModal 
            product={viewProduct} 
            onClose={() => setViewProduct(null)}
            onOrderClick={(item) => {
                setViewProduct(null);
                setOrderProduct(formatForOrder(item));
            }}
        />
      )}

      {orderProduct && (
        <OrderModal 
            cake={orderProduct} 
            onClose={() => setOrderProduct(null)} 
        />
      )}

      {/* --- PREMIUM CSS ANIMATIONS --- */}
      <style jsx>{`
        /* View Transition Animation */
        .animate-view {
            animation: fadeInView 0.5s ease-out forwards;
        }
        @keyframes fadeInView {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Staggered Items for Grids */
        .stagger-item, .col-md-6.col-lg-6 {
            opacity: 0;
            animation: fadeInItem 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeInItem {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Category Card Hover Magic */
        .category-card {
            transition: all 0.4s ease;
            transform: translateY(0);
        }
        .category-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(116, 3, 17, 0.2) !important;
        }

        /* Image Zoom */
        .cat-bg-img {
            transition: transform 0.7s ease;
        }
        .category-card:hover .cat-bg-img {
            transform: scale(1.08); /* Slow, premium zoom effect */
        }

        /* Dark Gradient for Text Readability */
        .overlay-gradient {
            background: linear-gradient(to top, rgba(116, 3, 17, 0.95) 0%, rgba(116, 3, 17, 0.4) 50%, rgba(0,0,0,0.1) 100%);
            transition: opacity 0.4s ease;
        }
        .category-card:hover .overlay-gradient {
            opacity: 0.9;
        }

        /* Content Movement on Hover */
        .content-wrapper {
            transition: transform 0.4s ease;
            transform: translateY(20px); /* Initially pushed down slightly */
        }
        .category-card:hover .content-wrapper {
            transform: translateY(0); /* Moves up on hover */
        }

        /* The Animated Arrow */
        .hover-arrow {
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.4s ease;
            height: 0;
            overflow: hidden;
        }
        .category-card:hover .hover-arrow {
            opacity: 1;
            transform: translateX(0);
            height: auto;
        }

        /* Elegant Back Button */
        .btn-back {
            background-color: white;
            color: #740311;
            border: 1px solid #eee;
            border-radius: 50px;
            padding: 10px 24px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .btn-back:hover {
            background-color: #740311;
            color: white;
            border-color: #740311;
        }

        /* Colors */
        .bg-gold { background-color: #edcd6c; }
        .text-gold { color: #edcd6c; }
        .text-red { color: #740311; }
      `}</style>
    </>
  );
}