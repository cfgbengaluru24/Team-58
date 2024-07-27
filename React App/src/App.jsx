import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Home from './Pages/Home/Home'
import { Route,Routes} from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackAnalysis'
import Dashboard from './Pages/Dashboard/Dashboard'
import Contact from './Pages/Contact/Contact'
import OurProgs from './Pages/OurPrograms/OurProgs'

function App() {
  
  const [showLogin, setshowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);
  return (
    <>
     {showLogin && (
        isLogin ?
          <Login setshowLogin={setshowLogin} switchToSignUp={switchToSignUp} /> :
          <SignUp setshowLogin={setshowLogin} switchToLogin={switchToLogin} />
      )}
     <div className='app'>
    <Navbar setshowLogin={setshowLogin}/>
   
    <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/feedback' element={<FeedbackPage/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/program' element={<OurProgs/>}/>
     
    </Routes>
    </div>
     
    </>
  )
}

export default App
