import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSupabase } from '../SupabaseContext';
import Header from '../components/Header';

function SignUp() {
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
            const {data, signUpError} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            const { dbError } = await supabase
                .from('user')
                .insert({ 
                    username: data.user.email,
                    uuid: data.user.id
                })
            console.log(data)
        } catch(e) {
            console.log(e)
        }
        navigate('/login')
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
                <div className='app-name'>Sign up</div>
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
                    <button className='sign-in-button' type='submit'>Sign up</button>
                </div>
                <div className='line-container'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                    <div className='line'></div>
                </div>
                <div>
                    <button className='sign-in-button' onClick={handleOAuth}>
                        <img src='/google.png' width={30} height={30} />
                        <div>Sign up with Google</div>
                    </button>
                </div>
            </div>
        </form>
        <div className='option'>
            <div>Already have an account?</div>
            <Link to='/login'>Login</Link>
        </div>
    </>
    )
}

export default SignUp;