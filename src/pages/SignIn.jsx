import React, { useState } from 'react'
import './SignIn.css'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';

function SignIn() {
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
            const {data, signUpError} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            // const { dbError } = await supabase
            //     .from('user')
            //     .insert({ 
            //         userId: data.user.id,
            //         username: data.user.email,
            //         account_type: 'MFA'
            //     })
            console.log(data)
        } catch(e) {
            console.log(e)
        }
        navigate('/')
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='card'>
                <h2>Create account</h2>
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
                    <button className='sign-in-button' type='submit'>Sign in</button>
                </div>
                <div className='line-container'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='sign-in-button'>
                        <img src='/google.png' width={30} height={30} />
                        <div>Sign in with Google</div>
                    </button>
                </div>
            </div>
        </form>
        <div className='option'>
            <p>Already have an account?</p>
            <a href='/login'>Login</a>
        </div>
    </>
    )
}

export default SignIn;