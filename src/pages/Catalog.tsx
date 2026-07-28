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
  imageUrl?: string;
}

// Mapped Data from public/pdf directory with editorial images
const catalogs: CatalogItem[] = [
  {
    id: 0,
    title: "Master Collection 2026",
    description: "The complete anthology. Access our entire range of buttons, fasteners, and accessories in one comprehensive document.",
    pages: "Digital Folio",
    size: "4.4 MB",
    type: "Digital Folio",
    icon: Crown,
    featured: true,
    category: "Full Collection",
    downloadUrl: "/pdf/AII_buttons.pdf",
    imageUrl: "/images/products/royal_crest.png",
  },
  {
    id: 1,
    title: "New Collections",
    description: "Explore our latest seasonal arrivals, featuring cutting-edge designs, innovative materials, and next-generation closures.",
    pages: "Digital Lookbook",
    size: "0.2 MB",
    type: "Lookbook",
    icon: Crown,
    category: "New Collections",
    downloadUrl: "/pdf/new_coming.pdf",
    imageUrl: "/images/products/royal_crest.png",
  },
  {
    id: 2,
    title: "Polyester & Plastic Series",
    description: "Versatile durability meets curated aesthetics. Essential buttons and fasteners for high-volume ready-to-wear lines.",
    pages: "Digital Catalog",
    size: "0.8 MB",
    type: "Lookbook",
    icon: CircleDot,
    category: "Essentials",
    downloadUrl: "/pdf/plastic_buttons.pdf",
    imageUrl: "/images/products/wooden_collection_hero.png",
  },
  {
    id: 3,
    title: "Metal & Alloys",
    description: "Zinc, Brass, and Copper masterpieces. Defined by weight, finish, and intricate casting details.",
    pages: "Digital Catalog",
    size: "1.8 MB",
    type: "Technical Sheet",
    icon: Shield,
    category: "Premium Metal",
    downloadUrl: "/pdf/metals_buttons.pdf",
    imageUrl: "/images/products/antique_brass_button.png",
  },
  {
    id: 4,
    title: "Buckles Collection",
    description: "Statement hardware for outerwear and belts. Classic and modern finishes.",
    pages: "Digital Catalog",
    size: "0.3 MB",
    type: "Tech Specs",
    icon: Hexagon,
    category: "Hardware",
    downloadUrl: "/pdf/buckles.pdf",
    imageUrl: "/images/products/brass_buckle.png",
  },
  {
    id: 5,
    title: "Ring Adjusters",
    description: "Functional sliders and rings that elevate utility into a design statement.",
    pages: "Digital Catalog",
    size: "0.6 MB",
    type: "Lookbook",
    icon: RefreshCw,
    category: "Accessories",
    downloadUrl: "/pdf/ring_adjusters.pdf",
    imageUrl: "/images/products/gold_slider.png",
  },
  {
    id: 6,
    title: "Wooden Collection",
    description: "Natural sustainability. Ethically sourced wooden buttons with unique grain patterns.",
    pages: "Digital Catalog",
    size: "0.3 MB",
    type: "Lookbook",
    icon: TreeDeciduous,
    category: "Natural Series",
    downloadUrl: "/pdf/wooden_buttons.pdf",
    imageUrl: "/images/products/wooden_collection_hero.png",
  },
  {
    id: 7,
    title: "Stoppers & Cords",
    description: "Essential functional trims for sportswear and outerwear functionality.",
    pages: "Digital Catalog",
    size: "0.4 MB",
    type: "Tech Specs",
    icon: Anchor,
    category: "Trims",
    downloadUrl: "/pdf/stoppers.pdf",
    imageUrl: "/images/products/stoppers_cords_hero.png",
  },
  {
    id: 8,
    title: "Zippers & Tapes",
    description: "High-performance zipper technologies and elastic tapes.",
    pages: "Coming Soon",
    size: "TBD",
    type: "Tech Specs",
    icon: AlignJustify,
    category: "Zippers",
    imageUrl: "/images/products/gold_zipper.png",
  },
];

const Catalog = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Catalog & Spec Sheets | SAIMPEX";
  }, []);

  const handleDownload = async (catalog: CatalogItem) => {
    if (catalog.downloadUrl) {
      toast({
        title: "Download Started",
        description: `Downloading ${catalog.title}...`,
        className: "bg-primary text-white border-accent"
      });

      try {
        const response = await fetch(catalog.downloadUrl);
        if (!response.ok) throw new Error("File fetch failed");
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `${catalog.title.replace(/\s+/g, '-')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
      } catch (error) {
        const link = document.createElement('a');
        link.href = catalog.downloadUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }
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

            <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed border-t border-border/25 pt-8 mt-8">
              Access the complete range of Saimpex technical documents. <br className="hidden md:block" />
              Download catalogs, specification sheets, and lookbooks.
            </p>
          </motion.div>

          {/* Master Collection Feature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-24"
          >
            <div className="relative group overflow-hidden bg-[#060606] text-white rounded-3xl shadow-2xl border border-stone-900/60 hover:border-accent/30 transition-all duration-700">
              {/* Decorative Glow */}
              <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-all duration-700" />
              
              <div className="flex flex-col lg:flex-row min-h-[500px]">

                {/* Visual Side (Left) */}
                <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/catalog-feature-bg.jpg')] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                </div>

                {/* Content Side (Right) */}
                <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-20 bg-[#060606]">
                  {/* Subtle Grain Texture Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02] pointer-events-none" />

                  <div className="space-y-8 relative z-10 flex-1 flex flex-col justify-center">
                    {/* Badge */}
                    <div className="flex items-center gap-2.5 text-accent">
                      <Crown className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-accent/90">Crown Jewel Edition</span>
                    </div>

                    {/* Title */}
                    <div className="space-y-4">
                      <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide leading-tight">
                        {featuredCatalog.title}
                      </h2>
                      <div className="h-[1px] w-12 bg-accent/60" />
                    </div>

                    {/* Description */}
                    <p className="text-stone-400 text-[15px] sm:text-[16px] leading-relaxed max-w-lg font-light tracking-wide">
                      {featuredCatalog.description}
                    </p>

                    {/* Premium Spec Pills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-stone-900/50">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase text-stone-500 tracking-widest block">Format</span>
                        <div className="text-[12px] text-stone-200 font-medium flex items-center gap-2">
                          <FileType className="w-3.5 h-3.5 text-accent/80" />
                          <span>PDF High Res</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase text-stone-500 tracking-widest block">Length</span>
                        <div className="text-[12px] text-stone-200 font-medium flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-accent/80" />
                          <span>{featuredCatalog.pages}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase text-stone-500 tracking-widest block">File Size</span>
                        <div className="text-[12px] text-stone-200 font-medium flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-accent/80" />
                          <span>{featuredCatalog.size}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase text-stone-500 tracking-widest block">Access</span>
                        <div className="text-[12px] text-emerald-500 font-medium flex items-center gap-2">
                          <Shield className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Public</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      {/* Preview Button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" variant="outline" className="flex-1 border-stone-800 bg-transparent text-stone-200 hover:bg-white hover:text-black hover:border-white h-14 uppercase tracking-[0.2em] font-bold text-[10px] rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group">
                            <Eye className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" /> Preview Catalog
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl h-[90vh] bg-[#060606] p-0 border-white/5 overflow-hidden shadow-2xl rounded-2xl">
                          <div className="w-full h-full flex flex-col">
                            <div className="h-16 bg-[#060606] border-b border-white/5 flex items-center justify-between px-8 pr-16 text-white">
                              <span className="font-serif italic text-lg text-stone-200">{featuredCatalog.title}</span>
                              <Button size="sm" className="bg-accent text-white hover:bg-white hover:text-black transition-colors" onClick={() => handleDownload(featuredCatalog)}>
                                Download PDF
                              </Button>
                            </div>
                            <div className="flex-1 bg-[#060606] relative">
                              <iframe
                                src={`${encodeURI(featuredCatalog.downloadUrl || '')}#toolbar=0`}
                                className="w-full h-full rounded-none"
                                title="Catalog Preview"
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Download Button */}
                      <Button
                        size="lg"
                        onClick={() => handleDownload(featuredCatalog)}
                        className="flex-1 bg-[#7A4E2D] hover:bg-[#633e24] text-white h-14 text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(122,78,45,0.25)] hover:shadow-[0_8px_30px_rgba(122,78,45,0.4)] flex items-center justify-center gap-2.5 hover:-translate-y-0.5"
                      >
                        Download PDF <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Catalog Grid */}
          <div className="flex items-center justify-between mb-8 border-b border-border/25 pb-4 mt-20">
            <h3 className="text-2xl font-serif text-slate-900">Sector Collections</h3>
            <span className="text-sm font-mono text-stone-400">{catalogs.length - 1} Defined Series</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogs.slice(1).map((catalog, idx) => {
              const Icon = catalog.icon;
              const isAvailable = Boolean(catalog.downloadUrl);

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  key={catalog.id}
                  className="group relative bg-card flex flex-col justify-between border border-border/80 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-xl p-8 min-h-[380px] overflow-hidden"
                >
                  {/* Hover Accent Top Line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30" />

                  {/* Watermark Number */}
                  <span className="absolute top-6 right-8 font-serif text-6xl font-semibold text-accent/5 group-hover:text-accent/10 transition-colors select-none -z-0">
                    0{idx + 1}
                  </span>

                  {/* Content Area */}
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Icon Container */}
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <Icon className="w-5 h-5" strokeWidth={1.2} />
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.25em] text-accent uppercase pl-1 border-l border-accent/40 leading-none">
                            {catalog.category}
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">
                            {catalog.size}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-serif text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                          {catalog.title}
                        </h3>
                        
                        <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-3">
                          {catalog.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/60 w-full" />

                    {/* Bottom Actions */}
                    <div className="flex gap-3 pt-2">
                      {isAvailable ? (
                        <>
                          {/* Preview Button */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1 h-11 border-border text-primary hover:border-primary hover:bg-transparent text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-lg">
                                Preview
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl h-[90vh] bg-stone-100 p-0 overflow-hidden">
                              <div className="w-full h-full flex flex-col">
                                <div className="h-12 bg-card border-b border-border flex items-center justify-between px-6 pr-14">
                                  <span className="font-bold text-sm font-serif">{catalog.title}</span>
                                  <Button size="sm" onClick={() => handleDownload(catalog)}>Download Original</Button>
                                </div>
                                <div className="flex-1 bg-gray-200 relative">
                                  <iframe
                                    src={`${encodeURI(catalog.downloadUrl || '')}#toolbar=0`}
                                    className="w-full h-full border-0"
                                    title={`Preview of ${catalog.title}`}
                                  ></iframe>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          {/* Download Button */}
                          <Button
                            onClick={() => handleDownload(catalog)}
                            className="flex-1 bg-primary text-white hover:bg-accent hover:text-white h-11 text-[10px] uppercase tracking-[0.15em] font-bold shadow-sm transition-all duration-300 rounded-lg"
                          >
                            <Download className="w-3.5 h-3.5 mr-2" /> PDF
                          </Button>
                        </>
                      ) : (
                        <div className="w-full py-3 bg-muted/40 border border-dashed border-border text-center text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2 rounded-lg">
                          <Lock className="w-3 h-3 text-stone-400" /> Catalog Locked
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Area */}
          <div className="mt-24 border-t border-border/25 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
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
