"use client";

import ImageLoader from "@/components/ImageLoader";

export default function CakeItem({ cake, onOrder, onViewDetails }) {
    // Safety check: Ensure images array exists
    const imageSrc = cake.images && cake.images.length > 0 ? cake.images[0] : '/assets/about.png';

    return (
        <div 
            className="card h-100 border-0 shadow-sm hover-lift bg-white" 
            style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease' }}
        >
            {/* Clickable Image Area */}
            <div 
                style={{height: '260px', cursor: 'pointer', position: 'relative'}} 
                onClick={onViewDetails} 
                className="product-image-container"
            >
                <ImageLoader 
                    src={imageSrc} 
                    alt={cake.name} 
                    className="w-100 h-100" 
                />
                
                <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100" 
                     style={{background: 'rgba(0,0,0,0.2)', opacity: 0, transition: '0.3s'}}>
                    <span className="btn btn-light btn-sm rounded-pill px-3 shadow">Quick View</span>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <div style={{cursor: 'pointer'}} onClick={onViewDetails}>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0 text-red" style={{fontFamily: 'var(--font-heading)'}}>{cake.name}</h5>
                        <span className="badge bg-success">{cake.price}</span>
                    </div>
                    
                    <div className="d-flex gap-3 mb-3 small text-muted">
                        {cake.weight && <span><i className="fas fa-weight-hanging text-danger me-1"></i>{cake.weight}</span>}
                        {cake.servings && <span><i className="fas fa-users text-danger me-1"></i>{cake.servings}</span>}
                    </div>

                    <div className="mb-4">
                        <small className="text-muted d-block mb-1 text-uppercase fw-bold" style={{fontSize: '0.7rem'}}>Flavors</small>
                        <div>
                            {cake.flavors && cake.flavors.map((flav, i) => (
                                <span key={i} className="badge bg-light text-dark border me-1 mb-1 fw-normal" style={{fontSize: '0.75rem'}}>
                                    {flav}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <button onClick={onOrder} className="btn btn-outline-danger w-100 rounded-pill fw-bold">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Styled JSX only works in Client Components */}
            <style jsx>{`
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
                .product-image-container:hover .overlay { opacity: 1 !important; }
            `}</style>
        </div>
    );
}