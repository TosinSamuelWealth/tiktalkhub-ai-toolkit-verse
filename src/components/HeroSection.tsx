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
      {/* Magical Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        {/* Aurora Background */}
        <div className="absolute inset-0 opacity-30 animate-aurora-shift" 
             style={{ background: 'var(--gradient-aurora)', filter: 'blur(100px)' }} />
        
        {/* Cosmic Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,191,255,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,20,147,0.15),transparent_60%)]" />
        
        {/* Magical Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-magic-float opacity-40"
             style={{ background: 'var(--gradient-glow)' }} />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-magic-float opacity-50"
             style={{ background: 'linear-gradient(45deg, hsl(var(--electric-blue)), hsl(var(--magic-pink)))', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-xl animate-cosmic-pulse opacity-60"
             style={{ background: 'linear-gradient(135deg, hsl(var(--gold-bright)), hsl(var(--aurora-cyan)))', animationDelay: '4s' }} />
        <div className="absolute top-1/6 right-1/3 w-32 h-32 rounded-full blur-lg animate-magic-float opacity-70"
             style={{ background: 'radial-gradient(circle, hsl(var(--neon-purple)), transparent)', animationDelay: '6s' }} />
        
        {/* Particle Field */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-gold-bright rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 bg-magic-pink rounded-full animate-pulse" style={{ animationDelay: '5s' }} />
          <div className="absolute top-[80%] left-[70%] w-1 h-1 bg-aurora-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[30%] left-[60%] w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
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
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-gold-bright bg-clip-text text-transparent">
                  All-in-One AI Toolkit
                </span>
                <br />
                <span className="text-foreground">for</span>
                <br />
                <span className="bg-gradient-to-r from-electric-blue via-primary to-gold-bright bg-clip-text text-transparent">
                  Creators, Students, Professionals & More
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                50+ smart tools. Zero signup. Just Smart Tools.
                <br />
                <span className="text-primary font-semibold">No Signup. No Hassle.</span> Pure Intelligence.
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