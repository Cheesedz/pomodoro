import React, { useState } from 'react'
import './Footer.css'

function Footer() {
    return <footer className='p-4 mt-10 border-t-2 border-rose-800 items-center'>
        <div className='flex gap-x-4 my-4 justify-center'>
            <a href='https://www.facebook.com/cheesedz86' target='_blank'>
                <img src='/facebook.svg' className='hover:opacity-70 delay-200' width={40} height={40}></img>
            </a>
            <a href='https://www.github.com/Cheesedz' target='_blank'>
                <img src='/github.svg' className='hover:opacity-70 delay-200' width={40} height={40}></img>
            </a>
        </div>
        <div>Made by Cheesedz</div>
        <div className='text-xs'>©Pomodoro 2024. All Rights Reserved</div>
    </footer>
}

export default Footer;