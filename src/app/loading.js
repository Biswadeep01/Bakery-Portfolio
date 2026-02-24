"use client";

export default function Loading() {
  return (
    <div className="loading-screen d-flex flex-column justify-content-center align-items-center">
      
      <div className="cake-loader">
        <div className="cherry"></div>
        <div className="layer top-layer"></div>
        <div className="layer cream-layer"></div>
        <div className="layer base-layer"></div>
      </div>

      <h3 className="fw-bold text-red loading-title mt-5 mb-2" style={{fontFamily: 'var(--font-heading)'}}>
        Baking Magic...
      </h3>
      <p className="text-muted small text-uppercase mb-0 tracking-wide">
        Just a sweet moment
      </p>
      <style jsx>{`
        /* Full screen or container wrapper */
        .loading-screen {
            min-height: 60vh;
            width: 100%;
            background-color: transparent;
        }

        /* Core Colors */
        .text-red { color: #740311; }
        .tracking-wide { letter-spacing: 3px; }

        /* Cake Wrapper */
        .cake-loader {
            position: relative;
            width: 80px;
            height: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            /* The whole cake floats gently after being built */
            animation: floatCake 3s ease-in-out infinite 1.5s; 
        }

        /* Shared Layer Properties */
        .layer {
            width: 80px;
            height: 24px;
            border-radius: 12px;
            margin-top: -8px; /* Creates the overlapping layered look */
            opacity: 0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            position: relative;
            z-index: 2;
        }

        /* Specific Layers & Staggered Animations */
        .base-layer {
            background-color: #edcd6c; /* Gold Sponge */
            z-index: 1;
            animation: dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .cream-layer {
            background-color: #ffffff; /* White Cream */
            width: 86px; /* Slightly wider to look like cream squishing out */
            height: 18px;
            z-index: 2;
            animation: dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 0.3s;
        }

        .top-layer {
            background-color: #740311; /* Red Velvet Top */
            z-index: 3;
            animation: dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 0.6s;
        }

        /* The Cherry on Top */
        .cherry {
            width: 16px;
            height: 16px;
            background-color: #e63946;
            border-radius: 50%;
            position: relative;
            z-index: 4;
            margin-bottom: -4px;
            opacity: 0;
            box-shadow: inset -3px -3px 6px rgba(0,0,0,0.2);
            animation: dropCherry 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 0.9s;
        }
        
        /* Cherry Stem */
        .cherry::after {
            content: '';
            position: absolute;
            top: -10px;
            left: 50%;
            width: 12px;
            height: 12px;
            border-top: 2px solid #2d6a4f;
            border-right: 2px solid #2d6a4f;
            border-radius: 0 100% 0 0;
        }

        /* Text Shimmer Effect */
        .loading-title {
            background: linear-gradient(90deg, #740311 0%, #edcd6c 50%, #740311 100%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmerText 2s linear infinite;
        }

        /* --- Keyframes --- */
        @keyframes dropIn {
            0% { transform: translateY(-30px) scale(0.8); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes dropCherry {
            0% { transform: translateY(-40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes floatCake {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        @keyframes shimmerText {
            to { background-position: 200% center; }
        }

        /* --- Responsive Media Query --- */
        @media (max-width: 768px) {
            .loading-screen {
                min-height: 50vh; /* Takes up a bit less vertical space on mobile */
            }
            .cake-loader {
                transform: scale(0.85); /* Scales down the cake perfectly without breaking layout */
            }
            .loading-title {
                font-size: 1.5rem;
                margin-top: 2rem !important;
            }
            .tracking-wide {
                font-size: 0.75rem;
                letter-spacing: 2px;
            }
        }
      `}</style>
    </div>
  );
}