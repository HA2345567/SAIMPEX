import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* ═════ Ambient Luxury Background ═════ */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ═════ Editorial Grid Lines (Decorative) ═════ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/30" />
        <div className="hidden lg:block absolute left-1/4 top-1/3 w-32 h-px bg-accent/20" />
        <div className="hidden lg:block absolute right-1/4 top-2/3 w-24 h-px bg-accent/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-24">

          {/* ═════ Left Column: Editorial Content ═════ */}
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <div className="space-y-8 lg:space-y-12">

              {/* Eyebrow Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-3"
              >
                <span className="w-12 h-px bg-accent" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                  Est. 2005 • Delhi
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-luxury text-primary leading-[0.95] tracking-tight">
                  The Art of
                  <br />
                  <span className="italic text-accent">Excellence</span>
                  <span className="hidden sm:inline">.</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="text-base sm:text-lg text-muted-foreground max-w-md font-light leading-relaxed"
              >
                S. A. IMPEX crafts world-class garment accessories — premium buttons, zippers, buckles, and hardware — for the world's finest fashion houses.
              </motion.p>

              {/* CTA Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="h-14 px-10 bg-accent text-primary hover:bg-accent-hover font-semibold transition-all duration-500 rounded-sm text-sm tracking-wide shadow-gold-subtle group"
                  asChild
                >
                  <Link to="/contact">
                    Begin Partnership
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 border-border text-primary hover:border-accent hover:text-accent bg-transparent font-medium transition-all duration-500 rounded-sm text-sm tracking-wide"
                  asChild
                >
                  <Link to="/catalog">
                    View Collections
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="flex items-center gap-8 pt-6 border-t border-border/50"
              >
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-luxury text-primary">100+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Global Brands</div>
                </div>
                <div className="w-px h-12 bg-border/50 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-luxury text-primary">50+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Countries</div>
                </div>
                <div className="w-px h-12 bg-border/50 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-luxury text-accent">ISO</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Certified</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ═════ Right Column: Editorial Image ═════ */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-sm"
            >
              {/* Image Container with Border */}
              <div className="absolute inset-0 border border-border/50 rounded-sm overflow-hidden">
                <img
                  src="/images/hero-luxury-composition.png"
                  alt="Luxury Garment Hardware Collection"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Floating Gold Frame Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/40 rounded-tr-sm pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/40 rounded-bl-sm pointer-events-none" />

              {/* Corner Numbers (Editorial Detail) */}
              <div className="absolute top-4 left-4 text-xs font-mono text-white/40 mix-blend-overlay">
                01
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-white/40 mix-blend-overlay">
                SAIMPEX
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="absolute -bottom-4 lg:-bottom-6 left-1/2 lg:left-auto lg:right-8 -translate-x-1/2 lg:translate-x-0 bg-card border border-border/50 px-6 py-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Premium</div>
                  <div className="text-sm font-luxury text-primary">Bespoke Orders</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
