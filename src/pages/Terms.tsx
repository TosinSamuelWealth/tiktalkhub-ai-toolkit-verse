import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Tiktalkhub, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services."
    },
    {
      title: "Use of Services",
      content: "Our AI tools are provided for personal and commercial use. You may use our tools to create content, improve productivity, and enhance your workflows. You agree not to use our services for illegal activities or to violate any applicable laws."
    },
    {
      title: "User Accounts",
      content: "While most of our tools don't require registration, some features may require an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account."
    },
    {
      title: "Intellectual Property",
      content: "The Tiktalkhub platform, including all tools, content, and features, is owned by us and protected by copyright and other intellectual property laws. Content you create using our tools belongs to you."
    },
    {
      title: "Privacy and Data",
      content: "We respect your privacy and handle your data according to our Privacy Policy. We collect minimal data and never sell your personal information to third parties."
    },
    {
      title: "Service Availability",
      content: "We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We may perform maintenance, updates, or improvements that temporarily affect service availability."
    },
    {
      title: "Limitation of Liability",
      content: "Our services are provided 'as is' without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services."
    },
    {
      title: "Changes to Terms",
      content: "We may update these terms from time to time. We will notify users of significant changes through our website or email. Continued use after changes constitutes acceptance of new terms."
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 backdrop-blur-sm rounded-full px-6 py-3 border border-neon-purple/30 mb-6">
              <Scale className="h-5 w-5 text-neon-purple" />
              <span className="text-lg font-medium text-neon-purple">Legal Information</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-neon-purple to-electric-blue bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully. They govern your use of Tiktalkhub and all our AI-powered tools and services.
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
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={section.title} className="glass rounded-3xl p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                    <span className="w-8 h-8 bg-gradient-to-r from-neon-purple to-electric-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{section.title}</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="mt-16 glass rounded-3xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-cyber-green" />
                <span>Quick Summary</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">What You Can Do</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                      <span>Use all tools for personal and commercial projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                      <span>Create and own content made with our tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                      <span>Share and distribute your creations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">What You Can't Do</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span>Use tools for illegal activities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span>Reverse engineer our technology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span>Violate others' intellectual property</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 glass rounded-3xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-8">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              <a 
                href="mailto:support@tiktalkhub.top" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-purple to-electric-blue text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;