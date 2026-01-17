"use client";
import { testimonials } from "@/data/testimonialsData";

export default function Testimonials() {
  
  // Helper to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? "text-warning" : "text-muted"}`}
        style={{ color: i < rating ? "#edcd6c" : "#e0e0e0" }} // Gold color for active stars
      ></i>
    ));
  };

  return (
    <section className="section-padding bg-light position-relative">
      
      {/* Background decoration (optional) */}
      <div className="position-absolute top-0 start-0 p-4 opacity-25">
         <i className="fas fa-quote-left text-danger display-1"></i>
      </div>

      <div className="container">
        <div className="text-center mb-5 reveal">
            <h2 className="fw-bold">Client Love</h2>
            <div style={{height: '3px', width: '60px', background: 'var(--primary-red)', margin: '10px auto'}}></div>
            <p className="text-muted">What our happy customers say about us.</p>
        </div>

        <div id="testimonialCarousel" className="carousel slide reveal" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm p-4 text-center" style={{ borderRadius: '20px' }}>
                      
                      {/* User Image */}
                      <div className="mb-3">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="rounded-circle border border-3 border-white shadow"
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Review Text */}
                      <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                      <p className="text-muted small mb-2">{item.location}</p>
                      
                      <div className="mb-3">
                        {renderStars(item.rating)}
                      </div>

                      <p className="fst-italic text-dark fs-5">
                        "{item.text}"
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          </button>

        </div>
      </div>
    </section>
  );
}