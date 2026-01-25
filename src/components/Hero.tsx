import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Star, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-background"> {/* Warm light grey background */}

      {/* Left Column: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-24 pt-28 lg:pt-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 lg:space-y-10"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-[1.1] tracking-tight">
            The ultimate <br />
            <span className="italic font-light text-accent">garment collection.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground/80 font-sans max-w-md leading-relaxed">
            S. A. IMPEX delivers world-class garment accessories, including premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands.
          </p>

          {/* Social Proof */}


          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Button
              size="lg"
              className="h-14 px-8 rounded-none bg-primary text-white hover:bg-primary/90 font-medium shadow-xl shadow-primary/20 transition-all text-base gap-2 group"
              asChild
            >
              <Link to="/contact">
                Inquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-none border-2 border-primary/20 text-primary font-medium hover:border-primary hover:bg-transparent transition-all text-base gap-2"
              asChild
            >
              <Link to="/catalog">
                <Layers className="w-4 h-4" />
                View Catalog
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Full Height Image */}
      <div className="w-full lg:w-1/2 bg-[#EBE9E4] relative h-[50vh] lg:h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-luxury-composition.png"
            alt="Luxury Garment Accessories Composition"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Subtle Gradient Overlay for blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EBE9E4]/20 via-transparent to-transparent pointer-events-none" />
      </div>

    </div>
  );
};

export default Hero;