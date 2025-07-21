import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Play, Clock, Users, BookOpen, 
  Video, FileText, Headphones, Star 
} from 'lucide-react';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Tiktalkhub",
      description: "Complete walkthrough of all features and tools",
      type: "video",
      duration: "15 min",
      difficulty: "Beginner",
      views: "25.3K",
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      title: "AI Resume Builder Masterclass",
      description: "Create ATS-optimized resumes that get interviews",
      type: "video",
      duration: "22 min", 
      difficulty: "Intermediate",
      views: "18.7K",
      rating: 4.8,
      popular: true
    },
    {
      id: 3,
      title: "TikTok Viral Content Strategy",
      description: "Step-by-step guide to creating viral TikTok content",
      type: "guide",
      duration: "12 min read",
      difficulty: "Advanced",
      views: "31.2K",
      rating: 4.9,
      popular: true
    },
    {
      id: 4,
      title: "Business Plan Writing Workshop",
      description: "Comprehensive guide to writing winning business plans",
      type: "video",
      duration: "35 min",
      difficulty: "Intermediate",
      views: "14.5K",
      rating: 4.7
    },
    {
      id: 5,
      title: "PDF Productivity Hacks",
      description: "Master document management and editing",
      type: "guide",
      duration: "8 min read",
      difficulty: "Beginner",
      views: "12.1K",
      rating: 4.6
    },
    {
      id: 6,
      title: "Social Media Automation",
      description: "Automate your social media presence effectively",
      type: "video",
      duration: "28 min",
      difficulty: "Advanced",
      views: "20.8K",
      rating: 4.8
    }
  ];

  const categories = [
    { name: "AI Tools", count: 15, icon: Star },
    { name: "Career Development", count: 12, icon: Users },
    { name: "Content Creation", count: 18, icon: Video },
    { name: "Business Growth", count: 10, icon: BookOpen },
    { name: "Productivity", count: 8, icon: FileText }
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
            <Badge className="mb-6 bg-gradient-to-r from-neon-purple/20 to-primary/20 text-neon-purple border-neon-purple/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Hub
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-primary to-gold-bright bg-clip-text text-transparent">
                Tutorials & Guides
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master every tool and technique with our comprehensive tutorials. 
              From beginner guides to advanced strategies, level up your skills today.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="tiktok-card text-center cursor-pointer group">
                <CardContent className="p-6">
                  <category.icon className="h-8 w-8 mx-auto mb-3 text-neon-purple group-hover:text-primary transition-colors" />
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} tutorials</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-neon-purple bg-clip-text text-transparent">
              Featured Tutorials
            </h2>
            <p className="text-muted-foreground">Most popular and highly rated content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="tiktok-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {tutorial.type === 'video' ? (
                        <Play className="h-5 w-5 text-neon-purple" />
                      ) : (
                        <FileText className="h-5 w-5 text-neon-purple" />
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                    {tutorial.popular && (
                      <Badge className="bg-red-500 text-white text-xs">
                        🔥 Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-neon-purple transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tutorial.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    {tutorial.type === 'video' ? 'Watch Now' : 'Read Guide'}
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

export default Tutorials;