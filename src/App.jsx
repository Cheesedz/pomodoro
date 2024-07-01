import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Report from './pages/Report';
import { Routes, Route } from "react-router-dom";
import { useSupabase } from './SupabaseContext';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error fetching user:', error);
        } else {
          console.log('User data in app:', data.user.id);
          setUser(data.user.id);
        }
        setLoading(false);
      };

    fetchUser();
  }, [supabase]);

  if (loading) {
    return <>
      <Loading />
    </>
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="report" element={<Report/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
