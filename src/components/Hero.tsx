import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">
      {/* Cinematic ambient background styling */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-gradient-mesh opacity-40 pointer-events-none -z-10" />
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none -z-10" />

      {/* Left Column: Split-half with mathematically aligned content wrapper */}
      <div className="w-full lg:w-1/2 flex items-center justify-end bg-background relative z-10 border-r border-[#D6D3CD]">
        <div className="w-full lg:max-w-[640px] ml-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-32">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              {/* Editorial Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-[1.05] tracking-tight">
                The ultimate <br />
                <span className="italic font-light text-accent">garment accessories.</span>
              </h1>

              {/* Description Subtext */}
              <p className="text-base md:text-lg text-stone-600 font-sans leading-relaxed font-light">
                S. A. IMPEX delivers world-class garment accessories, including premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands.
              </p>
            </motion.div>

            {/* Luxury CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="h-14 px-8 bg-primary text-white hover:bg-accent hover:text-white font-medium shadow-md shadow-primary/10 transition-all text-sm gap-2 group font-serif tracking-wider"
                asChild
              >
                <Link to="/contact">
                  Initiate Inquiry
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 border border-border text-primary font-medium hover:border-accent hover:bg-transparent transition-all text-sm gap-2 font-serif tracking-wider"
                asChild
              >
                <Link to="/catalog">
                  View Catalog
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Column: High-End Single Product Panel */}
      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen bg-[#EBE9E4] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-luxury-composition.png"
            alt="World Class Luxury Garment Hardware Showcase"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dynamic Dark Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero;