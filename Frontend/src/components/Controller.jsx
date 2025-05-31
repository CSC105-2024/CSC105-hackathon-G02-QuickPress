import { useEffect, useState } from 'react';
import { sendRule } from '../pages/GamePlayPage';
import { sendStart } from './RuleModal';
// Icon
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function ArrowSequenceGame({setRule, start}) {

  const [arrows, setArrows] = useState([]);
  const [arrowsDisplay, setArrowsDisplay] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [highestCombo, setHighestCombo] = useState(0);

  localStorage.setItem("score", score)

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
            newArrowsDisplay.push("ArrowUp")
        } else if (random <= 0.5) {
            select = sendRule[1];
            newArrowsDisplay.push("ArrowDown")
        } else if (random <= 0.75) {
            select = sendRule[2];
            newArrowsDisplay.push("ArrowLeft")
        } else {
            select = sendRule[3];
            newArrowsDisplay.push("ArrowRight")
        }
        newArrows.push(select)
    }

    // Set the value in the useState
    setArrows(newArrows);
    setArrowsDisplay(newArrowsDisplay);
    setCurrentIndex(0);

    // Render again when arrows and currentIndex are changed
  }, [start]);

  // Generate new arrows sequence when player's press "Space"
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
                newArrowsDisplay.push("ArrowUp")
            } else if (random <= 0.5) {
                select = sendRule[1];
                newArrowsDisplay.push("ArrowDown")
            } else if (random <= 0.75) {
                select = sendRule[2];
                newArrowsDisplay.push("ArrowLeft")
            } else {
                select = sendRule[3];
                newArrowsDisplay.push("ArrowRight")
            }
            newArrows.push(select)
        }

        // Set the value in the useState
        setArrows(newArrows);
        setArrowsDisplay(newArrowsDisplay);
        setCurrentIndex(0);

        const newCombo = combo + 1;
        setCombo(newCombo);
      }

      // If player's press all arrows sequence correct, then it will stop to get the value key from the player's press
      if (arrows.length === 0 || currentIndex >= arrows.length) return;
      
      // Check the player's press is correct or not
      const expected = arrows[currentIndex];
      if (e.key === expected) {

        // If all sequence is done
        if (currentIndex + 1 === arrows.length) {
          const newScore = score + 500;
          setScore(newScore);
        }

        setCurrentIndex(prev => prev + 1);

        // If the player's press is wrong
      } else if (e.key.startsWith("Arrow")) {
        setCurrentIndex(0)
        if (combo > highestCombo) {
          setHighestCombo(combo);
        }
        setCombo(0);
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
    <>
    {(arrowsDisplay.length != 0 && start) && <div className="flex flex-col items-center mt-15">
      <div className='flex justify-end w-100'>
        <p className='font-semibold'>Combo: {combo}</p>
      </div>
      <div className="flex gap-1 bg-black/25 py-2 px-20 border-2 border-black rounded-full">
        {arrowsDisplay.map((arrow, index) => (
          <div key={index} className={`text-white text-[36px] ${index < currentIndex ? "bg-gradient-to-b from-[#7ed957] to-[#007e56]" : "bg-gradient-to-b from-[#38B6FF] to-[#44489A]"} p-2 rounded-full`}>
            {arrow === "ArrowUp" && <FaArrowUp/>}
            {arrow === "ArrowDown" && <FaArrowDown/>}
            {arrow === "ArrowLeft" && <FaArrowLeft/>}
            {arrow === "ArrowRight" && <FaArrowRight/>}
          </div>
        ))}
      </div>
    </div>}
    </>
  );
}