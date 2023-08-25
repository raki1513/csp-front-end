import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home.Page';
import LoginPage from './pages/Login.Page';
import SignupPage from './pages/Signup.Page';
import ContactUsPage from './pages/ContactUs.Pages';
import AboutUsPage from './pages/AboutUs.Page';
import Profilecomponent from './components/Profile/Profile.component';
import { createContext, useState } from 'react';

export const Token = createContext();
function App() {  
  const location = useLocation();
  const [token, setToken] = useState(null);

  return (
    <Token.Provider value={[token,setToken]}>
    <div className="App">
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
      <Route path='/ContactUs' element={<ContactUsPage/>}/>
      <Route path='/AboutUs' element={<AboutUsPage/>}/>
      <Route path='/Profile' element={<Profilecomponent/> }/>
      </Routes>
    </div>
    </Token.Provider>
  );
}

export default App;
