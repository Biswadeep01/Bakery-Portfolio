"use client";

import { useRef } from "react";
import { achievementsData } from "@/data/achievementsData";

export default function Achievements() {
  // Reference to the scrolling container
  const scrollRef = useRef(null);

  // Scroll logic for the buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculates roughly the width of one card to snap beautifully
      const scrollAmount = scrollRef.current.clientWidth / 3 + 24; 
      
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="achievements-section py-5 bg-light overflow-hidden">
      <div className="container py-5">
        
        {/* Header & Navigation Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 pb-2 reveal">
            <div className="text-start mb-4 mb-md-0">
                <span className="badge bg-gold text-dark mb-2 px-3 py-2 text-uppercase fw-bold letter-spacing-1">Our Journey</span>
                <h2 className="display-5 fw-bold text-red mb-0" style={{fontFamily: 'var(--font-heading)'}}>
                    Milestones & Memories
                </h2>
                <p className="text-muted mt-2 mb-0">Scroll to explore our story.</p>
            </div>

            {/* Scroll Controls (Desktop & Mobile) */}
            <div className="d-flex gap-2">
                <button 
                    onClick={() => scroll("left")} 
                    className="btn btn-scroll shadow-sm d-flex align-items-center justify-content-center"
                    aria-label="Scroll Left"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    onClick={() => scroll("right")} 
                    className="btn btn-scroll shadow-sm d-flex align-items-center justify-content-center"
                    aria-label="Scroll Right"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        {/* 2. THE HORIZONTAL SCROLL TRACK */}
        <div className="timeline-wrapper position-relative reveal">
            
            {/* The Horizontal Line behind the years */}
            <div className="timeline-horizontal-line"></div>

            {/* The Scrollable Container */}
            <div className="horizontal-scroll-track pb-4" ref={scrollRef}>
                {achievementsData.map((item) => (
                    <div key={item.id} className="timeline-scroll-item">
                        
                        {/* Timeline Node (Year & Dot) */}
                        <div className="timeline-node mb-4">
                            <div className="timeline-dot shadow-sm"></div>
                            <h4 className="fw-bold text-red mt-3 mb-0" style={{fontFamily: 'var(--font-heading)'}}>
                                {item.year}
                            </h4>
                        </div>

                        {/* Achievement Card */}
                        <div className="product-card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-white hover-lift text-start d-flex flex-column">
                            
                            {/* Robust Image Container */}
                            <div style={{ height: '220px', overflow: 'hidden' }} className="position-relative">
                                {/* Standard img tag with guaranteed object-fit */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-100 h-100 transition-img"
                                    style={{ objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        // Fallback if the specific image path fails
                                        e.target.src = "/assets/placeholder.png"; 
                                    }}
                                />
                                
                                {/* FIXED OVERLAY: Using inline RGBA to guarantee the glass/transparent effect */}
                                <div 
                                    className="position-absolute top-0 start-0 w-100 h-100" 
                                    style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                                ></div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="card-body p-4 d-flex flex-column flex-grow-1">
                                <h5 className="card-title fw-bold mb-2 text-red" style={{fontFamily: 'var(--font-heading)'}}>
                                    {item.title}
                                </h5>
                                <p className="text-muted small mb-0">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* 3. ALL-IN-ONE CSS */}
      <style jsx>{`
        /* Core Brand Colors */
        .text-red { color: #740311; }
        .bg-gold { background-color: #edcd6c; }

        /* Scroll Navigation Buttons */
        .btn-scroll {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: white;
            color: #740311;
            border: 1px solid #e0e0e0;
            transition: all 0.3s ease;
            font-size: 1rem;
        }
        .btn-scroll:hover {
            background-color: #740311;
            color: white;
            transform: scale(1.1);
            border-color: #740311;
        }

        /* The Continuous Horizontal Line */
        .timeline-wrapper {
            position: relative;
        }
        .timeline-horizontal-line {
            position: absolute;
            top: 11px; /* Center of the dots */
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, rgba(237,205,108,0.2) 0%, rgba(237,205,108,1) 50%, rgba(237,205,108,0.2) 100%);
            z-index: 0;
        }

        /* The Scroll Track */
        .horizontal-scroll-track {
            display: flex;
            flex-wrap: nowrap;
            gap: 24px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding-top: 10px; /* Space for the animated dots */
            
            /* Hide scrollbars for a clean look */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; 
        }
        .horizontal-scroll-track::-webkit-scrollbar {
            display: none; 
        }

        /* Card Sizing (Exactly 3 Items on Desktop) */
        .timeline-scroll-item {
            flex: 0 0 calc(33.333% - 16px);
            scroll-snap-align: start;
            position: relative;
            z-index: 1;
        }

        /* Timeline Dots */
        .timeline-node {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 20px;
        }
        .timeline-dot {
            width: 20px;
            height: 20px;
            background-color: #740311;
            border: 4px solid #fff;
            border-radius: 50%;
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        /* Hover Animations */
        .hover-lift {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .timeline-scroll-item:hover .hover-lift {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(116, 3, 17, 0.15) !important;
        }
        
        .timeline-scroll-item:hover .timeline-dot {
            transform: scale(1.3);
            background-color: #edcd6c;
        }

        /* Image Zoom */
        .transition-img {
            transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .timeline-scroll-item:hover .transition-img {
            transform: scale(1.08); 
        }

        /* Responsive Setup */
        @media (max-width: 992px) {
            .timeline-scroll-item { flex: 0 0 calc(50% - 12px); } /* 2 Items */
        }
        @media (max-width: 768px) {
            .timeline-scroll-item { flex: 0 0 85%; } /* 1 Item + Peek */
            .timeline-horizontal-line { width: 150%; }
        }
      `}</style>
    </section>
  );
}