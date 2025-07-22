import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, MessageCircle, Book, Video, 
  HelpCircle, ArrowRight, Mail, Phone 
} from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: Book,
      articles: 25,
      description: "Learn the basics of using Tiktalkhub tools"
    },
    {
      title: "Tool Tutorials",
      icon: Video,
      articles: 50,
      description: "Step-by-step guides for each tool"
    },
    {
      title: "Account & Billing",
      icon: HelpCircle,
      articles: 15,
      description: "Manage your account and subscription"
    },
    {
      title: "API Documentation",
      icon: MessageCircle,
      articles: 30,
      description: "Technical documentation for developers"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Tiktalkhub?",
      answer: "Getting started is easy! Simply visit our homepage, choose a tool you'd like to try, and start using it immediately. No signup required for basic features. For advanced features and to save your work, you can create a free account."
    },
    {
      question: "Are the tools really free to use?",
      answer: "Yes! Most of our tools are completely free to use with no hidden costs. Some advanced features may require a premium subscription, but you'll always know exactly what's free and what's premium before using any tool."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! All Tiktalkhub tools run directly in your web browser. This means you can access them from any device with an internet connection - desktop, tablet, or mobile."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security very seriously. All data is encrypted in transit and at rest. We don't store your personal files longer than necessary for processing, and we never share your data with third parties."
    },
    {
      question: "Can I use these tools for commercial purposes?",
      answer: "Absolutely! Our tools are designed for both personal and commercial use. Whether you're a freelancer, small business, or large corporation, you can use Tiktalkhub tools for your commercial projects."
    },
    {
      question: "What browsers are supported?",
      answer: "Tiktalkhub works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser updated to the latest version."
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: "We love feedback! You can report bugs or suggest features by contacting us at support@tiktalkhub.top or using the chat widget in the bottom right corner of any page."
    },
    {
      question: "Are there usage limits on the free tools?",
      answer: "Free tools have generous usage limits that cover most users' needs. If you need higher limits, check out our premium plans for unlimited access to all tools and advanced features."
    }
  ];

  const quickLinks = [
    { title: "Video Tutorials", description: "Watch step-by-step guides", icon: Video },
    { title: "Tool Documentation", description: "Detailed feature explanations", icon: Book },
    { title: "Contact Support", description: "Get help from our team", icon: MessageCircle },
    { title: "Community Forum", description: "Connect with other users", icon: HelpCircle }
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers, tutorials, and support to make the most of your Tiktalkhub experience.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Card key={link.title} className="tiktok-card group cursor-pointer text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <link.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="tiktok-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <category.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-blue-500 transition-colors">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {category.articles} articles
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="tiktok-card">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-blue-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="tiktok-card text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team in real-time
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="tiktok-card text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get detailed help via email
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="tiktok-card text-center">
                <CardContent className="p-6">
                  <Book className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse our comprehensive docs
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <TikoAI />
    </div>
  );
};

export default HelpCenter;