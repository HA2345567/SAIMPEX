import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/lib/constants";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/50">
              Trade Only • Wholesale
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-luxury text-primary-foreground leading-[1.1]"
          >
            Partner with Us
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/60 max-w-xl mx-auto"
          >
            Join leading fashion houses who trust S. A. IMPEX for premium garment hardware.
            Get priority manufacturing slots for your upcoming collections.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 bg-accent text-accent-foreground hover:bg-accent-hover font-medium text-sm transition-colors"
              asChild
            >
              <Link to="/contact">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-sm transition-colors"
              asChild
            >
              <a href={getWhatsAppUrl("Premium Inquiry")} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-8 pt-8 text-xs uppercase tracking-wider text-primary-foreground/40"
          >
            <span>NDA Protected</span>
            <span>•</span>
            <span>Priority Production</span>
            <span>•</span>
            <span>Global Shipping</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
