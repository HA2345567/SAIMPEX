import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border/10 relative overflow-hidden">

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-6 group ml-2">
              <img
                src="/images/logo-new.png"
                alt="Saimpex Logo"
                className="h-20 w-auto object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-3xl font-brand font-bold tracking-widest text-white group-hover:text-accent transition-colors">
                SAIMPEX
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm font-body text-sm md:text-base">
              Elevating fashion with premium garment accessories. We combine craftsmanship with innovation to deliver global excellence.
            </p>

            {/* Social List */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-white text-white/70 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Social Link"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold font-display text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Collections', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-white/60 hover:text-accent transition-colors text-sm font-medium inline-flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold font-display text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {['Metal Buttons', 'Polyester', 'Zippers', 'Buckles'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold font-display text-white mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Subscribe to get latest product updates and B2B offers.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Email address"
                className="bg-white/5 border-white/10 focus-visible:ring-accent h-11 text-sm text-white placeholder:text-white/40"
              />
              <Button size="sm" className="bg-white text-foreground hover:bg-white/90 h-11 px-6 font-semibold">
                Join
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-medium">
          <p>&copy; {currentYear} Saimpex. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
