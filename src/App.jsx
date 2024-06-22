import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        {/* <Route path="report" element={<Report />} /> */}
        <Route path="sign-in" element={<SignIn />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
