import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import plasticButtons from "@/assets/buttons-showcase.jpg";
import metalButtons from "@/assets/metal-buttons.jpg";
import woodenButtons from "@/assets/wooden-buttons.jpg";
import snapButtons from "@/assets/snap-buttons.jpg";
import { getWhatsAppUrl } from "@/lib/constants";

const products = [
  {
    id: 1,
    name: "Plastic Buttons",
    description: "Colorful, durable plastic buttons in various sizes and finishes",
    image: plasticButtons,
    moq: "10,000 pieces",
    category: "Plastic",
    features: ["Multiple Colors", "All Sizes", "Fast Production"],
  },
  {
    id: 2,
    name: "Metal Buttons",
    description: "Premium metal buttons with custom logo engraving options",
    image: metalButtons,
    moq: "5,000 pieces",
    category: "Metal",
    features: ["Custom Engraving", "Premium Quality", "Logo Options"],
  },
  {
    id: 3,
    name: "Wooden Buttons",
    description: "Eco-friendly natural wooden buttons for sustainable fashion",
    image: woodenButtons,
    moq: "8,000 pieces",
    category: "Wooden",
    features: ["Eco-Friendly", "Natural Finish", "Sustainable"],
  },
  {
    id: 4,
    name: "Snap Buttons",
    description: "Industrial-grade snap and jeans buttons for denim manufacturing",
    image: snapButtons,
    moq: "15,000 pieces",
    category: "Metal",
    features: ["Heavy Duty", "Rust Proof", "Industrial Grade"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Our Best Sellers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-accent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of buttons and garment accessories trusted by leading manufacturers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <Button variant="premium" size="sm" className="w-full shadow-glow" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
                  <span className="text-xs font-bold text-accent">{product.category}</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-accent/5 text-accent rounded-md border border-accent/10">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* MOQ & Action */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <div className="text-xs">
                      <p className="text-muted-foreground">MOQ</p>
                      <p className="font-bold text-foreground">{product.moq}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-accent/10 hover:text-accent" asChild>
                    <a href={getWhatsAppUrl(`I'm interested in ${product.name}`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group shadow-glow" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
