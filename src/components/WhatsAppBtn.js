import {siteConfig} from '@/config/site';

export default function WhatsAppBtn() {
  return (
    <a href={`https://wa.me/${siteConfig.contact.phone}?text=Hello%20${siteConfig.name},%20I%20have%20an%20enquiry%20regarding%20your%20products.`} 
       className="whatsapp-float" 
       target="_blank" 
       rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
    </a>
  );
}