import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "How TechStartup Increased Productivity by 60%",
      company: "TechStartup Inc.",
      industry: "Technology",
      results: {
        productivity: "+60%",
        timeSaved: "15 hours/week",
        costReduction: "$50K/year"
      },
      tools: ["SmartBiz Suite", "Text Tools", "PDF Toolkit"],
      summary: "A growing tech startup transformed their content creation and business processes using Tiktalkhub's AI-powered tools, resulting in significant productivity gains and cost savings.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Content Creator's Journey to 1M Followers",
      company: "Sarah's Creative Studio",
      industry: "Content Creation",
      results: {
        followers: "1M+",
        engagement: "+150%",
        revenue: "$100K/month"
      },
      tools: ["TikTok Toolkit", "Video Tools", "Social Tools"],
      summary: "Independent content creator leveraged our video and social media tools to build a massive following and monetize her passion.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Marketing Agency Scales Operations 300%",
      company: "Digital Growth Agency",
      industry: "Marketing",
      results: {
        clients: "+300%",
        efficiency: "+80%",
        revenue: "$2M/year"
      },
      tools: ["Blog & SEO Tools", "Social Toolkit", "General Tools"],
      summary: "Marketing agency automated their content workflows and scaled operations dramatically using our comprehensive toolkit.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Brand's Social Media Success",
      company: "Fashion Forward",
      industry: "E-commerce",
      results: {
        sales: "+400%",
        reach: "10M+",
        roi: "500%"
      },
      tools: ["Social Toolkit", "Video Tools", "AI Creator Tools"],
      summary: "Fashion e-commerce brand used our social media and video tools to create viral campaigns that drove massive sales growth.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Freelancer's Income Multiplied by 5X",
      company: "Independent Consultant",
      industry: "Consulting",
      results: {
        income: "5x increase",
        clients: "+200%",
        workHours: "-30%"
      },
      tools: ["Career Toolkit", "SmartBiz Suite", "Text Tools"],
      summary: "Freelance consultant transformed their business using our career and business tools, dramatically increasing income while working fewer hours.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Educational Platform's Content Revolution",
      company: "LearnSmart Academy",
      industry: "Education",
      results: {
        students: "+250%",
        completion: "+90%",
        satisfaction: "98%"
      },
      tools: ["Video Tools", "PDF Toolkit", "Text Tools"],
      summary: "Online education platform revolutionized their content delivery using our video and document processing tools.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real results from real people. See how businesses and creators are transforming their 
              workflows and achieving remarkable success with Tiktalkhub.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">500+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">$50M+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">10M+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className={`tiktok-card group cursor-pointer overflow-hidden ${study.featured ? 'md:col-span-2' : ''}`}>
                <div className={`${study.featured ? 'md:flex' : ''}`}>
                  <div className={`${study.featured ? 'md:w-1/2' : ''} aspect-video overflow-hidden`}>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className={`${study.featured ? 'md:w-1/2' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {study.industry}
                        </Badge>
                        {study.featured && (
                          <Badge className="bg-green-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <CardTitle className="group-hover:text-green-500 transition-colors text-xl">
                        {study.title}
                      </CardTitle>
                      
                      <p className="text-muted-foreground font-medium">{study.company}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {study.summary}
                      </p>
                      
                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-secondary/50 rounded-lg">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-green-500">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Tools Used */}
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Tools Used:</p>
                        <div className="flex flex-wrap gap-1">
                          {study.tools.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full" variant="outline">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-green-500 bg-clip-text text-transparent">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses and creators who have transformed their workflows with Tiktalkhub.
          </p>
          <Button size="lg" className="btn-gold">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <TikoAI />
    </div>
  );
};

export default CaseStudies;