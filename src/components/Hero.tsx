import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { getWhatsAppUrl } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium buttons and garment accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent">
            <span className="text-accent font-semibold text-sm">Trusted B2B Partner Since 2010</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Premium Button Wholesale &<br />
            <span className="text-accent">Garment Accessories</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Supplying high-quality buttons and accessories to garment manufacturers, exporters, and fashion brands worldwide. Custom manufacturing available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="premium" size="xl" className="group" asChild>
              <Link to="/products">
                View Our Catalog
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="/catalog.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download PDF Catalog
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={getWhatsAppUrl("Hello, I'd like to inquire about your products")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <span className="text-primary-foreground/70 text-sm">Quick Response • Custom Orders • Export Ready</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
