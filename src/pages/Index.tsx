
import React, { useState } from 'react';
import SpellingTest from '@/components/SpellingTest';

const Index = () => {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-bold text-xl">SpellQuest</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 md:py-12">
        {!testStarted ? (
          <div className="max-w-xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3 animate-float">
                Interactive Spelling Test
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3">
                Master Your Spelling
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Challenge yourself with our carefully curated list of commonly misspelled words. 
                Listen to the pronunciation and type the correct spelling.
              </p>

              <button
                onClick={() => setTestStarted(true)}
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium
                         hover:bg-primary/90 transition-all duration-300 shadow-sm
                         transform-gpu hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Spelling Test
              </button>
            </div>

            <div className="text-left bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h2 className="text-xl font-semibold">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Listen Carefully</h3>
                    <p className="text-muted-foreground text-sm">
                      Click the sound icon to hear the word's pronunciation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Type Your Answer</h3>
                    <p className="text-muted-foreground text-sm">
                      Spell the word correctly in the input box.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Get Instant Feedback</h3>
                    <p className="text-muted-foreground text-sm">
                      Receive immediate feedback on your spelling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Track Progress</h3>
                    <p className="text-muted-foreground text-sm">
                      Review your results and see where you can improve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SpellingTest />
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SpellQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
