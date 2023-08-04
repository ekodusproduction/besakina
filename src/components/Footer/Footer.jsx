import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
     <footer>
        <ul class="footer_nav">
          <li><Link to={"/"} style="text-decoration: none; color: white;">Home</Link></li>
          <li><Link to={"/about"} style="text-decoration: none; color: white;" >About us</Link></li>
          <li><Link to={"/categories"} style="text-decoration: none; color: white;">Categories</Link></li>
          <li><Link to={"/specification"} style="text-decoration: none; color: white;">Specifications</Link></li>
          <li><Link to={"/contact"} style="text-decoration: none; color: white;">Contact</Link></li>
          <li><Link to={"/gallery"} style="text-decoration: none; color: white;"><p>Gallery</p></Link></li>
        </ul>

        <div class="footer_nav_mobile_container">
        <h4 style={{color:"white"}}>Quick Links</h4>
        <div class="footer_nav_mobile">
          <div className='footer_nav_mobile_one'>
            
          <Link to={"/"} style="text-decoration: none; color: white;">Home</Link>
          <Link to={"/about"} style="text-decoration: none; color: white;" >About us</Link>
         <Link to={"/categories"} style="text-decoration: none; color: white;">Categories</Link>
         </div>
         <div class="footer_nav_mobile_two">
         
          <Link to={"/specification"} style="text-decoration: none; color: white;">Specifications</Link>
          <Link to={"/contact"} style="text-decoration: none; color: white;">Contact</Link>
          <Link to={"/gallery"} style="text-decoration: none; color: white;"><p>Gallery</p></Link>
          </div>
          </div>
        </div>
        
        <div class="footer_socials">
          <a href="https://www.facebook.com/besakinalive" target="_blank" style="text-decoration: none; color: white;"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/besakinalive/" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/Besakinalive" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/besakina-com/?viewAsMember=true" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-linkedin"></i></a>
          <a href="https://in.pinterest.com/besakinalive/" target="_blank" style="text-decoration: none; color: white;"><i class="fa-brands fa-pinterest"></i></a>
        </div>
        <div class="copyright">
           <p>© 2023 All Right and Reserved | <a href="#" style="text-decoration: none; color: white;">Besakina.com</a></p>
        </div>
      </footer>
  )
}

export default Footer