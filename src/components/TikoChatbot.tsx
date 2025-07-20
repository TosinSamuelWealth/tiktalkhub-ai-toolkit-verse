import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

const TikoChatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Tool Recommendations",
      description: "Get personalized AI tool suggestions based on your needs"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Instant Guidance",
      description: "Learn how to use any tool with step-by-step instructions"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "24/7 Assistant",
      description: "Ask questions anytime and get intelligent responses"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-background to-electric-blue/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-neon-purple/20 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-electric-blue/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 backdrop-blur-sm rounded-full px-6 py-3 border border-neon-purple/30 mb-6">
              <Bot className="h-5 w-5 text-neon-purple" />
              <span className="text-lg font-medium text-neon-purple">Meet Tiko</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-neon-purple to-electric-blue bg-clip-text text-transparent">
                Your AI-Powered Assistant
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ask Tiko anything about using our tools, getting started with AI, or optimizing your workflow. 
              It's like having a personal productivity coach available 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="glass p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-neon-purple to-electric-blue text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-neon-purple transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-purple to-electric-blue hover:from-electric-blue hover:to-neon-purple text-white font-semibold px-8 py-4 group transition-all duration-300"
                >
                  Start Chatting with Tiko
                  <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10 px-8 py-4 transition-all duration-300"
                >
                  View Examples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Side - Chat Preview */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                {/* Chat Interface Mock */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-border/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Tiko</h4>
                      <p className="text-sm text-muted-foreground">Always here to help</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Sample Messages */}
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-secondary/30 rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm text-foreground">Hi! I'm Tiko. How can I help you boost your productivity today?</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm text-foreground">I need help creating a resume</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-electric-blue flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-secondary/30 rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-sm text-foreground">Perfect! I recommend our Resume AI Builder. It creates professional resumes in minutes. Would you like me to walk you through it?</p>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/20">
                    <input 
                      type="text" 
                      placeholder="Ask Tiko anything..."
                      className="flex-1 bg-background/50 border border-border/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-neon-purple transition-colors duration-300"
                      disabled
                    />
                    <Button size="sm" className="bg-gradient-to-r from-neon-purple to-electric-blue hover:scale-105 transition-all duration-300">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyber-green to-neon-purple rounded-full blur-sm animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-electric-blue to-cyber-green rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikoChatbot;