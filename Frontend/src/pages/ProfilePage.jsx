import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif';

export default function ProfilePage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col gap-8 lg:gap-4 items-center justify-center"
      style={{
        backgroundImage: `url(${GifBG})`,
      }}
    >
        <div className='flex flex-col items-center justify-center w-[360px] max-sm:h-[500px] h-[600px] lg:w-[1000px] lg:h-[800px] bg-black border-2 border-[#FC0FC0] rounded-xl p-2 lg:p-10 max-sm:mt-6 mt-10 mr-5 ml-5'>
            <div className='flex flex-row justify-between items-between w-full'>
                <h1 className='flex ml-2 mt-2 text-[24px] lg:text-[30px] font-bold'>
                    Username
                </h1>
                <button className='flex mr-2 mt-3 item-center justify-center w-14 h-7 text-[15px] lg:w-20 lg:h-10 lg:text-[20px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] hover:bg-none hover:bg-black hover:border-2 hover:border-[#FC0FC0] cursor-pointer'>
                    Edit
                </button>
            </div>

        <div className='flex flex-col w-[320px] h-full lg:w-[750px] bg-black mt-3 lg:mt-10 border-2 border-[#FC0FC0] rounded-xl p-2 lg:p-6 justify-between'>
            <div>
                <h2 className='text-[20px] lg:text-[30px] font-bold underline text-center mb-3'>History</h2>
                <table className="table-auto w-full text-center border-separate border-spacing-0">
                    <thead>
                        <tr className="text-[24px] max-sm:text-[15px]">
                            <th className="border-b border-r border-white px-2 py-2">Date</th>
                            <th className="border-b border-r border-white px-2 py-2">Highest combo</th>
                            <th className="border-b border-white lg:px-4 pl-2 py-2 ">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-[12px] lg:text-[20px]'>
                            <td className="border-r border-white px-4 py-2">30/05/2005</td>
                            <td className="border-r border-white px-4 py-2">18</td>
                            <td className="px-4 py-2">100</td>
                        <td className="px-4 py-2">
                            <button className="w-13 lg:w-16 h-5 lg:h-8 text-[12px] lg:text-[15px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] cursor-pointer">
                            Delete
                            </button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="flex justify-center items-center text-[12px] lg:text-[20px] gap-2 mt-6 mb-2 text-white text-sm">
                <span className="text-gray-400">← Previous</span>
                {[1, 2, 3, '...', 9, 10].map((num, idx) => (
                <button
                    key={idx}
                    className={`w-5 h-5 lg:w-10 lg:h-10 rounded-full ${
                    num === 1 ? 'bg-[#FC0FC0] text-black font-bold' : 'hover:text-[#FC0FC0]'
                    }`}
                >
                    {num}
                </button>
                ))}
                <span className="text-gray-400">Next →</span>
            </div>
        </div>
        </div>

        

        <div className='flex gap-100 lg:gap-240 mb-10 max-sm:gap-20'>

            <button className='
                text-[16px] lg:text-[32px] max-sm:w-30 w-60 font-bold 
                bg-black hover:bg-gradient-to-b 
                from-[#FC0FC0] to-[#C154C1]
                px-7 lg:px-15 py-3
                rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
                cursor-pointer'>
                Back
            </button><button className='
                text-[16px] max-sm:w-30 w-60 lg:text-[32px] font-bold 
                bg-black hover:bg-gradient-to-b 
                from-[#FC0FC0] to-[#C154C1]
                px-7 lg:px-15 py-3
                rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
                cursor-pointer'>
                Log Out
            </button>

        </div>
    </div>
  );
}
