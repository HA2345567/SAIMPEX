import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ShoppingBag, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="Saimpex Logo"
                className="h-16 w-auto object-contain bg-white/10 rounded-lg p-2 backdrop-blur-sm"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm font-body">
              Premium garment accessories manufacturer and exporter. We deliver quality buttons, zippers, and trims to brands worldwide with unmatchable reliability.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/70 hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-glow">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold font-display mb-6">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Catalog', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2 group font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold font-display mb-6">Collections</h4>
            <ul className="space-y-4">
              {['Metal Buttons', 'Zippers', 'Buckles', 'Hooks & Eyes', 'Ring Adjustors', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2 group font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Latest arrivals & B2B offers directly to your inbox.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Business Email"
                className="bg-slate-900 border-slate-800 text-slate-200 placeholder:text-slate-600 focus-visible:ring-blue-600 h-10"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-10">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SAIMPEX. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
