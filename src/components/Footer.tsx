import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ShoppingBag, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-10 w-10 text-accent" />
              <div>
                <h3 className="text-3xl font-display font-bold">SAIMPEX</h3>
                <p className="text-sm text-primary-foreground/70">Premium Button Wholesale</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Leading supplier of premium buttons and garment accessories. Trusted by manufacturers worldwide for quality, reliability, and exceptional service.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="font-semibold">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="premium" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-primary-foreground/80 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Categories</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Plastic Buttons</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Metal Buttons</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Wooden Buttons</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Snap Buttons</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Jeans Buttons</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                <span>Custom Logo Buttons</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2025 SAIMPEX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
