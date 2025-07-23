import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, Target, BarChart3, Link, 
  FileText, Eye, ArrowRight, TrendingUp 
} from 'lucide-react';

const BlogSEO = () => {
  const tools = [
    {
      name: "Keyword Research Tool",
      description: "Find high-ranking keywords for your content",
      icon: Search,
      features: ["Search volume data", "Competition analysis", "Long-tail suggestions"],
      popular: true
    },
    {
      name: "SEO Content Optimizer",
      description: "Optimize your content for search engines",
      icon: Target,
      features: ["Real-time scoring", "Keyword density", "Readability analysis"]
    },
    {
      name: "Backlink Analyzer",
      description: "Track and analyze your website's backlinks",
      icon: Link,
      features: ["Domain authority", "Link quality check", "Competitor analysis"],
      popular: true
    },
    {
      name: "SERP Rank Tracker",
      description: "Monitor your search engine rankings",
      icon: BarChart3,
      features: ["Position tracking", "Competitor monitoring", "Historical data"]
    },
    {
      name: "Blog Post Generator",
      description: "AI-powered blog post creation and optimization",
      icon: FileText,
      features: ["SEO-optimized structure", "Meta descriptions", "Schema markup"],
      popular: true
    },
    {
      name: "Site Audit Tool",
      description: "Comprehensive SEO audit for your website",
      icon: Eye,
      features: ["Technical SEO check", "Performance analysis", "Action recommendations"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "SEO Strategy That Actually Works in 2024",
      excerpt: "Complete guide to modern SEO techniques that drive organic traffic and improve rankings.",
      readTime: "15 min",
      trending: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Keyword Research Mastery",
      excerpt: "Advanced techniques for finding profitable keywords that your competitors miss.",
      readTime: "10 min",
      trending: false,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Content Marketing ROI Optimization",
      excerpt: "How to measure and improve the return on investment of your content marketing efforts.",
      readTime: "12 min",
      trending: true,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-electric-blue/20 to-primary/20 text-electric-blue border-electric-blue/30">
              <Search className="w-4 h-4 mr-2" />
              Blog & SEO Suite
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric-blue via-primary to-gold-bright bg-clip-text text-transparent">
                Blog & SEO Suite
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dominate search engines and create content that ranks. Advanced SEO tools 
              and content optimization to boost your organic traffic.
            </p>
            
            <Button size="lg" className="btn-gold">
              Boost Your SEO Rankings
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
                    <div className="p-3 rounded-xl bg-gradient-to-r from-electric-blue/20 to-primary/20">
                      <tool.icon className="h-6 w-6 text-electric-blue" />
                    </div>
                    {tool.popular && (
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-electric-blue transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2" />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-electric-blue bg-clip-text text-transparent">
              SEO & Content Insights
            </h2>
            <p className="text-muted-foreground">Master search engine optimization and content strategy</p>
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
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-electric-blue transition-colors">
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

export default BlogSEO;