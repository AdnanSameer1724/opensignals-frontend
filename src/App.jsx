import React, { useState, useEffect } from 'react';

const platforms = [
  { name: 'Instagram', logo: 'src/assets/instagram.png' },
  { name: 'Facebook', logo: 'src/assets/facebook.png' },
  { name: 'LinkedIn', logo: 'src/assets/linkedin.png' },
  { name: 'TikTok', logo: 'src/assets/tiktok.png' }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % platforms.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 px-4 py-10">
      <h1 className="text-7xl">Ask what your competition is doing on</h1>
      <div className="h-16 flex items-center justify-center overflow-hidden">
        <div
          className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
            isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}
        >
          <img
            src={platforms[index].logo}
            alt={platforms[index].name}
            className="w-8 h-8 object-contain"
          />
          <span className="text-3xl sm:text-5xl font-bold">
            {platforms[index].name}
          </span>
        </div>
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <div className="relative">
          <input
          type="text"
          placeholder="What can I help you with today?"
          className="w-full bg-neutral-900 text-white placeholder-gray-400 border border-gray-700 rounded-full px-6 py-3 pr-12 transition focus:outline-none focus:ring-0 focus:border-gray-700"
        />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
