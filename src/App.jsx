import Header from './components/Header'
import Timer from './components/Timer'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='card'>
        <Timer/>
      </div>
      <Footer/>
    </>
  )
}

export default App
