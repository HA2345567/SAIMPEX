import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import plasticButtons from "@/assets/buttons-showcase.jpg";
import metalButtons from "@/assets/metal-buttons.jpg";
import woodenButtons from "@/assets/wooden-buttons.jpg";
import snapButtons from "@/assets/snap-buttons.jpg";

const products = [
  {
    id: 1,
    name: "Plastic Buttons",
    description: "Colorful, durable plastic buttons in various sizes and finishes",
    image: plasticButtons,
    moq: "10,000 pieces",
    category: "Plastic",
  },
  {
    id: 2,
    name: "Metal Buttons",
    description: "Premium metal buttons with custom logo engraving options",
    image: metalButtons,
    moq: "5,000 pieces",
    category: "Metal",
  },
  {
    id: 3,
    name: "Wooden Buttons",
    description: "Eco-friendly natural wooden buttons for sustainable fashion",
    image: woodenButtons,
    moq: "8,000 pieces",
    category: "Wooden",
  },
  {
    id: 4,
    name: "Snap Buttons",
    description: "Industrial-grade snap and jeans buttons for denim manufacturing",
    image: snapButtons,
    moq: "15,000 pieces",
    category: "Metal",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium collection of buttons and garment accessories trusted by leading manufacturers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button variant="premium" size="sm" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">MOQ: {product.moq}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
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
