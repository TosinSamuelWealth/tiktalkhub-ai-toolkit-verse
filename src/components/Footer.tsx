import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, Linkedin, 
  Mail, Phone, MapPin, Heart
} from 'lucide-react';

const Footer = () => {
  const toolCategories = [
    { name: 'SmartBiz Suite', href: '/tools/smartbiz' },
    { name: 'PDF Toolkit', href: '/tools/pdf' },
    { name: 'Career Tools', href: '/tools/career' },
    { name: 'Video Toolkit', href: '/tools/video' },
    { name: 'TikTok Toolkit', href: '/tools/tiktok' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Templates', href: '/templates' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Help Center', href: '/help' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-background/90 border-t border-border/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/db50be3e-d011-489c-97c3-f213a9052a8c.png" 
                alt="Tiktalkhub" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-gold-light bg-clip-text text-transparent">
                tiktalkhub
              </span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              The ultimate AI-powered toolkit for creators, professionals, students, and influencers. 
              Supercharge your productivity with 50+ smart tools designed to help you succeed.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                 <a href="mailto:support@tiktalkhub.top" className="hover:underline">
                  support@tiktalkhub.top
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-secondary/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:bg-secondary`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Popular Tools</h4>
            <ul className="space-y-3">
              {toolCategories.map((tool) => (
                <li key={tool.name}>
                  <Link 
                    to={tool.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Tiktalkhub. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for creators worldwide</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AdSense Ready Section */}
      <div className="border-t border-border/10 py-4">
        <div className="container mx-auto px-6">
          <div className="text-center text-xs text-muted-foreground/60">
            {/* Space reserved for AdSense or other ad networks */}
            <div id="footer-ads" className="min-h-[50px] flex items-center justify-center">
              Advertisement Space
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;