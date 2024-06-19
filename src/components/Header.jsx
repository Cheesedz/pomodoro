import React, { useState } from 'react'
import './Header.css'

function Header() {
    return <header className='header'>
        <div className='logo'>
            <img src='/tomato.svg' className='logo' alt='logo'/>
            <h2 className='app-name'>
              Pomodoro
            </h2>
        </div>
        <span className='menu'>
            <button>Report</button>
            <button>Setting</button>
            <button>Sign In</button>
        </span>
    </header>
}

export default Header;