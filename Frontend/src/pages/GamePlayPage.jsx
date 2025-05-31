import { React, useEffect, useState} from 'react'
import Controller from '../components/Controller'
import ArrowKeyListener from '../components/ArrowKeys'
import Timer from '../components/Timer'

export let sendRule = [];
export function setSendRule(rule){
    sendRule = rule;
}

const GamePlayPage = () => {
    const [rule, setRule] = useState([]);
    const [start, setStart] = useState(false)
    const arrowOptions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    ArrowKeyListener()

    useEffect(() => {
        setSendRule(rule);
    }, [rule])

  return (
    <>
    <div className='flex justify-between items-center px-5'>
        <h1 className='text-[56px] font-bold'>Score: </h1>
        <Timer start={start} setStart={setStart}></Timer>
    </div>
    <div className='flex items-center gap-10'>
        <h1 className='text-xl font-bold underline'>Show</h1>
        <div className='flex gap-4'>
            {arrowOptions.map((arrow, index) => (
                <h1>{arrow}</h1>
            ))}
        </div>
    </div>
    <div className='flex items-center gap-10'>
        <h1 className='text-xl font-bold underline'>Press</h1>
        <div className='flex gap-4'>
            {rule.map((arrow, index) => (
                <h1>{arrow}</h1>
            ))}
        </div>
    </div>
    
    
    <Controller setRule={setRule} start={start}></Controller>
    <button onClick={() => setStart(true)} className='cursor-pointer'>CLikc</button>
    </>
  )
}

export default GamePlayPage