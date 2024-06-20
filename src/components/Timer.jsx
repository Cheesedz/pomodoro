import React, { useState, useEffect, timerInterval } from 'react'
import './Timer.css'

function Timer() {
    const [activeButton, setActiveButton] = useState('START')
    const [timer, setTimer] = useState(1500)
    const [timerRunning, setTimerRunning] = useState(false);

    const formatTimer = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // useEffect(() => {
        const toggleTimer = () => {
            if (timerRunning) {
                console.log('Clock is not running')
                clearInterval(timerInterval);
                setTimerRunning(false);
                setActiveButton('START');
            } else {
                console.log('Clock is running')
                const timerInterval = setInterval(() => {
                    setTimer((prevTimer) => {
                        if (prevTimer > 0) {
                            return prevTimer - 1;
                        } else {
                            clearInterval(timerInterval); 
                            setTimerRunning(false);
                            setActiveButton('START');
                            return 0;
                        }
                    });
                }, 1000);
                setTimerRunning(true);
                setActiveButton('PAUSE');
            }
        };
    // })
    

    return <>
        <div className='timer'>
            {formatTimer(timer)}
        </div>
        <div>
            <button className='timer-button '
                onClick={() => {
                    setActiveButton(activeButton==='START'?'PAUSE':'START');
                    setTimerRunning(activeButton==='START'?false:true);
                    console.log(timerRunning)
                    toggleTimer();
                }}    
            >
                {activeButton}
            </button>
        </div>
    </>
}

export default Timer;