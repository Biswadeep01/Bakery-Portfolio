"use client";
export default function LoadingSpinner() {
  return (
    <div className="loader-container" style={{ backgroundColor: '#f9f5e8' }}>
      
      {/* The Baking Animation SVG */}
      <svg 
        className="baking-svg" 
        viewBox="0 0 200 160" 
        width="200" 
        height="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brand Colors defined in SVG for easy usage */}
        <defs>
          <color id="cream" color="#f9f5e8" />
          <color id="gold" color="#edcd6c" />
          <color id="red" color="#740311" />
          <color id="bakedBrown" color="#d4a03d" /> {/* A slightly deeper gold for the crust */}
        </defs>
        
        {/* The "Ground" / Baking Tray Line */}
        <line className="tray-line" x1="40" y1="140" x2="160" y2="140" stroke="var(--primary-red)" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>

        {/* Heat waves (hidden initially) */}
        <g className="heat-waves" stroke="#edcd6c" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0">
            <path d="M70 80 Q 80 60, 70 40" />
            <path d="M100 70 Q 110 50, 100 30" />
            <path d="M130 80 Q 140 60, 130 40" />
        </g>

        {/* The Dough Bun */}
        <g className="bun-group">
             {/* Main Body of the bun */}
            <path 
                className="bun"
                d="M60,140 C60,100 140,100 140,140 Z" 
                fill="#f9f5e8" 
                stroke="#edcd6c" 
                strokeWidth="3"
            />
             {/* Crust cracks (hidden initially) */}
            <path className="crust" d="M90,115 Q100,125 110,115" fill="none" stroke="#740311" strokeWidth="3" strokeLinecap="round" opacity="0"/>
            <path className="crust" d="M100,110 Q100,120 100,125" fill="none" stroke="#740311" strokeWidth="3" strokeLinecap="round" opacity="0"/>
        </g>

        {/* Steam puffs (hidden initially) */}
        <g className="steam-puffs" fill="#f9f5e8" opacity="0">
             <circle cx="90" cy="80" r="5" />
             <circle cx="110" cy="75" r="8" />
             <circle cx="100" cy="90" r="6" />
        </g>

      </svg>

      <h5 className="mt-4 text-red fw-bold fade-text" style={{fontFamily: 'var(--font-heading)', letterSpacing: '2px'}}>LAYER BITES</h5>
      <p className="small text-muted" style={{fontStyle: 'italic'}}>Something delicious is rising...</p>
      
      <style jsx>{`
        /* --- CSS VARIABLES FOR COLORS --- */
        :root {
          --primary-red: #740311;
          --accent-gold: #edcd6c;
          --light-cream: #f9f5e8;
          --baked-brown: #c9962a;
        }

        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .text-red { color: var(--primary-red); }
        
        /* --- THE BAKING ANIMATIONS --- */
        
        /* 1. The Bun Rising and Browning */
        .bun {
            transform-origin: bottom center;
            animation: bakeRise 3s ease-in-out infinite;
        }

        @keyframes bakeRise {
            0% {
                transform: scale(0.7);
                fill: var(--light-cream);
                stroke: var(--accent-gold);
            }
            50% {
                /* Peak rise - half baked */
                transform: scale(1.1);
                fill: var(--accent-gold);
            }
            75% {
                /* Fully baked, slightly over-expanded */
                transform: scale(1.2);
                fill: var(--baked-brown);
                stroke: var(--primary-red);
            }
            95% {
                /* Hold before reset */
                transform: scale(1.2);
                fill: var(--baked-brown);
                opacity: 1;
            }
            100% {
                 /* Quick reset */
                 transform: scale(0.7);
                 fill: var(--light-cream);
                 opacity: 0; /* Poof effect */
            }
        }

        /* 2. Crust Cracks appearing at peak bake */
        .crust {
            animation: crustCrack 3s ease-in-out infinite;
        }
        @keyframes crustCrack {
            0%, 60% { opacity: 0; stroke-dasharray: 20; stroke-dashoffset: 20; }
            75% { opacity: 1; stroke-dashoffset: 0; } /* Draw lines in */
            95% { opacity: 1; }
            100% { opacity: 0; }
        }

        /* 3. Heat Waves rippling up */
        .heat-waves path {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: heatRipple 3s linear infinite;
        }
        .heat-waves path:nth-child(1) { animation-delay: 0.2s; }
        .heat-waves path:nth-child(2) { animation-delay: 0.4s; }
        .heat-waves path:nth-child(3) { animation-delay: 0.6s; }

        @keyframes heatRipple {
            0%, 30% { opacity: 0; stroke-dashoffset: 50; transform: translateY(10px); }
            50% { opacity: 0.6; }
            80% { opacity: 0; stroke-dashoffset: -50; transform: translateY(-20px); }
            100% { opacity: 0; }
        }

        /* 4. Steam Puffs at the end */
        .steam-puffs {
            transform-origin: center;
            animation: steamRelease 3s ease-out infinite;
        }
        @keyframes steamRelease {
            0%, 75% { opacity: 0; transform: translateY(10px) scale(0.5); }
            85% { opacity: 0.8; transform: translateY(-10px) scale(1.1); }
            100% { opacity: 0; transform: translateY(-30px) scale(1.5); }
        }

        /* Text Animation */
        .fade-text {
            animation: textPulse 3s infinite ease-in-out;
        }
        @keyframes textPulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; letter-spacing: 4px; }
        }
      `}</style>
    </div>
  );
}