import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import GifBG from '../images/NeonPinkGrid.gif'; // Adjust the filename to match what you renamed it to

const BeforePlayPage = () => {

  return (
    <>
    <div
    className="w-full min-h-screen bg-cover bg-center text-white"
    style={{
    backgroundImage: `url(${GifBG})`,
    }}
    >   <div className='flex flex-col gap-35'>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-around items-center mt-15 gap-10 w-125 h-90 p-5 bg-black border-2 border-[#FF00C8] rounded-xl'>
                    <h1 className='text-[36px] font-bold'>Highest scores</h1>
                    <p className='text-[30px] font-bold'>--</p>
                    <p className='text-[30px] font-bold'>Highest combo: --</p>
                </div>
            </div>
            <div className='flex justify-between mx-10'>
                <button className=' text-[30px] h-16 font-bold bg-black hover:bg-gradient-to-b from-[#FF00C8] to-[#990078] rounded-xl border-2 border-[#FF00C8] shadow-[-6px_10px_rgba(255,0,200,1)] cursor-pointer'><NavLink to={"/"} className="px-28">Back</NavLink></button>
                <button className=' text-[30px] h-16 font-bold bg-gradient-to-b from-[#FF00C8] to-[#990078] rounded-xl hover:border-2 cursor-pointer hover:bg-black hover:bg-none hover:border-1 hover:border-[#FF00C8]'><NavLink to={"/gameplay"} className="px-24">Let's GO!</NavLink></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default BeforePlayPage