
import React from 'react';
import { cn } from '@/lib/utils';

interface AudioButtonProps {
  word: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ word, className }) => {
  const handleAudioClick = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handleAudioClick}
      className={cn(
        "p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 transform-gpu active:scale-95",
        className
      )}
      aria-label={`Listen to pronunciation of ${word}`}
    >
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
        className="text-primary"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
    </button>
  );
};

export default AudioButton;
