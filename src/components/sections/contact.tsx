import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ChevronUp, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { EmailPopup } from "@/components/ui/email-popup";

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

interface ContactSectionProps {
  onNavigateToHero: () => void;
}

export function ContactSection({ onNavigateToHero }: ContactSectionProps) {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  return (
    <Card className="h-screen w-full bg-black/[0.96] relative overflow-hidden border-0 rounded-none flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full px-6 md:px-8 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
          Get in Touch
        </h2>
        
        <p className="text-neutral-300 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Feel free to reach out for projects, collaboration opportunities, or any questions.
          You can contact me through the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button 
            className="h-auto py-6 flex flex-col items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white"
            onClick={() => setIsEmailPopupOpen(true)}
          >
            <Mail className="w-8 h-8 text-neutral-300" />
            <div className="flex flex-col">
              <span className="font-medium text-lg">Email</span>
              <span className="text-neutral-400 text-sm">bgokmencelik@gmail.com</span>
            </div>
          </Button>
          
          <Button 
            className="h-auto py-6 flex flex-col items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white"
            asChild
          >
            <a href="https://t.me/gokmencelik" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 text-neutral-300">
                <TelegramIcon />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg">Telegram</span>
                <span className="text-neutral-400 text-sm">@gokmencelik</span>
              </div>
            </a>
          </Button>
          
          <Button 
            className="h-auto py-6 flex flex-col items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white"
            asChild
          >
            <a href="https://twitter.com/gokmencelik" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-8 h-8 text-neutral-300" />
              <div className="flex flex-col">
                <span className="font-medium text-lg">Twitter</span>
                <span className="text-neutral-400 text-sm">@gokmencelik</span>
              </div>
            </a>
          </Button>
          
          <Button 
            className="h-auto py-6 flex flex-col items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white"
            asChild
          >
            <a href="https://linkedin.com/in/gokmencelik" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-neutral-300" />
              <div className="flex flex-col">
                <span className="font-medium text-lg">LinkedIn</span>
                <span className="text-neutral-400 text-sm">gokmencelik</span>
              </div>
            </a>
          </Button>
        </div>
        
        <div className="mt-16">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full hover:scale-110 transition-transform"
            onClick={onNavigateToHero}
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Email Popup */}
      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
    </Card>
  );
}