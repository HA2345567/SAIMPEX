import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import plasticButtons from "@/assets/buttons-showcase.jpg";
import metalButtons from "@/assets/metal-buttons.jpg";
import woodenButtons from "@/assets/wooden-buttons.jpg";
import snapButtons from "@/assets/snap-buttons.jpg";

const products = [
  {
    id: 1,
    name: "Plastic Buttons - Colorful",
    material: "High-grade Plastic",
    sizes: "14L, 16L, 18L, 20L, 24L",
    colors: "All colors available",
    moq: "10,000 pieces",
    category: "Plastic",
    finish: "Glossy, Matte",
    usage: "Shirts, Blouses, Kids wear",
    image: plasticButtons,
  },
  {
    id: 2,
    name: "Metal Buttons - Premium Logo",
    material: "Brass, Copper, Zinc Alloy",
    sizes: "10mm - 25mm",
    colors: "Gold, Silver, Antique Brass",
    moq: "5,000 pieces",
    category: "Metal",
    finish: "Polished, Brushed, Engraved",
    usage: "Blazers, Coats, Premium Garments",
    image: metalButtons,
  },
  {
    id: 3,
    name: "Wooden Buttons - Natural",
    material: "Hardwood, Bamboo",
    sizes: "15mm - 30mm",
    colors: "Natural, Dyed",
    moq: "8,000 pieces",
    category: "Wooden",
    finish: "Natural, Lacquered",
    usage: "Eco-fashion, Cardigans, Coats",
    image: woodenButtons,
  },
  {
    id: 4,
    name: "Snap Buttons - Industrial",
    material: "Stainless Steel, Brass",
    sizes: "8mm - 17mm",
    colors: "Silver, Black, Gold",
    moq: "15,000 pieces",
    category: "Metal",
    finish: "Nickle-free, Anti-rust",
    usage: "Jeans, Jackets, Workwear",
    image: snapButtons,
  },
  {
    id: 5,
    name: "Jeans Buttons - Heavy Duty",
    material: "Copper, Zinc Alloy",
    sizes: "14mm - 20mm",
    colors: "Antique brass, Black nickel",
    moq: "12,000 pieces",
    category: "Metal",
    finish: "Oxidized, Polished",
    usage: "Denim, Heavy fabric garments",
    image: snapButtons,
  },
  {
    id: 6,
    name: "Custom Logo Buttons",
    material: "Metal, Plastic (as per requirement)",
    sizes: "Custom sizes",
    colors: "Custom colors",
    moq: "20,000 pieces",
    category: "Custom",
    finish: "Laser engraving, Embossing",
    usage: "Brand garments, Uniforms",
    image: metalButtons,
  },
];

const categories = ["All", "Plastic", "Metal", "Wooden", "Custom"];
const materials = ["All Materials", "Plastic", "Metal", "Wood", "Brass", "Copper"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All Materials");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const materialMatch =
      selectedMaterial === "All Materials" || product.material.includes(selectedMaterial);
    return categoryMatch && materialMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete range of buttons and garment accessories
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "premium" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Filter by Material</h3>
              <div className="flex flex-wrap gap-3">
                {materials.map((material) => (
                  <Button
                    key={material}
                    variant={selectedMaterial === material ? "premium" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMaterial(material)}
                  >
                    {material}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sizes:</span>
                      <span className="font-medium">{product.sizes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Finish:</span>
                      <span className="font-medium">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">MOQ:</span>
                      <span className="font-semibold text-accent">{product.moq}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Best for:</span> {product.usage}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="premium" className="flex-1">
                        Request Quote
                      </Button>
                      <Button variant="whatsapp" size="icon" asChild>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No products found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
