import React, { useState } from 'react'
import './Report.css'
import BarChart from './BarChart';
import Header from '../components/Header';

function Report({ user }) {
    const [currentUser, setCurrentUser] = useState(user);
    console.log('Current user in report: ', currentUser)
    return (
    <>
        <Header user={user}/>
        <div className='report-card'>
            <h2>Report</h2>
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
                    {currentUser ? <BarChart className='chart' user={currentUser}/> : <div className='auth-message'>* The report is only available when you logged in</div>}
                </div>
                {currentUser ? (
                    <>
                        <div className='title-container'>
                            <div className='text'>Total Hour</div>
                            <div className='line'></div>
                        </div>
                        <div className='text'>Total: {51} Hour</div>
                    </>
                    ) : null
                }
            </div>
        </div>
    </>
    )
}

export default Report;