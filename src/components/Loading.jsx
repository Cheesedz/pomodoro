import '../styles/Loading.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'

function Loading() {
    const navigate = useNavigate();
    return (
        <>
            <div className='container'>
                <div className='logo'
                    onClick={() => {
                        navigate('/');
                    }}>
                    <img src='/tomato.svg' width={30} height={30}/>
                    <div className='app-name'>Pomodoro</div>                
                    <h1 className='loading'>Loading...</h1>
                </div>
            </div>
        </>
    )
}

export default Loading