"use client";
import { testimonials } from "@/data/testimonialsData";

export default function Testimonials() {
  
  // Helper to render stars with a vibrant gold glow
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? "active-star" : "text-muted opacity-25"}`}
      ></i>
    ));
  };

  return (
    <section className="section-padding vibrant-section position-relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5 reveal">
            <span className="badge bg-gold text-dark mb-2 px-3 py-2 text-uppercase fw-bold letter-spacing-1 shadow-sm">Client Love</span>
            <h2 className="display-5 fw-bold text-red" style={{fontFamily: 'var(--font-heading)'}}>
                Sweet Words
            </h2>
            <p className="text-muted fs-5">What our happy customers say about us.</p>
        </div>

        <div id="testimonialCarousel" className="carousel slide reveal pb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className="row justify-content-center">
                  <div className="col-11 col-md-8 col-lg-6">
                    
                    {/* Vibrant Card with gold accent top border */}
                    <div className="card border-0 p-4 text-center testimonial-card mx-auto">
                      
                      {/* Decorative Large Quote Icon behind text */}
                      <i className="fas fa-quote-right quote-bg"></i>

                      {/* User Image with Glowing Shadow */}
                      <div className="mb-3 mx-auto image-wrapper">
                        <img 
                            src={item.image || "/assets/about.png"} 
                            alt={item.name} 
                            className="rounded-circle border border-4 border-white user-img"
                        />
                      </div>

                      {/* Review Info */}
                      <h4 className="card-title fw-bold mb-0 text-red" style={{fontFamily: 'var(--font-heading)'}}>{item.name}</h4>
                      <p className="text-muted small fw-semibold mb-2 text-uppercase letter-spacing-1">{item.location}</p>
                      
                      <div className="mb-3 star-container">
                        {renderStars(item.rating)}
                      </div>

                      {/* Review Text */}
                      <div className="review-container position-relative">
                        <p className="fst-italic fs-5 text-clamp mb-0 text-dark" style={{ fontWeight: '500' }}>
                          "{item.text}"
                        </p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vibrant Controls */}
          <button className="carousel-control-prev custom-control" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="control-icon d-flex justify-content-center align-items-center" aria-hidden="true">
                <i className="fas fa-chevron-left"></i>
            </span>
          </button>
          <button className="carousel-control-next custom-control" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="control-icon d-flex justify-content-center align-items-center" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
            </span>
          </button>

        </div>
      </div>

      <style jsx>{`
        /* Core Brand Colors */
        .text-red { color: #740311; }
        .bg-gold { background-color: #edcd6c; }

        /* Vibrant Section Background */
        .vibrant-section {
            background: linear-gradient(135deg, #fffaf5 0%, #fdf0f0 100%);
            padding-top: 80px;
            padding-bottom: 80px;
        }

        /* Abstract Background Blobs for energy */
        .bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            z-index: 0;
            opacity: 0.4;
        }
        .blob-1 {
            width: 300px;
            height: 300px;
            background: #edcd6c;
            top: -50px;
            left: -100px;
        }
        .blob-2 {
            width: 250px;
            height: 250px;
            background: #ffb6b9;
            bottom: -50px;
            right: -50px;
        }

        /* The Card Design */
        .testimonial-card {
            height: 400px; 
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            max-width: 450px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(116, 3, 17, 0.08) !important;
            border-top: 6px solid #edcd6c !important;
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .testimonial-card:hover {
            transform: translateY(-5px);
        }

        /* Giant Decorative Quote */
        .quote-bg {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 10rem;
            color: rgba(237, 205, 108, 0.15); /* Faint gold */
            z-index: 0;
            pointer-events: none;
        }

        /* Image Styling with Glow */
        .image-wrapper {
            width: 85px; 
            height: 85px;
            z-index: 1;
        }
        .user-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: 0 10px 25px rgba(116, 3, 17, 0.2);
        }

        /* Star Styling */
        .star-container { z-index: 1; position: relative; }
        .active-star {
            color: #edcd6c;
            filter: drop-shadow(0 0 4px rgba(237, 205, 108, 0.6));
            margin: 0 2px;
        }

        /* Review Container */
        .review-container {
            flex-grow: 1;
            display: flex;
            align-items: center; 
            justify-content: center;
            z-index: 1;
        }
        .text-clamp {
            display: -webkit-box;
            -webkit-line-clamp: 4; 
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.7; 
            color: #333;
        }

        /* Vibrant Carousel Controls */
        .custom-control {
            width: 60px;
            opacity: 1;
        }
        .control-icon {
            width: 45px;
            height: 45px;
            background-color: #740311;
            color: white;
            border-radius: 50%;
            box-shadow: 0 5px 15px rgba(116, 3, 17, 0.3);
            transition: all 0.3s ease;
            font-size: 1.2rem;
        }
        .custom-control:hover .control-icon {
            background-color: #edcd6c;
            color: #740311;
            transform: scale(1.15);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .testimonial-card { 
                height: 420px; /* Gives slightly more room for text on narrow screens */
                padding: 1.5rem !important;
            }
            .text-clamp { 
                -webkit-line-clamp: 5; 
            }
            
            /* Bring back and scale down the arrows for mobile */
            .custom-control { 
                width: 40px; 
                opacity: 0.9;
            }
            .control-icon {
                width: 35px;
                height: 35px;
                font-size: 0.9rem;
            }
            /* Push arrows to the absolute edges */
            .carousel-control-prev { left: -10px; }
            .carousel-control-next { right: -10px; }
        }
      `}</style>
    </section>
  );
}