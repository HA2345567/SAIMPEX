import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, Product } from "@/integrations/supabase/products";

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
    return <div className="py-20 text-center">Loading collections...</div>;
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Main Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold font-display">
            Featured Products
          </div>
          <h2 className="font-display">
            Best Selling Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            Explore our most popular categories. Factory direct pricing for bulk orders.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-20">
          {groupedProducts.map((section) => (
            <div key={section.title} className="space-y-8">

              {/* Category Title */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="text-2xl font-bold font-display text-foreground">{section.title}</h3>
                <Link to={`/products?category=${encodeURIComponent(section.title)}`} className="text-accent font-semibold hover:text-accent/80 text-sm flex items-center gap-1 group font-display">
                  View {section.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.products.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="block group">
                    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift hover:border-accent/30 h-full flex flex-col">

                      {/* Image */}
                      <div className="relative aspect-square bg-gradient-card overflow-hidden">
                        <img
                          src={product.image_url || '/placeholder.svg'}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <Button size="icon" className="rounded-full bg-accent text-white hover:bg-accent/90 shadow-glow transition-all">
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                          <Button size="icon" className="rounded-full glass border border-border/50 text-foreground hover:bg-muted shadow-md transition-all">
                            <Info className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1">
                        <h4 className="font-bold font-display text-foreground line-clamp-1 mb-2 group-hover:text-accent transition-colors">{product.name}</h4>
                        <p className="text-xs text-muted-foreground mb-4 font-body">MOQ: {product.min_order_quantity || 'N/A'}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global View All CTA */}
        <div className="mt-24 text-center">
          <Button size="lg" className="h-14 px-10 text-base rounded-xl bg-gradient-accent text-white font-semibold font-display shadow-lg shadow-accent/20 hover:shadow-glow hover:-translate-y-0.5 transition-all" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
