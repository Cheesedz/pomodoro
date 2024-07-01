import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import { useSupabase } from '../SupabaseContext';

function Header({ setPomodoroTime, setShortBreakTime, setLongBreakTime, user }) {
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);
    const [pomodoroTime, setPomodoro] = useState(25);
    const [shortBreakTime, setShortBreak] = useState(5);
    const [longBreakTime, setLongBreak] = useState(10);
    const [currentUser, setCurrentUser] = useState(user);
    const supabase = useSupabase()

    console.log('Current user in header: ', currentUser)

    const handleSettingChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value);
    }

    const handleSettingClose = () => {
        setPomodoroTime(pomodoroTime * 60);
        setShortBreakTime(shortBreakTime * 60);
        setLongBreakTime(longBreakTime * 60);
        handleSetting();
    }

    const handleSetting = () => {
        navigate('/');
        setShowSettings(prevState => !prevState);
    };

    const handleAuthButton = async () => {
        if (user) {
            try {
                await supabase.auth.signOut();
            } catch (error) {
                console.error('Error logging out:', error.message);
            }
            setCurrentUser(null);
            navigate('/login');
        }
    }
    return <header className='header'>
        <span className='logo'
            onClick={() => {
                navigate('/');
            }}>
            <img src='/tomato.svg' width={30} height={30}/>
            <div className='app-name'>Pomodoro</div>
        </span>
        <span className='menu'>
            <button className='menu-button'
                onClick={() => {
                    navigate('/report');
                }}>
                <img src='/graph-white.png' width={20} height={20}></img>
                <div>Report</div>
            </button>
            <button className='menu-button'
                onClick={handleSetting}>
                <img src='config-white.png' width={20} height={20}></img>
                <div>Setting</div>
            </button>
            <button className='menu-button'
                onClick={handleAuthButton}>
                <img src='/user-white.png' width={20} height={20}></img>
                <div>{currentUser ? 'Logout' : 'Login'}</div>
            </button>
        </span>
        {showSettings && (
            <div className='overlay'>
                <div className='floating-card'>
                    <div className='app-name'>Setting</div>
                    <div className='setting-container'>
                        <img src='/clock.png' width={24} height={24}/>
                        <div className='title'>Timer</div>
                    </div>
                    <div className='selector'>
                        <div className='label'>Pomodoro</div>
                        <input className='timer-controller' 
                            type='number' 
                            min={1} 
                            max={60} 
                            defaultValue={25}
                            onChange={handleSettingChange(setPomodoro)}
                        />
                    </div>
                    <div className='selector'>
                        <div className='label'>Short Break</div>
                        <input className='timer-controller' 
                            type='number' 
                            min={1} 
                            max={10} 
                            defaultValue={5}
                            onChange={handleSettingChange(setShortBreak)}
                        />
                    </div>
                    <div className='selector'>
                        <div className='label'>Long Break</div>
                        <input className='timer-controller' 
                            type='number' 
                            min={1} 
                            max={20} 
                            defaultValue={10}
                            onChange={handleSettingChange(setLongBreak)}
                        />
                    </div>
                    <button onClick={handleSettingClose}>Close</button>
                </div>
            </div>
        )}
    </header>
}

export default Header;