
import React from 'react';
import GifBG from '../images/NeonPinkGrid.gif';

export default function ProfilePage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${GifBG})`,
      }}
    >
      <div className='flex flex-col items-start w-full max-w-[800px] h-[600px] max-sm:h-131 max-sm:w-100 bg-black border-2 border-[#FC0FC0] rounded-xl p-10 max-sm:p-4 max-sm:mt-6'>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='text-[30px] max-sm:text-[20px] font-bold'>
            Username
          </h1>
          <button className='w-20 h-10 max-sm:w-16 max-sm:h-8 text-[20px] max-sm:text-[14px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] hover:bg-none hover:bg-black hover:border-2 hover:border-[#FC0FC0] cursor-pointer'>
            Edit
          </button>
        </div>

        <div className='flex flex-col w-full h-full bg-black mt-10 max-sm:mt-4 border-2 border-[#FC0FC0] rounded-xl p-6 max-sm:p-2 justify-between overflow-x-auto'>
          <div>
            <h2 className='text-2xl max-sm:text-lg font-bold underline text-center mb-6'>History</h2>
            <table className="min-w-full text-center border-separate border-spacing-0 text-sm max-sm:text-xs">
              <thead>
                <tr className="text-lg max-sm:text-sm">
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
                    <button className="w-16 max-sm:w-15 max-sm:ml-5 h-8 max-sm:h-6 text-[15px] max-sm:text-[12px] font-bold rounded-xl bg-gradient-to-b from-[#FC0FC0] to-[#C154C1] cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6 text-white text-sm max-sm:text-xs">
            <span className="text-gray-400">← Previous</span>
            {[1, 2, 3, '...', 9, 10].map((num, idx) => (
              <button
                key={idx}
                className={`w-7 h-7 max-sm:w-6 max-sm:h-6 rounded-full ${
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

      <div className='flex gap-20 max-sm:gap-10 mt-6 max-sm:mb-10'>
        <button className='
          text-[24px] max-sm:text-[20px] font-bold 
          bg-black hover:bg-gradient-to-b 
          from-[#FC0FC0] to-[#C154C1]
          px-15 max-sm:px-4 py-3
          rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
          cursor-pointer max-sm:w-40'>
          Back
        </button>
        <button className='
          text-[24px] max-sm:text-[20px] font-bold 
          bg-black hover:bg-gradient-to-b 
          from-[#FC0FC0] to-[#C154C1]
          px-15 max-sm:px-4 py-3
          rounded-xl border-2 border-[#FC0FC0] shadow-[-6px_10px_rgba(255,0,255,1)]
          cursor-pointer ml-250 max-sm:ml-10 max-sm:w-40'>
          Log Out
        </button>
      </div>
    </div>
  );
}
