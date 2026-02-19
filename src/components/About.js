import ImageLoader from "./ImageLoader";
import { siteConfig } from "@/config/site";

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
                    fallbackImage="/assets/placeholder.png"
                />
             </div>
          </div>

          {/* Right Side: Text */}
          <div className="col-md-6 reveal ps-md-5">
            <h3 className="display-5 fw-bold mb-4">Baking Memories, One Layer at a Time</h3>
            <h4 className="text-gold mb-3" style={{ color: 'var(--accent-gold)' }}>Tradition meets Elegance</h4>
            <p className="text-muted">
              At {siteConfig.name}, we believe that every bite should be a celebration. Based in the heart of Burdwan, we are a renowned bakery dedicated to crafting the finest sweet experiences for our community and beyond.
              Founded with a passion for pastry, {siteConfig.name} has been serving the community with joyful experience and confectionery since 2010.</p>
            <p>
              We strictly use the finest ingredients to ensure that every pastry, cookie, and cake is fresh, flavorful, and unforgettable.
              We are thrilled to offer our famous Thekua Box—crafted with love, tradition, and genuine festive flavors that take you back to your roots.
            </p>
            <p className="lead text-dark">
              Celebrating a Milestone? From weddings and anniversaries to birthdays, we specialize in custom orders to make your special occasions truly sweet.</p>
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