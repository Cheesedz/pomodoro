import './Home.css'
import Timer from '../components/Timer'
import Header from '../components/Header'
import { useState } from 'react'

function Home() {
  const [pomodoroTime, setPomodoroTime] = useState(1500);
  const [shortBreakTime, setShortBreakTime] = useState(300);
  const [longBreakTime, setLongBreakTime] = useState(600);

  return (
    <>
      <Header
        setPomodoroTime={setPomodoroTime}
        setShortBreakTime={setShortBreakTime}
        setLongBreakTime={setLongBreakTime}
      />
      <div className='card'>
        <Timer
          pomodoroTime={pomodoroTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
        />
      </div>
    </>
  )
}

export default Home
