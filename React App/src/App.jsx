import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Home from './Pages/Home/Home'
import { Route,Routes} from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackAnalysis'


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
       {/*<Route path='/order' element={<Placeorder/>} />
       <Route path='/verify' element={<Verify/>}/>
       <Route path='/myorders' element={<MyOrders/>}/>  */}
    </Routes>
    </div>
     
    </>
  )
}

export default App
