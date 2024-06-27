import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import { useSupabase } from '../SupabaseContext';

function Timer({ pomodoroTime, shortBreakTime, longBreakTime}) {
    const [activeButton, setActiveButton] = useState('pomodoro');
    const [buttonText, setButtonText] = useState('START');
    const [timer, setTimer] = useState(pomodoroTime);
    const [timerRunning, setTimerRunning] = useState(false);
    const [pomoCount, setPomoCount] = useState(0);
    const timerIntervalRef = useRef(null);
    const notificationSoundRef = useRef(null);
    const [user, setUser] = useState(null);
    const supabase = useSupabase()

    const handleClick = (buttonType) => {
        setActiveButton(buttonType);
        if (buttonType === 'pomodoro') {
            setTimer(pomodoroTime);
        } else if (buttonType === 'shortBreak') {
            setTimer(shortBreakTime); 
        } else if (buttonType === 'longBreak') {
            setTimer(longBreakTime); 
            setPomoCount(0);
        }
        setTimerRunning(false);
        setButtonText('START');
        console.log('Current button:', activeButton)
    };

    useEffect(() => {
        if (activeButton === 'pomodoro') {
          setTimer(pomodoroTime);
        } else if (activeButton === 'shortBreak') {
          setTimer(shortBreakTime);
        } else {
          setTimer(longBreakTime);
        }
      }, [pomodoroTime, shortBreakTime, longBreakTime, activeButton]);

    const formatTimer = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) {
            console.error('Error fetching user:', error);
          } else {
            console.log('User data:', data);
            setUser(data.user.id);
          }
        };
    
        fetchUser();
      }, [supabase]);

    useEffect(() => {
        const pushData = async () => {
            const now = new Date();
            const timestamp = now.toISOString().split('T')[0];

            const { data, error } = await supabase.from('pomodoro').insert({
                belong_to: user,
                created_at: timestamp
            });
            if (error) {
                console.error('Error inserting data: ', error);
            } else {
                console.log('Data inserted: ', data);
            }
        }

        if (timerRunning) {
            timerIntervalRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        clearInterval(timerIntervalRef.current);
                        setTimerRunning(false);
                        setButtonText('START');
                        if (notificationSoundRef.current) {
                            notificationSoundRef.current.play();
                        }
                        console.log(activeButton)
                        if (activeButton === 'pomodoro') {
                            setPomoCount((prevCount) => prevCount + 1);
                        }
                        pushData()
                        console.log(pomoCount)
                        console.log(user)
                        
                        return 0;
                    }
                });
            }, 1000);
        } else {
            clearInterval(timerIntervalRef.current);
        }

        return () => clearInterval(timerIntervalRef.current); 
    }, [timerRunning]);

    useEffect(() => {
        if (timer === 0 && !timerRunning) {
            if (activeButton === 'pomodoro') {
                if (pomoCount === 8) {
                    handleClick('longBreak')
                } else {
                    handleClick('shortBreak');
                }
            } else {
                handleClick('pomodoro');
            }
        }
    }, [timer, timerRunning, activeButton, pomoCount]);

    const handleButtonClick = () => {
        setTimerRunning((prevTimerRunning) => !prevTimerRunning);
        setButtonText((prevButtonText) => prevButtonText === 'START' ? 'PAUSE' : 'START');
    };

    return (
        <>
            <div className='nav-button'>
                <button 
                    className={activeButton === 'pomodoro' ? 'active' : ''}
                    onClick={() => handleClick('pomodoro')}>
                    Pomodoro
                </button>
                <button 
                    className={activeButton === 'shortBreak' ? 'active' : ''}
                    onClick={() => handleClick('shortBreak')}>
                    Short Break
                </button>
                <button 
                    className={activeButton === 'longBreak' ? 'active' : ''}
                    onClick={() => handleClick('longBreak')}>
                    Long Break
                </button>
            </div>
            <div className='timer'>
                {formatTimer(timer)}
            </div>
            <div>
                <button className={buttonText === 'START' ? 'start-button' : 'pause-button'} onClick={handleButtonClick}>
                    {buttonText}
                </button>
            </div>
            <audio ref={notificationSoundRef} src='/school-bell-199584.mp3' preload='auto'/>
        </>
    );
}

export default Timer;
