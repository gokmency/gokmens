import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/sections/hero';
import { PlaygroundSection } from './components/sections/playground';
import { BlogSection } from './components/sections/blog';
import { BlogDetailSection } from './components/sections/blog-detail';
import { FAQSection } from './components/sections/faq';
import { BackgroundBeams } from './components/ui/background-beams';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="relative">
      <BackgroundBeams className="z-0" />
      
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/playground" element={<PlaygroundSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/:slug" element={<BlogDetailSection />} />
          <Route path="/faq" element={<FAQSection />} />
        </Routes>
      </div>
      
      <Analytics />
    </div>
  );
}

export default App;