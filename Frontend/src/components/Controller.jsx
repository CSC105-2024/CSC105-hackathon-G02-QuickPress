import { useEffect, useState } from 'react';
import { sendRule } from '../pages/GamePlayPage';

export default function ArrowSequenceGame({setRule, start}) {

  const [arrows, setArrows] = useState([]);
  const [arrowsDisplay, setArrowsDisplay] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("Press Enter to start");
  const [score, setScore] = useState(0);

  // Set the rule of this game
  useEffect(() => {
    const generateArrowRule = () => {
    const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    // Shuffle using Fisher-Yates
    for (let i = directions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [directions[i], directions[j]] = [directions[j], directions[i]];
    }

    // Reject if it's the unwanted pattern
    const isDefault = directions.join() === ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].join();
    return isDefault ? generateArrowRule() : directions;
    };

    setRule(generateArrowRule());
    
  },[])

  // Generate arrows sequence when game is started
  useEffect(() => {
    if (!start) return;

    // Create array for collect random arrows sequence
    const newArrows = [];
    // Create array for collect random arrows sequence to show on display
    const newArrowsDisplay = [];

    // Random the arrows sequence
    for (let i = 0; i < (Math.floor(Math.random() * (10 - 4) ) + 4); i++) {
        const random = Math.random();
        let select;
        if (random <= 0.25) {
            select = sendRule[0];
            newArrowsDisplay.push("🢁")
        } else if (random <= 0.5) {
            select = sendRule[1];
            newArrowsDisplay.push("🢃")
        } else if (random <= 0.75) {
            select = sendRule[2];
            newArrowsDisplay.push("🢀")
        } else {
            select = sendRule[3];
            newArrowsDisplay.push("🢂")
        }
        newArrows.push(select)
    }

    // Set the value in the useState
    setArrows(newArrows);
    setArrowsDisplay(newArrowsDisplay);
    setCurrentIndex(0);
    setStatus("Game started! Follow the sequence.");

    // Render again when arrows and currentIndex are changed
  }, [start]);

  // Generate new arrows sequence when player's press "Enter"
  useEffect(() => {

    const handleKeyDown = async (e) => {
      if (e.key === ' ' && currentIndex === arrows.length) {
        // Create array for collect random arrows sequence
        const newArrows = [];
        // Create array for collect random arrows sequence to show on display
        const newArrowsDisplay = [];

        // Random the arrows sequence
        for (let i = 0; i < (Math.floor(Math.random() * (10 - 4) ) + 4); i++) {
            const random = Math.random();
            let select;
            if (random <= 0.25) {
                select = sendRule[0];
                newArrowsDisplay.push("🢁")
            } else if (random <= 0.5) {
                select = sendRule[1];
                newArrowsDisplay.push("🢃")
            } else if (random <= 0.75) {
                select = sendRule[2];
                newArrowsDisplay.push("🢀")
            } else {
                select = sendRule[3];
                newArrowsDisplay.push("🢂")
            }
            newArrows.push(select)
        }

        // Set the value in the useState
        setArrows(newArrows);
        setArrowsDisplay(newArrowsDisplay);
        setCurrentIndex(0);
        setStatus("Game started! Follow the sequence.");
      }

      // If player's press all arrows sequence correct, then it will stop to get the value key from the player's press
      if (arrows.length === 0 || currentIndex >= arrows.length) return;

      console.log("arrows:", arrows);
        console.log("currentIndex:", currentIndex);
        console.log("expected:", arrows[currentIndex]);

      // Check the player's press is correct or not
      const expected = arrows[currentIndex];
      if (e.key === expected) {
        console.log(true);
        
        // If all sequence is done
        if (currentIndex + 1 === arrows.length) {
          setStatus("🎉 Success! Sequence completed.");
          const newScore = score + 500
          setScore(newScore)
        } else {
          setStatus(`✅ Correct: ${e.key}`);
        }
        setCurrentIndex(prev => prev + 1);
        // If the player's press is wrong
      } else if (e.key.startsWith("Arrow")) {
        setStatus(`❌ Wrong key! Expected: ${expected}`);
        setCurrentIndex(0)
      }
    };

    // Get value key from keyboard
    // addEventListener =>  a function to run when a specific event occurs (like a click, scroll, keypress, etc.).
    // removeEventListener => remove a previously added event listener so it no longer triggers.
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

    // Render again when arrows and currentIndex are changed
  }, [arrows, currentIndex]);

  return (
    <div className="p-4 space-y-4 text-white">
      <h2 className="text-lg font-bold">Arrow Key Sequence Game</h2>
      <p>Status: {status}</p>
      <div className="flex gap-2">
        {arrowsDisplay.map((arrow, i) => (
          <div
            key={i}
            className={`px-2 py-1 rounded-full text-center ${
              i === currentIndex ? "bg-yellow-400 text-black" : "bg-gray-700"
            }`}
          >
            {arrow}
          </div>
        ))}
      </div>
      <h1 className='text-black'>{score}</h1>
      <p className="text-sm text-gray-400">Press Enter to restart</p>
    </div>
  );
}