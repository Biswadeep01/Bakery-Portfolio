import ImageLoader from './ImageLoader';

// Accept a new prop: onViewDetails
export default function ProductCard({ title, price, desc, image, badge, weight, servings, onOrder, onViewDetails }) {
  return (
    <div className="col-md-6 col-lg-4 reveal">
      <div 
        className="card h-100 border-0 shadow-sm position-relative product-hover" 
        style={{ borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s ease' }}
      >
        {badge && (
          <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 m-3 rounded-pill small fw-bold shadow-sm" style={{ zIndex: 10, fontSize: '0.75rem' }}>{badge}</div>
        )}

        {/* CLICKING IMAGE OPENS DETAILS */}
        <div style={{ height: '260px', cursor: 'pointer' }} className="overflow-hidden" onClick={onViewDetails}>
            <ImageLoader src={image} alt={title} className="w-100 h-100" />
            
            {/* Overlay Hint */}
            <div className="overlay d-flex justify-content-center align-items-center">
                <span className="btn btn-light btn-sm rounded-pill px-3">Quick View</span>
            </div>
        </div>

        <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
          <div onClick={onViewDetails} style={{cursor: 'pointer'}}>
            <h5 className="card-title fw-bold mb-2 text-red">{title}</h5>
            {desc && <p className="text-muted small mb-3">{desc}</p>}
            {/* Weight/Servings Display */}
            {(weight || servings) && (
                <div className="d-flex justify-content-center gap-3 mb-3 text-secondary small">
                    {weight && <span><i className="fas fa-weight-hanging me-1 text-danger"></i> {weight}</span>}
                    {servings && <span><i className="fas fa-users me-1 text-danger"></i> {servings}</span>}
                </div>
            )}
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span style={{ width: '20px', height: '1px', background: '#ccc' }}></span>
                <span className="fw-bold fs-5" style={{ color: 'var(--primary-red)' }}>{price}</span>
                <span style={{ width: '20px', height: '1px', background: '#ccc' }}></span>
            </div>
          </div>

          <button onClick={onOrder} className="btn btn-outline-danger rounded-pill w-100 fw-bold py-2">
            Order Now
          </button>
        </div>
      </div>
      <style jsx>{`
        .product-hover:hover { transform: translateY(-10px); box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important; }
        .overlay { position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.3); opacity: 0; transition: 0.3s; }
        .product-hover:hover .overlay { opacity: 1; }
      `}</style>
    </div>
  );
}