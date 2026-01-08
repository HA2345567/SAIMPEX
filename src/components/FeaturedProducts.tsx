import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/integrations/supabase/products";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: fetchProducts,
  });

  // Group products by category
  const categoriesToShow = ["Metal Buttons", "Polyester Buttons", "Zippers", "Buckles"];

  const groupedProducts = categoriesToShow.map(category => {
    const categoryProducts = products?.filter(p => p.category === category).slice(0, 4) || [];
    return {
      title: category,
      products: categoryProducts
    };
  }).filter(group => group.products.length > 0);

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center items-center bg-background min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-4 w-32 bg-muted rounded-full"></div>
          <div className="h-4 w-24 bg-muted rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-muted rounded-2xl w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Minimal Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-semibold tracking-wider uppercase font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exquisite Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Featured Masterpieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-body leading-relaxed text-balance">
            Discover our most sought-after garment accessories, curated for global fashion brands.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-32">
          {groupedProducts.map((section) => (
            <div key={section.title} className="space-y-12">

              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-display text-foreground">{section.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-md">Premium selection of high-quality {section.title.toLowerCase()}, designed for durability and style.</p>
                </div>

                <Button variant="ghost" className="group text-accent hover:text-accent hover:bg-accent/5 font-medium px-4 h-11 rounded-full" asChild>
                  <Link to={`/products?category=${encodeURIComponent(section.title)}`}>
                    Explore Series <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {section.products.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="group relative block h-full">
                    {/* Card Container */}
                    <div className="h-full flex flex-col bg-card rounded-2xl border border-border/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group-hover:-translate-y-1">

                      {/* Image Area */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted/20">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 bg-muted/30">
                            <span className="text-sm">No Image Available</span>
                          </div>
                        )}

                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* Quick Actions (Aceternity Style Reveal) */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 px-6">
                          <span className="w-full inline-flex h-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-colors uppercase tracking-wide">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-1 space-y-4">
                        <div className="space-y-1.5">
                          <h4 className="font-bold font-display text-lg text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                            {section.title} Series
                          </p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground font-body">Min Order:</span>
                          <span className="font-semibold text-foreground bg-accent/5 px-2.5 py-1 rounded-md text-xs text-accent uppercase tracking-wide">
                            {product.min_order_quantity || 'Contact Us'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global View All CTA */}
        <div className="mt-36 text-center">
          <Link to="/products">
            <Button size="lg" className="h-16 px-12 rounded-full bg-foreground text-background text-lg font-bold hover:bg-foreground/90 hover:scale-105 transition-all duration-300 shadow-2xl shadow-foreground/20">
              View Full Catalog
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
