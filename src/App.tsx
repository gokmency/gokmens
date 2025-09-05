import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/sections/hero';
import { PlaygroundSection } from './components/sections/playground';
import { BlogSection } from './components/sections/blog';
import { BlogDetailSection } from './components/sections/blog-detail';
import { BackgroundBeams } from './components/ui/background-beams';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;