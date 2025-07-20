import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 AI Tools That Will 10x Your Productivity",
      excerpt: "Discover the game-changing AI tools that successful creators use daily to automate their workflow and focus on what matters most.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      readTime: "5 min read",
      views: "12.5K",
      trending: true,
      featured: true,
      tags: ["Productivity", "AI Tools"]
    },
    {
      id: 2,
      title: "How to Go Viral on TikTok in 2024",
      excerpt: "Master the latest TikTok algorithm secrets and trending strategies that top creators don't want you to know.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      readTime: "7 min read",
      views: "23.1K",
      trending: true,
      featured: false,
      tags: ["TikTok", "Social Media"]
    },
    {
      id: 3,
      title: "Resume Secrets That Get You Hired",
      excerpt: "Land interviews at top companies with these insider resume tips and AI-powered optimization techniques.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      readTime: "6 min read",
      views: "18.7K",
      trending: false,
      featured: true,
      tags: ["Career", "Resume"]
    },
    {
      id: 4,
      title: "Building Your Personal Brand Online",
      excerpt: "Create a magnetic personal brand that attracts opportunities and builds lasting connections in the digital age.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      readTime: "8 min read",
      views: "15.3K",
      trending: true,
      featured: false,
      tags: ["Branding", "Marketing"]
    },
    {
      id: 5,
      title: "Mental Health for Creators",
      excerpt: "Maintain your wellbeing while building your creative empire. Tools and strategies for sustainable success.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      readTime: "10 min read",
      views: "9.8K",
      trending: false,
      featured: true,
      tags: ["Mental Health", "Wellness"]
    },
    {
      id: 6,
      title: "PDF Productivity Hacks",
      excerpt: "Transform how you work with documents using these advanced PDF tricks and automation techniques.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      readTime: "4 min read",
      views: "7.2K",
      trending: false,
      featured: false,
      tags: ["PDF", "Productivity"]
    },
    {
      id: 7,
      title: "Video Editing Made Simple",
      excerpt: "Create professional-quality videos without expensive software. Free tools and techniques revealed.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      readTime: "9 min read",
      views: "14.6K",
      trending: true,
      featured: false,
      tags: ["Video", "Editing"]
    },
    {
      id: 8,
      title: "Starting a Side Business in 2024",
      excerpt: "Turn your skills into income with proven strategies for building a profitable side business from scratch.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      readTime: "12 min read",
      views: "21.4K",
      trending: true,
      featured: true,
      tags: ["Business", "Entrepreneurship"]
    },
    {
      id: 9,
      title: "Instagram Growth Strategies",
      excerpt: "Organic methods to grow your Instagram following and engagement without buying followers or using bots.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      readTime: "6 min read",
      views: "16.9K",
      trending: false,
      featured: false,
      tags: ["Instagram", "Growth"]
    },
    {
      id: 10,
      title: "Future of AI in Content Creation",
      excerpt: "What's coming next in AI-powered content creation and how to stay ahead of the curve in 2024 and beyond.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      readTime: "11 min read",
      views: "19.3K",
      trending: true,
      featured: true,
      tags: ["AI", "Future"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              🔥 Hot Reads
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with insights, tips, and strategies from industry experts
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            {blogPosts.filter(post => post.featured)[0] && (
              <Link to={`/blog/${blogPosts.filter(post => post.featured)[0].id}`} className="group">
                <Card className="tiktok-card h-full border-0 overflow-hidden group-hover:scale-[1.02] transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={blogPosts.filter(post => post.featured)[0].image} 
                      alt={blogPosts.filter(post => post.featured)[0].title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {blogPosts.filter(post => post.featured)[0].trending && (
                        <Badge className="bg-red-500 text-white hover:bg-red-600">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {blogPosts.filter(post => post.featured)[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {blogPosts.filter(post => post.featured)[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{blogPosts.filter(post => post.featured)[0].readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{blogPosts.filter(post => post.featured)[0].views}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {blogPosts.filter(post => post.featured)[0].tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>

          {/* Side Featured Posts */}
          <div className="space-y-4">
            {blogPosts.filter(post => post.featured).slice(1, 3).map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <Card className="tiktok-card border-0 overflow-hidden group-hover:scale-[1.02] transition-all duration-500">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <span>{post.readTime}</span>
                          <span>{post.views}</span>
                          {post.trending && (
                            <Badge className="bg-red-500 text-white text-xs px-1 py-0">
                              Hot
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* TikTok-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.slice(3, 10).map((post, index) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="tiktok-card border-0 overflow-hidden group-hover:scale-105 transition-all duration-500 animate-fade-in">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {post.trending && (
                      <Badge className="bg-red-500 text-white text-xs">
                        🔥
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-semibold text-sm line-clamp-2 drop-shadow-lg">
                      {post.title}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span>{post.views}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-lg font-semibold text-primary hover:text-gold transition-colors duration-300 group"
          >
            <span>Read More Stories</span>
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

export default BlogSection;