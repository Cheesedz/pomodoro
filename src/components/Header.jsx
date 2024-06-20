import React, { useState } from 'react'
import './Header.css'

function Header() {
    return <header className='header'>
        <span className='logo'>
            <img src='/tomato.svg' width={30} height={30}/>
            <div className='app-name'>Pomodoro</div>
        </span>
        <span className='menu'>
            <button className='menu-button'>
                <img src='/graph-white.png' width={20} height={20}></img>
                <div>Report</div>
            </button>
            <button className='menu-button'>
                <img src='/config-white.png' width={20} height={20}></img>
                <div>Setting</div>
            </button>
            <button className='menu-button'>
                <img src='/user-white.png' width={20} height={20}></img>
                <div>Sign In</div>
            </button>
        </span>
    </header>
}

export default Header;