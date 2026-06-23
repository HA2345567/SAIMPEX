import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  whatsapp: z.string().trim()
    .max(20, "Phone number is too long")
    .refine((val) => val === "" || /^\+?[0-9\s\-()]+$/.test(val), {
      message: "Please enter a valid phone number (digits, spaces, hyphens only)",
    })
    .optional(),
  product: z.string().trim().max(100, "Product name is too long").optional(),
  quantity: z.string().trim().max(50, "Quantity is too long").optional(),
  sampleRequest: z.boolean(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    product: "",
    quantity: "",
    sampleRequest: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = "Contact Us | SAIMPEX - Premium Button Wholesale";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Save inquiry to database
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          whatsapp: formData.whatsapp,
          product: formData.product,
          quantity: formData.quantity,
          sample_request: formData.sampleRequest,
          message: formData.message,
          status: 'new'
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to save inquiry');
      }

      const inquiryData = await response.json();
      console.log("Inquiry saved:", inquiryData);

      // Send email notification
      try {
        const { error: emailError } = await supabase.functions.invoke('send-inquiry-email', {
          body: {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            whatsapp: formData.whatsapp,
            product: formData.product,
            quantity: formData.quantity,
            sampleRequest: formData.sampleRequest,
            message: formData.message,
          }
        });

        if (emailError) {
          console.error("Email error:", emailError);
        }
      } catch (err) {
        console.error("Failed to invoke send-inquiry-email function:", err);
      }

      toast({
        title: "✓ Inquiry Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form and errors
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        product: "",
        quantity: "",
        sampleRequest: false,
        message: "",
      });
      setErrors({});

    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch for bulk orders, custom manufacturing, or any inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href={getWhatsAppUrl("Hello, I have an inquiry")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {COMPANY_INFO.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        {COMPANY_INFO.address.line1}<br />
                        {COMPANY_INFO.address.line2}<br />
                        {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postal}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us Your Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Buyer Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? "border-destructive" : ""}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="buyer@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="+91 1234567890"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={errors.whatsapp ? "border-destructive" : ""}
                      />
                      {errors.whatsapp && (
                        <p className="text-sm text-destructive">{errors.whatsapp}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interested In</Label>
                      <Input
                        id="product"
                        name="product"
                        placeholder="e.g., Plastic Buttons"
                        value={formData.product}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity Required</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        placeholder="e.g., 10,000 pieces"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Requirements *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your requirements, including size, color, material preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sampleRequest"
                      checked={formData.sampleRequest}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, sampleRequest: checked as boolean }))
                      }
                    />
                    <Label htmlFor="sampleRequest" className="font-normal cursor-pointer">
                      I would like to order sample packs
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your inquiry will be saved and our team will contact you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
