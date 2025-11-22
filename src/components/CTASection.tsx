import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Place Your <span className="text-accent">Bulk Order?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Get competitive wholesale pricing, custom manufacturing options, and fast delivery. Contact our B2B team today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="premium" size="xl" asChild>
              <Link to="/contact">
                Request Quote
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={getWhatsAppUrl("I'd like to inquire about bulk orders")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
