import React, { useState } from 'react'
import './Report.css'
import BarChart from './BarChart';
import Header from '../components/Header';

function Report() {
    
    return (
    <>
        <Header/>
        <div className='report-card'>
            <h2>Report</h2>
            <div className='report-box'>
                <div className='title-container'>
                    <div className='text'>Focus Hour</div>
                    <div className='line'></div>
                </div>
                <div className='auth-message'>* The report is only available when you logged in</div>
                <div className='chart-container'>
                    <BarChart className='chart'/>
                </div>
                <div className='title-container'>
                    <div className='text'>Total Hour</div>
                    <div className='line'></div>
                </div>
                <div className='text'>Total: {51} Hour</div>
            </div>
        </div>
    </>
    )
}

export default Report;