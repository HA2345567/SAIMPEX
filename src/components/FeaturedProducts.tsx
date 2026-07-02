import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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
    category: "Buckles",
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

const FeaturedProducts = () => {
  return (
    <section className="bg-background pt-24 pb-32 border-t border-border relative overflow-hidden">

      {/* Editorial Header */}
      <div className="container mx-auto px-0 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between px-6 sm:px-12 gap-8">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-stone-400 text-stone-600 text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1] tracking-tight">
              Best <span className="italic text-accent">Sellers</span>
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-xl">
              The defining pieces of the season. Chosen by leading designers for their exceptional craftsmanship and timeless appeal.
            </p>
          </div>

          <div className="hidden md:block">
            <Button variant="link" className="text-slate-900 text-lg decoration-stone-400 hover:text-accent transition-colors font-serif" asChild>
              <Link to="/products">
                View All Collections <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-0 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-border">
          {bestSellers.map((product, idx) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className={`
                    group block relative bg-background hover:bg-card/65 transition-all duration-500
                    border-r border-border
                    ${(idx + 1) % 3 === 0 ? 'lg:border-r-0' : ''}
                    border-b border-border
                    ${idx >= 3 ? 'lg:border-b-0' : ''}
                    hover:shadow-2xl hover:z-10
                `}
            >
              <div className="aspect-[4/5] overflow-hidden relative p-8">
                {/* Product Image Container */}
                <div className="w-full h-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[800ms] ease-out drop-shadow-md mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 bg-[#7A4E2D]/5 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span className="bg-[#7A4E2D] hover:bg-[#633e24] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 rounded-xl">
                    View Product
                  </span>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 space-y-2 text-center">
                <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400 group-hover:text-accent transition-colors">
                  {product.category}
                </div>
                <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors duration-300 line-clamp-1">
                  {product.name}
                </h4>

                {/* B2B Specs */}
                <div className="pt-2 flex justify-center gap-4 text-[10px] uppercase font-bold text-stone-500 border-t border-border/25 mt-4">
                  <span>MOQ: 500 Pcs</span>
                  <span>•</span>
                  <span>Ready Stock</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Global View All Bottom CTA */}
      <div className="mt-24 text-center">
        <Link to="/products">
          <Button size="lg" className="h-16 px-16 bg-accent text-white text-lg font-serif hover:bg-accent/90 transition-all shadow-2xl hover:shadow-accent/20">
            Explore The Full Catalog
          </Button>
        </Link>
      </div>

    </section>
  );
};

export default FeaturedProducts;
