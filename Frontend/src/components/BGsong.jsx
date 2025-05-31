import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import bgMusic from '../assets/PlayingBG.mp3'; // Make sure this path is correct

export default function BGsong() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play audio after user interaction due to browser autoplay policies
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn('Autoplay failed:', err);
        });
      }
    };

    // Add a click listener once to enable autoplay
    document.addEventListener('click', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !muted;
      audioRef.current.muted = newMutedState;
      setMuted(newMutedState);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={bgMusic} loop />
      <button
        onClick={toggleMute}
        className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-pink-500"
      >
        {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
}
