import ImageLoader from "./ImageLoader";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Image */}
          <div className="col-md-6 reveal-left mb-4 mb-md-0">
             <div className="shadow-lg rounded overflow-hidden">
                <ImageLoader 
                    src="/assets/about.png" 
                    alt="Baker decorating cake" 
                    className=""
                />
             </div>
          </div>

          {/* Right Side: Text */}
          <div className="col-md-6 reveal ps-md-5">
            <h2 className="display-5 fw-bold mb-4">Our Story</h2>
            <h4 className="text-gold mb-3" style={{ color: 'var(--accent-gold)' }}>Tradition meets Elegance</h4>
            <p className="lead text-muted">Founded with a passion for pastry, Layer Bites has been serving the community with premium artisan breads and confectionery since 2010.</p>
            <p>We believe in using only the finest ingredients—Belgian chocolate, organic flour, and farm-fresh fruits. Our recipes are a blend of classic European techniques and local flavors.</p>
            
            <div className="mt-4 row">
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-leaf me-3 fs-3" style={{ color: 'var(--deep-green)' }}></i>
                  <div>
                    <strong>Organic</strong><br/>
                    <small className="text-muted">Local Sourcing</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-heart me-3 fs-3" style={{ color: 'var(--primary-red)' }}></i>
                  <div>
                    <strong>Handmade</strong><br/>
                    <small className="text-muted">Baked Daily</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}