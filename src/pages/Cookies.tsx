import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-gold-bright bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <p className="text-lg leading-relaxed">
                Last updated: January 2025
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They allow us to remember your preferences and improve your experience on Tiktalkhub.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Analytics Cookies</h3>
                  <p className="leading-relaxed">
                    We use analytics cookies to understand how visitors interact with our website, helping us improve 
                    our services and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Functional Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p className="leading-relaxed">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                computer and you can set most browsers to prevent them from being placed. However, if you do this, you 
                may have to manually adjust some preferences every time you visit a site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us at:{' '}
                <a href="mailto:support@tiktalkhub.top" className="text-primary hover:text-gold transition-colors">
                  support@tiktalkhub.top
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <TikoAI />
    </div>
  );
};

export default Cookies;