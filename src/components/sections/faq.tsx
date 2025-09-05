import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is Gokmen Celik?",
      answer: "Gokmen Celik (also known as Burak Gokmen Celik, Burak Gokmen, or simply Gokmen) is an independent developer and crypto community builder based in Turkey. He specializes in Web3 development, smart contracts, fintech solutions, and community building."
    },
    {
      question: "What services does Gokmen Celik offer?",
      answer: "Gokmen offers Web3 development, smart contract development, community building and management, fintech solutions, DeFi protocol development, crypto investment consulting, Turkish crypto market analysis, and blockchain consulting."
    },
    {
      question: "What is Web3 development?",
      answer: "Web3 development involves creating decentralized applications (DApps) using blockchain technology, smart contracts, and decentralized protocols. It includes frontend development, smart contract programming, and integration with blockchain networks."
    },
    {
      question: "What is community building in crypto?",
      answer: "Crypto community building involves creating and managing engaged communities around blockchain projects, cryptocurrencies, and Web3 platforms. This includes Discord/Telegram management, content creation, event organization, and governance facilitation."
    },
    {
      question: "What is fintech development?",
      answer: "Fintech development involves creating financial technology applications including digital banking solutions, payment systems, investment platforms, and financial data analytics tools."
    },
    {
      question: "How to contact Gokmen Celik?",
      answer: "You can contact Gokmen through email at gokmen@gokmens.com, Twitter @gokmeneth, LinkedIn gokmencelik, Telegram gokmenceliks, or GitHub gokmens."
    },
    {
      question: "What is Grainz Studio?",
      answer: "Grainz Studio is a creative development studio associated with Gokmen Celik, focusing on Web3 projects, blockchain applications, and innovative digital solutions."
    },
    {
      question: "What is Turkish crypto market?",
      answer: "The Turkish crypto market refers to cryptocurrency adoption, trading, and blockchain development activities in Turkey. It includes local exchanges, DeFi protocols, and crypto community building specific to Turkish users."
    },
    {
      question: "What is smart contract development?",
      answer: "Smart contract development involves writing self-executing contracts with terms directly written into code. These contracts run on blockchain networks and automatically execute when predetermined conditions are met."
    },
    {
      question: "What is DeFi development?",
      answer: "DeFi (Decentralized Finance) development involves creating financial applications built on blockchain networks that operate without traditional financial intermediaries, including lending protocols, DEXs, and yield farming platforms."
    }
  ];

  return (
    <div className="h-screen w-full bg-black/[0.96] text-white overflow-hidden">
      <Button asChild className="absolute top-4 left-4 rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black z-10">
        <Link to="/">
          <span className="text-sm font-medium">← Home</span>
        </Link>
      </Button>
      
      <div className="w-full h-full overflow-y-auto scrollbar-edge pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-800/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-neutral-200">{faq.question}</h3>
                  <span className={`text-neutral-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* FAQ Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }} />
          
          {/* Hidden SEO Content */}
          <div style={{ display: 'none' }}>
            <h1>FAQ - Gokmen Celik Web3 Developer</h1>
            <h2>Common Questions About Web3 Development</h2>
            <p>Frequently asked questions about Gokmen Celik, Web3 development, smart contracts, community building, fintech solutions, and blockchain technology. Expert answers from a Turkish Web3 developer and crypto community builder.</p>
            
            <h2>Services FAQ</h2>
            <ul>
              <li>What is Web3 development?</li>
              <li>What is smart contract development?</li>
              <li>What is community building in crypto?</li>
              <li>What is fintech development?</li>
              <li>What is DeFi development?</li>
              <li>What is Turkish crypto market?</li>
            </ul>
            
            <h2>Contact FAQ</h2>
            <ul>
              <li>How to contact Gokmen Celik?</li>
              <li>What is Grainz Studio?</li>
              <li>Who is Burak Gokmen Celik?</li>
              <li>Turkish Web3 developer contact</li>
              <li>Crypto community manager Turkey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
