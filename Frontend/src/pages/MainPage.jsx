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
      <div className='flex items-center gap-90'>
        <button className='
        text-[30px] font-bold 
        bg-black hover:bg-gradient-to-b 
        from-[#FF00C8] to-[#990078]
         px-28 h-16 rounded-xl border-2 border-[#FF00C8] shadow-[-8px_14px_4px_rgba(255,0,200,0.75)]
         cursor-pointer'>
        Login</button>
        <h1 className='text-[96px] font-bold'>Quick Press</h1>
      </div>
    </div>
  );
}
