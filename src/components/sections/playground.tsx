import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

// Vercel API token from environment
const VERCEL_API_TOKEN = import.meta.env.VITE_VERCEL_API_TOKEN;

interface Deployment {
  uid: string;
  name: string;
  url: string;
  created: number;
  state: 'READY' | 'ERROR' | 'BUILDING' | 'QUEUED';
}

export const PlaygroundSection = () => {
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeployments = async () => {
      try {
        // Fetch more deployments by using pagination
        const allDeployments = [];
        let nextCursor = null;
        let hasMore = true;

        while (hasMore) {
          const url: string = nextCursor 
            ? `https://api.vercel.com/v6/deployments?until=${nextCursor}&limit=100`
            : 'https://api.vercel.com/v6/deployments?limit=100';
          
          const response: Response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${VERCEL_API_TOKEN}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }

          const data: any = await response.json();
          allDeployments.push(...data.deployments);
          
          // Check if there are more pages
          if (data.pagination && data.pagination.next) {
            nextCursor = data.pagination.next;
          } else {
            hasMore = false;
          }
        }
        
        // Filter for only READY state deployments
        const readyDeployments = allDeployments.filter(deployment => deployment.state === 'READY');
        
        // Get the latest version of each project
        const latestDeploymentsMap = new Map<string, any>();
        for (const deployment of readyDeployments) {
          if (!latestDeploymentsMap.has(deployment.name)) {
            latestDeploymentsMap.set(deployment.name, deployment);
          }
        }

        const deploymentsList = Array.from(latestDeploymentsMap.values());

        // Sort by creation date (newest first)
        deploymentsList.sort((a, b) => b.created - a.created);

        setDeployments(deploymentsList);
      } catch (err: any) {
        console.error('Error fetching deployments:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (VERCEL_API_TOKEN && VERCEL_API_TOKEN !== 'your_vercel_api_token_here') {
      fetchDeployments();
    } else {
      setError('Vercel API token is not configured');
      setLoading(false);
    }
  }, []);

  return (
    <div className="h-screen w-full bg-black/[0.96] text-white overflow-hidden">
      <Button asChild className="absolute top-4 left-4 rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black z-10">
        <Link to="/">
          <span className="text-sm font-medium">Home</span>
        </Link>
      </Button>
      
      <div className="flex h-full pt-16">
        {/* Sol Panel - Web Projects */}
        <div className="w-1/3 border-r border-neutral-800/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Web Projects</h2>
            {!loading && !error && (
              <span className="text-sm text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded">
                {deployments.length} projects
              </span>
            )}
          </div>
          
          {loading && <p className="text-neutral-400">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          {!loading && !error && (
            <div className="space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {deployments.map((deployment) => (
                <div 
                  key={deployment.uid} 
                  className="group bg-neutral-900/50 border border-neutral-800/50 rounded-lg px-4 py-3 hover:bg-neutral-800/50 hover:border-neutral-700/50 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                  onClick={() => window.open(`https://${deployment.url}`, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-neutral-200 group-hover:text-white transition-colors font-medium text-sm">
                      {deployment.name}
                    </h3>
                    <div className="text-neutral-500 group-hover:text-neutral-400 transition-colors text-xs">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Orta Panel - Placeholder */}
        <div className="w-1/3 border-r border-neutral-800/50 p-6">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Coming Soon</h2>
          <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-6 h-64 flex items-center justify-center">
            <p className="text-neutral-400 text-center">More content coming soon...</p>
          </div>
        </div>

        {/* Sağ Panel - Placeholder */}
        <div className="w-1/3 p-6">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Coming Soon</h2>
          <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-lg p-6 h-64 flex items-center justify-center">
            <p className="text-neutral-400 text-center">More content coming soon...</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-800/30">
        <div className="flex justify-center">
          <Link 
            to="/blog" 
            className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            Blog
          </Link>
        </div>
      </footer>
      
      {/* Hidden SEO Content */}
      <div style={{ display: 'none' }}>
        <h1>Gokmen Celik - Web Projects Portfolio</h1>
        <h2>Web Development Projects</h2>
        <p>Explore Gokmen Celik's (Gökmen Çelik, also known as Burak Gokmen Celik, Burak Gökmen Çelik, Burak Gokmen, Burak Gökmen, or simply Gokmen, Gökmen) portfolio of web development projects including Web3 applications, fintech solutions, community platforms, and modern web applications. Each project demonstrates expertise in React, TypeScript, blockchain integration, and user experience design. Associated with Grainz Studio, Grainz, and Gökmens brand.</p>
        
        <h2>Project Categories</h2>
        <ul>
          <li>Web3 Applications</li>
          <li>Fintech Solutions</li>
          <li>Community Platforms</li>
          <li>Blockchain DApps</li>
          <li>DeFi Interfaces</li>
          <li>Crypto Trading Tools</li>
          <li>Smart Contract Frontends</li>
          <li>Web3 Gaming Platforms</li>
        </ul>
        
        <h2>Technologies Used</h2>
        <p>React, TypeScript, Next.js, Vite, Tailwind CSS, Web3.js, Ethers.js, Solidity, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Docker, AWS, Vercel, GitHub Actions, CI/CD pipelines, smart contract development, blockchain integration, API development, responsive design, mobile-first development.</p>
        
        <h2>Services Offered</h2>
        <p>Custom web application development, Web3 frontend development, smart contract integration, DeFi interface design, crypto trading platform development, blockchain application development, fintech solution development, community platform development, API development, database design, cloud deployment, performance optimization, security auditing.</p>
      </div>
    </div>
  );
};