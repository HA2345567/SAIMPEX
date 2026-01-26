import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, ArrowRight, ShieldCheck, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, getWhatsAppUrl } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="bg-stone-950 px-4 py-24 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Texture - Luxury Noise/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 to-stone-950" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

      {/* Decorative Gold Glows */}
      <div className="absolute top-0 center w-full max-w-3xl h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 max-w-5xl">

        {/* The "Invitation" Card */}
        <div className="relative border border-accent/30 bg-stone-950/50 backdrop-blur-sm p-2 md:p-3 shadow-2xl shadow-black/50">
          {/* Inner Gold Border */}
          <div className="border border-accent/20 px-8 py-20 md:px-24 md:py-24 flex flex-col items-center text-center space-y-10 relative overflow-hidden">

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent/60" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-accent/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/60" />

            {/* Exclusive Badge */}
            <div className="inline-flex flex-col items-center gap-2">
              <Crown className="w-8 h-8 text-accent animate-pulse" strokeWidth={1} />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/80">
                Trade Only • Wholesale
              </span>
            </div>

            {/* Main Typography */}
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                An Invitation to <br />
                <span className="text-accent italic">Excellence.</span>
              </h2>
              <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed">
                Join the elite circle of global fashion houses who trust S.A. Impex.
                Secure priority manufacturing slots for your upcoming collections.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center pt-8">
              <Button size="lg" className="h-16 px-12 bg-accent text-white hover:bg-accent/80 text-lg tracking-wide shadow-[0_0_30px_-5px_hsl(35,45%,55%,0.3)] transition-all duration-500 rounded-sm font-serif min-w-[220px]" asChild>
                <Link to="/contact">
                  Initiate Partnership
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 border-stone-800 text-stone-400 hover:text-white hover:border-accent/40 bg-transparent text-lg tracking-wide transition-all duration-500 rounded-sm font-serif min-w-[220px]" asChild>
                <a href={getWhatsAppUrl("Premium Inquiry")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-3" /> Concierge Support
                </a>
              </Button>
            </div>

            {/* Footer Trust Indicators */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center w-full max-w-3xl opacity-60">
              {[
                { icon: ShieldCheck, label: "NDA Protected" },
                { icon: Crown, label: "Priority Production" },
                { icon: ArrowRight, label: "Global Shipping" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                  <item.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" strokeWidth={1} />
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-300">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Signature */}
        <div className="text-center mt-12 opacity-30">
          <p className="font-serif italic text-white text-sm">Est. 2020 • Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
