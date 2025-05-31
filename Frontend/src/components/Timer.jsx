import { React, useState, useEffect } from 'react'

const Timer = ({start, setStart}) => {

    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (start && timeLeft <= 0) {
            setStart(false);
            setTimeLeft(30);
        }

        if (!start || timeLeft <= 0) return;

        const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); // Clean up on unmount or reset
    }, [timeLeft, start]);

  return (
    <>
    <div>
        <h1 className='text-[56px] font-bold'>0:{timeLeft}</h1>
    </div>
    </>
  )
}

export default Timer