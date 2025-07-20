import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toolCategories = [
    { name: 'SmartBiz Suite', href: '/tools/smartbiz' },
    { name: 'Career Toolkit', href: '/tools/career' },
    { name: 'Social Tools', href: '/tools/social' },
    { name: 'Video Tools', href: '/tools/video' },
    { name: 'Emotional Utility', href: '/tools/emotional' },
    { name: 'PDF Tools', href: '/tools/pdf' },
    { name: 'TikTok Toolkit', href: '/tools/tiktok' },
    { name: 'Blog & SEO', href: '/tools/blog' },
    { name: 'AI Creator', href: '/tools/ai-creator' },
    { name: 'General Tools', href: '/tools/general' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass backdrop-blur-xl bg-background/80' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/db50be3e-d011-489c-97c3-f213a9052a8c.png" 
              alt="Tiktalkhub" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-gold-light bg-clip-text text-transparent">
              tiktalkhub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link to="/tools/smartbiz" className="text-foreground hover:text-primary transition-colors duration-300">
              SmartBiz Suite
            </Link>
            <Link to="/tools/career" className="text-foreground hover:text-primary transition-colors duration-300">
              Career Toolkit
            </Link>
            <Link to="/tools/social" className="text-foreground hover:text-primary transition-colors duration-300">
              Social Tools
            </Link>
            <Link to="/tools/video" className="text-foreground hover:text-primary transition-colors duration-300">
              Video Tools
            </Link>
            <Link to="/tools/emotional" className="text-foreground hover:text-primary transition-colors duration-300">
              Emotional Utility
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-gold pulse-glow">
              Try a Tool Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-xl p-6 animate-fade-in">
            <div className="space-y-4">
              <Link to="/" className="block text-foreground hover:text-primary transition-colors duration-300">
                Home
              </Link>
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-primary">Tools</span>
                {toolCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block pl-4 text-sm text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link to="/blog" className="block text-foreground hover:text-primary transition-colors duration-300">
                Blog
              </Link>
              <Link to="/contact" className="block text-foreground hover:text-primary transition-colors duration-300">
                Contact
              </Link>
              <Button className="btn-gold w-full mt-4">
                Try a Tool Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;