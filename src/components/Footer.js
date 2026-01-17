import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary pt-5 pb-3">
      <div className="container">
        <div className="row">
          
          {/* Column 1: Brand & Socials */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Layer Bites</h5>
            <p className="small">Crafting sweet memories since 2010. Visit us for the best cakes, pastries, and savory treats in town.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-secondary hover-gold transition"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="text-secondary hover-gold transition"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="text-secondary hover-gold transition"><i className="fab fa-twitter fa-lg"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-secondary text-decoration-none hover-gold">Home</Link></li>
              <li className="mb-2"><Link href="/#about" className="text-secondary text-decoration-none hover-gold">About Us</Link></li>
              <li className="mb-2"><Link href="/#cakes" className="text-secondary text-decoration-none hover-gold">Menu</Link></li>
              <li className="mb-2"><Link href="/#contact" className="text-secondary text-decoration-none hover-gold">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Locate Us</h5>
            <div className="ratio ratio-16x9 border border-secondary rounded">
              <p className="small">
                123 Baker Street, Golden Lane,<br/>
                Bardhaman (Burdwan), West Bengal - 713101<br/>
                (Near Curzon Gate) {/* Adding a landmark is great for Local SEO */}
              </p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792576082498!2d72.87765631490117!3d19.07609098708791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625562772599!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="text-center small">
          © {new Date().getFullYear()} Layer Bites. All Rights Reserved. || Designed by Biswadeep
        </div>
      </div>
      
      {/* Helper style for hover effect */}
      <style jsx>{`
        .hover-gold:hover { color: var(--accent-gold) !important; }
        .transition { transition: color 0.3s ease; }
      `}</style>
    </footer>
  );
}