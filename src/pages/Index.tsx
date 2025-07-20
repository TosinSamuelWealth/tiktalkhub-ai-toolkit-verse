import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import BlogSection from '@/components/BlogSection';
import SubscribeUpdates from '@/components/SubscribeUpdates';
import TikoChatbot from '@/components/TikoChatbot';
import Footer from '@/components/Footer';
import TikoAI from '@/components/TikoAI';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <BlogSection />
        <TikoChatbot />
        <SubscribeUpdates />
      </main>
      <Footer />
      <TikoAI />
    </div>
  );
};

export default Index;
