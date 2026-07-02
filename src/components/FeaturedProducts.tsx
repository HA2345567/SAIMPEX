import { Button } from "@/components/ui/button";
import { ArrowRight, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: "btn-met-001",
    name: "Royal Crest Blazer Button",
    category: "Metal & Alloys",
    price: "Inquire",
    image: "/images/products/royal_crest.png"
  },
  {
    id: "btn-wdn-001",
    name: "Sustainably Sourced Wooden Button",
    category: "Wooden Collection",
    price: "Inquire",
    image: "/images/products/wooden_collection_hero.png"
  },
  {
    id: "hdw-bkl-001",
    name: "Vintage Brass Buckle",
    category: "Buckles & Hardware",
    price: "Inquire",
    image: "/images/products/brass_buckle.png"
  },
  {
    id: "hdw-rng-001",
    name: "Rose Gold Detail Slider",
    category: "Ring Adjusters",
    price: "Inquire",
    image: "/images/products/gold_slider.png"
  },
  {
    id: "zip-zip-001",
    name: "Premium Gold Zipper Pull",
    category: "Zippers & Tapes",
    price: "Inquire",
    image: "/images/products/gold_zipper.png"
  },
  {
    id: "trm-stp-001",
    name: "Sportswear Stoppers & Cords",
    category: "Stoppers & Cords",
    price: "Inquire",
    image: "/images/products/stoppers_cords_hero.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedProducts = () => {
  return (
    <section className="relative bg-secondary/30 pt-24 pb-32 lg:pt-32 lg:pb-44 overflow-hidden">
      {/* ═════ Decorative Background ═════ */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Gold Accent Blobs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* ═════ Editorial Header ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-12 mb-16 lg:mb-24"
        >
          <div className="space-y-6 lg:space-y-8 max-w-2xl">
            {/* Award Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border/50 shadow-sm">
              <Award className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Curated Selection
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-luxury text-primary leading-[1.05]">
              Best <span className="italic text-accent">Sellers</span><span className="hidden lg:inline">.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-xl">
              The defining pieces of the season. Chosen by leading designers for their exceptional craftsmanship and timeless appeal.
            </p>
          </div>

          <div className="hidden lg:block">
            <Button
              variant="link"
              className="text-primary text-base font-medium decoration-border hover:text-accent hover:decoration-accent transition-colors font-serif"
              asChild
            >
              <Link to="/products" className="group">
                View All Collections
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* ═════ Product Grid - Editorial Layout ═════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`
                group relative bg-background hover:bg-card transition-colors duration-500
                ${idx < 3 ? 'border-b border-border' : ''}
              `}
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden relative p-8 lg:p-12 bg-secondary/20">
                  {/* Collection Number Badge */}
                  <div className="absolute top-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-3xl font-luxury font-bold text-accent/20">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Container */}
                  <div className="w-full h-full relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* View Button (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                    </div>
                  </div>

                  {/* Gold Corner Accents (hover) */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                </div>

                {/* Product Info */}
                <div className="p-6 lg:p-8 space-y-3 text-center relative">
                  {/* Category */}
                  <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    {product.category}
                  </div>

                  {/* Name */}
                  <h3 className="font-luxury text-lg lg:text-xl text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Specs Line */}
                  <div className="pt-4 flex justify-center gap-4 text-[10px] uppercase font-bold text-muted-foreground/70 border-t border-border/50">
                    <span>MOQ: 500 Pcs</span>
                    <span className="text-accent">•</span>
                    <span>Ready Stock</span>
                  </div>

                  {/* Bottom Gold Line (hover) */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ═════ Bottom CTA ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <Link to="/products">
            <Button
              size="lg"
              className="h-14 lg:h-16 px-12 lg:px-16 bg-accent text-primary hover:bg-accent-hover text-sm lg:text-base font-bold uppercase tracking-widest transition-all duration-500 shadow-gold-subtle hover:shadow-gold"
            >
              Explore The Full Catalog
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
