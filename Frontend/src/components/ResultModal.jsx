import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ResultModal = ({score, highestCombo}) => {
    const navigate = useNavigate()
  return (
    <>
    <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
          <div className='flex justify-center'>
              <div className='bg-black w-100 p-5 rounded-lg border-2 border-[#FF00C8] flex flex-col items-center'>
                <h1 className='text-[30px] font-bold'>Your score</h1>
                <p className='text-[24px] font-bold my-3'>{score}</p>
                <p className='text-[24px] font-bold'>Highest combo</p>
                <p className='text-[24px] font-bold my-3'>{highestCombo}</p>
                <button onClick={() => {navigate(0)}} className=' text-[24px] text-white font-bold mt-10 w-[50%] h-16 bg-gradient-to-b from-[#FF00C8] to-[#990078] rounded-xl hover:border-2 cursor-pointer hover:bg-black hover:bg-none hover:border-1 hover:border-[#FF00C8]'>Play again</button>
                <button onClick={() => {navigate("/")}} className=' text-[24px] text-white font-bold  my-3 w-[75%] h-16 bg-gradient-to-b from-[#FF00C8] to-[#990078] rounded-xl hover:border-2 cursor-pointer hover:bg-black hover:bg-none hover:border-1 hover:border-[#FF00C8]'>Back to main menu</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ResultModal