import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold font-display">Special B2B Pricing Available</span>
          </div>

          {/* Headline - Clean & Readable */}
          <div className="mb-10 text-center">
            <h2 className="font-bold font-display tracking-tight">
              <span className="block text-3xl md:text-5xl lg:text-6xl text-foreground mb-2">
                Ready to Place Your
              </span>
              <span
                className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-accent bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
              >
                Bulk Order?
              </span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 font-body">
            Get competitive wholesale pricing, custom manufacturing options, and fast delivery. Contact our B2B team today for exclusive rates and samples.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
            <Button size="lg" className="h-14 px-10 text-base font-semibold font-display rounded-xl bg-gradient-accent text-white shadow-lg shadow-accent/20 hover:shadow-glow hover:-translate-y-0.5 transition-all min-w-[200px]" asChild>
              <Link to="/contact">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold font-display rounded-xl border-2 hover:bg-muted min-w-[200px]" asChild>
              <a href={getWhatsAppUrl("I'd like to inquire about bulk orders")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Call Card */}
            <div className="p-8 rounded-2xl glass border border-border/50 flex items-center gap-5 hover-lift cursor-default">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white shrink-0 shadow-glow">
                <Phone className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-bold font-display uppercase tracking-wider mb-1">CALL US DIRECTLY</p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-bold font-display text-foreground hover:text-accent transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-2xl glass border border-border/50 flex items-center gap-5 hover-lift cursor-default">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white shrink-0 shadow-glow">
                <Mail className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-bold font-display uppercase tracking-wider mb-1">EMAIL US</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold font-display text-foreground hover:text-accent transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Footer Trust Strip */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 text-muted-foreground text-sm font-medium font-body">
            {['Free Samples Available', 'Custom Manufacturing', 'Quick Turnaround', 'Global Shipping'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
