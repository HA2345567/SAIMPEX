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

            <div className="flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-3xl border border-slate-200/60 p-12 text-center shadow-lg relative overflow-hidden group">
              {/* Decorative backgrounds */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl" />
              
              <div className="space-y-6 max-w-md relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50/80 text-blue-600 shadow-inner mb-2">
                  <ShoppingBag className="w-10 h-10 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-3">Coming Soon</h3>
                  <p className="text-slate-500 leading-relaxed text-base">
                    We are currently updating our wholesale product range. Our premium accessory catalog will be back online very soon.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-xl font-semibold shadow-md shadow-blue-500/10">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                  <Button variant="outline" asChild className="h-12 px-6 rounded-xl font-semibold border-slate-200 hover:bg-slate-50">
                    <a href={getWhatsAppUrl("Hello, I would like to inquire about your product catalog.")} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2 text-green-500" /> WhatsApp Sales
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
