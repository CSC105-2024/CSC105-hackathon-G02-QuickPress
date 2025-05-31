import { React, useEffect, useState} from 'react'
import GifBG from '../images/NeonPinkGrid.gif'; // Adjust the filename to match what you renamed it to
import Controller from '../components/Controller'
import ArrowKeyListener from '../components/ArrowKeys'
import Timer from '../components/Timer'
import RuleModal from '../components/RuleModal';
import { sendStart } from '../components/RuleModal';
// Icon
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export let sendRule = [];
export function setSendRule(rule){
    sendRule = rule;
}

const GamePlayPage = () => {
    const [rule, setRule] = useState([]);
    const [start, setStart] = useState(false)
    const [showRuleModal, setShowRuleModal] = useState(true);
    const [score, setScore] = useState(0);

    ArrowKeyListener()

    useEffect(() => {
        setSendRule(rule);
    }, [rule])

    useEffect(() => {
        setStart(sendStart);
    }, [sendStart])


  return (
    <>
    {showRuleModal && <RuleModal setShowRuleModal={setShowRuleModal} rule={rule}></RuleModal>}
    <div className="w-full min-h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${GifBG})`,}}>
        <div className='flex justify-between items-start px-5'>
            <div>
                <h1 className='text-[56px] font-bold'>Score: {score}</h1>
                {!showRuleModal && <div className='bg-black w-100 p-5 pb-10 rounded-lg border-2 border-[#FF00C8]'>
                    <h1 className='text-[24px] text-white font-bold text-center'>Rule</h1>
                    <p className='text-[16px] text-white font-semibold text-center my-1'>Show</p>
                    <div className='flex justify-center gap-3'>
                        <FaArrowUp className='text-white text-[36px] bg-gradient-to-b from-[#38B6FF] to-[#44489A] p-2 rounded-full'/>
                        <FaArrowDown className='text-white text-[36px] bg-gradient-to-b from-[#38B6FF] to-[#44489A] p-2 rounded-full'/>
                        <FaArrowLeft className='text-white text-[36px] bg-gradient-to-b from-[#38B6FF] to-[#44489A] p-2 rounded-full'/>
                        <FaArrowRight className='text-white text-[36px] bg-gradient-to-b from-[#38B6FF] to-[#44489A] p-2 rounded-full'/>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='border-white border-2 my-5 w-50'/>
                    </div>
                    <p className='text-[24px] text-white font-semibold text-center mb-5'>Press</p>
                    <div className='flex justify-center gap-3'>
                        {rule.map((arrow, index) => (
                        <>
                        {arrow === "ArrowUp" && <FaArrowUp className='text-white text-[36px] bg-gradient-to-b from-[#7ed957] to-[#007e56] p-2 rounded-full'/>}
                        {arrow === "ArrowDown" && <FaArrowDown className='text-white text-[36px] bg-gradient-to-b from-[#7ed957] to-[#007e56] p-2 rounded-full'/>}
                        {arrow === "ArrowLeft" && <FaArrowLeft className='text-white text-[36px] bg-gradient-to-b from-[#7ed957] to-[#007e56] p-2 rounded-full'/>}
                        {arrow === "ArrowRight" && <FaArrowRight className='text-white text-[36px] bg-gradient-to-b from-[#7ed957] to-[#007e56] p-2 rounded-full'/>}
                        </>
                        ))}
                    </div>
                </div>}
            </div>
            <Timer start={start} setStart={setStart}></Timer>
        </div>
        
        <Controller setRule={setRule} start={start}></Controller>
    </div>
    </>
  )
}

export default GamePlayPage