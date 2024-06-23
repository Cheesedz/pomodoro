import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useSupabase } from '../SupabaseContext';

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const supabase = useSupabase()
    useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) {
            console.error('Error fetching user:', error);
          } else {
            console.log('User data:', data);
            setUser(data);
          }
        };
    
        fetchUser();
      }, [supabase]);

    const handleAuthButton = async () => {
        if (user) {
            try {
                await supabase.auth.signOut();
            } catch (error) {
                console.error('Error logging out:', error.message);
            }
            setUser(null);
            navigate('/');
        } else {
            navigate('/sign-up');
        }
    }
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
                onClick={handleAuthButton}>
                <img src='/user-white.png' width={20} height={20}></img>
                <div>{user ? 'Logout' : 'Sign Up'}</div>
            </button>
        </span>
    </header>
}

export default Header;