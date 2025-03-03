
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SpellingWord } from '@/data/words';
import AudioButton from './AudioButton';
import { RefreshCw } from 'lucide-react';

interface WordInputProps {
  currentWord: SpellingWord;
  onCorrect: () => void;
  onIncorrect: (attempt: string, tenseType: 'present' | 'past') => void;
}

const WordInput: React.FC<WordInputProps> = ({ 
  currentWord, 
  onCorrect, 
  onIncorrect 
}) => {
  const [presentInput, setPresentInput] = useState('');
  const [pastInput, setPastInput] = useState('');
  const [showDefinition, setShowDefinition] = useState(false);
  const [presentStatus, setPresentStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [pastStatus, setPastStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const presentInputRef = useRef<HTMLInputElement>(null);
  const pastInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus first input when component mounts or when word changes
    if (presentInputRef.current) {
      presentInputRef.current.focus();
    }
    // Reset state when word changes
    setPresentInput('');
    setPastInput('');
    setPresentStatus('idle');
    setPastStatus('idle');
    setShowDefinition(false);
  }, [currentWord]);

  const checkAnswers = () => {
    const normalizedPresentInput = presentInput.trim().toLowerCase();
    const normalizedPastInput = pastInput.trim().toLowerCase();
    const normalizedWord = currentWord.word.toLowerCase();
    
    // Check present tense
    if (normalizedPresentInput === normalizedWord) {
      setPresentStatus('correct');
    } else {
      setPresentStatus('incorrect');
      onIncorrect(presentInput, 'present');
    }
    
    // Check past tense
    if (normalizedPastInput === normalizedWord) {
      setPastStatus('correct');
    } else {
      setPastStatus('incorrect');
      onIncorrect(pastInput, 'past');
    }
    
    // Only proceed if both inputs are correct
    if (normalizedPresentInput === normalizedWord && normalizedPastInput === normalizedWord) {
      setTimeout(() => {
        onCorrect();
      }, 1000);
    } else {
      // Reset incorrect inputs after a delay
      setTimeout(() => {
        if (presentStatus === 'incorrect') {
          setPresentInput('');
          setPresentStatus('idle');
          if (presentInputRef.current) {
            presentInputRef.current.focus();
          }
        }
        if (pastStatus === 'incorrect') {
          setPastInput('');
          setPastStatus('idle');
        }
      }, 1000);
    }
  };

  const handlePresentKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (pastInputRef.current) {
        pastInputRef.current.focus();
      }
    }
  };

  const handlePastKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && presentInput.trim() && pastInput.trim()) {
      checkAnswers();
    }
  };

  return (
    <div className="animate-fade-in max-w-md mx-auto">
      <div className={cn(
        "word-card p-6 transition-all duration-300",
        (presentStatus === 'correct' && pastStatus === 'correct') && "success-glow border-green-200",
        (presentStatus === 'incorrect' || pastStatus === 'incorrect') && "error-glow border-red-200"
      )}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Word {currentWord.id}
          </span>
          <AudioButton word={currentWord.word} />
        </div>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-3 rounded-lg text-sm">
            <p className="font-medium">Hebrew Translation:</p>
            <p className="text-lg font-semibold text-primary text-right" dir="rtl">
              {currentWord.hebrewTranslation}
            </p>
          </div>

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
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="present-input" className="block text-sm font-medium">
                Type the word in present tense:
              </label>
              <div className="relative">
                <input
                  ref={presentInputRef}
                  id="present-input"
                  type="text"
                  value={presentInput}
                  onChange={(e) => setPresentInput(e.target.value)}
                  onKeyDown={handlePresentKeyDown}
                  disabled={presentStatus === 'correct'}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:input-focus",
                    presentStatus === 'correct' && "border-green-300 bg-green-50 text-green-800",
                    presentStatus === 'incorrect' && "border-red-300 bg-red-50 text-red-800"
                  )}
                  placeholder="Type present tense..."
                  autoComplete="off"
                />
                {presentStatus === 'correct' && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                )}
                {presentStatus === 'incorrect' && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 6-12 12"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="past-input" className="block text-sm font-medium">
                Type the word in past tense:
              </label>
              <div className="relative">
                <input
                  ref={pastInputRef}
                  id="past-input"
                  type="text"
                  value={pastInput}
                  onChange={(e) => setPastInput(e.target.value)}
                  onKeyDown={handlePastKeyDown}
                  disabled={pastStatus === 'correct'}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:input-focus",
                    pastStatus === 'correct' && "border-green-300 bg-green-50 text-green-800",
                    pastStatus === 'incorrect' && "border-red-300 bg-red-50 text-red-800"
                  )}
                  placeholder="Type past tense..."
                  autoComplete="off"
                />
                {pastStatus === 'correct' && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                )}
                {pastStatus === 'incorrect' && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 6-12 12"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <button 
            onClick={checkAnswers}
            disabled={!presentInput.trim() || !pastInput.trim() || (presentStatus === 'correct' && pastStatus === 'correct')}
            className="w-full py-2 px-4 bg-primary text-white rounded-lg disabled:opacity-50 
                     hover:bg-primary/90 transition-colors duration-300 font-medium
                     transform-gpu active:scale-[0.98]"
          >
            Check Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordInput;
