import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Hash, Twitter, Instagram, Link, 
  QrCode, PenTool, ArrowRight, TrendingUp 
} from 'lucide-react';

const SocialTools = () => {
  const tools = [
    {
      name: "Hashtag Generator",
      description: "Research and generate trending hashtags for any platform",
      icon: Hash,
      features: ["Trending analysis", "Competition tracking", "Performance metrics"],
      popular: true
    },
    {
      name: "Twitter/X Formatter",
      description: "Format and optimize your Twitter threads",
      icon: Twitter,
      features: ["Thread templates", "Character counting", "Engagement optimization"]
    },
    {
      name: "Caption Writer",
      description: "AI-powered captions for Instagram, Facebook, and X",
      icon: PenTool,
      features: ["Platform-specific styles", "Emoji suggestions", "CTA optimization"],
      popular: true
    },
    {
      name: "Instagram Bio Link Builder",
      description: "Create beautiful landing pages for your bio link",
      icon: Instagram,
      features: ["Custom themes", "Analytics tracking", "Mobile optimized"]
    },
    {
      name: "QR Code Generator",
      description: "Generate custom QR codes for any purpose",
      icon: QrCode,
      features: ["Custom styling", "Logo embedding", "High resolution"],
      popular: true
    },
    {
      name: "Link Shortener",
      description: "Shorten and track your social media links",
      icon: Link,
      features: ["Custom domains", "Click analytics", "UTM parameters"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Hashtag Strategy That Actually Works",
      excerpt: "The complete guide to using hashtags effectively across all social media platforms.",
      readTime: "8 min",
      trending: true
    },
    {
      id: 2,
      title: "Instagram Growth Hacks for 2024",
      excerpt: "Proven strategies to grow your Instagram following organically and authentically.",
      readTime: "10 min",
      trending: false
    },
    {
      id: 3,
      title: "Writing Captions That Convert",
      excerpt: "Psychology-backed techniques for writing social media captions that drive engagement.",
      readTime: "7 min",
      trending: true
    },
    {
      id: 4,
      title: "Twitter Thread Mastery",
      excerpt: "How to create viral Twitter threads that build your audience and authority.",
      readTime: "6 min",
      trending: false
    },
    {
      id: 5,
      title: "Bio Link Optimization Guide",
      excerpt: "Maximize your bio link's potential with these conversion-focused strategies.",
      readTime: "5 min",
      trending: true
    },
    {
      id: 6,
      title: "Social Media Analytics Deep Dive",
      excerpt: "Understanding and leveraging social media metrics to improve your strategy.",
      readTime: "12 min",
      trending: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,20,147,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-magic-pink/20 to-primary/20 text-magic-pink border-magic-pink/30">
              <Hash className="w-4 h-4 mr-2" />
              Social Toolkit
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-magic-pink via-primary to-gold-bright bg-clip-text text-transparent">
                Social Toolkit
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Supercharge your social media presence with AI-powered tools. Create engaging content, 
              optimize for algorithms, and grow your audience across all platforms.
            </p>
            
            <Button size="lg" className="btn-gold">
              Boost Your Social Presence
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
                    <div className="p-3 rounded-xl bg-gradient-to-r from-magic-pink/20 to-primary/20">
                      <tool.icon className="h-6 w-6 text-magic-pink" />
                    </div>
                    {tool.popular && (
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-magic-pink transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-magic-pink rounded-full mr-2" />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-magic-pink bg-clip-text text-transparent">
              Social Media Insights
            </h2>
            <p className="text-muted-foreground">Expert strategies to dominate social media</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="tiktok-card group cursor-pointer">
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
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-magic-pink transition-colors">
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

export default SocialTools;