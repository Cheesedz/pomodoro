import React, { useState, useEffect } from 'react'
import './Report.css'
import BarChart from './BarChart';
import Header from '../components/Header';
import { useSupabase } from '../SupabaseContext';

function Report() {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const supabase = useSupabase();

    useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await supabase.auth.getUser();
            if (error) {
              console.error('Error fetching user:', error);
            } else {
              console.log('User data:', data);
              setCurrentUser(data.user.id);
            }
            setLoading(false);
          };
    
          fetchUser();
      }, [supabase]);

    if (loading) {
        return <>
        <span className='logo'
            onClick={() => {
                navigate('/');
            }}>
            <img src='/tomato.svg' width={30} height={30}/>
            <div className='app-name'>Pomodoro</div>
        </span>
        <h1 className='loading'>Loading...</h1>
        </>
      }
    
    return (
    <>
        <Header user={currentUser}/>
        <div className='report-card'>
            <div className='app-name'>Report</div>
            <div className='report-box'>
                {currentUser ? (
                    <>
                        <div className='title-container'>
                            <div className='text'>Focus Hour</div>
                            <div className='line'></div>
                        </div>
                    </>
                    ) : null
                }
                
                {/* <div className='auth-message'>* The report is only available when you logged in</div> */}
                <div className='chart-container'>
                    {currentUser ? 
                        <BarChart className='chart' user={currentUser}/> 
                        : <div className='auth-message'>
                            * The report is only available when you logged in <br/>
                            Please login to see your report
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default Report;