// src/components/BgAudio.jsx
import React, { useRef, useState, useEffect } from "react";
import song from "../assets/PlayingBG.mp3";
import { Play, Pause } from "lucide-react";

export default function BgAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.warn("Autoplay failed:", err.message));
      }
    };

    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.warn("Play failed:", e));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={song} loop />
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="fixed top-4 right-4 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </>
  );
}
