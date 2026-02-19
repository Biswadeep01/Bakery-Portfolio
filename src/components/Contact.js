"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "1", 
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
        tempErrors.name = "Name is required";
        isValid = false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
        tempErrors.phone = "Phone number is required";
        isValid = false;
    } else if (!formData.phone.match(phoneRegex)) {
        tempErrors.phone = "Please enter a valid 10-digit phone number";
        isValid = false;
    }

    if (!formData.message.trim()) {
        tempErrors.message = "Message cannot be empty";
        isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  // Helper to make the message readable
  const getInquiryLabel = (val) => {
      switch(val) {
          case "1": return "Birthday Order";
          case "2": return "Anniversary Order";
          case "3": return "Corporate Event";
          case "4": return "General Query";
          default: return "General Query";
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        setIsSubmitting(true);
        
        const phoneNumber = siteConfig.contact.phone; // Use the phone number from siteConfig
        const inquiryType = getInquiryLabel(formData.type);

        // Construct the message
        const whatsappMessage = `
*New Inquiry from Website!*
---------------------------
Name: ${formData.name}
Phone: ${formData.phone}
Type: ${inquiryType}
Message:
${formData.message}
        `.trim();
        setTimeout(() => {
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
            
            setIsSuccess(true);
            setIsSubmitting(false);
            
            // Reset form
            setFormData({ name: "", phone: "", type: "1", message: "" });
            
            // Hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 800);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row shadow-lg rounded overflow-hidden">
          
          {/* Form Side */}
          <div className="col-lg-7 p-5 bg-white reveal-left">
            <h2 className="mb-4">Get in Touch</h2>
            
            {/* Success Alert */}
            {isSuccess && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <div>Redirecting to WhatsApp... Message prepared!</div>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <input 
                    type="text" name="name" 
                    className={`form-control ${errors.name ? "is-invalid" : ""}`} 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div className="col-md-6">
                  <input 
                    type="tel" name="phone" 
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`} 
                    placeholder="Your phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                   <div className="invalid-feedback">{errors.phone}</div>
                </div>
                <div className="col-12">
                  <select name="type" className="form-select" value={formData.type} onChange={handleChange}>
                    <option value="1">Birthday Order</option>
                    <option value="2">Anniversary Order</option>
                    <option value="3">Corporate Event</option>
                    <option value="4">General Query</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea 
                    name="message" 
                    className={`form-control ${errors.message ? "is-invalid" : ""}`} 
                    rows="5" 
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                   <div className="invalid-feedback">{errors.message}</div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-custom w-100" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <span><i className="fas fa-spinner fa-spin me-2"></i> Opening WhatsApp...</span>
                    ) : (
                        <span>Send Message <i className="fab fa-whatsapp ms-1"></i></span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Info Side (Unchanged) */}
          <div className="col-lg-5 p-5 text-white d-flex flex-column justify-content-center reveal" 
               style={{ backgroundColor: 'var(--primary-red)' }}>
            <h3>Contact Info</h3>
            <p className="mb-4" style={{ color: 'var(--accent-gold)' }}>We'd love to hear from you.</p>
            <div className="d-flex mb-4">
              <i className="fas fa-map-marker-alt fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>{siteConfig.contact.address}<br/>Burdwan, West Bengal 713101</p>
            </div>
            <div className="d-flex mb-4">
              <i className="fas fa-phone fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>{siteConfig.contact.phoneDisplay}</p>
            </div>
            <div className="d-flex mb-4">
              <i className="fab fa-whatsapp fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>{siteConfig.contact.phoneDisplay} (WhatsApp)</p>
            </div>
            <div className="d-flex">
              <i className="fas fa-envelope fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}