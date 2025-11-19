import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const catalogs = [
  {
    id: 1,
    title: "Complete Product Catalog 2025",
    description: "Comprehensive catalog featuring all our button and accessory collections",
    pages: "48 pages",
    size: "12.5 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 2,
    title: "Plastic Buttons Collection",
    description: "Detailed catalog of plastic buttons with specifications and MOQ",
    pages: "16 pages",
    size: "5.2 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 3,
    title: "Metal Buttons & Custom Logo",
    description: "Premium metal buttons, engraving options, and custom manufacturing",
    pages: "20 pages",
    size: "8.1 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 4,
    title: "Eco-Friendly Collection",
    description: "Wooden and natural material buttons for sustainable fashion",
    pages: "12 pages",
    size: "4.8 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 5,
    title: "Industrial Fasteners",
    description: "Snap buttons, jeans buttons, and heavy-duty accessories",
    pages: "14 pages",
    size: "6.3 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 6,
    title: "Product Gallery Images",
    description: "High-resolution product images for your reference",
    pages: "100+ images",
    size: "25 MB",
    type: "ZIP",
    icon: Image,
  },
];

const Catalog = () => {
  const { toast } = useToast();

  const handleDownload = (catalogTitle: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${catalogTitle}...`,
    });
    // In a real application, this would trigger an actual file download
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Download <span className="text-accent">Catalogs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive product catalogs with detailed specifications, pricing, and MOQ information
            </p>
          </div>

          {/* Featured Download */}
          <Card className="mb-12 bg-gradient-primary text-primary-foreground shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent">
                    <span className="text-accent font-semibold text-sm">Most Popular</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Complete Product Catalog 2025
                  </h2>
                  <p className="text-primary-foreground/90 mb-6 text-lg">
                    Our full range of products including plastic, metal, wooden buttons, and custom manufacturing options. Perfect for bulk buyers and manufacturers.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">48 pages</span>
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">12.5 MB</span>
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">PDF Format</span>
                  </div>
                  <Button
                    variant="premium"
                    size="xl"
                    onClick={() => handleDownload("Complete Product Catalog 2025")}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                    <FileText className="h-48 w-48 text-accent relative z-10" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Catalogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.slice(1).map((catalog) => {
              const Icon = catalog.icon;
              return (
                <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{catalog.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{catalog.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      <span className="px-2 py-1 bg-secondary rounded-full">{catalog.pages}</span>
                      <span className="px-2 py-1 bg-secondary rounded-full">{catalog.size}</span>
                      <span className="px-2 py-1 bg-secondary rounded-full">{catalog.type}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                      onClick={() => handleDownload(catalog.title)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Help Section */}
          <Card className="mt-12 bg-secondary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Custom Information?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Looking for specific product details, custom manufacturing options, or bulk pricing? Contact our B2B team for personalized catalogs and quotations.
              </p>
              <Button variant="premium" size="lg">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
