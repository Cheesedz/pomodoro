import React, { useState } from 'react'
import './Footer.css'

function Footer() {
    return <footer className='footer'>
        <div className='footer-container'>
            <a href='https://www.facebook.com/cheesedz86' target='_blank'>
                <img src='/facebook.svg' width={40} height={40}></img>
            </a>
            <a href='https://www.github.com/Cheesedz' target='_blank'>
                <img src='/github.svg' width={40} height={40}></img>
            </a>
        </div>
        <div>Made by Cheesedz</div>
        <div className='copy-right'>©Pomodoro 2024. All Rights Reserved</div>
    </footer>
}

export default Footer;