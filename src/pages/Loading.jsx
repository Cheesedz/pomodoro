import React, { useEffect, useState } from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className='loading'>
            <span className='logo'>
                <img src='/tomato.svg' width={30} height={30}/>
                <div className='app-name'>Pomodoro</div>
            </span>
        </div>
    )
}

export default Loading;