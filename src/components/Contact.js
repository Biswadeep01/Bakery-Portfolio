"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "1",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

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
    // Simple Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
        tempErrors.email = "Please enter a valid email";
        isValid = false;
    }
    if (!formData.message.trim()) {
        tempErrors.message = "Message cannot be empty";
        isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        // Here you would normally send data to API
        console.log("Submitting:", formData);
        setIsSuccess(true);
        // Reset form
        setFormData({ name: "", email: "", type: "1", message: "" });
        
        // Hide success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
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
                    <div>Message sent successfully! We will call you soon.</div>
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
                    type="email" name="email" 
                    className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                   <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="col-12">
                  <select name="type" className="form-select" value={formData.type} onChange={handleChange}>
                    <option value="1">Wedding Order</option>
                    <option value="2">Corporate Event</option>
                    <option value="3">General Query</option>
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
                  <button type="submit" className="btn btn-custom w-100">Send Message</button>
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
              <p>123 Baker Street, Golden Lane,<br/>Burdwan, West Bengal 713101</p>
            </div>
            <div className="d-flex mb-4">
              <i className="fas fa-phone fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>+91 98765 43210</p>
            </div>
            <div className="d-flex mb-4">
              <i className="fab fa-whatsapp fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>+91 98765 43210 (WhatsApp)</p>
            </div>
            <div className="d-flex">
              <i className="fas fa-envelope fs-4 me-3" style={{ color: 'var(--accent-gold)' }}></i>
              <p>hello@serasoven.in</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}