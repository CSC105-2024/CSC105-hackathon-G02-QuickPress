
import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif';
import { useNavigate } from 'react-router-dom';

export default function TopScorePage() {
const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col lg:gap-5 items-center justify-center"
      style={{
        backgroundImage: `url(${GifBG})`,
      }}
    >
        <div className='flex flex-col h-150 justify-between'>
        <div>
            <table className="table-auto w-full items-center text-center border-separate border-spacing-0">
                <thead>
                    <tr className="text-[12px] lg:text-[40px]">
                        <th className="border-b-3 border-r-2 border-white px-4 py-2">Rank</th>
                        <th className="border-b-3 border-r-2 border-l-2 border-white px-4 py-2">Username</th>
                        <th className="border-b-3 border-l-2 border-white lg:px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-[12px] lg:text-[30px]'>
                        <td className="border-r-2 border-t border-white px-4 py-2">1</td>
                        <td className="border-r-2 border-t border-l-2 border-white px-4 py-2">Get</td>
                        <td className="border-t border-l-2 px-4 py-2">20000</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='text-[12px] lg:text-[30px]'>
                        <td className="border-r-2 border-t border-white px-4 py-2">2</td>
                        <td className="border-r-2 border-t border-l-2 border-white px-4 py-2">Korn</td>
                        <td className="border-t border-l-2 px-4 py-2">100</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='text-[12px] lg:text-[30px]'>
                        <td className="border-r-2 border-t border-white px-4 py-2">3</td>
                        <td className="border-r-2 border-t border-l-2 border-white px-4 py-2">Korn</td>
                        <td className="border-t border-l-2 px-4 py-2">100</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='text-[12px] lg:text-[30px]'>
                        <td className="border-r-2 border-t border-white px-4 py-2">4</td>
                        <td className="border-r-2 border-t border-l-2 border-white px-4 py-2">Korn</td>
                        <td className="border-t border-l-2 px-4 py-2">100</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='text-[12px] lg:text-[30px]'>
                        <td className="border-r-2 border-t border-white px-4 py-2">5</td>
                        <td className="border-r-2 border-t border-l-2 border-white px-4 py-2">Korn</td>
                        <td className="border-t border-l-2 px-4 py-2">100</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='flex w-[1000px] items-start'>
            <button onClick={() => {navigate("/home")}} className='
                text-[16px] lg:text-[32px] font-bold 
                bg-black hover:bg-gradient-to-b 
                from-[#FC0FC0] to-[#C154C1]
                px-7 lg:px-15 py-3
                rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
                cursor-pointer'>
                Back
            </button>
        </div>
        </div>
    </div>
  );
}
