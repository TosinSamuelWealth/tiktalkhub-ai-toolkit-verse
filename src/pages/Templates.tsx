import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, Presentation, Image, 
  Mail, Video, Layout, Download, Star 
} from 'lucide-react';

const Templates = () => {
  const templateCategories = [
    {
      name: "Business Plans",
      description: "Professional business plan templates",
      icon: FileText,
      count: 25,
      color: "from-primary to-gold-bright",
      popular: true
    },
    {
      name: "Presentations", 
      description: "Pitch decks and presentation templates",
      icon: Presentation,
      count: 40,
      color: "from-electric-blue to-primary"
    },
    {
      name: "Social Media Graphics",
      description: "Instagram, Facebook, and Twitter templates",
      icon: Image,
      count: 150,
      color: "from-magic-pink to-neon-purple",
      popular: true
    },
    {
      name: "Email Templates",
      description: "Professional email and newsletter templates",
      icon: Mail,
      count: 35,
      color: "from-aurora-cyan to-electric-blue"
    },
    {
      name: "Video Templates",
      description: "Intro, outro, and lower third templates",
      icon: Video,
      count: 60,
      color: "from-cyber-green to-primary"
    },
    {
      name: "Website Layouts",
      description: "Landing page and website templates",
      icon: Layout,
      count: 30,
      color: "from-neon-purple to-magic-pink",
      popular: true
    }
  ];

  const featuredTemplates = [
    {
      id: 1,
      name: "Modern Business Plan",
      category: "Business",
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      downloads: "12.5K",
      rating: 4.9,
      free: true
    },
    {
      id: 2,
      name: "TikTok Story Template",
      category: "Social Media",
      preview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      downloads: "28.3K",
      rating: 4.8,
      free: true
    },
    {
      id: 3,
      name: "Investor Pitch Deck",
      category: "Presentations",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      downloads: "18.7K",
      rating: 4.9,
      free: false
    },
    {
      id: 4,
      name: "Instagram Post Collection",
      category: "Social Media",
      preview: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      downloads: "35.2K",
      rating: 4.7,
      free: true
    },
    {
      id: 5,
      name: "Email Newsletter Template",
      category: "Email",
      preview: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop",
      downloads: "15.9K",
      rating: 4.6,
      free: true
    },
    {
      id: 6,
      name: "Landing Page Template",
      category: "Website",
      preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      downloads: "22.1K",
      rating: 4.8,
      free: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,100,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyber-green/20 to-primary/20 text-cyber-green border-cyber-green/30">
              <Layout className="w-4 h-4 mr-2" />
              Template Library
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green via-primary to-gold-bright bg-clip-text text-transparent">
                Professional Templates
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skip the design work with our collection of professional templates. 
              From business plans to social media graphics, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-cyber-green bg-clip-text text-transparent">
              Template Categories
            </h2>
            <p className="text-muted-foreground">Choose from our extensive collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templateCategories.map((category) => (
              <Card key={category.name} className="tiktok-card group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    {category.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                        🔥 Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.count} templates available
                  </p>
                  <Button className="w-full" variant="outline">
                    Browse Templates
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Templates
            </h2>
            <p className="text-muted-foreground">Most downloaded and highest rated</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="tiktok-card group cursor-pointer">
                <div className="relative">
                  <img 
                    src={template.preview} 
                    alt={template.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-3 left-3">
                    {template.free ? (
                      <Badge className="bg-green-500 text-white">
                        Free
                      </Badge>
                    ) : (
                      <Badge className="bg-primary text-primary-foreground">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    {template.free ? 'Download Free' : 'Get Premium'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <TikoAI />
    </div>
  );
};

export default Templates;