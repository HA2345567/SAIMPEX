import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-accent/10 font-sans-body relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container mx-auto px-6 pt-24 pb-12">

        {/* Top Tier: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">

          {/* Brand Area */}
          <div className="space-y-8 max-w-sm">
            <Link to="/" className="block">
              <span className="text-4xl md:text-5xl font-serif text-white tracking-tight">
                Saimpex<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              The quiet architects of fashion's finest details. Manufacturing premium accessories for the world's most demanding ateliers since 2005.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-sm border border-stone-800 text-stone-400 hover:border-accent hover:text-accent transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter - Architectural Layout */}
          <div className="w-full lg:w-1/2 bg-stone-900/50 p-10 border border-stone-800 backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-white mb-2">Private Briefing</h3>
            <p className="text-stone-400 mb-8">Receive quarterly trend reports and priority inventory alerts.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Business Email Address"
                className="bg-stone-950 border-stone-800 focus:border-accent text-white h-12 rounded-none placeholder:text-stone-600"
              />
              <Button className="h-12 px-8 bg-accent text-white hover:bg-accent/80 rounded-none font-serif tracking-wide">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-stone-900 mb-16"></div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Column 1 */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Collections</h4>
            <ul className="space-y-4">
              {['Metal Buttons', 'Natural Shell', 'Zippers', 'Buckles'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-stone-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Company</h4>
            <ul className="space-y-4">
              {['Sustainability', 'Process', 'Careers'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-stone-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Client Services</h4>
            <ul className="space-y-4">
              {['Order Status', 'Request Samples', 'Custom Molds', 'Export Policy'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-stone-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-stone-400 leading-relaxed">
                  276/4, 3rd floor, LHS,<br />
                  Govindpuri, New Delhi,<br />
                  India 110019
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-stone-400">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-stone-400">saimpex2023@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Legal & Signature */}
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-600">
          <p>&copy; {currentYear} Saimpex Accessories. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/legal" className="hover:text-stone-400 transition-colors">Privacy & Cookies</Link>
            <Link to="/legal" className="hover:text-stone-400 transition-colors">Terms of Trade</Link>
            <span className="hidden md:inline text-stone-800">|</span>
            <span className="text-stone-700">Crafted for Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
