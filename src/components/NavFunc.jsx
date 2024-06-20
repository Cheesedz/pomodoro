import React, { useState } from 'react'
import './NavFunc.css'

function NavFunc() {
    const [activeButton, setActiveButton] = useState('pomodoro')
    const handleClick = (buttonType) => {
        setActiveButton(buttonType)
    }

    return <>
        <div className='nav-button'>
            <button 
                className={activeButton === 'pomodoro' ? 'active' : ''}
                onClick={() => 
                    handleClick('pomodoro')
                }>
                Pomodoro
            </button>
            <button 
                className={activeButton === 'shortBreak' ? 'active' : ''}
                onClick={() =>
                    handleClick('shortBreak')
                }>
                Short Break
            </button>
            <button 
                className={activeButton === 'longBreak' ? 'active' : ''}
                onClick={() => handleClick('longBreak')}>
                Long Break
            </button>
        </div>
    </>
}

export default NavFunc;