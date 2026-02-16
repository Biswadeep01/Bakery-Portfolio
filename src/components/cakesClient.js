"use client";

import { useState, useEffect } from "react";
import OrderModal from "@/components/OrderModal";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import CakeItem from "@/components/CakeItem"; // <--- IMPORT IT HERE

export default function CakesClient({ bentoCakes}) {
  const [viewProduct, setViewProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  // Helper function for order format
  const formatForOrder = (item) => ({
      name: item.name,
      price: item.price,
      images: item.images || [], 
      flavors: item.flavors || [],
      weight: item.weight,
      servings: item.servings,
      desc: item.desc || "Delicious artisan cake."
  });

  // Scroll Reveal Logic
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
    <>
      {/* SECTION 1: BENTO CAKES */}
      <section className="section-padding">
        <div className="container">
            <h3 className="text-red mb-4 ps-3" style={{borderLeft: '5px solid #edcd6c'}}>Bento Cakes</h3>
            <div className="row g-4">
                {bentoCakes.map((cake) => (
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
    </>
  );
}