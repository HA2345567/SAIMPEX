import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Special B2B Pricing Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
              Ready to Place Your <span className="text-accent">Bulk Order?</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Get competitive wholesale pricing, custom manufacturing options, and fast delivery. Contact our B2B team today for exclusive rates and samples.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="premium" size="xl" className="group shadow-glow-lg" asChild>
              <Link to="/contact">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" className="shadow-xl" asChild>
              <a href={getWhatsAppUrl("I'd like to inquire about bulk orders")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass p-6 rounded-2xl space-y-4 border border-primary-foreground/10 hover:border-accent/50 transition-all card-hover">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 font-medium">Call Us Directly</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-primary-foreground hover:text-accent transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl space-y-4 border border-primary-foreground/10 hover:border-accent/50 transition-all card-hover">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 font-medium">Email Us</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold text-primary-foreground hover:text-accent transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full" />
              <span>Free Samples Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full" />
              <span>Custom Manufacturing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full" />
              <span>Quick Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full" />
              <span>Global Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
