import React from 'react';
import { useState } from 'react';
import {
  ArrowUp,
  Code,
  GraduationCap,
  Pencil,
  LineChart,
  PenTool,
  Coffee,
  Lightbulb,
} from 'lucide-react';

const topics = [
  { label: 'Coding & developing', icon: <Code className="w-4 h-4" /> },
  { label: 'Learning & studying', icon: <GraduationCap className="w-4 h-4" /> },
  { label: 'Writing & content creation', icon: <Pencil className="w-4 h-4" /> },
  { label: 'Business & strategy', icon: <LineChart className="w-4 h-4" /> },
  { label: 'Design & creativity', icon: <PenTool className="w-4 h-4" /> },
  { label: 'Life stuff', icon: <Coffee className="w-4 h-4" /> },
  { label: 'Claude’s choice', icon: <Lightbulb className="w-4 h-4" /> },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [selected, setSelected] = useState([]);
  const [customTopic, setCustomTopic] = useState('');
  const [showInput, setShowInput] = useState(false);

  if (step === 1) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-xl space-y-6 text-left">
          <div className="text-5xl">*</div>
          <h1 className="text-3xl font-semibold">
            Hey there, I’m <span className="font-bold">Claude</span>.
          </h1>
          <p className="text-lg">
            I’m your AI assistant for brainstorming, creating, and learning together.
          </p>
          <p className="text-lg">Here’s a few things you should know about me:</p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">👋 <div><strong>Curious? Just ask</strong><br />Ask anything from simple to complex.</div></li>
            <li className="flex items-start gap-3">👁️ <div><strong>Your data is in your control</strong><br />I don’t train on your chats.</div></li>
            <li className="flex items-start gap-3">🕊️ <div><strong>I’m built to help, never harm</strong><br />Safeguards protect our conversations.</div></li>
          </ul>
          <button onClick={() => setStep(2)} className="mt-6 px-6 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition">
            I understand
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center gap-8 px-4">
        <div className="text-5xl">*</div>
        <h2 className="text-xl md:text-2xl text-center font-medium">
          Before we get started, what should I call you?
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.trim()) setStep(3);
          }}
          className="relative w-full max-w-md"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-full bg-[#111] border border-gray-600 px-5 py-3 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-full"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </form>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center px-4 py-10 space-y-8">
        <div className="text-5xl">*</div>
        <h2 className="text-xl text-center font-medium max-w-md">
          What are you into, {name}? Pick three topics to explore.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md w-full">
          {topics.map((topic) => {
            const isActive = selected.includes(topic.label);
            return (
              <button
                key={topic.label}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
                  isActive ? 'bg-white text-black' : 'border-gray-600 text-white'
                } hover:bg-white/10 transition`}
                onClick={() => {
                  setSelected((prev) => {
                    if (isActive) return prev.filter((t) => t !== topic.label);
                    if (prev.length >= 3) return prev;
                    return [...prev, topic.label];
                  });
                }}
              >
                {topic.icon}
                <span className="text-sm">{topic.label}</span>
              </button>
            );
          })}
        </div>
        <button
          className={`mt-6 px-6 py-2 rounded font-medium transition ${
            selected.length === 3
              ? 'bg-gray-300 text-black hover:bg-gray-400'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
          disabled={selected.length !== 3}
          onClick={() => setStep(4)}
        >
          Let’s go
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center gap-8 px-4 py-10">
      <div className="text-5xl">*</div>
      <div className="text-center space-y-2">
        <h2 className="text-xl font-medium">All set! Here are a few ideas just for you.</h2>
        <p className="text-base">Where should we start?</p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {[
          'Look over my code and give me tips',
          'Vibe code with me',
          'Design a game that teaches coding concepts through storytelling'
        ].map((option, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-4 py-3 rounded-md border border-gray-600 text-white hover:bg-white/10 transition"
          >
            <Code className="w-4 h-4" />
            <span className="text-sm text-left">{option}</span>
          </button>
        ))}
        <div className="text-center mt-4">
          <button
            className="text-sm text-gray-300 hover:underline"
            onClick={() => setShowInput(true)}
          >
            I have my own topic
          </button>
          {showInput && (
            <input
              type="text"
              placeholder="Type your own topic..."
              className="mt-3 w-full bg-[#111] border border-gray-600 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
