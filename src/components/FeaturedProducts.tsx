import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: "btn-met-001",
    name: "Royal Crest Blazer Button",
    category: "Metal & Alloys",
    image: "/images/products/royal_crest.png"
  },
  {
    id: "btn-wdn-001",
    name: "Sustainably Sourced Wooden Button",
    category: "Wooden Collection",
    image: "/images/products/wooden_collection_hero.png"
  },
  {
    id: "hdw-bkl-001",
    name: "Vintage Brass Buckle",
    category: "Buckles & Hardware",
    image: "/images/products/brass_buckle.png"
  },
  {
    id: "hdw-rng-001",
    name: "Rose Gold Detail Slider",
    category: "Ring Adjusters",
    image: "/images/products/gold_slider.png"
  },
  {
    id: "zip-zip-001",
    name: "Premium Gold Zipper Pull",
    category: "Zippers & Tapes",
    image: "/images/products/gold_zipper.png"
  },
  {
    id: "trm-stp-001",
    name: "Sportswear Stoppers & Cords",
    category: "Stoppers & Cords",
    image: "/images/products/stoppers_cords_hero.png"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Featured
            </span>
            <h2 className="text-4xl md:text-5xl font-luxury text-primary">
              Best Sellers
            </h2>
            <p className="text-muted-foreground max-w-md">
              Premium hardware selected by leading designers for exceptional craftsmanship.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-primary transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link
                to={`/product/${product.id}`}
                className="block group bg-card"
              >
                {/* Image */}
                <div className="aspect-square bg-secondary/50 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-luxury text-lg text-primary line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-primary/50">
                    <span>MOQ: 500 Pcs</span>
                    <span>•</span>
                    <span>Ready Stock</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <Button
            size="lg"
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
            asChild
          >
            <Link to="/products">
              Explore Full Catalog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
