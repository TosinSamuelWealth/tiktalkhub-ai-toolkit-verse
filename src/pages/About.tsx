import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI technology."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centric",
      description: "Every tool we build is designed with our users' success in mind."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Simplicity",
      description: "Complex AI made simple and accessible for everyone."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community",
      description: "Building a global community of empowered creators and professionals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-purple/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-purple bg-clip-text text-transparent">
                About Tiktalkhub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize AI tools and empower creators, students, professionals, 
              and entrepreneurs to achieve more with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Tiktalkhub was born from a simple observation: AI tools were becoming incredibly powerful, 
                  but they were also becoming increasingly complex and scattered across the internet. 
                  Creators, students, and professionals were spending more time hunting for tools than 
                  actually using them to boost their productivity.
                </p>
                <p className="mb-6">
                  We decided to change that. Our team of AI enthusiasts, designers, and developers came 
                  together with one goal: create a centralized hub where anyone can access 50+ powerful 
                  AI tools without the hassle of multiple signups, complex interfaces, or expensive subscriptions.
                </p>
                <p>
                  Today, Tiktalkhub serves thousands of users worldwide, helping them save time, boost 
                  creativity, and achieve their goals with the power of AI. And we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-electric-blue to-neon-purple rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;