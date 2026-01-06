// Company contact information constants
export const COMPANY_INFO = {
  name: "SAIMPEX",
  phone: "+91 83830 37041",
  whatsapp: "918383037041", // Without + or spaces for WhatsApp URL
  whatsappDisplay: "+91 83830 37041", // For display purposes
  email: "saimpex2023@gmail.com",
  address: {
    line1: "276, 3rd floor, LHS",
    line2: "Govindpuri, New Delhi",
    country: "India",
    postal: "110044",
  },
} as const;

// WhatsApp URL helper
export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};
