import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import plasticButtons from "@/assets/buttons-showcase.jpg";
import metalButtons from "@/assets/metal-buttons.jpg";
import woodenButtons from "@/assets/wooden-buttons.jpg";
import snapButtons from "@/assets/snap-buttons.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import plasticCollection from "@/assets/gallery/plastic-buttons-collection.jpg";
import luxuryMetal from "@/assets/gallery/luxury-metal-buttons.jpg";
import woodenNatural from "@/assets/gallery/wooden-buttons-natural.jpg";
import snapIndustrial from "@/assets/gallery/snap-buttons-industrial.jpg";
import manufacturingFacility from "@/assets/gallery/manufacturing-facility.jpg";
import pearlButtons from "@/assets/gallery/pearl-decorative-buttons.jpg";
import qualityControl from "@/assets/gallery/quality-control.jpg";
import customLogo from "@/assets/gallery/custom-logo-buttons.jpg";
import packagingDisplay from "@/assets/gallery/packaging-display.jpg";
import designerWorkspace from "@/assets/gallery/designer-workspace.jpg";

const galleryImages = [
  {
    id: 1,
    src: plasticButtons,
    title: "Colorful Plastic Buttons",
    category: "Plastic Buttons",
  },
  {
    id: 2,
    src: plasticCollection,
    title: "Multi-Color Plastic Collection",
    category: "Plastic Buttons",
  },
  {
    id: 3,
    src: metalButtons,
    title: "Premium Metal Buttons",
    category: "Metal Buttons",
  },
  {
    id: 4,
    src: luxuryMetal,
    title: "Luxury Engraved Metal",
    category: "Metal Buttons",
  },
  {
    id: 5,
    src: customLogo,
    title: "Custom Logo Buttons",
    category: "Metal Buttons",
  },
  {
    id: 6,
    src: woodenButtons,
    title: "Natural Wooden Buttons",
    category: "Wooden Buttons",
  },
  {
    id: 7,
    src: woodenNatural,
    title: "Eco-Friendly Wood Collection",
    category: "Wooden Buttons",
  },
  {
    id: 8,
    src: snapButtons,
    title: "Industrial Snap Buttons",
    category: "Industrial Buttons",
  },
  {
    id: 9,
    src: snapIndustrial,
    title: "Heavy Duty Snap Buttons",
    category: "Industrial Buttons",
  },
  {
    id: 10,
    src: pearlButtons,
    title: "Pearl & Decorative Buttons",
    category: "Decorative Buttons",
  },
  {
    id: 11,
    src: heroBanner,
    title: "Mixed Button Collection",
    category: "Decorative Buttons",
  },
];

const categories = ["All", "Plastic Buttons", "Metal Buttons", "Wooden Buttons", "Industrial Buttons", "Decorative Buttons"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection of buttons, manufacturing facilities, and custom work
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-primary-foreground">
                      <p className="font-semibold text-lg">{image.title}</p>
                      <p className="text-sm text-accent">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
