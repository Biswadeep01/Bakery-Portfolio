"use client";
import ImageLoader from "./ImageLoader";

export default function ProductDetailsModal({ product, onClose, onOrderClick }) {
  if (!product) return null;

  const title = product.name || product.title;
  const description = product.desc; 
  
  // Normalize images array
  let images = [];
  if (Array.isArray(product.images)) {
    images = product.images;
  } else if (product.image) {
    images = [product.image];
  }

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050, backdropFilter: 'blur(5px)' }}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content overflow-hidden border-0 shadow-lg position-relative rounded-4">
          
          {/* Close Button */}
          <button 
            type="button" 
            className="btn-close position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle shadow opacity-100" 
            style={{zIndex: 10}}
            onClick={onClose}
          ></button>

          <div className="modal-body p-0">
            <div className="row g-0">
              
              {/* --- LEFT: CAROUSEL --- */}
              <div className="col-lg-6 bg-light d-flex align-items-center justify-content-center" style={{minHeight: '400px'}}>
                <div id="detailsCarousel" className="carousel slide w-100 h-100" data-bs-ride="carousel">
                  
                  {images.length > 1 && (
                      <div className="carousel-indicators">
                        {images.map((_, index) => (
                          <button 
                            key={index} type="button" data-bs-target="#detailsCarousel" data-bs-slide-to={index} 
                            className={index === 0 ? "active" : ""}
                          ></button>
                        ))}
                      </div>
                  )}

                  <div className="carousel-inner h-100">
                    {images.map((imgSrc, index) => (
                      <div key={index} className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}>
                         {/* Use ImageLoader for consistent loading effect */}
                         <div style={{height: '100%', minHeight: '500px'}}>
                            <ImageLoader 
                                src={imgSrc} 
                                alt={title} 
                                className="w-100 h-100" 
                            />
                         </div>
                      </div>
                    ))}
                  </div>

                  {images.length > 1 && (
                    <>
                      <button className="carousel-control-prev" type="button" data-bs-target="#detailsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#detailsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* --- RIGHT: SCROLLABLE CONTENT --- */}
              <div className="col-lg-6 bg-white">
                <div className="p-4 p-lg-5" style={{maxHeight: '90vh', overflowY: 'auto'}}>
                    
                    {product.badge && (
                        <span className="badge bg-danger align-self-start mb-3 px-3 py-2">{product.badge}</span>
                    )}

                    <h2 className="display-6 fw-bold mb-2 text-red" style={{fontFamily: 'var(--font-heading)'}}>{title}</h2>
                    <h3 className="text-secondary fw-light mb-4">{product.price}</h3>
                    
                    {/* Dynamic Product Specs */}
                    <div className="d-flex gap-4 mb-4 text-muted small border-top border-bottom py-3">
                        {product.weight && (
                             <div><i className="fas fa-weight-hanging text-gold me-2"></i>{product.weight}</div>
                        )}
                        {product.servings && (
                             <div><i className="fas fa-users text-gold me-2"></i>{product.servings}</div>
                        )}
                        <div><i className="fas fa-clock text-gold me-2"></i>24hr Notice</div>
                    </div>

                    {description && <p className="lead fs-6 mb-4 text-dark">{description}</p>}

                    {/* Flavors */}
                    {product.flavors && product.flavors.length > 0 && (
                        <div className="mb-4">
                            <h6 className="fw-bold text-uppercase small text-muted mb-2">Available Flavors</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {product.flavors.map((flav, i) => (
                                    <span key={i} className="badge bg-light text-dark border fw-normal p-2">
                                        {flav}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ACTION BUTTON */}
                    <button 
                        onClick={() => onOrderClick(product)}
                        className="btn btn-custom btn-lg w-100 py-3 fw-bold shadow-sm mb-5"
                    >
                        Order Now
                    </button>

                    {/* --- STATIC INFO SECTION (New Addition) --- */}
                    <div className="bg-light p-4 rounded-3 border">
                        <h5 className="fw-bold mb-3 fs-6 text-uppercase text-secondary">
                            <i className="fas fa-info-circle me-2"></i> Important Info
                        </h5>
                        
                        <div className="mb-3">
                            <h6 className="fw-bold small mb-1">🚚 Delivery & Pickup</h6>
                            <p className="small text-muted mb-0">
                                We offer home delivery within Burdwan (5km radius). Self-pickup is available from our Golden Lane studio. Please place orders at least 24 hours in advance.
                            </p>
                        </div>
                        
                        <div className="mb-3">
                            <h6 className="fw-bold small mb-1">🍰 Storage Instructions</h6>
                            <p className="small text-muted mb-0">
                                Keep refrigerated. Remove from fridge 30 minutes before cutting for the best taste and texture. Consume within 48 hours.
                            </p>
                        </div>

                        <div>
                            <h6 className="fw-bold small mb-1">✨ 100% Eggless Options</h6>
                            <p className="small text-muted mb-0">
                                All our cakes are available in eggless variants. We use premium Belgian chocolate and organic flour.
                            </p>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}