import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const HeroSection = () => {
  const topTools = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Blog Generator",
      description: "Create viral content in seconds",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Resume AI Builder",
      description: "Land your dream job faster",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "TikTok Trend Tracker",
      description: "Go viral with trending content",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gold/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-primary/30 to-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-gold/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">50+ AI-Powered Tools</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-gold bg-clip-text text-transparent">
                  Supercharge
                </span>
                <br />
                <span className="text-foreground">Your Daily</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                  Hustle
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                The ultimate AI toolkit for creators, professionals, students, and influencers. 
                <span className="text-primary font-semibold"> No Signup. No Hassle.</span> Just Smart Tools.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gold text-lg px-8 py-4 group">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                Explore Tools
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Right Side - Top Tools Showcase */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">🔥 Trending Tools</h3>
              <p className="text-muted-foreground">Most popular this week</p>
            </div>
            
            <div className="space-y-4">
              {topTools.map((tool, index) => (
                <div 
                  key={tool.title}
                  className="tiktok-card p-6 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tool.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 shimmer" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button variant="ghost" className="text-primary hover:text-gold hover:bg-primary/10">
                View All 50+ Tools →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;