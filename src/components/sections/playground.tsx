import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define the structure of a Vercel deployment
interface Deployment {
  uid: string;
  name: string;
  url: string;
  created: number;
  state: 'READY' | 'BUILDING' | 'ERROR' | 'QUEUED';
  screenshotUrl: string; // Add screenshot URL
}

// IMPORTANT: Replace with your Vercel API Token
const VERCEL_API_TOKEN = import.meta.env.VITE_VERCEL_API_TOKEN || '';

export const PlaygroundSection = () => {
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!VERCEL_API_TOKEN) {
      setError('Vercel API token is not set. Please add it to your .env file.');
      setLoading(false);
      return;
    }

    const fetchDeployments = async () => {
      try {
        const response = await fetch('https://api.vercel.com/v6/deployments', {
          headers: {
            Authorization: `Bearer ${VERCEL_API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        // Filter for only the latest version of each project
        const latestDeploymentsMap = new Map<string, any>();
        for (const deployment of data.deployments) {
          if (!latestDeploymentsMap.has(deployment.name)) {
            latestDeploymentsMap.set(deployment.name, deployment);
          }
        }

        const deploymentsWithScreenshots = Array.from(latestDeploymentsMap.values()).map(dep => ({
          ...dep,
          // Using a free screenshot service. Replace with a more robust one if needed.
          screenshotUrl: `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${dep.url}?w=400`
        }));

        setDeployments(deploymentsWithScreenshots);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDeployments();
  }, []);

  return (
    <div className="min-h-screen w-full bg-black/[0.96] text-white p-4 sm:p-8">
       <Button asChild className="absolute top-4 left-4 rounded-full hover:scale-105 transition-transform px-4 flex items-center gap-2 bg-gradient-to-r from-neutral-50 to-neutral-300 text-black">
          <Link to="/">
            <span className="text-sm font-medium">Home</span>
          </Link>
        </Button>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">My Playground</h1>
        
        {loading && <p className="text-center">Loading projects...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deployments.map((deployment) => (
              <div key={deployment.uid} className="group relative bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={deployment.screenshotUrl} alt={`${deployment.name} screenshot`} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-neutral-100">{deployment.name}</h2>
                  <p className="text-sm text-neutral-400 mb-4">
                    Deployed on: {new Date(deployment.created).toLocaleDateString()}
                  </p>
                  <a 
                    href={`https://${deployment.url}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
