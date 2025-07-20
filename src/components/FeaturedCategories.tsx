import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, FileText, Video, MessageSquare, TrendingUp, 
  Heart, Palette, Wrench, Users, Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCategories = () => {
  const categories = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "SmartBiz Suite",
      description: "Business tools for entrepreneurs",
      tools: ["Name Generator", "Logo Creator", "Business Plans"],
      link: "/tools/smartbiz",
      gradient: "from-blue-500 to-purple-600",
      count: "8 tools"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF Toolkit",
      description: "Complete PDF management",
      tools: ["Compress", "Merge", "AI Chat"],
      link: "/tools/pdf",
      gradient: "from-red-500 to-pink-600",
      count: "6 tools"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Career Tools",
      description: "Land your dream job",
      tools: ["Resume Builder", "Interview Prep", "LinkedIn Optimizer"],
      link: "/tools/career",
      gradient: "from-green-500 to-emerald-600",
      count: "5 tools"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Toolkit",
      description: "Create stunning videos",
      tools: ["Captions", "Thumbnails", "Trimmer"],
      link: "/tools/video",
      gradient: "from-orange-500 to-red-600",
      count: "5 tools"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "TikTok Toolkit",
      description: "Go viral on TikTok",
      tools: ["Trend Tracker", "Hashtags", "Auto-Crop"],
      link: "/tools/tiktok",
      gradient: "from-pink-500 to-rose-600",
      count: "5 tools"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Social Toolkit",
      description: "Social media mastery",
      tools: ["Hashtag Generator", "Caption Writer", "Bio Creator"],
      link: "/tools/social",
      gradient: "from-cyan-500 to-blue-600",
      count: "5 tools"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Blog & SEO Hub",
      description: "Content that ranks",
      tools: ["AI Writer", "SEO Optimizer", "Headline Analyzer"],
      link: "/tools/blog",
      gradient: "from-indigo-500 to-purple-600",
      count: "5 tools"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emotional Tools",
      description: "Mental wellness support",
      tools: ["MindMirror", "Mood Tracker", "Daily Planner"],
      link: "/tools/emotional",
      gradient: "from-emerald-500 to-teal-600",
      count: "6 tools"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "AI Creator",
      description: "Unleash your creativity",
      tools: ["Meme Generator", "Headshots", "Script Writer"],
      link: "/tools/ai-creator",
      gradient: "from-violet-500 to-purple-600",
      count: "6 tools"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "General Tools",
      description: "Everyday utilities",
      tools: ["Voice to Text", "QR Generator", "Image Tools"],
      link: "/tools/general",
      gradient: "from-amber-500 to-orange-600",
      count: "5 tools"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              🛠 Popular Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive toolkit designed to supercharge your productivity and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group"
            >
              <Card className="tiktok-card h-full border-0 overflow-hidden group-hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="relative mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300 inline-block`}>
                      {category.icon}
                    </div>
                    <div className="absolute top-2 right-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {category.count}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Tool list */}
                    <div className="space-y-1">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={tool} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-border/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium group-hover:text-gold transition-colors duration-300">
                        Explore Tools
                      </span>
                      <svg 
                        className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 shimmer" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/tools"
            className="inline-flex items-center space-x-2 text-lg font-semibold text-primary hover:text-gold transition-colors duration-300 group"
          >
            <span>Explore All 50+ Tools</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;