import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, ShoppingBag, Eye, Star, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from '@/integrations/supabase/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    select: (data) => {
      // Optional: Transform data here if needed, e.g. map image paths if they are different
      return data.map(p => ({
        ...p,
        image: p.image_url || '/placeholder.svg' // Fallback image
      }));
    }
  });

  // Calculate categories dynamically from the products
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const displayedProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header />

      {/* Modern Minimal Header */}
      <div className="pt-32 pb-12 bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold font-display text-sm uppercase mb-4">B2B Wholesale Catalog</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Premium Garment Accessories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed">
            Explore our curated collection of buttons, zippers, and hardware.
            Designed for global fashion brands with uncompromising quality.
          </p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Categories
                </h3>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${activeCategory === "All"
                      ? "bg-gradient-accent text-white border-transparent shadow-md"
                      : "bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                  >
                    All Products
                  </button>
                  {categories.filter(c => c !== "All").map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                        ? "bg-gradient-accent text-white border-transparent shadow-md"
                        : "bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Sidebar Widgets (Optional placeholders for now) */}
              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Need a Custom Order?</h4>
                <p className="text-sm text-muted-foreground mb-4">We specialize in bulk custom manufacturing for brands.</p>
                <Button variant="outline" className="w-full bg-background" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{activeCategory === "All" ? "All Products" : activeCategory}</h2>
              <span className="text-muted-foreground text-sm">{displayedProducts.length} Results</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProducts.map((product) => (
                <div key={product.id} className="group relative">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-card border border-border/50 mb-5 group-hover:border-accent/30 transition-all">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 justify-center items-end bg-gradient-to-t from-black/50 to-transparent pt-12">
                      <Button size="icon" className="h-10 w-10 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white shadow-xl border-0" asChild>
                        <Link to={`/product/${product.id}`}>
                          <Eye className="w-5 h-5" />
                        </Link>
                      </Button>
                      <Button size="icon" className="h-10 w-10 rounded-full bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-xl border-0" asChild>
                        <a href={getWhatsAppUrl(`Inquiry: ${product.name}`)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-full text-slate-900 uppercase tracking-widest shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <span>MOQ: 500 Pcs</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-green-600 font-medium">In Stock</span>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-2"
                    >
                      View Specifications <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {displayedProducts.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">No Products Found</h3>
                <p className="text-slate-500 mb-6">We couldn't find any products in this category.</p>
                <Button variant="outline" onClick={() => setActiveCategory("All")}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
