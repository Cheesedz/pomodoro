import React, { useState } from 'react'
import './Report.css'
import BarChart from './BarChart';

function Report() {
    
    return (
    <>
        <div className='card'>
            <div>Report</div>
            <div className='report-box'>
                <div className='title-container'>
                    <div className='text'>Focus Hour</div>
                    <div className='line'></div>
                </div>
                <div className='auth-message'>* The report is only available when you logged in</div>
                <div className='chart-container'>
                    <BarChart className='chart'/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Report;