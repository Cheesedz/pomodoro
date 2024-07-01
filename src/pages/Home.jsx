import './Home.css'
import Timer from '../components/Timer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import { useSupabase } from '../SupabaseContext';

function Home() {
  const [pomodoroTime, setPomodoroTime] = useState(1500);
  const [shortBreakTime, setShortBreakTime] = useState(300);
  const [longBreakTime, setLongBreakTime] = useState(600);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error fetching user:', error);
        } else {
          console.log('User data:', data);
          setUser(data.user.id);
        }
        setLoading(false);
      };

      fetchUser();
  }, [supabase]);

  if (loading) {
    return <>
      <Loading/>
    </>
  }

  return (
    <>
      <Header
        setPomodoroTime={setPomodoroTime}
        setShortBreakTime={setShortBreakTime}
        setLongBreakTime={setLongBreakTime}
        user = {user}
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
