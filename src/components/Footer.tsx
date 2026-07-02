import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY_INFO } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: "Newsletter Subscriber",
            email: email.trim(),
            message: "Subscribed to Newsletter",
            product: "Newsletter Subscription",
            status: "new"
          }
        ]);

      if (error) throw error;

      toast({
        title: "Subscribed",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    } catch (err: any) {
      console.error("Subscription error:", err);
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 pt-20 pb-10">

        {/* Top Section: Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div className="space-y-4 max-w-md">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-luxury text-primary-foreground">
                S. A. IMPEX
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Premium garment hardware manufacturer and exporter.
              Buttons, zippers, buckles, and accessories for global fashion houses since 2005.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-[400px]">
            <h3 className="text-sm font-medium text-primary-foreground mb-2">
              Newsletter
            </h3>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Get quarterly updates on new products and industry trends.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-primary border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-10"
              />
              <Button
                type="submit"
                className="h-10 px-6 bg-accent text-accent-foreground hover:bg-accent-hover text-sm font-medium transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/40">
              Products
            </h4>
            <ul className="space-y-3">
              {['Buttons', 'Zippers', 'Buckles', 'Hooks & Rings'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/40">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Process', 'Sustainability'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/40">
              Support
            </h4>
            <ul className="space-y-3">
              {['Request Samples', 'Custom Orders', 'Shipping Info'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/40">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70 leading-relaxed">
                  276/4, 3rd floor, LHS,<br />
                  Govindpuri, New Delhi,<br />
                  India 110019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>&copy; {currentYear} S. A. IMPEX. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/legal" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link to="/legal" className="hover:text-primary-foreground transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
