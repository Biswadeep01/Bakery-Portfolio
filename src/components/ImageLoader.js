"use client";
import { useState, useEffect, useRef } from "react";

export default function ImageLoader({ src, alt, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if the image is already loaded from cache immediately
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div className={`position-relative overflow-hidden ${className}`} style={{ minHeight: "200px", backgroundColor: "#f0f0f0" }}>
      
      {/* 1. Skeleton Loader - Only show if image is NOT loaded */}
      {!imageLoaded && (
        <div 
          className="skeleton-loader position-absolute w-100 h-100"
          style={{ top: 0, left: 0, zIndex: 1 }}
        ></div>
      )}

      {/* 2. The Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-100 h-100 object-fit-cover`} 
        // We control visibility via opacity style to allow transition
        style={{ 
            opacity: imageLoaded ? 1 : 0, 
            transition: "opacity 0.5s ease-in-out" 
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)} // Stop loading animation even if image fails
      />
    </div>
  );
}