import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="space-y-8 lg:order-1 order-2">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-primary/20" />
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Est. 2005 • New Delhi
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-luxury text-primary leading-[1.1] tracking-tight"
            >
              Premium Hardware
              <br />
              <span className="font-light text-primary/40">for Global Fashion</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              We manufacture and export world-class garment accessories —
              buttons, zippers, buckles, and hardware — for leading fashion houses worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
                asChild
              >
                <Link to="/contact">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-border text-primary hover:bg-secondary font-medium text-sm transition-colors"
                asChild
              >
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-10 pt-8"
            >
              {[
                { value: "100+", label: "Brands" },
                { value: "50+", label: "Countries" },
                { value: "ISO", label: "Certified" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-luxury text-primary">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2 order-1"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src="/images/hero-luxury-composition.png"
                alt="Premium garment hardware collection"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
