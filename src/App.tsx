import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Tutorials from "./pages/Tutorials";
import Templates from "./pages/Templates";
import CaseStudies from "./pages/CaseStudies";
import HelpCenter from "./pages/HelpCenter";
import SmartBiz from "./pages/tools/SmartBiz";
import Career from "./pages/tools/Career";
import VideoTools from "./pages/tools/Video";
import SocialTools from "./pages/tools/Social";
import General from "./pages/tools/General";
import TextTools from "./pages/tools/TextTools";
import TikTokTools from "./pages/tools/TikTok";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/tools/smartbiz" element={<SmartBiz />} />
          <Route path="/tools/career" element={<Career />} />
          <Route path="/tools/video" element={<VideoTools />} />
          <Route path="/tools/social" element={<SocialTools />} />
          <Route path="/tools/general" element={<General />} />
          <Route path="/tools/text" element={<TextTools />} />
          <Route path="/tools/tiktok" element={<TikTokTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;