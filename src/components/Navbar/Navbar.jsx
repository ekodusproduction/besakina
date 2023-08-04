import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  const sidebarHandler = () =>{
    document.getElementById('sidebarid').classList.remove("hidesidebar")
    document.body.classList.add("stopscroll")
    document.querySelector('.sidebaroverlay').style.display= "block"

  }
  const closeSidebar = () =>{
    document.getElementById('sidebarid').classList.add("hidesidebar")
    document.body.classList.remove("stopscroll")
    document.querySelector('.sidebaroverlay').style.display= "none"

  }
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const aboutDropdownHandler = () =>{
      document.querySelector('.about-tab-dropdown').classList.toggle('hidedropdown')
  }

  return (
    <>
    <nav class="nav-container">

    <div class="prenav">
      <div class="prenav-contacts">
        <div class="prenav-contact">
          <i class="fa-solid fa-phone"></i>
          <p>+91 76648-22222</p>
        </div>
        <div class="prenav-contact">
          <i class="fa-solid fa-envelope"></i>
          <p>info@ekodus.com</p>
        </div>
      </div>
      <div class="prenav-social">
      <a href="https://www.facebook.com/besakinalive" target="_blank" style="text-decoration: none; color: white;"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/besakinalive/" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/Besakinalive" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/besakina-com/?viewAsMember=true" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-linkedin"></i></a>
                <a href="https://in.pinterest.com/besakinalive/" target="_blank" style="text-decoration: none; color: white;"><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </div>

    <div class="topbar">
      {/* <Sidebar/> */}
      <div class="menu-icon">
        <button class="menuopenbtn" onClick={sidebarHandler}><i class="fa-solid fa-bars"></i></button>
      </div>
      
      <div class="logo">
        <a href="http://besakina.com/">
          <img src={logo} class="nav_logo" alt=""/>
        </a>
      </div>
      <ul class="nav-links">
            <li><NavLink to={"/"}  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    
                    };
  }}>Home</NavLink></li>
          <li class="about-tab">
            <NavLink to={"/about"}  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
     
    };
  }} >About us</NavLink>
            <div class="about-list">
              <Link to="/about#whybesakinadotcom"><p>Why Besakina.com?</p></Link>
              <Link to="/about#teambesakina"><p>Our team</p></Link>
            </div>
          </li>
          <li><NavLink to={"/categories"}  style={({ isActive,  }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      
    };
  }}>Categories</NavLink></li>
          <li><NavLink to={"/specification"}  style={({ isActive,  }) => {
    return {
      fontWeight: isActive ? "bold" : "",
    
    };
  }}>Specifications</NavLink></li>
          <li><NavLink to={"/contact"}  style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
     
    };
  }}>Contact</NavLink></li>
          <li class="about-tab">
            <p style={{cursor:"pointer"}}>More <i class="fa-sharp fa-solid fa-caret-down"></i></p>
            <div class="about-list">
              <NavLink to={"/gallery"} style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
     
    };
  }}><p>Gallery</p></NavLink>
              {/* <Link to={"/advertise"}><p>Advertising</p></Link> */}
              {/* <a href="about.html"><p>Pricings</p></a> */}
            </div>
          </li>
       

      </ul>
    </div>

  </nav>
  <div class="sidebar hidesidebar" id="sidebarid">
          
  <div class="sidebar-logo">
  <a href="http://besakina.com/">
    <img src={logo} alt=""/>
  </a>
    <button class="menuclosebtn" onClick={closeSidebar} ><i class="fa-solid fa-arrow-left" style={{color:"#1f688c"}}></i></button>
  </div>
  <div class="sidebar-menu">
    <ul>
    <li><Link to={"/"}>Home</Link></li>
          <li class="about-tab">
            <div class="about-tab-head">
            <Link to={"/about"} >About us</Link>
            <button onClick={aboutDropdownHandler}><i class="fa-sharp fa-solid fa-caret-down"></i></button>
            </div>
            <div className='about-tab-dropdown hidedropdown'>
              <Link to="/about#whybesakinadotcom"><p>Why Besakina.com?</p></Link>
              <Link to="/about#teambesakina"><p>Our team</p></Link>
            </div>
          </li>
          <li><Link to={"/categories"}>Categories</Link></li>
          <li><Link to={"/specification"}>Specifications</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>
              <Link to={"/gallery"}><p>Gallery</p></Link>
              {/* <Link to={"/advertise"}><p>Advertising</p></Link> */}
              {/* <a href="about.html"><p>Pricings</p></a> */}
          </li>

    </ul>

  </div>
</div>
<div className='sidebaroverlay' onClick={closeSidebar}></div>
</>
  )
}

export default Navbar