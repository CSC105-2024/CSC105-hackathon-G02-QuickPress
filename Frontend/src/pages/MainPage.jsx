import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif'; // Adjust the filename to match what you renamed it to

export default function MainPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${GifBG})`,
      }}
    >
      <div className='flex gap-90'>
        <button className='
        text-[24px] font-bold 
        bg-black hover:bg-gradient-to-b 
        from-[#FC0FC0] to-[#C154C1]
         px-15 rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
         cursor-pointer'>
        Login</button>
        <h1 className='text-[50px] font-bold'>Quick Press</h1>
      </div>
    </div>
  );
}
