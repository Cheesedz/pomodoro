import { useState } from 'react'
import Header from './components/Header'
import NavFunc from './components/NavFunc'
import Timer from './components/Timer'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='card'>
        <NavFunc/>
        <Timer/>
      </div>
      <Footer/>
    </>
  )
}

export default App
