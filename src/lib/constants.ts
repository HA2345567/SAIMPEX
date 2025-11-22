// Company contact information constants
export const COMPANY_INFO = {
  name: "SAIMPEX",
  phone: "+91 123 456 7890",
  whatsapp: "911234567890", // Without + or spaces for WhatsApp URL
  whatsappDisplay: "+91 123 456 7890", // For display purposes
  email: "info@saimpex.com",
  address: {
    line1: "123 Industrial Area",
    line2: "Mumbai, Maharashtra",
    country: "India",
    postal: "400001",
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
