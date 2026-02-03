import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';

const BACKGROUND_MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const CUTE_GIFS = {
  asking: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM2ZDJtcG93bnp6OGpoYm5jM2d4YnZ4YnZ4YnZ4YnZ4YnZ4YnZ4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/cLS1cfxvGOPVpf9wXM/giphy.gif",
  success: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM2ZDJtcG93bnp6OGpoYm5jM2d4YnZ4YnZ4YnZ4YnZ4YnZ4YnZ4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/T86i6yDyOYz7J6dPhf/giphy.gif"
};

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);
  const audioRef = useRef(null);
  
  // State to track if the button has started moving
  const [isMoved, setIsMoved] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // --- THE FIXED LOGIC ---
  const moveNoButton = () => {
    // 1. Assume the button is WIDER (300px) so long text doesn't push it off
    const estimatedBtnWidth = 300; 
    const estimatedBtnHeight = 60; 
    const padding = 24; 

    // 2. Define the "Safe Zone" where the top-left corner can be
    const maxX = window.innerWidth - estimatedBtnWidth - padding;
    const maxY = window.innerHeight - estimatedBtnHeight - padding;

    // 3. Move relative to center but stay safely inside
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const spread = 200; // Keep it somewhat near the middle

    let randomX = centerX + (Math.random() * spread * 2 - spread);
    let randomY = centerY + (Math.random() * spread * 2 - spread);

    // 4. Force values to stay within 0 and max (Clamping)
    const finalX = Math.min(maxX, Math.max(padding, randomX));
    const finalY = Math.min(maxY, Math.max(padding, randomY));

    setNoBtnPosition({ x: finalX, y: finalY });
    setIsMoved(true);
    setHoverCount(prev => prev + 1);
  };
  // -----------------------

  const handleAccept = () => {
    setAccepted(true);
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff69b4', '#ff0000', '#ffa500'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff69b4', '#ff0000', '#ffa500'] });

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
      "Surely not?", "You might regret this!", "Give it another thought!",
      "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
      "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
      "Is that your final answer?", "You're breaking my heart ;(",
      "Okay, I'll ask nicely...", "Pretty please?", "With a cherry on top?",
      "PLEASE POOKIE 🥺", "Don't do this to me", "I'm gonna cry...",
      "You're killing me smalls!", "REALLY???", "Stop playing hard to get!",
      "I made this website for you!", "Just say YES already!"
    ];
    return phrases[Math.min(hoverCount, phrases.length - 1)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-pink-300 flex items-center justify-center overflow-hidden relative selection:bg-pink-200">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-30 text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <button 
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white/80 transition-all duration-300 text-pink-600"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      <audio ref={audioRef} loop src={BACKGROUND_MUSIC_URL} />

      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 text-center transform transition-transform duration-300">
          
          {!accepted ? (
            <>
              <div className="mb-6 relative">
                <div className="absolute -top-4 -right-4 text-yellow-400 animate-pulse">
                  <Sparkles size={32} />
                </div>
                <img 
                  src={CUTE_GIFS.asking} 
                  alt="Cute asking bear" 
                  className="w-48 h-48 mx-auto object-contain drop-shadow-lg"
                />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-handwriting">
                Will you be my Valentine?
              </h1>
              <p className="text-pink-600/80 mb-8 font-medium">
                (There's only one right answer 💖)
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-[60px] relative">
                
                {/* YES BUTTON */}
                <button
                  onClick={handleAccept}
                  className={`
                    bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold shadow-lg hover:shadow-pink-500/30 transition-all duration-500 flex items-center justify-center gap-2 group z-20
                    ${hoverCount >= 8 ? 'w-full h-24 text-3xl animate-bounce' : 'px-8 py-3 text-lg hover:-translate-y-1'}
                  `}
                >
                  Yes, I will! 
                  <Heart className={`${hoverCount >= 8 ? 'w-12 h-12' : 'w-5 h-5'} fill-current`} />
                </button>

                {/* NO BUTTON */}
                {hoverCount < 8 && (
                  <button
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton} 
                    style={isMoved ? {
                      position: 'fixed',
                      left: `${noBtnPosition.x}px`,
                      top: `${noBtnPosition.y}px`,
                    } : {}}
                    className={`
                      px-8 py-3 bg-gray-100 text-gray-500 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-200 z-10 
                      whitespace-nowrap
                      ${isMoved ? 'cursor-not-allowed' : ''}
                    `}
                  >
                    {getNoButtonText()}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="animate-fade-in-up">
               <img 
                  src={CUTE_GIFS.success} 
                  alt="Happy celebration" 
                  className="w-64 h-64 mx-auto object-contain mb-6 drop-shadow-xl"
                />
              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                YAYYYY! 🎉
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                I knew you'd say yes! <br/>
                Can't wait for our date. 💖
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;