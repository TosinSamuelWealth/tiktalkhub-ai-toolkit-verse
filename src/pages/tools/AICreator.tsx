import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, ImageIcon, PenTool, Bot, 
  Music, Video, ArrowRight, TrendingUp 
} from 'lucide-react';

const AICreator = () => {
  const tools = [
    {
      name: "AI Content Writer",
      description: "Generate high-quality articles, blogs, and copy with AI",
      icon: PenTool,
      features: ["SEO optimized", "Multiple formats", "Tone adjustment"],
      popular: true
    },
    {
      name: "Image Generator",
      description: "Create stunning images from text descriptions",
      icon: ImageIcon,
      features: ["Multiple styles", "High resolution", "Commercial use"]
    },
    {
      name: "AI Voice Generator",
      description: "Text-to-speech with natural-sounding voices",
      icon: Music,
      features: ["Multiple languages", "Voice cloning", "Custom emotions"],
      popular: true
    },
    {
      name: "Video Script Writer",
      description: "AI-powered scripts for any video content",
      icon: Video,
      features: ["Hook optimization", "Call-to-action", "Platform-specific"]
    },
    {
      name: "Chatbot Builder",
      description: "Create intelligent chatbots for your website",
      icon: Bot,
      features: ["Custom training", "Multi-platform", "Analytics dashboard"],
      popular: true
    },
    {
      name: "AI Art Enhancer",
      description: "Upscale and enhance images with AI",
      icon: Sparkles,
      features: ["4K upscaling", "Noise reduction", "Style transfer"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "AI Content Creation Revolution",
      excerpt: "How artificial intelligence is transforming the creative industry and what it means for creators.",
      readTime: "8 min",
      trending: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Building Your First AI Chatbot",
      excerpt: "Step-by-step guide to creating intelligent chatbots that engage your audience.",
      readTime: "12 min",
      trending: false,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "AI Voice Technology Trends",
      excerpt: "The latest advances in AI voice generation and what's coming next.",
      readTime: "6 min",
      trending: true,
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(138,43,226,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyber-green/20 to-primary/20 text-cyber-green border-cyber-green/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Creator Suite
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green via-primary to-gold-bright bg-clip-text text-transparent">
                AI Creator Suite
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unleash your creativity with AI-powered content creation tools. Generate images, videos, 
              text, and audio content that captivates your audience.
            </p>
            
            <Button size="lg" className="btn-gold">
              Start Creating with AI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={tool.name} className="tiktok-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyber-green/20 to-primary/20">
                      <tool.icon className="h-6 w-6 text-cyber-green" />
                    </div>
                    {tool.popular && (
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-cyber-green transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-cyber-green bg-clip-text text-transparent">
              AI Creation Insights
            </h2>
            <p className="text-muted-foreground">Master AI-powered content creation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="tiktok-card group cursor-pointer overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.readTime}
                    </Badge>
                    {post.trending && (
                      <Badge className="bg-red-500 text-white text-xs">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-cyber-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
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

export default AICreator;