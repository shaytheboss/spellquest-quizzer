
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SpellingWord } from '@/data/words';
import AudioButton from './AudioButton';

interface WordInputProps {
  currentWord: SpellingWord;
  onCorrect: () => void;
  onIncorrect: (attempt: string) => void;
}

const WordInput: React.FC<WordInputProps> = ({ 
  currentWord, 
  onCorrect, 
  onIncorrect 
}) => {
  const [input, setInput] = useState('');
  const [showDefinition, setShowDefinition] = useState(false);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when component mounts or when word changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Reset state when word changes
    setInput('');
    setStatus('idle');
    setShowDefinition(false);
  }, [currentWord]);

  const checkAnswer = () => {
    const normalizedInput = input.trim().toLowerCase();
    const normalizedWord = currentWord.word.toLowerCase();
    
    if (normalizedInput === normalizedWord) {
      setStatus('correct');
      setTimeout(() => {
        onCorrect();
      }, 1000);
    } else {
      setStatus('incorrect');
      onIncorrect(input);
      setTimeout(() => {
        setInput('');
        setStatus('idle');
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      checkAnswer();
    }
  };

  return (
    <div className="animate-fade-in max-w-md mx-auto">
      <div className={cn(
        "word-card p-6 transition-all duration-300",
        status === 'correct' && "success-glow border-green-200",
        status === 'incorrect' && "error-glow border-red-200"
      )}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Word {currentWord.id}
          </span>
          <AudioButton word={currentWord.word} />
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <button 
              onClick={() => setShowDefinition(!showDefinition)}
              className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              {showDefinition ? 'Hide definition' : 'Show definition'}
            </button>
            
            {showDefinition && (
              <div className="bg-muted/50 p-3 rounded-lg text-sm animate-slide-up">
                <p className="font-medium">Definition:</p>
                <p className="text-muted-foreground">{currentWord.definition}</p>
                {currentWord.example && (
                  <>
                    <p className="font-medium mt-2">Example:</p>
                    <p className="text-muted-foreground italic">{currentWord.example}</p>
                  </>
                )}
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="spelling-input" className="block text-sm font-medium">
              Type the word you hear:
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                id="spelling-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={status === 'correct'}
                className={cn(
                  "w-full px-4 py-2 rounded-lg border focus:outline-none focus:input-focus",
                  status === 'correct' && "border-green-300 bg-green-50 text-green-800",
                  status === 'incorrect' && "border-red-300 bg-red-50 text-red-800"
                )}
                placeholder="Type your answer..."
                autoComplete="off"
              />
              {status === 'correct' && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </span>
              )}
              {status === 'incorrect' && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 6-12 12"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </span>
              )}
            </div>
          </div>
          
          <button 
            onClick={checkAnswer}
            disabled={!input.trim() || status === 'correct'}
            className="w-full py-2 px-4 bg-primary text-white rounded-lg disabled:opacity-50 
                     hover:bg-primary/90 transition-colors duration-300 font-medium
                     transform-gpu active:scale-[0.98]"
          >
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordInput;
