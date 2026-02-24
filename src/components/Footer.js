import Link from 'next/link';
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary pt-5 pb-3">
      <div className="container">
        <div className="row">
          
          {/* Column 1: Brand & Socials */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{siteConfig.name} | Burdwan</h5>
            <p className="small">
              Freshly baked cakes, pastries & cookies.
              Custom orders for your special moments.
            </p>
            <p className="small">
              <a href={`https://wa.me/${siteConfig.contact.phone}?text=Hello%20Layer%20Bites,%20I%20have%20an%20enquiry%20regarding%20your%20products.`}  
                target="_blank" 
                rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href={siteConfig.social.facebook} className="text-secondary hover-gold transition"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href={siteConfig.social.instagram} className="text-secondary hover-gold transition"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-secondary text-decoration-none hover-gold">Home</Link></li>
              <li className="mb-2"><Link href="/#about" className="text-secondary text-decoration-none hover-gold">Our Story</Link></li>
              <li className="mb-2"><Link href="/bakery" className="text-secondary text-decoration-none hover-gold">Inventory</Link></li>
              <li className="mb-2"><Link href="/#contact" className="text-secondary text-decoration-none hover-gold">Enquiry</Link></li>
              <li className="mb-2"><Link href="/terms" className="text-secondary text-decoration-none hover-gold">Terms & Policies</Link></li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Locate Us</h5>
            <div className="ratio ratio-16x9 border border-secondary rounded">
              <p className="small">
                {siteConfig.contact.address}<br/>
                Bardhaman (Burdwan), West Bengal - 713101
              </p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d916.5139611237591!2d87.86966002840877!3d23.241054830961666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE0JzI3LjgiTiA4N8KwNTInMTMuMSJF!5e0!3m2!1sen!2sin!4v1771527684742!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="text-center small">
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved. || Designed by Biswadeep
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