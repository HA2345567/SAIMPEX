import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  FileText, Download, ArrowRight, Shield,
  CircleDot, Link as LinkIcon, RefreshCw, AlignJustify,
  Activity, Eye, Crown, Layers, Lock, Grid3X3, FileType,
  Hexagon, TreeDeciduous, Anchor
} from "lucide-react";
import { motion } from "framer-motion";

interface CatalogItem {
  id: number;
  title: string;
  description: string;
  pages: string;
  size: string;
  type: string;
  icon: any;
  featured?: boolean;
  downloadUrl?: string; // If present, item is available
  category: string;
}

// Mapped Data from public/pdf directory
const catalogs: CatalogItem[] = [
  {
    id: 0,
    title: "Master Collection 2026",
    description: "The complete anthology. Access our entire range of buttons, fasteners, and accessories in one comprehensive document.",
    pages: "248 Pages",
    size: "3.3 MB",
    type: "Digital Folio",
    icon: Crown,
    featured: true,
    category: "Full Collection",
    downloadUrl: "/pdf/All_buttons.pdf",
  },
  {
    id: 1,
    title: "Polyester Series",
    description: "Versatile durability meets curated aesthetics. Essential buttons for high-volume ready-to-wear lines.",
    pages: "Digital Catalog",
    size: "0.6 MB",
    type: "Lookbook",
    icon: CircleDot,
    category: "Essentials",
    downloadUrl: "/pdf/Polyster_buttons.pdf",
  },
  {
    id: 2,
    title: "Metal & Alloys",
    description: "Zinc, Brass, and Copper masterpieces. Defined by weight, finish, and intricate casting details.",
    pages: "Digital Catalog",
    size: "1.4 MB",
    type: "Technical Sheet",
    icon: Shield,
    category: "Premium Metal",
    downloadUrl: "/pdf/Metal buttons.pdf",
  },
  {
    id: 3,
    title: "Buckles & Hardware",
    description: "Statement hardware for outerwear and belts. Classic and modern finishes.",
    pages: "Digital Catalog",
    size: "0.2 MB",
    type: "Tech Specs",
    icon: Hexagon,
    category: "Hardware",
    downloadUrl: "/pdf/buckles_cords.pdf",
  },
  {
    id: 4,
    title: "Ring Adjusters",
    description: "Functional sliders and rings that elevate utility into a design statement.",
    pages: "Digital Catalog",
    size: "0.4 MB",
    type: "Lookbook",
    icon: RefreshCw,
    category: "Accessories",
    downloadUrl: "/pdf/Ring adusters.pdf",
  },
  {
    id: 5,
    title: "Wooden Collection",
    description: "Natural sustainability. Ethically sourced wooden buttons with unique grain patterns.",
    pages: "Digital Catalog",
    size: "0.3 MB",
    type: "Lookbook",
    icon: TreeDeciduous,
    category: "Natural Series",
    downloadUrl: "/pdf/Wooden.pdf",
  },
  {
    id: 6,
    title: "Stoppers & Cords",
    description: "Essential functional trims for sportswear and outerwear functionality.",
    pages: "Digital Catalog",
    size: "0.3 MB",
    type: "Tech Specs",
    icon: Anchor,
    category: "Trims",
    downloadUrl: "/pdf/stopper.pdf",
  },
  {
    id: 7,
    title: "Zippers & Tapes",
    description: "High-performance zipper technologies and elastic tapes.",
    pages: "Coming Soon",
    size: "TBD",
    type: "Tech Specs",
    icon: AlignJustify,
    category: "Zippers",
    // No PDF yet
  },
];

const Catalog = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Catalog & Spec Sheets | SAIMPEX";
  }, []);

  const handleDownload = (catalog: CatalogItem) => {
    if (catalog.downloadUrl) {
      toast({
        title: "Download Started",
        description: `Downloading ${catalog.title}...`,
        className: "bg-primary text-white border-accent"
      });

      const link = document.createElement('a');
      link.href = catalog.downloadUrl; // No need to replace chars if formatted correctly in variable, but safe to raw URL
      link.download = `${catalog.title.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } else {
      toast({
        title: "Restricted Access",
        description: `The ${catalog.title} folio is currently being curated.`,
        variant: "destructive",
      });
    }
  };

  const featuredCatalog = catalogs[0];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body selection:bg-accent selection:text-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative">

        {/* Background Atmosphere */}
        <div className="absolute top-0 inset-x-0 h-[80vh] bg-gradient-to-b from-[#f0eee6] to-transparent pointer-events-none -z-10" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center max-w-4xl mx-auto space-y-8"
          >

            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 tracking-tight leading-[0.9]">
              The <span className="italic text-accent">Catalog's</span>
            </h1>

            <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed border-t border-stone-200 pt-8 mt-8">
              Access the complete range of Saimpex technical documents. <br className="hidden md:block" />
              Download catalogs, specification sheets, and lookbooks.
            </p>
          </motion.div>

          {/* Master Collection Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-24"
          >
            <div className="relative group overflow-hidden bg-slate-900 text-white rounded-[2px] shadow-2xl ring-1 ring-white/10">
              <div className="flex flex-col md:flex-row min-h-[400px]">

                {/* Visual Side (Left) */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[url('/images/hero-luxury-composition.png')] bg-cover bg-center opacity-80 transition-transform duration-1000 group-hover:scale-105" />

                  {/* Gradient Fade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 md:bg-gradient-to-r" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden" />
                </div>

                {/* Content Side (Right) */}
                <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center relative z-20 bg-[#0C0C0C]">
                  {/* Subtle Grain Texture Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4 text-accent mb-2">
                      <Crown className="w-5 h-5" strokeWidth={1} />
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Crown Jewel Edition</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-white tracking-wide">
                      {featuredCatalog.title}
                    </h2>

                    <p className="text-stone-400 text-lg leading-relaxed max-w-md font-light border-l border-accent/20 pl-6">
                      {featuredCatalog.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-12 text-xs text-stone-500 font-mono py-6 border-y border-white/5 tracking-wider uppercase">
                      <div className="flex justify-between items-center group cursor-help">
                        <span>Format</span>
                        <span className="text-stone-300 group-hover:text-white transition-colors">PDF High Res</span>
                      </div>
                      <div className="flex justify-between items-center group cursor-help">
                        <span>Access</span>
                        <span className="text-emerald-500 flex items-center gap-2 group-hover:text-emerald-400 transition-colors"><Shield className="w-3 h-3" /> Public</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-5">
                      {/* Preview Button - Outline Luxury */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" variant="outline" className="flex-1 border-white/20 bg-transparent text-white hover:bg-white hover:text-black h-14 uppercase tracking-[0.2em] font-medium text-xs transition-all duration-500">
                            <Eye className="mr-3 w-4 h-4" /> Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl h-[90vh] bg-[#0C0C0C] p-0 border-white/10 overflow-hidden shadow-2xl">
                          <div className="w-full h-full flex flex-col">
                            <div className="h-16 bg-[#0C0C0C] border-b border-white/10 flex items-center justify-between px-8 pr-16 text-white">
                              <span className="font-serif italic text-lg text-stone-200">{featuredCatalog.title}</span>
                              <Button size="sm" className="bg-accent text-white hover:bg-white hover:text-black transition-colors" onClick={() => handleDownload(featuredCatalog)}>
                                Download PDF
                              </Button>
                            </div>
                            <div className="flex-1 bg-stone-900/50 relative backdrop-blur-3xl">
                              <iframe
                                src={`${featuredCatalog.downloadUrl}#toolbar=0`}
                                className="w-full h-full rounded-none mix-blend-normal"
                                title="Catalog Preview"
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Download Button - Solid Accent */}
                      <Button
                        size="lg"
                        onClick={() => handleDownload(featuredCatalog)}
                        className="flex-1 bg-accent/90 text-white hover:bg-accent h-14 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_0_20px_-5px_hsl(35,45%,55%,0.3)] hover:shadow-[0_0_30px_-5px_hsl(35,45%,55%,0.5)]"
                      >
                        Download <Download className="ml-3 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Catalog Grid */}
          <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4 mt-20">
            <h3 className="text-2xl font-serif text-slate-900">Sector Collections</h3>
            <span className="text-sm font-mono text-stone-400">{catalogs.length - 1} Defined Series</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {catalogs.slice(1).map((catalog, idx) => {
              const Icon = catalog.icon;
              const isAvailable = Boolean(catalog.downloadUrl);

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={catalog.id}
                  className="group relative bg-white flex flex-col justify-between border border-stone-100 hover:border-stone-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-700 min-h-[380px] p-10 overflow-hidden"
                >
                  {/* Hover Accent Top Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                  {/* Decorative Watermark Number */}
                  <span className="absolute top-4 right-6 font-serif text-6xl text-stone-50 group-hover:text-stone-100 transition-colors select-none -z-0">
                    0{idx + 1}
                  </span>

                  {/* Top Section */}
                  <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-start">
                      {/* Icon - Large, Thin, Gold */}
                      <Icon className="w-10 h-10 text-accent/80 group-hover:text-accent transition-colors duration-500" strokeWidth={0.8} />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.3em] text-stone-400 uppercase block mb-3 pl-1 border-l-2 border-transparent group-hover:border-accent transition-all duration-500">
                        {catalog.category}
                      </span>
                      <h3 className="text-3xl font-serif text-slate-900 leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                        {catalog.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed font-light line-clamp-3">
                        {catalog.description}
                      </p>
                    </div>
                  </div>

                  {/* Middle Meta Info - Minimal Divider */}
                  <div className="w-8 h-px bg-stone-200 my-6 group-hover:w-full group-hover:bg-accent/30 transition-all duration-700" />

                  {/* Bottom Actions */}
                  <div className="flex gap-4 mt-auto relative z-10">
                    {isAvailable ? (
                      <>
                        {/* Preview - Sharp Outline */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1 border-stone-200 text-stone-900 hover:border-slate-900 hover:bg-transparent h-12 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300">
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-6xl h-[90vh] bg-stone-100 p-0 overflow-hidden">
                            <div className="w-full h-full flex flex-col">
                              <div className="h-12 bg-white border-b flex items-center justify-between px-6 pr-14">
                                <span className="font-bold text-sm font-serif">{catalog.title}</span>
                                <Button size="sm" onClick={() => handleDownload(catalog)}>Download Original</Button>
                              </div>
                              <div className="flex-1 bg-gray-200 relative">
                                <iframe
                                  src={`${catalog.downloadUrl}#toolbar=0`}
                                  className="w-full h-full border-0"
                                  title={`Preview of ${catalog.title}`}
                                ></iframe>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Download - Solid Black */}
                        <Button
                          className="flex-1 bg-slate-900 text-white hover:bg-accent hover:text-white h-12 text-[10px] uppercase tracking-[0.2em] font-bold shadow-sm transition-all duration-500 group-hover:shadow-lg"
                          onClick={() => handleDownload(catalog)}
                        >
                          <Download className="w-3 h-3 mr-2" /> PDF
                        </Button>
                      </>
                    ) : (
                      <div className="w-full py-3 bg-stone-50 border border-dashed border-stone-200 text-center text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3" /> Catalog Locked
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Footer Area */}
          <div className="mt-24 border-t border-stone-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl text-slate-900 mb-2">Need a Hard Copy?</h4>
              <p className="text-stone-500">We send physical specification books to our registered enterprise partners.</p>
            </div>
            <Button variant="outline" size="lg" className="border-slate-900 text-slate-900 h-14 px-8 hover:bg-slate-900 hover:text-white transition-all">
              Request Physical Catalog <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
