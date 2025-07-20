import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Email addresses when you subscribe to our newsletter",
        "Usage data to improve our tools and services",
        "Device information for optimization purposes",
        "Cookies for website functionality and analytics"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our AI tools",
        "To send newsletter updates (with your consent)",
        "To analyze usage patterns and optimize performance",
        "To ensure security and prevent abuse"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We never sell your personal information",
        "We may share anonymized usage statistics",
        "We use trusted third-party services for analytics",
        "Legal compliance when required by law"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your data (right to be forgotten)",
        "Opt-out of marketing communications"
      ]
    }
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
              <Shield className="h-5 w-5 text-electric-blue" />
              <span className="text-lg font-medium text-electric-blue">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-purple bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we collect, 
              use, and safeguard your information.
            </p>
            <div className="mt-8 text-sm text-muted-foreground">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={section.title} className="glass rounded-3xl p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 glass rounded-3xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-8">
                If you have any questions about this privacy policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <a 
                href="mailto:support@tiktalkhub.top" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;