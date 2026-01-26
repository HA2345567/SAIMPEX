import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const bestSellers = [
  {
    id: "bs-1",
    name: "Royal Crest Blazer Button",
    category: "Metal Collection",
    price: "Inquire",
    image: "/images/products/royal_crest.png"
  },
  {
    id: "bs-2",
    name: "Obsidian Shell Toggle",
    category: "Natural Series",
    price: "Inquire",
    image: "/images/products/obsidian_toggle.png"
  },
  {
    id: "bs-3",
    name: "Bespoke Trouser Hooks",
    category: "Tailoring",
    price: "Inquire",
    image: "/images/products/silver_hooks.png"
  },
  {
    id: "bs-4",
    name: "Rose Gold Detail Slider",
    category: "Lingerie / Swim",
    price: "Inquire",
    image: "/images/products/gold_slider.png"
  },
  {
    id: "bs-5",
    name: "Gold Zipper Pull",
    category: "Zippers",
    price: "Inquire",
    image: "/images/products/gold_zipper.png"
  },
  {
    id: "bs-6",
    name: "Vintage Brass Buckle",
    category: "Hardware",
    price: "Inquire",
    image: "/images/products/brass_buckle.png"
  },
  {
    id: "bs-7",
    name: "Signature Metal Shank",
    category: "Denim Series",
    price: "Inquire",
    image: "/images/products/royal_crest.png" // Placeholder recurrence
  },
  {
    id: "bs-8",
    name: "Architectural Toggle",
    category: "Outerwear",
    price: "Inquire",
    image: "/images/products/obsidian_toggle.png" // Placeholder recurrence
  }
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#F2F0EB] pt-24 pb-32 border-t border-[#D6D3CD] relative overflow-hidden">

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

      {/* Product Grid - 4x2 Layout */}
      <div className="container mx-auto px-0 border-t border-[#D6D3CD]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#D6D3CD]">
          {bestSellers.map((product, idx) => (
            <Link
              to="/products"
              key={product.id}
              className={`
                    group block relative bg-[#F2F0EB] hover:bg-white transition-colors duration-500
                    border-r border-[#D6D3CD]
                    ${(idx + 1) % 4 === 0 ? 'lg:border-r-0' : ''}
                    border-b border-[#D6D3CD]
                    ${idx >= 4 ? 'lg:border-b-0' : ''}
                `}
            >
              <div className="aspect-[4/5] overflow-hidden relative p-8">
                {/* Product Image Container */}
                <div className="w-full h-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span className="bg-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Product
                  </span>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 space-y-2 text-center">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 group-hover:text-accent transition-colors">
                  {product.category}
                </div>
                <h4 className="font-serif text-xl text-slate-900 group-hover:text-slate-900 transition-colors line-clamp-1">
                  {product.name}
                </h4>

                {/* B2B Specs */}
                <div className="pt-2 flex justify-center gap-4 text-[10px] uppercase font-bold text-stone-500 border-t border-stone-200 mt-4">
                  <span>MOQ: 500Gr</span>
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
          <Button size="lg" className="h-16 px-16 rounded-none bg-accent text-white text-lg font-serif hover:bg-accent/90 transition-all shadow-2xl hover:shadow-accent/20">
            Explore The Full Wardrobe
          </Button>
        </Link>
      </div>

    </section>
  );
};

export default FeaturedProducts;
