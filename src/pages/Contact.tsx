import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:Holuwatosyine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Message prepared!",
      description: "Your email client should open with your message ready to send.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "support@tiktalkhub.top",
      action: "mailto:support@tiktalkhub.top"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      action: "#"
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-electric-blue to-neon-purple bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or need help with our tools? We'd love to hear from you. 
              Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass rounded-3xl p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border/50 focus:border-electric-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-electric-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-electric-blue resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue text-white font-semibold py-3 group"
                  >
                    <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Choose the best way to reach us. We're committed to providing excellent support 
                    and responding to your inquiries promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.title}
                      href={info.action}
                      className="glass p-6 rounded-2xl block group hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-electric-blue to-neon-purple rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Response */}
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Email Support</span>
                      <span className="text-electric-blue font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Technical Issues</span>
                      <span className="text-neon-purple font-medium">Within 12 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">General Inquiries</span>
                      <span className="text-cyber-green font-medium">Within 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;