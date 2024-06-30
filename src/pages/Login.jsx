import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useSupabase } from '../SupabaseContext';
import Header from '../components/Header';

function Login() {
    const navigate = useNavigate();
    const supabase = useSupabase();
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

    const handleOAuth = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'https://tpsuwflkyyzqgdkqexew.supabase.co/auth/v1/callback'
                }
            })
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
    <>
        <Header/>
        <form onSubmit={handleSubmit}>
            <div className='card'>
                <div className='app-name'>Login</div>
                <div className='label'>Email</div>
                <div className='auth-box'>
                    <input type='text' placeholder='Email' value={email}
                    onChange={handleEmailChange} />
                </div>
                <div className='label'>Password</div>
                <div className='auth-box'>
                    <input type='password' placeholder='Password' value={password}
                    onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className='sign-in-button' type='submit'>Login</button>
                </div>
                <div className='line-container'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='sign-in-button' onClick={handleOAuth}>
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