import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  tags: string[];
}

export const BlogDetailSection = () => {
  const { slug } = useParams<{ slug: string }>();

  // Generate content dynamically for all posts
  const generateContent = (post: BlogPost): string => {
    return `
      <h2>Introduction</h2>
      <p>${post.excerpt}</p>
      
      <h3>Key Topics Covered</h3>
      <p>This comprehensive guide covers essential aspects of ${post.category.toLowerCase()} including:</p>
      <ul>
        <li>Best practices and industry standards</li>
        <li>Practical implementation strategies</li>
        <li>Common challenges and solutions</li>
        <li>Future trends and opportunities</li>
      </ul>
      
      <h3>Detailed Analysis</h3>
      <p>In this section, we dive deep into the technical and strategic aspects of ${post.title.toLowerCase()}. Understanding these concepts is crucial for success in the ${post.category.toLowerCase()} space.</p>
      
      <h3>Practical Applications</h3>
      <p>Real-world applications and case studies demonstrate how these concepts work in practice. We explore various scenarios and provide actionable insights.</p>
      
      <h3>Conclusion</h3>
      <p>${post.category} continues to evolve rapidly, and staying informed about the latest developments is essential for success. This guide provides a solid foundation for understanding and implementing these concepts effectively.</p>
    `;
  };

  // All blog posts - simplified version
  const allBlogPosts: BlogPost[] = [
    { id: 1, title: "Web3 Community Building: Strategies for Success", excerpt: "Learn how to build and manage thriving Web3 communities in Turkey. Essential strategies for community engagement, tokenomics, and decentralized governance.", date: "2024-01-20", category: "Web3", slug: "web3-community-building-strategies-success", readTime: "8 min read", tags: ["Web3", "Community", "Turkey", "Tokenomics", "Governance"] },
    { id: 2, title: "Fintech Investment Opportunities in Turkey 2024", excerpt: "Exploring the latest fintech investment trends and opportunities in Turkey. From digital banking to crypto adoption and regulatory developments.", date: "2024-01-18", category: "Fintech", slug: "fintech-investment-opportunities-turkey-2024", readTime: "6 min read", tags: ["Fintech", "Investment", "Turkey", "Digital Banking", "Payments"] },
    { id: 3, title: "Community Management for Turkish Crypto Projects", excerpt: "Best practices for managing crypto communities in Turkey. Telegram management, Discord strategies, and cultural considerations for Turkish users.", date: "2024-01-15", category: "Community", slug: "community-management-turkish-crypto-projects", readTime: "7 min read", tags: ["Community", "Crypto", "Turkey", "Telegram", "Discord"] },
    { id: 4, title: "Modern Web Design Trends for Fintech Applications", excerpt: "Creating user-friendly and trustworthy web designs for fintech applications. UX patterns, security indicators, and conversion optimization.", date: "2024-01-12", category: "Web Design", slug: "modern-web-design-trends-fintech-applications", readTime: "5 min read", tags: ["Web Design", "Fintech", "UX", "Security", "Mobile"] },
    { id: 5, title: "Vibe Coding: Building with Positive Energy", excerpt: "The philosophy of vibe coding - developing software with positive energy and creativity. How mindset affects code quality and team productivity.", date: "2024-01-10", category: "Coding", slug: "vibe-coding-building-positive-energy", readTime: "6 min read", tags: ["Coding", "Philosophy", "Team", "Creativity", "Mindfulness"] },
    { id: 6, title: "DeFi Investment Strategies for Turkish Investors", excerpt: "Comprehensive guide to DeFi investment strategies tailored for Turkish investors. Risk management, yield farming, and regulatory compliance.", date: "2024-01-08", category: "Investment", slug: "defi-investment-strategies-turkish-investors", readTime: "7 min read", tags: ["DeFi", "Investment", "Turkey", "Yield Farming", "Risk Management"] },
    { id: 7, title: "Building Web3 Communities: From Zero to Hero", excerpt: "Step-by-step guide to building successful Web3 communities. Token launches, governance models, and community-driven development.", date: "2024-01-05", category: "Web3", slug: "building-web3-communities-zero-to-hero", readTime: "8 min read", tags: ["Web3", "Community", "Governance", "Token Launch", "Strategy"] },
    { id: 8, title: "Turkish Fintech Ecosystem: Opportunities and Challenges", excerpt: "Deep dive into Turkey's fintech ecosystem. Key players, regulatory landscape, and emerging opportunities in digital finance.", date: "2024-01-03", category: "Fintech", slug: "turkish-fintech-ecosystem-opportunities-challenges", readTime: "6 min read", tags: ["Fintech", "Turkey", "Ecosystem", "Regulation", "Opportunities"] },
    { id: 9, title: "Community Building Tools and Platforms for Web3", excerpt: "Essential tools and platforms for building and managing Web3 communities. Discord bots, Telegram automation, and governance platforms.", date: "2024-01-01", category: "Community", slug: "community-building-tools-platforms-web3", readTime: "5 min read", tags: ["Community", "Web3", "Tools", "Discord", "Telegram"] },
    { id: 10, title: "Investment Psychology: Making Smart Financial Decisions", excerpt: "Understanding investment psychology and behavioral finance. How emotions affect investment decisions and strategies for rational investing.", date: "2023-12-28", category: "Investment", slug: "investment-psychology-making-smart-financial-decisions", readTime: "6 min read", tags: ["Investment", "Psychology", "Behavioral Finance", "Decision Making"] },
    { id: 11, title: "Web Design Principles for Crypto and DeFi Platforms", excerpt: "Design principles for creating trustworthy and user-friendly crypto platforms. Security indicators, wallet integration, and transaction flows.", date: "2023-12-25", category: "Web Design", slug: "web-design-principles-crypto-defi-platforms", readTime: "5 min read", tags: ["Web Design", "Crypto", "DeFi", "Security", "UX"] },
    { id: 12, title: "The Art of Vibe Coding: Creativity in Development", excerpt: "Exploring the creative side of coding. How to maintain inspiration, overcome burnout, and develop software with artistic vision.", date: "2023-12-22", category: "Coding", slug: "art-of-vibe-coding-creativity-development", readTime: "6 min read", tags: ["Coding", "Creativity", "Art", "Inspiration", "Development"] },
    { id: 13, title: "Web3 Governance Models: DAO Structures and Voting", excerpt: "Understanding different Web3 governance models. Token-weighted voting, quadratic voting, and decentralized decision-making processes.", date: "2023-12-20", category: "Web3", slug: "web3-governance-models-dao-structures-voting", readTime: "7 min read", tags: ["Web3", "Governance", "DAO", "Voting", "Decentralization"] },
    { id: 14, title: "Fintech Security: Protecting Digital Assets", excerpt: "Essential security practices for fintech applications. Multi-signature wallets, smart contract audits, and user protection measures.", date: "2023-12-18", category: "Fintech", slug: "fintech-security-protecting-digital-assets", readTime: "6 min read", tags: ["Fintech", "Security", "Digital Assets", "Protection", "Audits"] },
    { id: 15, title: "Community Moderation Strategies for Crypto Projects", excerpt: "Effective moderation strategies for crypto communities. Handling FUD, managing expectations, and maintaining positive community culture.", date: "2023-12-15", category: "Community", slug: "community-moderation-strategies-crypto-projects", readTime: "5 min read", tags: ["Community", "Moderation", "Crypto", "FUD", "Culture"] },
    { id: 16, title: "Portfolio Management for Crypto Investors", excerpt: "Advanced portfolio management strategies for crypto investors. Diversification, risk assessment, and long-term wealth building.", date: "2023-12-12", category: "Investment", slug: "portfolio-management-crypto-investors", readTime: "7 min read", tags: ["Investment", "Portfolio", "Crypto", "Diversification", "Risk"] },
    { id: 17, title: "UI/UX Design for Blockchain Applications", excerpt: "Designing intuitive user interfaces for blockchain applications. Wallet UX, transaction flows, and onboarding experiences.", date: "2023-12-10", category: "Web Design", slug: "ui-ux-design-blockchain-applications", readTime: "6 min read", tags: ["UI/UX", "Blockchain", "Design", "Wallet", "Onboarding"] },
    { id: 18, title: "Coding with Purpose: Building Meaningful Software", excerpt: "The philosophy of purposeful coding. How to align your development work with personal values and create software that makes a difference.", date: "2023-12-08", category: "Coding", slug: "coding-with-purpose-building-meaningful-software", readTime: "6 min read", tags: ["Coding", "Purpose", "Values", "Meaningful", "Software"] },
    { id: 19, title: "Web3 Tokenomics: Designing Sustainable Economies", excerpt: "Understanding tokenomics in Web3 projects. Token distribution, inflation mechanisms, and creating sustainable economic models.", date: "2023-12-05", category: "Web3", slug: "web3-tokenomics-designing-sustainable-economies", readTime: "8 min read", tags: ["Web3", "Tokenomics", "Economics", "Sustainability", "Distribution"] },
    { id: 20, title: "The Future of Fintech in Turkey", excerpt: "Predictions and trends for the future of fintech in Turkey. CBDC adoption, open banking, and the evolution of digital payments.", date: "2023-12-03", category: "Fintech", slug: "future-fintech-turkey", readTime: "6 min read", tags: ["Fintech", "Future", "Turkey", "CBDC", "Open Banking"] },
    { id: 21, title: "Building Decentralized Applications (DApps) in Turkey", excerpt: "Complete guide to building DApps for the Turkish market. Smart contract development, user onboarding, and regulatory compliance.", date: "2023-11-30", category: "Web3", slug: "building-decentralized-applications-dapps-turkey", readTime: "8 min read", tags: ["Web3", "DApps", "Turkey", "Smart Contracts", "Compliance"] },
    { id: 22, title: "Cryptocurrency Trading Strategies for Turkish Markets", excerpt: "Advanced trading strategies tailored for Turkish crypto markets. Technical analysis, risk management, and market psychology.", date: "2023-11-28", category: "Investment", slug: "cryptocurrency-trading-strategies-turkish-markets", readTime: "7 min read", tags: ["Crypto", "Trading", "Turkey", "Technical Analysis", "Risk"] },
    { id: 23, title: "Web3 Marketing: Building Brand Awareness in Decentralized Spaces", excerpt: "Effective marketing strategies for Web3 projects. Community-driven marketing, influencer partnerships, and content strategies.", date: "2023-11-25", category: "Web3", slug: "web3-marketing-building-brand-awareness-decentralized", readTime: "6 min read", tags: ["Web3", "Marketing", "Brand", "Community", "Influencers"] },
    { id: 24, title: "Fintech UX Design: Creating Trust Through Interface", excerpt: "Design principles for building trust in fintech applications. User research, interface design, and conversion optimization.", date: "2023-11-22", category: "Web Design", slug: "fintech-ux-design-creating-trust-through-interface", readTime: "5 min read", tags: ["Fintech", "UX", "Design", "Trust", "Interface"] },
    { id: 25, title: "Community-Driven Development: Building Products with Users", excerpt: "How to involve community members in product development. Feedback loops, beta testing, and collaborative design processes.", date: "2023-11-20", category: "Community", slug: "community-driven-development-building-products-users", readTime: "6 min read", tags: ["Community", "Development", "Products", "Feedback", "Collaboration"] },
    { id: 26, title: "Smart Contract Security: Best Practices for Developers", excerpt: "Essential security practices for smart contract development. Auditing, testing, and vulnerability prevention strategies.", date: "2023-11-18", category: "Coding", slug: "smart-contract-security-best-practices-developers", readTime: "7 min read", tags: ["Smart Contracts", "Security", "Coding", "Auditing", "Testing"] },
    { id: 27, title: "DeFi Yield Farming: Maximizing Returns in Turkey", excerpt: "Comprehensive guide to DeFi yield farming strategies for Turkish investors. Risk assessment, platform selection, and optimization.", date: "2023-11-15", category: "Investment", slug: "defi-yield-farming-maximizing-returns-turkey", readTime: "8 min read", tags: ["DeFi", "Yield Farming", "Turkey", "Returns", "Optimization"] },
    { id: 28, title: "Web3 Social Media: Building Presence in Decentralized Networks", excerpt: "Strategies for building social media presence in Web3. Platform selection, content creation, and community engagement.", date: "2023-11-12", category: "Community", slug: "web3-social-media-building-presence-decentralized-networks", readTime: "5 min read", tags: ["Web3", "Social Media", "Presence", "Content", "Engagement"] },
    { id: 29, title: "Fintech Compliance: Navigating Turkish Regulations", excerpt: "Understanding Turkish fintech regulations and compliance requirements. Licensing, data protection, and regulatory updates.", date: "2023-11-10", category: "Fintech", slug: "fintech-compliance-navigating-turkish-regulations", readTime: "6 min read", tags: ["Fintech", "Compliance", "Turkey", "Regulations", "Licensing"] },
    { id: 30, title: "Blockchain Analytics: Understanding On-Chain Data", excerpt: "Introduction to blockchain analytics and on-chain data interpretation. Tools, metrics, and practical applications.", date: "2023-11-08", category: "Web3", slug: "blockchain-analytics-understanding-on-chain-data", readTime: "7 min read", tags: ["Blockchain", "Analytics", "On-Chain", "Data", "Tools"] },
    { id: 31, title: "Crypto Tax Planning for Turkish Investors", excerpt: "Tax planning strategies for cryptocurrency investments in Turkey. Reporting requirements, optimization techniques, and compliance.", date: "2023-11-05", category: "Investment", slug: "crypto-tax-planning-turkish-investors", readTime: "6 min read", tags: ["Crypto", "Tax", "Turkey", "Planning", "Compliance"] },
    { id: 32, title: "Web3 Gaming: Building Play-to-Earn Experiences", excerpt: "Creating engaging Web3 gaming experiences. Game mechanics, tokenomics, and community building in gaming projects.", date: "2023-11-03", category: "Web3", slug: "web3-gaming-building-play-to-earn-experiences", readTime: "7 min read", tags: ["Web3", "Gaming", "Play-to-Earn", "Tokenomics", "Community"] },
    { id: 33, title: "Fintech API Integration: Connecting Financial Services", excerpt: "Best practices for integrating fintech APIs. Security, rate limiting, error handling, and performance optimization.", date: "2023-11-01", category: "Coding", slug: "fintech-api-integration-connecting-financial-services", readTime: "6 min read", tags: ["Fintech", "API", "Integration", "Security", "Performance"] },
    { id: 34, title: "Community Moderation Tools: Automating Engagement", excerpt: "Essential tools for community moderation and engagement. Bots, automation, and analytics for community managers.", date: "2023-10-30", category: "Community", slug: "community-moderation-tools-automating-engagement", readTime: "5 min read", tags: ["Community", "Moderation", "Tools", "Automation", "Analytics"] },
    { id: 35, title: "Web3 Identity: Decentralized Authentication Systems", excerpt: "Understanding Web3 identity solutions. Self-sovereign identity, authentication protocols, and privacy considerations.", date: "2023-10-28", category: "Web3", slug: "web3-identity-decentralized-authentication-systems", readTime: "7 min read", tags: ["Web3", "Identity", "Authentication", "Privacy", "Decentralized"] },
    { id: 36, title: "Fintech Data Analytics: Leveraging Financial Data", excerpt: "Using data analytics in fintech applications. Customer insights, risk assessment, and business intelligence.", date: "2023-10-25", category: "Fintech", slug: "fintech-data-analytics-leveraging-financial-data", readTime: "6 min read", tags: ["Fintech", "Data Analytics", "Insights", "Risk", "Business Intelligence"] },
    { id: 37, title: "Crypto Portfolio Diversification Strategies", excerpt: "Advanced portfolio diversification techniques for crypto investors. Asset allocation, risk management, and rebalancing strategies.", date: "2023-10-22", category: "Investment", slug: "crypto-portfolio-diversification-strategies", readTime: "7 min read", tags: ["Crypto", "Portfolio", "Diversification", "Risk Management", "Allocation"] },
    { id: 38, title: "Web3 Content Creation: Building Educational Resources", excerpt: "Creating educational content for Web3 communities. Content strategy, format selection, and engagement optimization.", date: "2023-10-20", category: "Community", slug: "web3-content-creation-building-educational-resources", readTime: "6 min read", tags: ["Web3", "Content", "Education", "Strategy", "Engagement"] },
    { id: 39, title: "Fintech Mobile App Development: Best Practices", excerpt: "Developing mobile fintech applications. Security, performance, user experience, and platform-specific considerations.", date: "2023-10-18", category: "Coding", slug: "fintech-mobile-app-development-best-practices", readTime: "7 min read", tags: ["Fintech", "Mobile", "Development", "Security", "UX"] },
    { id: 40, title: "Web3 Event Management: Hosting Successful Gatherings", excerpt: "Organizing Web3 events and meetups. Planning, promotion, execution, and follow-up strategies for community events.", date: "2023-10-15", category: "Community", slug: "web3-event-management-hosting-successful-gatherings", readTime: "6 min read", tags: ["Web3", "Events", "Management", "Community", "Meetups"] }
  ];

  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="h-screen w-full bg-black/[0.96] text-white overflow-hidden">
        <Button asChild className="absolute top-4 left-4 rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black z-10">
          <Link to="/blog">
            <span className="text-sm font-medium">← Back to Blog</span>
          </Link>
        </Button>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-neutral-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Go Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-black/[0.96] text-white overflow-hidden">
      <Button asChild className="absolute top-4 left-4 rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black z-10">
        <Link to="/blog">
          <span className="text-sm font-medium">← Back to Blog</span>
        </Link>
      </Button>
      
      <div className="w-full h-full overflow-y-auto scrollbar-edge pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <article className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-8">
            <div className="mb-6">
              <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-100">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 text-sm text-neutral-400">
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-neutral-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: generateContent(post) }}
              />
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-800/50">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
