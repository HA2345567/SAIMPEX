import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ShieldCheck, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/lib/constants";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative bg-primary px-4 py-24 lg:py-32 xl:py-40 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* ═════ Cinematic Background ═════ */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(20_10%_12%)_0%,_hsl(20_10%_8%)_70%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container relative z-10 max-w-5xl mx-auto"
      >
        <div className="relative border border-accent/30 bg-primary/50 backdrop-blur-sm p-2 lg:p-3 shadow-2xl">
          <div className="border border-accent/20 px-8 py-16 lg:px-16 lg:py-24 xl:px-24 xl:py-28 flex flex-col items-center text-center space-y-10 lg:space-y-12 relative overflow-hidden">

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 border-l-2 border-t-2 border-accent/60" />
            <div className="absolute top-0 right-0 w-10 h-10 lg:w-12 lg:h-12 border-r-2 border-t-2 border-accent/60" />
            <div className="absolute bottom-0 left-0 w-10 h-10 lg:w-12 lg:h-12 border-l-2 border-b-2 border-accent/60" />
            <div className="absolute bottom-0 right-0 w-10 h-10 lg:w-12 lg:h-12 border-r-2 border-b-2 border-accent/60" />

            {/* Exclusive Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex flex-col items-center gap-3"
            >
              <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-accent animate-pulse" strokeWidth={1} />
              <span className="text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase text-accent/80">
                Trade Only • Wholesale
              </span>
            </motion.div>

            {/* Main Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6 lg:space-y-8 max-w-3xl"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-luxury text-white leading-[1.05]">
                An Invitation to <br />
                <span className="italic text-accent">Excellence</span><span className="hidden lg:inline">.</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                Join the elite circle of global fashion houses who trust S. A. IMPEX.
                Secure priority manufacturing slots for your upcoming collections.
              </p>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 w-full justify-center pt-4 lg:pt-8"
            >
              <Button
                size="lg"
                className="h-14 lg:h-16 px-10 lg:px-14 bg-accent text-primary hover:bg-accent-hover text-sm lg:text-base tracking-wide shadow-gold hover:shadow-gold-subtle transition-all duration-500 rounded-sm font-bold uppercase min-w-[200px] lg:min-w-[240px] group"
                asChild
              >
                <Link to="/contact">
                  Initiate Partnership
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 lg:h-16 px-10 lg:px-14 border-white/20 text-white/80 hover:text-white hover:border-accent/40 bg-transparent text-sm lg:text-base tracking-wide transition-all duration-500 rounded-sm font-medium min-w-[200px] lg:min-w-[240px] group"
                asChild
              >
                <a href={getWhatsAppUrl("Premium Inquiry")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Concierge Support
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 lg:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 text-center w-full max-w-3xl opacity-70"
            >
              {[
                { icon: ShieldCheck, label: "NDA Protected" },
                { icon: Sparkles, label: "Priority Production" },
                { icon: ArrowRight, label: "Global Shipping" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                  <item.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white/60 group-hover:text-white/80 transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Bottom Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 lg:mt-14"
        >
          <div className="inline-flex items-center gap-3 text-white/30">
            <span className="w-12 h-px bg-accent/30" />
            <span className="font-luxury italic text-sm lg:text-base">Est. 2005 • Delhi, India</span>
            <span className="w-12 h-px bg-accent/30" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
