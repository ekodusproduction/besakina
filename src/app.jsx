import { useState,useEffect } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Categories from './Pages/Categories/Categories'
import Specification from './Pages/Specification/Specification'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'

import ScrollToTop from '../scroll'


import { BrowserRouter,Routes,Route , useLocation,useNavigate} from 'react-router-dom'

export function App() {
  const ScrollToElement = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [navigate]);
  
    return null;
  };

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <ScrollToElement />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='categories' element={<Categories/>}/>
        <Route path='specification' element={<Specification/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
       
       

      </Routes>
      
    </BrowserRouter>
  
      
    </>
  )
}
