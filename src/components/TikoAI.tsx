import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, HelpCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const TikoAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Tiko, your AI assistant. I can help you find the perfect tools, navigate the site, or even do a quick emotional check-in. What can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    {
      icon: <Sparkles className="h-4 w-4" />,
      text: "Recommend tools",
      action: "Can you recommend some tools for content creation?"
    },
    {
      icon: <HelpCircle className="h-4 w-4" />,
      text: "How does this work?",
      action: "How do I use the tools on this platform?"
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: "Emotional check-in",
      action: "I'd like to do an emotional check-in"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('tool') || lowerMessage.includes('recommend')) {
      return "I'd be happy to recommend some tools! For content creation, I suggest checking out our AI Blog Generator, TikTok Trend Tracker, and Video Toolkit. What specific type of content are you looking to create?";
    }
    
    if (lowerMessage.includes('how') || lowerMessage.includes('work') || lowerMessage.includes('use')) {
      return "Our tools are super easy to use! Just click on any tool category, select the tool you need, and follow the simple interface. Most tools work instantly without any signup required. Would you like me to guide you to a specific tool?";
    }
    
    if (lowerMessage.includes('emotional') || lowerMessage.includes('mood') || lowerMessage.includes('feel')) {
      return "I'm here for you! How are you feeling today? Our Emotional Toolkit has some great resources like MindMirror for reflection and Therapet for mood tracking. Remember, it's okay to take breaks and prioritize your mental health. 💚";
    }
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('resume')) {
      return "Exciting! Our Career Toolkit can definitely help you land your dream job. I recommend starting with our Resume AI Builder and then checking out the Interview Simulator. Would you like me to guide you to these tools?";
    }
    
    if (lowerMessage.includes('tiktok') || lowerMessage.includes('viral') || lowerMessage.includes('trend')) {
      return "Going viral on TikTok? I love it! Our TikTok Toolkit has everything you need - Trend Tracker, Hashtag Generator, and Auto-Crop tools. The key is staying current with trends. Want me to show you how to access these?";
    }
    
    if (lowerMessage.includes('business') || lowerMessage.includes('entrepreneur')) {
      return "Starting a business? That's amazing! Our SmartBiz Suite has everything you need - Business Name Generator, Logo Creator, and Business Plan tools. What stage are you at in your business journey?";
    }
    
    return "Thanks for reaching out! I'm here to help you navigate our 50+ AI tools and find exactly what you need. Feel free to ask me about any specific tools, or let me know what you're trying to accomplish and I'll point you in the right direction! ✨";
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputMessage.trim();
    if (!messageToSend) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(messageToSend),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="btn-gold w-14 h-14 rounded-full shadow-2xl pulse-glow group relative"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-background border border-border rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Chat with Tiko AI
            </div>
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] z-50 animate-scale-in">
          <Card className="glass border-0 h-full flex flex-col overflow-hidden shadow-elegant">
            {/* Header */}
            <div className="p-4 border-b border-border/20 bg-gradient-to-r from-primary/10 to-gold/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tiko AI</h3>
                    <p className="text-xs text-muted-foreground">Your AI Assistant</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-border/20">
                <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                <div className="space-y-1">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSendMessage(action.action)}
                      className="w-full justify-start text-xs h-8"
                    >
                      {action.icon}
                      <span className="ml-2">{action.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/20">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="btn-gold p-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default TikoAI;