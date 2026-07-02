import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
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
        description: "Please enter a valid business email address.",
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
            message: "Subscribed to Private Briefing (Newsletter)",
            product: "Newsletter Subscription",
            status: "new"
          }
        ]);

      if (error) throw error;

      toast({
        title: "Private Briefing Activated",
        description: "You've successfully subscribed to our quarterly trend reports.",
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
    <footer className="relative bg-primary text-white/90 overflow-hidden">
      {/* Top Gold Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-28 pb-10 lg:pb-14 relative z-10">

        {/* ═════ Brand & Newsletter ═════ */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20 lg:mb-28">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-md"
          >
            <Link to="/" className="block">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-luxury text-white tracking-tight">
                S.A. IMPEX<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-base leading-relaxed font-light">
              Delivering world-class garment accessories — premium buttons, zippers, buckles, and hardware — for global fashion houses since 2005.
            </p>
          </motion.div>

          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[480px] bg-white/5 p-8 lg:p-10 border border-white/10 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3 text-accent/80">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Exclusive Access</span>
            </div>

            <h3 className="text-xl lg:text-2xl font-luxury text-white mb-3">Private Briefing</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Receive quarterly trend reports, priority inventory alerts, and industry insights.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email Address"
                className="bg-primary border-white/10 focus:border-accent text-white placeholder:text-white/30 h-12 rounded-sm px-6"
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-accent text-primary hover:bg-accent-hover rounded-sm font-bold uppercase tracking-wider text-sm transition-all duration-500 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-16 lg:mb-20" />

        {/* ═════ Links Grid ═════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16 lg:mb-20">

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent/80">Collections</h4>
            <ul className="space-y-4">
              {['Metal Buttons', 'Natural Shell', 'Zippers', 'Buckles'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-white/50 hover:text-white transition-colors flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent/80">Company</h4>
            <ul className="space-y-4">
              {['Sustainability', 'Process', 'Careers'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-white/50 hover:text-white transition-colors flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Client Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent/80">Client Services</h4>
            <ul className="space-y-4">
              {['Order Status', 'Request Samples', 'Custom Molds', 'Export Policy'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-white/50 hover:text-white transition-colors flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Headquarters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-accent/80">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/50 leading-relaxed">
                  276/4, 3rd floor, LHS,<br />
                  Govindpuri, New Delhi,<br />
                  India 110019
                </span>
              </li>
              <li className="flex gap-4 items-center text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-white/50 hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex gap-4 items-center text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/50 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* ═════ Bottom Bar ═════ */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>&copy; {currentYear} S. A. IMPEX. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <Link to="/legal" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Terms of Trade</Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/30">Crafted for Excellence</span>
          </div>
        </div>
      </div>

      {/* Bottom Gold Accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
    </footer>
  );
};

export default Footer;
