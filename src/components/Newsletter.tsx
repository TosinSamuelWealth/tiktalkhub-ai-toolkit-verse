import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Sparkles, Gift, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "🎉 Welcome to the family!",
      description: "You'll receive weekly AI tool updates and exclusive tips.",
    });
    
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    "Weekly AI tool spotlights",
    "Exclusive productivity tips",
    "Early access to new features",
    "Creator success stories"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gold/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full animate-pulse" />
              <div className="absolute top-20 right-16 w-16 h-16 border border-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-16 left-20 w-12 h-12 border border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-gold/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-gold/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 mb-4">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Weekly Newsletter</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Stay Ahead of the Curve
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Get exclusive AI insights, tool recommendations, and productivity hacks delivered to your inbox every week.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="flex items-center space-x-3 text-left animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Subscription Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto animate-scale-in">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="btn-gold px-8 group"
                      disabled={!email}
                    >
                      <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Join 10,000+ creators. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto animate-scale-in">
                  <div className="flex items-center justify-center space-x-3 text-green-400 mb-4">
                    <CheckCircle className="h-8 w-8" />
                    <span className="text-xl font-semibold">You're in!</span>
                  </div>
                  <p className="text-muted-foreground">
                    Check your email for a welcome message and your first exclusive tip.
                  </p>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>10,000+ subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span>No spam, ever</span>
                </div>
              </div>

              {/* Bonus offer */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl border border-primary/20">
                <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                  <Gift className="h-5 w-5" />
                  <span>Bonus: Get our "50 AI Tools Cheat Sheet" instantly!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;