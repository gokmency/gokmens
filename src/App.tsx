import { useState, useEffect, useCallback } from 'react';
import { HeroSection } from './components/sections/hero';
import { ContactSection } from './components/sections/contact';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'contact'>('hero');

  const navigateToHero = useCallback(() => {
    setActiveSection('hero');
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && activeSection === 'hero') {
        setActiveSection('contact');
      } else if (e.key === 'ArrowUp' && activeSection === 'contact') {
        setActiveSection('hero');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="relative">
      <BackgroundBeams className="z-0" />
      
      <div className="relative z-10">
        {activeSection === 'hero' ? (
          <HeroSection />
        ) : (
          <ContactSection onNavigateToHero={navigateToHero} />
        )}
      </div>
    </div>
  );
}

export default App;