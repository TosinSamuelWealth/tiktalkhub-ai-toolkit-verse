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
    { name: 'PDF Tools', href: '/tools/pdf' },
    { name: 'Career Tools', href: '/tools/career' },
    { name: 'Video Toolkit', href: '/tools/video' },
    { name: 'TikTok Toolkit', href: '/tools/tiktok' },
    { name: 'Social Toolkit', href: '/tools/social' },
    { name: 'Blog & SEO', href: '/tools/blog' },
    { name: 'Emotional Tools', href: '/tools/emotional' },
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
            
            {/* Tools Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('tools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300">
                <span>Tools</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-64 glass rounded-xl p-4 shadow-elegant animate-fade-in">
                  <div className="grid grid-cols-1 gap-2">
                    {toolCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary/20 rounded-lg transition-all duration-300"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/tiktok" className="text-foreground hover:text-primary transition-colors duration-300">
              TikTok Toolkit
            </Link>
            <Link to="/career" className="text-foreground hover:text-primary transition-colors duration-300">
              Career Tools
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
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