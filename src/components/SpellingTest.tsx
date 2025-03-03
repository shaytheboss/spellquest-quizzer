
import React, { useState, useEffect } from 'react';
import { spellingWords, SpellingWord } from '@/data/words';
import WordInput from './WordInput';
import TestResults from './TestResults';
import { toast } from "sonner";

const SpellingTest: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAttempts, setIncorrectAttempts] = useState<Record<number, { present: string[], past: string[] }>>({}); 
  const [isComplete, setIsComplete] = useState(false);
  const [words, setWords] = useState<SpellingWord[]>([]);
  const [testCount, setTestCount] = useState(0); // Track number of tests taken

  // Initialize or reset the test
  useEffect(() => {
    initializeTest();
  }, [testCount]);

  const initializeTest = () => {
    // Shuffle words and take the first 10 (or all if less than 10)
    const shuffled = [...spellingWords].sort(() => Math.random() - 0.5);
    const testWords = shuffled.slice(0, 10).map((word, index) => ({
      ...word,
      id: index + 1 // Re-index to keep sequential ids
    }));
    
    setWords(testWords);
    setCurrentIndex(0);
    setCorrectAnswers([]);
    setIncorrectAttempts({});
    setIsComplete(false);
    
    toast("Test started! Listen to the word and type in both present and past tense.", {
      position: "top-center",
    });
  };

  const handleCorrectAnswer = () => {
    const currentWord = words[currentIndex];
    setCorrectAnswers(prev => [...prev, currentWord.id]);
    
    toast.success("Correct! Good job!", {
      position: "top-center",
    });
    
    // Move to next word or complete test
    if (currentIndex < words.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsComplete(true);
        toast("Test completed! Check your results.", {
          position: "top-center",
        });
      }, 500);
    }
  };

  const handleIncorrectAnswer = (attempt: string, tenseType: 'present' | 'past') => {
    const currentWord = words[currentIndex];
    
    setIncorrectAttempts(prev => {
      const wordAttempts = prev[currentWord.id] || { present: [], past: [] };
      
      return {
        ...prev,
        [currentWord.id]: {
          ...wordAttempts,
          [tenseType]: [...wordAttempts[tenseType], attempt]
        }
      };
    });
    
    toast.error(`Incorrect ${tenseType} tense. Try again!`, {
      position: "top-center",
    });
  };

  const handleRestart = () => {
    setTestCount(prev => prev + 1); // Increment to trigger useEffect
  };

  if (words.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-muted h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <TestResults 
        words={words}
        correctAnswers={correctAnswers}
        incorrectAttempts={incorrectAttempts}
        onRestart={handleRestart}
        testCount={testCount}
      />
    );
  }

  return (
    <div className="py-6">
      <div className="flex justify-between items-center max-w-md mx-auto mb-6">
        <div className="text-sm font-medium">
          <span className="text-primary">{currentIndex + 1}</span>
          <span className="text-muted-foreground"> / {words.length}</span>
        </div>
        
        <div className="w-[60%] bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
          ></div>
        </div>
        
        <button 
          onClick={handleRestart}
          className="flex items-center justify-center p-2 text-sm text-primary hover:text-primary/80"
          title="Restart Test"
        >
          <RefreshCw size={16} className="mr-1" />
          Restart
        </button>
      </div>
      
      <WordInput 
        currentWord={words[currentIndex]} 
        onCorrect={handleCorrectAnswer}
        onIncorrect={handleIncorrectAnswer}
      />
    </div>
  );
};

export default SpellingTest;
