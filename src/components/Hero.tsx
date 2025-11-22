import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle, CheckCircle, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { getWhatsAppUrl } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-mesh">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium buttons and garment accessories"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Trusted by 500+ Global Brands</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance">
                Premium Button 
                <span className="block text-accent">Wholesale</span>
                <span className="text-4xl md:text-5xl lg:text-6xl block mt-2 text-muted-foreground font-sans font-medium">
                  & Garment Accessories
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Supplying high-quality buttons and accessories to garment manufacturers, exporters, and fashion brands worldwide. Custom manufacturing with quick turnaround times.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">MOQ from 5K pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="font-medium">7-14 Days Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="font-medium">ISO Certified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" size="xl" className="group shadow-glow" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="/catalog.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </a>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-4 pt-4">
              <Button variant="whatsapp" size="lg" className="shadow-md" asChild>
                <a href={getWhatsAppUrl("Hello, I'd like to inquire about your products")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Quick Response Guaranteed</p>
                <p className="text-xs">Average reply time: 2 hours</p>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6 animate-fade-in delay-300">
            <div className="glass p-8 rounded-2xl card-hover">
              <div className="text-5xl font-display font-bold text-accent mb-2">500+</div>
              <p className="text-lg font-semibold mb-1">Global Clients</p>
              <p className="text-sm text-muted-foreground">Trusted manufacturers worldwide</p>
            </div>
            <div className="glass p-8 rounded-2xl card-hover mt-8">
              <div className="text-5xl font-display font-bold text-accent mb-2">50M+</div>
              <p className="text-lg font-semibold mb-1">Buttons Produced</p>
              <p className="text-sm text-muted-foreground">Annual production capacity</p>
            </div>
            <div className="glass p-8 rounded-2xl card-hover -mt-4">
              <div className="text-5xl font-display font-bold text-accent mb-2">15+</div>
              <p className="text-lg font-semibold mb-1">Years Experience</p>
              <p className="text-sm text-muted-foreground">In button manufacturing</p>
            </div>
            <div className="glass p-8 rounded-2xl card-hover mt-4">
              <div className="text-5xl font-display font-bold text-accent mb-2">100%</div>
              <p className="text-lg font-semibold mb-1">Quality Assured</p>
              <p className="text-sm text-muted-foreground">ISO certified production</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
