import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">

      {/* Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220 13% 13%) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col items-start text-left space-y-8">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold font-display">Premier B2B Manufacturer</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-bold tracking-tight text-balance">
                Premium Garment
                <br />
                <span
                  className="bg-gradient-accent bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                >
                  Accessories
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-xl">
                Manufacturing excellence in buttons, zippers, and hardware.
                <span className="block mt-2 text-foreground font-semibold">
                  Trusted by 500+ global fashion brands
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button
                size="lg"
                className="h-14 px-8 rounded-xl bg-gradient-accent text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-glow hover:-translate-y-0.5 transition-all"
                asChild
              >
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl border-2 font-semibold hover:bg-muted"
                asChild
              >
                <Link to="/products">
                  View Catalog
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-lg border-t border-border">
              <div className="space-y-1">
                <div className="text-3xl font-bold font-display text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-display text-accent">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-display text-accent">100M+</div>
                <div className="text-sm text-muted-foreground">Units Annually</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
              <div className="aspect-[4/3] bg-muted relative">
                <img
                  src="/images/hero-premium.png"
                  alt="Premium Garment Accessories - Buttons, Zippers, and Hardware"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;