
import React from 'react';
import { SpellingWord } from '@/data/words';

interface TestResultsProps {
  words: SpellingWord[];
  correctAnswers: number[];
  incorrectAttempts: Record<number, string[]>;
  onRestart: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
  words,
  correctAnswers,
  incorrectAttempts,
  onRestart
}) => {
  const score = correctAnswers.length;
  const totalWords = words.length;
  const percentage = Math.round((score / totalWords) * 100);
  
  let message = "";
  if (percentage === 100) {
    message = "Perfect! Exceptional spelling skills!";
  } else if (percentage >= 80) {
    message = "Excellent! You're a great speller!";
  } else if (percentage >= 60) {
    message = "Good job! Keep practicing!";
  } else {
    message = "Practice makes perfect. Keep going!";
  }

  return (
    <div className="max-w-md mx-auto animate-scale-in">
      <div className="word-card p-6">
        <h2 className="text-2xl font-bold text-center mb-2">Test Complete</h2>
        <p className="text-muted-foreground text-center mb-6">{message}</p>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-primary"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                strokeDasharray={`${percentage * 2.51327}, 1000`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold">{percentage}%</span>
              <p className="text-xs text-muted-foreground">{score}/{totalWords}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <h3 className="font-medium text-lg">Word Summary</h3>
          <div className="divide-y">
            {words.map((word) => {
              const isCorrect = correctAnswers.includes(word.id);
              const attempts = incorrectAttempts[word.id] || [];
              
              return (
                <div key={word.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{word.word}</span>
                    {isCorrect ? (
                      <span className="text-green-500 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        <span>Correct</span>
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m18 6-12 12"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>Incorrect</span>
                      </span>
                    )}
                  </div>
                  
                  {attempts.length > 0 && (
                    <div className="mt-1 text-sm text-muted-foreground">
                      <span>Attempts: </span>
                      {attempts.map((attempt, index) => (
                        <span key={index} className="italic">
                          {attempt}{index < attempts.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full py-2 px-4 bg-primary text-white rounded-lg 
                   hover:bg-primary/90 transition-colors duration-300 font-medium
                   transform-gpu active:scale-[0.98]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default TestResults;
