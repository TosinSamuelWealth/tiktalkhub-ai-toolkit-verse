import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SubscribeUpdates = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribed(true);
    toast({
      title: "🚀 You're all set!",
      description: "Welcome to the future of AI tools. Check your email for exclusive content.",
    });
    
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-purple/5 to-cyber-green/5" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-l from-electric-blue/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Animated Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-electric-blue rounded-full animate-pulse" />
              <div className="absolute top-12 right-12 w-20 h-20 border-2 border-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-12 left-16 w-12 h-12 border-2 border-cyber-green rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 backdrop-blur-sm rounded-full px-4 py-2 border border-electric-blue/30 mb-4">
                  <Bell className="h-4 w-4 text-electric-blue" />
                  <span className="text-sm font-medium text-electric-blue">Subscribe to Updates</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-purple bg-clip-text text-transparent">
                    Never Miss a Game-Changing Tool
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Be the first to discover new AI tools, exclusive tutorials, and insider tips that boost your productivity by 10x.
                </p>
              </div>

              {/* Subscription Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-lg mx-auto animate-scale-in">
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Input
                      type="email"
                      placeholder="Enter your email for instant access"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-background/50 border-border/50 focus:border-electric-blue transition-colors duration-300 text-lg py-3"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue text-white transition-all duration-300 hover:scale-105"
                      disabled={!email}
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Get Updates
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                      <span>15,000+ subscribers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                      <span>Weekly insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                      <span>Unsubscribe anytime</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="max-w-lg mx-auto animate-scale-in">
                  <div className="flex items-center justify-center space-x-3 text-cyber-green mb-4">
                    <CheckCircle className="h-10 w-10" />
                    <span className="text-2xl font-bold">Welcome aboard!</span>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Check your inbox for exclusive AI tool recommendations and productivity hacks.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeUpdates;