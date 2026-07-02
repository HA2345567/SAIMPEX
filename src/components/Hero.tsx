import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-Width & Full-Height Banner Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/saimpex-hero-new.jpg"
          alt="S.A. IMPEX – World-Class Garment Accessories"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* CTA Buttons overlaid absolutely at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            className="h-12 px-8 bg-primary text-white hover:bg-accent hover:text-white font-medium shadow-lg shadow-primary/20 transition-all text-sm gap-2 group font-serif tracking-wider"
            asChild
          >
            <Link to="/contact">
              Initiate Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="h-12 px-8 border border-white/60 bg-white/20 backdrop-blur-sm text-primary font-medium hover:border-accent hover:bg-white/30 transition-all text-sm gap-2 font-serif tracking-wider"
            asChild
          >
            <Link to="/catalog">
              View Catalog
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;