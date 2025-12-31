// Main.tsx or your main component
import { ChevronsUp, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Main = () => {
  return (
    <div className="min-h-screen text-white font-sans bg-[url('/bg-main.jpg')] bg-cover bg-center relative">
      {/* Navigation */}
      <nav className="px-4 py-6 flex justify-between items-center container mx-auto">
        <div className="text-3xl font-bold flex items-center  gap-x-2">
          <img src="./currency.png" alt="Currency Logo" className='w-10 h-10 object-cover' /> Ironic
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['HOME', 'ABOUT', 'FEATURES', 'ROADMAP', 'FAQ', 'INSIGHTS'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-blue-400 transition-colors duration-300 uppercase text-sm font-medium tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
        
        <a 
          href="#" 
          className="bg-linear-to-r from-purple-600 to-blue-800 px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 uppercase text-sm font-bold tracking-wider"
        >
          TRY IT NOW
        </a>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 md:px-10 mt-10 md:mt-10 flex justify-start">
        <div className="relative w-full max-w-4xl">
          {/* Background overlay with blur effect */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl rounded-2xl -z-10"></div>
          
          {/* Content container */}
          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-x-4 justify-center md:justify-start mb-6">
              <Play className='text-blue-400 text-xl' />
              <h1 className="text-xl font-bold leading-tight text-blue-300">
                A NEW SMART BLOCK CHAIN
              </h1>
            </div>
            
            <div className="mb-12 space-y-2 md:space-y-4">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-left">
                Investing in
              </h2>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-left">
                thing backed 
              </h2>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-left">
                by products
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <button className="bg-linear-to-r  from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 transform">
                <Sparkles className='inline '/> WHITEPAPER
              </button>
              
              <button className="rounded-xl px-8 py-4 border-2 border-gray-500 bg-transparent hover:bg-gray-900/50 font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 transform">
                <ChevronsUp className='inline'/> PURCHASE TOKEN
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Main;