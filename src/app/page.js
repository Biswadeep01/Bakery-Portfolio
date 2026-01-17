"use client";
import { useState, useEffect } from 'react';

// Components
import Navbar from '@/components/Navbar';
import WhatsAppBtn from '@/components/WhatsAppBtn';
import ProductCard from '@/components/ProductCard';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProductDetailsModal from '@/components/ProductDetailsModal';
import Testimonials from '@/components/Testimonials';
import OrderModal from '@/components/OrderModal'; 

// Data
import { signatureCakes, merchandise } from '@/data/homeData'; // Import Data

export default function Home() {
  const [viewProduct, setViewProduct] = useState(null); // For Details Modal
  const [orderProduct, setOrderProduct] = useState(null); // For Order Form Modal

  // Helper to normalize data for the order modal (since homeData and cakeData differ slightly)
  const formatForOrder = (item) => {
    return {
      name: item.title || item.name,
      price: item.price,
      images: Array.isArray(item.images) ? item.images : [item.image],
      flavors: item.flavors || []
    };
  }; // State for Modal

  // Animation Logic
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
      
      {/* HERO SECTION */}
      <header className="hero" id="home">
        <div className="container reveal">
          <h1 className="display-1">Baked with Love in Burdwan</h1>
          <p className="lead mb-4 fs-4">Experience the taste of luxury in every bite.</p>
          <a href="/bakery" className="btn btn-custom btn-lg">Order Now</a>
        </div>
      </header>

      <About />

      <section id="achievements" className="py-5 text-white reveal" style={{ backgroundColor: 'var(--primary-red)' }}>
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="display-5 fw-bold mb-4" style={{color: "var(--accent-gold)"}}>Milestones</h2>
            <div style={{height: '3px', width: '60px', background: 'var(--light-cream)', margin: '10px auto'}}></div>
          </div>
          <div className="row g-4">
            <Achievements
            title="Core Values" image='/assets/Achievements/values.jpg' />
            <Achievements
            title="Startup Award" image='/assets/Achievements/a1.jpg' />
            <Achievements
            title="Feature" image='/assets/Achievements/a2.jpg' />
            <Achievements
            title="Cover Story" image='/assets/Achievements/a3.jpg' />
          </div>
        </div>
      </section>


      {/* --- SIGNATURE CAKES --- */}
      <section id="special" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="display-5 fw-bold mb-4" >Special Cakes</h2>
            <div style={{height: '3px', width: '60px', background: 'var(--accent-gold)', margin: '10px auto'}}></div>
            {/* ... title decoration ... */}
          </div>
          
          <div className="row g-4">
            {signatureCakes.map((item) => (
              <ProductCard 
                key={item.id}
                title={item.title} 
                price={item.price} 
                desc={item.desc} 
                image={item.image}
                badge={item.badge}
                weight={item.weight}      
                servings={item.servings}
                onViewDetails={() => setViewProduct(item)}
                onOrder={() => setOrderProduct(formatForOrder(item))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- MERCHANDISE --- */}
      <section id="merch" className="section-padding" style={{backgroundColor: '#fcf8e8'}}>
        <div className="container">
            <div className="text-center mb-5 reveal">
                <h2 className="display-5 fw-bold mb-4 text-red">Gift Hampers & Merch</h2>
                <div style={{height: '3px', width: '60px', background: 'var(--accent-gold)', margin: '10px auto'}}></div>
            </div>

            <div className="row g-4">
                {merchandise.map((item) => (
                   <ProductCard 
                     key={item.id}
                     title={item.title} 
                     price={item.price} 
                     desc={item.desc} 
                     image={item.image}
                     badge={item.badge}
                     weight={item.weight}      
                     servings={item.servings}
                     onViewDetails={() => setViewProduct(item)}
                     // DATA FLOW: Merchandise details to Modal State
                     onOrder={() => setOrderProduct(formatForOrder(item))}
                   />
                ))}
            </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppBtn />

      {viewProduct && (
        <ProductDetailsModal 
            product={viewProduct} 
            onClose={() => setViewProduct(null)}
            onOrderClick={(item) => {
                // Close details, Open Order
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
    </main>
  );
}