import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EmailPopup } from "@/components/ui/email-popup";
import { Typewriter } from "@/components/ui/typewriter";

// Telegram ikonu SVG bileşeni
const TelegramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z" />
    <path d="M11.5 14.5L14.5 21.5" />
    <path d="M11.5 14.5L14.5 11.5L21.5 4.5" />
  </svg>
);

interface HeroSectionProps {}

export function HeroSection({}: HeroSectionProps) {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  return (
    <Card className="h-screen w-full bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col lg:flex-row h-full relative">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            GOKMEN CELIK
          </h1>
          <div className="mt-2">
            <Typewriter
              text={[
                "Creative Developer",
                "Web Developer",
                "UI/UX Designer",
                "Tech Enthusiast"
              ]}
              speed={70}
              className="text-xl md:text-2xl xl:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400"
              waitTime={2000}
              deleteSpeed={40}
              cursorChar="|"
            />
          </div>
          <p className="mt-6 text-neutral-300 max-w-lg text-base md:text-lg xl:text-xl">
          Independent developer and crypto community builder, crafting innovative digital experiences 
          and fostering thriving communities. Passionate about decentralization, innovation, and exploring 
          opportunities in fintech and investment.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a href="https://github.com/gokmens" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a href="https://www.linkedin.com/in/gokmencelik/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a href="https://twitter.com/gokmeneth" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
              <a href="https://t.me/gokmenceliks" target="_blank" rel="noopener noreferrer">
                <TelegramIcon />
              </a>
            </Button>
            <Button 
              className="rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black"
              onClick={() => setIsEmailPopupOpen(true)}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Email Me</span>
            </Button>
            <Button asChild className="rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <Link to="/playground">
                <span className="text-sm font-medium">My Playground</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[400px] lg:h-screen">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-800/30 z-10">
        <div className="flex justify-center">
          <Link 
            to="/blog" 
            className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
          >
            Blog
          </Link>
        </div>
      </footer>
    </Card>
  );
}
