import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarIcon, UserIcon, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI Tools: 10 Trends That Will Shape 2025",
    excerpt: "Discover the cutting-edge AI trends that will revolutionize how we work, create, and innovate in the coming year.",
    image: "/placeholder.svg",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "AI Trends"
  };

  const blogPosts = [
    {
      title: "How to 10x Your Productivity with AI Resume Builders",
      excerpt: "Stop spending hours on resume formatting. Learn how AI-powered tools can create professional resumes in minutes.",
      image: "/placeholder.svg",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      category: "Career Tools",
      trending: true
    },
    {
      title: "From Zero to Viral: TikTok Content Strategy with AI",
      excerpt: "Discover the AI tools and strategies that top creators use to consistently create viral TikTok content.",
      image: "/placeholder.svg", 
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Social Media"
    },
    {
      title: "AI Business Plan Generator: Launch Your Startup Faster",
      excerpt: "How entrepreneurs are using AI to create comprehensive business plans in hours instead of weeks.",
      image: "/placeholder.svg",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: "Business Tools"
    },
    {
      title: "The Psychology of AI: Emotional Support Tools That Actually Work",
      excerpt: "Exploring how AI-powered emotional wellness tools are revolutionizing mental health support.",
      image: "/placeholder.svg",
      author: "Dr. Lisa Thompson",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Wellness"
    },
    {
      title: "PDF Magic: 10 AI Tools That Transform Document Workflows",
      excerpt: "From compression to conversion, discover AI tools that make PDF management effortless.",
      image: "/placeholder.svg",
      author: "Alex Chen",
      date: "Dec 3, 2024",
      readTime: "4 min read",
      category: "Productivity"
    },
    {
      title: "Video Content Revolution: AI Tools for Creators",
      excerpt: "How AI is changing video editing, thumbnail creation, and content optimization for creators.",
      image: "/placeholder.svg",
      author: "Jordan Smith",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      category: "Video Tools",
      trending: true
    }
  ];

  const categories = [
    "All Posts", "AI Trends", "Career Tools", "Social Media", 
    "Business Tools", "Wellness", "Productivity", "Video Tools"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-electric-blue/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-electric-blue/30 mb-6">
              <Sparkles className="h-5 w-5 text-electric-blue" />
              <span className="text-lg font-medium text-electric-blue">AI Insights & Tutorials</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-purple bg-clip-text text-transparent">
                Tiktalkhub Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, tutorials, and the latest trends in AI tools and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Article</h2>
            
            <div className="glass rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-electric-blue to-neon-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-electric-blue transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <UserIcon className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue text-white group w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Posts" ? "default" : "outline"}
                    size="sm"
                    className={category === "All Posts" 
                      ? "bg-gradient-to-r from-electric-blue to-neon-purple text-white" 
                      : "border-border/30 hover:border-electric-blue hover:bg-electric-blue/10"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.title} className="tiktok-card p-6 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="bg-gradient-to-r from-electric-blue to-neon-purple text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue text-white px-8 py-4"
              >
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;