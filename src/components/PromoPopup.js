"use client";
import { useState, useEffect } from "react";
import { currentPromo } from "@/data/promoData";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // For animation handling
  const [isHovered, setIsHovered] = useState(false);

  // --- LOGIC ---
  useEffect(() => {
    if (!currentPromo.isActive) return;

    // 1. Start rendering (but invisible)
    const renderTimer = setTimeout(() => {
        setShouldRender(true);
        // 2. Trigger Fade In shortly after
        setTimeout(() => setIsVisible(true), 50);
    }, 1000); 

    return () => clearTimeout(renderTimer);
  }, []);

  useEffect(() => {
    let hideTimer;
    if (isVisible && !isHovered) {
      hideTimer = setTimeout(() => {
        handleClose();
      }, 5000); // Increased to 5 seconds for better readability
    }
    return () => clearTimeout(hideTimer);
  }, [isVisible, isHovered]);

  const handleClose = () => {
    setIsVisible(false); // Trigger fade out
    setTimeout(() => setShouldRender(false), 500); // Remove from DOM after animation
  };

  const handleKnowMore = () => {
    const phone = "919474894533";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(currentPromo.whatsappMessage)}`;
    window.open(url, '_blank');
    handleClose();
  };

  if (!shouldRender || !currentPromo.isActive) return null;

  return (
    // Dynamic class for fade effect
    <div className={`popup-overlay ${isVisible ? 'show' : ''}`}>
      <div 
        className={`popup-card ${isVisible ? 'show' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Close Button */}
        <button className="btn-close-custom" onClick={handleClose}>
            <i className="fas fa-times"></i>
        </button>

        <div className="popup-layout">
            
            {/* IMAGE (Left/Top) */}
            <div className="image-part">
                <img src={currentPromo.image} alt="Offer" />
                <div className="shine"></div>
            </div>

            {/* TEXT (Right/Bottom) */}
            <div className="text-part">
                <div className="badge-area">
                    <span className="badge bg-warning text-dark text-uppercase fw-bold" style={{fontSize: '0.65rem', letterSpacing: '1px'}}>Limited Offer</span>
                </div>

                <h4 className="fw-bold mb-1 text-white" style={{fontFamily: 'var(--font-heading)'}}>
                    {currentPromo.title}
                </h4>
                
                <p className="text-white-50 small mb-3" style={{lineHeight: '1.4'}}>
                    {currentPromo.subtitle}
                </p>

                <button onClick={handleKnowMore} className="btn-gold shadow-sm">
                    Claim Offer <i className="fab fa-whatsapp ms-1"></i>
                </button>

                {/* Loading Bar */}
                <div className="progress-bar-container mt-3">
                     <div className={`progress-bar-fill ${isHovered ? 'paused' : ''}`}></div>
                </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        /* --- 1. OVERLAY (Smooth Fade) --- */
        .popup-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(3px);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            /* Start Invisible */
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s ease-in-out;
        }
        .popup-overlay.show {
            opacity: 1;
            visibility: visible;
        }

        /* --- 2. CARD (Compact & Responsive) --- */
        .popup-card {
            background: #740311; /* Brand Red */
            width: 100%;
            max-width: 600px; /* Reduced from 750px for compact feel */
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            border: 1px solid #edcd6c;
            /* Start Scaled Down */
            transform: scale(0.9) translateY(20px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .popup-card.show {
            transform: scale(1) translateY(0);
        }

        /* --- 3. LAYOUT (Mobile Default) --- */
        .popup-layout {
            display: flex;
            flex-direction: column;
        }

        .image-part {
            width: 100%;
            height: 140px; /* Small banner height on mobile */
            position: relative;
            overflow: hidden;
        }
        .image-part img {
            width: 100%; height: 100%;
            object-fit: cover;
        }

        .text-part {
            padding: 20px;
            text-align: center;
        }

        .btn-gold {
            background: #edcd6c;
            color: #740311;
            border: none;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 0.9rem;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: 0.2s;
        }
        .btn-gold:hover { background: white; }

        /* --- 4. DESKTOP/LAPTOP TWEAKS (min-width: 768px) --- */
        @media (min-width: 768px) {
            .popup-layout {
                flex-direction: row; /* Side by side */
                height: 280px; /* Fixed compact height */
            }
            .image-part {
                width: 45%; /* Image left */
                height: 100%;
            }
            .text-part {
                width: 55%; /* Text right */
                text-align: left;
                padding: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
            .btn-gold { width: auto; } /* Button fits text */
        }

        /* --- 5. ANIMATIONS & EXTRAS --- */
        .btn-close-custom {
            position: absolute;
            top: 10px; right: 10px;
            width: 28px; height: 28px;
            background: rgba(0,0,0,0.3);
            border-radius: 50%;
            color: white; border: none;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; z-index: 10;
        }
        .shine {
            position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
            transform: skewX(-25deg); animation: shine 3s infinite;
        }
        @keyframes shine { 100% { left: 200%; } }

        .progress-bar-container { width: 100%; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; margin-top: auto; }
        .progress-bar-fill { height: 100%; background: #edcd6c; width: 0%; animation: progress 5s linear forwards; } /* Synced to 5s */
        .progress-bar-fill.paused { animation-play-state: paused; }
        @keyframes progress { 0% { width: 100%; } 100% { width: 0%; } }
      `}</style>
    </div>
  );
}