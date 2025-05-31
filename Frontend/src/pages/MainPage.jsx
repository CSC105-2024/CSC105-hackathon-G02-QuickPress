import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif'; // Adjust the filename if needed

export default function MainPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${GifBG})` }}
    >
      <div className="flex flex-col items-center 
                      gap-50 lg:flex-row-reverse lg:justify-between lg:items-center lg:w-full lg:max-w-5xl lg:px-10">
        <h1 className="text-[50px] font-bold 
                      max-sm:text-[32px] max-sm:mb-4">
          Quick Press
        </h1>
        <button
          className="text-[24px] font-bold 
                     bg-black hover:bg-gradient-to-b 
                     from-[#FC0FC0] to-[#C154C1]
                     px-12 py-2 rounded-xl 
                     border-2 border-[#FC0FC0] 
                     shadow-[-6px_10px_rgba(255,0,255,1)] 
                     cursor-pointer
                     max-sm:text-[18px] max-sm:px-10 max-sm:py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}