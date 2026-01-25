import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Image, Circle, Shield, CircleDot, Link, RefreshCw, AlignJustify, Activity, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CatalogItem {
  id: number;
  title: string;
  description: string;
  pages: string;
  size: string;
  type: string;
  icon: any;
  featured?: boolean;
  previewImages?: string[];
  downloadUrl?: string;
}

const catalogs: CatalogItem[] = [
  {
    id: 0,
    title: "Complete Product Catalog 2025",
    description: "The definitive collection. Access our entire range of buttons, fasteners, and accessories in one comprehensive document. tailored for industry professionals.",
    pages: "200+ pages",
    size: "45 MB",
    type: "PDF",
    icon: FileText,
    featured: true,
  },
  {
    id: 1,
    title: "Polyester Buttons",
    description: "Premium polyester buttons in various sizes, colors and finishes. Perfect for shirts, blouses and fashion apparel.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: Circle,
  },
  {
    id: 2,
    title: "Metal Buttons",
    description: "Durable and stylish metal buttons including zinc alloy, brass and copper options with custom plating.",
    pages: "2 pages",
    size: "1.2 MB",
    type: "PDF",
    icon: Shield,
    previewImages: [
      "/images/catalog/metal/page-1.jpg",
      "/images/catalog/metal/page-2.jpg"
    ],
    downloadUrl: "/pdf/Metal-Buttons.pdf"
  },
  {
    id: 3,
    title: "Snap Buttons",
    description: "High-quality snap buttons, prong snaps and spring snaps for outerwear and leather goods.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: CircleDot,
  },
  {
    id: 4,
    title: "Hooks",
    description: "Strong and reliable pant hooks, skirt hooks and bra hooks for intimate apparel and trousers.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: Link,
  },
  {
    id: 5,
    title: "Ring Adjusters",
    description: "Metal and plastic sliders, rings and adjusters for straps, belts and lingerie accessories.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: RefreshCw,
  },
  {
    id: 6,
    title: "Zippers",
    description: "Smooth and durable zippers including nylon coil, metal, and plastic molded options.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: AlignJustify,
  },
  {
    id: 7,
    title: "Elastics",
    description: "High-stretch woven and knitted elastics for waistbands, cuffs and sportswear.",
    pages: "Coming Soon",
    size: "TBD",
    type: "PDF",
    icon: Activity,
  },
];

const Catalog = () => {
  const { toast } = useToast();

  const handleDownload = (catalog: CatalogItem) => {
    if (catalog.downloadUrl) {
      toast({
        title: "Download Started",
        description: `Downloading ${catalog.title}...`,
      });

      const link = document.createElement('a');
      link.href = catalog.downloadUrl;
      link.download = `${catalog.title.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast({
        title: "Coming Soon",
        description: `The ${catalog.title} catalog is not yet available for download.`,
      });
    }
  };

  const featuredCatalog = catalogs[0];
  const FeaturedIcon = featuredCatalog.icon;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 py-20 relative overflow-hidden">
        {/* Ambient Background Effects - Light Mode */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Catalogs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Explore our comprehensive collections. Download specific categories or get the complete Saimpex experience in one file.
            </p>
          </div>

          {/* Featured Download - Premium Card (Light) */}
          <div className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              <Card className="relative bg-white border-white/50 text-slate-900 overflow-hidden rounded-xl shadow-xl backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <FileText className="w-64 h-64 text-amber-900" />
                </div>

                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span>Master Collection</span>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                          {featuredCatalog.title}
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                          {featuredCatalog.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                          {featuredCatalog.pages}
                        </div>
                        <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                          {featuredCatalog.size}
                        </div>
                        <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                          {featuredCatalog.type}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => handleDownload(featuredCatalog)}
                        >
                          <Download className="mr-2 h-6 w-6" />
                          Download Complete Catalog
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-center items-center relative">
                      {/* Abstract Visual Representation */}
                      <div className="relative w-64 h-80 bg-white rounded-lg shadow-2xl border border-slate-100 rotate-3 transition-transform duration-500 group-hover:rotate-0 flex flex-col items-center justify-center p-8 text-center group-hover:scale-105">
                        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[length:16px_16px]" />
                        <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-amber-100">
                          <FeaturedIcon className="h-10 w-10 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">2025 Edition</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">Confidential</p>
                        <div className="mt-8 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-amber-500" />
                        </div>
                      </div>
                      {/* Decorative elements behind */}
                      <div className="absolute -z-10 w-64 h-80 bg-slate-200 rounded-lg shadow-xl -rotate-6 top-4 -left-4 border border-slate-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Specific Categories</h3>
            <div className="h-[1px] flex-1 bg-slate-200 ml-8" />
          </div>

          {/* Other Catalogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogs.slice(1).map((catalog) => {
              const Icon = catalog.icon;
              const hasPreview = catalog.previewImages && catalog.previewImages.length > 0;

              return (
                <Card key={catalog.id} className="group bg-white border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors text-slate-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500 border border-slate-200">
                        {catalog.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{catalog.title}</h3>
                      <p className="text-slate-500 text-sm line-clamp-2">{catalog.description}</p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <div className="text-xs text-slate-400">
                        {catalog.pages === "Coming Soon" ? "Update Pending" : catalog.pages}
                      </div>

                      <div className="flex gap-2">
                        {hasPreview && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 px-2 h-8 font-medium"
                              >
                                <Eye className="mr-1 h-3 w-3" />
                                Preview
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-full">
                              <div className="space-y-4 pt-4">
                                <h2 className="text-2xl font-bold mb-4">{catalog.title} Preview</h2>
                                <div className="grid grid-cols-1 gap-4">
                                  {catalog.previewImages?.map((img, idx) => (
                                    <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
                                      <img
                                        src={img}
                                        alt={`${catalog.title} Page ${idx + 1}`}
                                        className="w-full h-auto object-contain"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 px-2 h-8 font-medium"
                          onClick={() => handleDownload(catalog)}
                        >
                          Download <Download className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Help Section */}
          <Card className="mt-12 bg-white border-slate-200 shadow-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Need Custom Information?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
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
