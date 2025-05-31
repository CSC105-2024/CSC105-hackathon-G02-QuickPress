import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif'; // Adjust the filename to match what you renamed it to

export default function ProfilePage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col gap-15 items-center justify-center"
      style={{
        backgroundImage: `url(${GifBG})`,
      }}
    >
        <div className='flex flex-col items-start w-[800px] h-[600px] bg-black border-2 border-[#FC0FC0] rounded-xl p-10'>
            <div className='flex flex-row justify-between items-center gap-125'>
            <h1 className='text-[30px] font-bold'>
                Username
            </h1>
            <button className='w-20 h-10 text-[20px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] hover:bg-none hover:bg-black hover:border-2 hover:border-[#FC0FC0] cursor-pointer'>
                Edit
            </button>
            </div>

        <div className='flex flex-col w-[720px] h-full bg-black mt-10 border-2 border-[#FC0FC0] rounded-xl p-6 justify-between'>
        <div>
            <h2 className='text-2xl font-bold underline text-center mb-6'>History</h2>
            <table className="table-auto w-full text-center border-separate border-spacing-0">
                <thead>
                    <tr className="text-lg">
                    <th className="border-b border-r border-white px-4 py-2">Date</th>
                    <th className="border-b border-r border-white px-4 py-2">Highest combo</th>
                    <th className="border-b border-white px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border-r border-white px-4 py-2">30/05/2005</td>
                    <td className="border-r border-white px-4 py-2">18</td>
                    <td className="px-4 py-2">100</td>
                    <td className="px-4 py-2">
                        <button className="w-16 h-8 text-[15px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] cursor-pointer">
                        Delete
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
            
        <div className="flex justify-center items-center gap-2 mt-6 text-white text-sm">
            <span className="text-gray-400">← Previous</span>
            {[1, 2, 3, '...', 9, 10].map((num, idx) => (
            <button
                key={idx}
                className={`w-7 h-7 rounded-full ${
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

        

        <div className='flex gap-90'>

            <button className='
                text-[24px] font-bold 
                bg-black hover:bg-gradient-to-b 
                from-[#FC0FC0] to-[#C154C1]
                px-15 
                rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
                cursor-pointer'>
                Back
            </button><button className='
                text-[24px] font-bold 
                bg-black hover:bg-gradient-to-b 
                from-[#FC0FC0] to-[#C154C1]
                px-15 py-3
                rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
                cursor-pointer'>
                Log Out
            </button>

        </div>
    </div>
  );
}
