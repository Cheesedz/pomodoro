import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
    const navigate = useNavigate();

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
                onClick={() => {
                    navigate('/setting');
                }}>
                <img src='config-white.png' width={20} height={20}></img>
                <div>Setting</div>
            </button>
            <button className='menu-button'
                onClick={() => {
                    navigate('/sign-in');
                }}>
                <img src='/user-white.png' width={20} height={20}></img>
                <div>Sign In</div>
            </button>
        </span>
    </header>
}

export default Header;