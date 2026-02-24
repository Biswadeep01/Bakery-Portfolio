export const siteConfig = {
  name: "LayerBites",
  description: "Premium Artisan Bakery",
  link: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  
  contact: {
    // The raw number used for links (WhatsApp, tel:). No spaces or special characters.
    // Include your country code (e.g., 91 for India)
    phone: "919474894533", 
    
    // The formatted number used for displaying on the screen to users
    phoneDisplay: "+91 94748 94533",
    
    // You can also add other global things here later!
    email: "enquiry@layerbites.com",
    address: "Kalna Road, Badamtala, Curzon Gate",
    locality: "Burdwan",
    state: "West Bengal",
    pincode: "713101"
  },
  
  social: {
    instagram: "https://www.facebook.com/share/1CzpGvNQHf/?mibextid=wwXIfr",
    facebook: "https://www.instagram.com/lovebites167?igsh=MXJxMnp2ejNkODA2cA%3D%3D&utm_source=qr"
  }
};