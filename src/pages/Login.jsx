import React, { useState } from 'react'
import './Login.css'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const supabase_url = import.meta.env.VITE_URL;
    const anon_key = import.meta.env.VITE_ANON_KEY;
    const supabase = createClient(
      supabase_url, anon_key
    )
    console.log(supabase_url, anon_key)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        try {
            const {data, signUpError} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            console.log(data)
            navigate('/')
        } catch(e) {
            console.log(e)
        } 
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='card'>
                <h2>Login</h2>
                <label>Email</label>
                <div className='auth-box'>
                    <input type='text' placeholder='Email' value={email}
                    onChange={handleEmailChange} />
                </div>
                <label>Password</label>
                <div className='auth-box'>
                    <input type='password' placeholder='Password' value={password}
                    onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className='sign-in-button' type='submit'>Login in</button>
                </div>
                <div className='line-container'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='sign-in-button'>
                        <img src='/google.png' width={30} height={30} />
                        <div>Login with Google</div>
                    </button>
                </div>
            </div>
        </form>
        <div className='option'>
            <div>Don't have an account?</div>
            <a href='/sign-up'>Sign up</a>
        </div>
    </>
    )
}

export default Login;