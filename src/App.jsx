import React, { useState, useEffect } from 'react';
import Logo from "./assets/Logo.png"

const platforms = [
  { name: 'Instagram', logo: 'src/assets/instagram.png' },
  { name: 'Facebook', logo: 'src/assets/facebook.png' },
  { name: 'LinkedIn', logo: 'src/assets/linkedin.png' },
  { name: 'TikTok', logo: 'src/assets/tiktok.png' }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [input, setInput] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = () => {
    if (input.trim()) {
      setSubmittedText(input.trim());
      setSubmitted(true);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10 relative overflow-hidden">

      {submitted && (
        <>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6">
          <div className="flex flex-col items-start">
            <div className="self-end bg-gray-200 text-sm text-black px-4 py-2 rounded-lg shadow-md max-w-[80%] text-right">
              {submittedText}
            </div>
            <div className="mt-5 ml-1 w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
          </div>
        </div>
      </>
        
      )}

      {!submitted && (
        <div className="transition-opacity duration-500 ease-in-out">
          <div className='flex items-center justify-center mb-2'>
            <img
              src={Logo}
              alt='logo'
              className='w-96 h-60 object-contain'
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-8 font-satoshi'>
            <h1 className="text-7xl text-center">Ask what your competition is doing on</h1>
            <div className="h-16 flex items-center justify-center overflow-hidden">
              <div
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                  isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                }`}
              >
                <img
                  src={platforms[index].logo}
                  alt={platforms[index].name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-3xl sm:text-5xl">
                  {platforms[index].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`transition-all duration-700 ease-in-out ${submitted ? 'fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-3xl' : 'mt-24 w-full max-w-5xl mx-auto'}`}>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What can I help you with today?"
            className="w-full bg-white text-black placeholder-gray-400 border border-gray-700 shadow-lg rounded-lg px-6 py-3 pr-12 transition focus:outline-none focus:ring-0 focus:border-gray-700"
            disabled={submitted}
          />
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={4}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
