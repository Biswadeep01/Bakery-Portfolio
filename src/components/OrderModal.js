"use client";
import { useState } from "react";

export default function OrderModal({ cake, onClose }) {
  const hasFlavors = cake.flavors && cake.flavors.length > 1;
  
  const [selectedFlavor, setSelectedFlavor] = useState(
    cake.flavors && cake.flavors.length > 0 ? cake.flavors[0] : ""
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // New: State for Errors
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "1",
    date: "",
    instructions: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing again
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // 1. Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // 2. Phone Validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
      isValid = false;
    }

    // 3. Address Validation
    if (formData.address.trim().length < 10) {
      newErrors.address = "Address is too short (min 10 chars)";
      isValid = false;
    }

    // 4. Date Validation (Cannot be in the past)
    if (!formData.date) {
        newErrors.date = "Please select a date";
        isValid = false;
    } else {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to midnight for fair comparison
        if (selectedDate < today) {
            newErrors.date = "Date cannot be in the past";
            isValid = false;
        }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Run Validation
    if (!validateForm()) {
        return; // Stop here if validation fails
    }

    setIsSubmitting(true);

    const phoneNumber = "919474894533"; // Replace with your WhatsApp number in international format
    const imagePath = Array.isArray(cake.images) ? cake.images[0] : cake.images;
    const currentDomain = typeof window !== 'undefined' ? window.location.origin : '';
    const fullImageLink = imagePath.startsWith('http') 
        ? imagePath 
        : `${currentDomain}${imagePath}`;

    const flavorLine = (cake.flavors && cake.flavors.length > 0) 
        ? `*Flavor:* ${hasFlavors ? selectedFlavor : cake.flavors[0]}` 
        : "";

    const message = `
*New Order Request!* 🛍️
--------------------
*Item:* ${cake.name}
*Price:* ${cake.price}
${flavorLine}
*Ref Image:* ${fullImageLink}

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Date Needed: ${formData.date}
Quantity: ${formData.quantity}
Note: ${formData.instructions}
    `.trim();

    setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
        setIsSubmitting(false);
    }, 500);
  };

  if (!cake) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content overflow-hidden border-0 shadow-lg">
          
          <div className="modal-header text-white" style={{ backgroundColor: '#740311' }}>
            <h5 className="modal-title">Order: {cake.name}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-0">
            <div className="row g-0">
              
              <div className="col-md-5 bg-light d-none d-md-block">
                <img 
                  src={Array.isArray(cake.images) ? cake.images[0] : cake.images} 
                  className="w-100 h-100" 
                  alt="Product" 
                  style={{ objectFit: 'cover', minHeight: '300px' }}
                />
              </div>

              <div className="col-md-7 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-red mb-0">{cake.price}</h4>
                </div>

                <form onSubmit={handleWhatsAppSubmit} noValidate>
                    
                    {hasFlavors && (
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-red">Select Flavor</label>
                            <select 
                                className="form-select form-select-sm" 
                                value={selectedFlavor} 
                                onChange={(e) => setSelectedFlavor(e.target.value)}
                            >
                                {cake.flavors.map((flav, index) => (
                                    <option key={index} value={flav}>{flav}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="row mb-2">
                        <div className="col-6">
                            <label className="form-label small fw-bold">Name <span className="text-danger">*</span></label>
                            <input 
                                type="text" name="name" 
                                className={`form-control form-control-sm ${errors.name ? "is-invalid" : ""}`} 
                                onChange={handleChange} 
                            />
                            <div className="invalid-feedback">{errors.name}</div>
                        </div>
                        <div className="col-6">
                            <label className="form-label small fw-bold">Phone <span className="text-danger">*</span></label>
                            <input 
                                type="tel" name="phone" 
                                className={`form-control form-control-sm ${errors.phone ? "is-invalid" : ""}`} 
                                onChange={handleChange} 
                            />
                            <div className="invalid-feedback">{errors.phone}</div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label className="form-label small fw-bold">Delivery Address <span className="text-danger">*</span></label>
                        <textarea 
                            name="address" 
                            className={`form-control form-control-sm ${errors.address ? "is-invalid" : ""}`} 
                            rows="2" onChange={handleChange} placeholder="Street, Landmark, Pincode"
                        ></textarea>
                         <div className="invalid-feedback">{errors.address}</div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-6">
                            <label className="form-label small fw-bold">Quantity</label>
                            <input type="number" name="quantity" min="1" className="form-control form-control-sm" defaultValue="1" onChange={handleChange} />
                        </div>
                        <div className="col-6">
                            <label className="form-label small fw-bold">Date Needed <span className="text-danger">*</span></label>
                            <input 
                                type="date" name="date" 
                                className={`form-control form-control-sm ${errors.date ? "is-invalid" : ""}`} 
                                onChange={handleChange} 
                            />
                            <div className="invalid-feedback">{errors.date}</div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label small fw-bold">Special Note</label>
                        <input type="text" name="instructions" className="form-control form-control-sm" placeholder="Message on cake, allergies, etc." onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-success w-100 fw-bold" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span><i className="fas fa-spinner fa-spin me-2"></i> Redirecting...</span>
                        ) : (
                            <span><i className="fab fa-whatsapp me-2"></i> Place Order</span>
                        )}
                    </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}