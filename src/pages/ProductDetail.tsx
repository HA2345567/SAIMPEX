import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronRight, MessageCircle, ArrowLeft, Check, Share2, Printer } from "lucide-react";
import { getWhatsAppUrl, COMPANY_INFO } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/integrations/supabase/products";
import { useEffect } from "react";

const ProductDetail = () => {
    const { id } = useParams();

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id || ''),
        enabled: !!id,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <Header />
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
                    <p className="text-slate-500 mb-6">The product you are looking for does not exist.</p>
                    <Button asChild>
                        <Link to="/products">Back to Catalog</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background font-body">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200 mt-[72px]">
                <div className="container mx-auto px-4 py-3 text-sm text-slate-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to="/products" className="hover:text-blue-600">Catalog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-blue-600">{product.category}</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="font-semibold text-slate-900 truncate">{product.name}</span>
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Image Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-8 flex items-center justify-center relative group overflow-hidden">
                            <img
                                src={product.image_url || '/placeholder.svg'}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    In Stock
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {/* Placeholder thumbnails */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-24 h-24 bg-slate-50 rounded-lg border border-slate-200 p-2 cursor-pointer hover:border-blue-500 transition-colors">
                                    <img src={product.image_url || '/placeholder.svg'} alt="" className="w-full h-full object-cover rounded opacity-70 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Ref: {product.sku || product.id.slice(0, 8)}</span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    ★★★★★ <span className="text-slate-400 ml-1">(4.9/5)</span>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed border-b border-slate-100 pb-8">
                                {product.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Product Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                                        <span className="text-slate-500">{spec.label}</span>
                                        <span className="font-medium text-slate-900">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-slate-700">Minimum Order Quantity:</span>
                                <span className="font-bold text-blue-700">{product.min_order_quantity} Units</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-slate-700">Estimated Delivery:</span>
                                <span className="font-bold text-slate-900">3-5 Business Days</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button size="lg" className="w-full h-14 text-lg font-bold bg-[#0052cc] hover:bg-[#0043a8] shadow-xl shadow-blue-900/10" asChild>
                                <Link to="/contact">
                                    Request a Quote
                                </Link>
                            </Button>
                            <div className="grid grid-cols-2 gap-4">
                                <Button size="lg" variant="outline" className="h-12 border-green-500 text-green-600 hover:bg-green-50" asChild>
                                    <a href={getWhatsAppUrl(`Inquiry for ${product.name} (${product.id})`)} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50" asChild>
                                    <a href={`tel:${COMPANY_INFO.phone}`}>
                                        <Phone className="w-5 h-5 mr-2" /> Call Now
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
                            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <Share2 className="w-4 h-4" /> Share Product
                            </button>
                            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <Printer className="w-4 h-4" /> Print Spec Sheet
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;
