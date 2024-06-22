import React, { useState } from 'react'
import './SignIn.css'

function SignIn() {
    return (
    <>
        <form>
            <div className='card'>
                <h2>Sign In</h2>
                <label>Email</label>
                <div className='auth-box'>
                    <input type='text' placeholder='Email' />
                </div>
                <label>Password</label>
                <div className='auth-box'>
                    <input type='password' placeholder='Password' />
                </div>
                <div>
                    <button>Sign in</button>
                </div>
                <div className='line-container'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                    <div className='line'></div>
                </div>
                <div>
                    <button>
                        <img src='/google.png' width={30} height={30} />
                        <div>Sign in with Google</div>
                    </button>
                </div>
            </div>
        </form>
        <div>
            <p>Already have an account?</p>
            <a href='/login'>Login</a>
        </div>
    </>
    )
}

export default SignIn;