import React from 'react'
import "./Gallery.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import bannervid from "../../assets/BesaKina Animation 2.mp4"

import galleryimg1 from "../../assets/gallery/1.png"
import galleryimg2 from "../../assets/gallery/2.png"
import galleryimg3 from "../../assets/envelopes/Envelope Front Side 26 cm x 11.5 cm.jpg"
import galleryimg4 from "../../assets/envelopes/Pamphlet Design both side_1 21.5 cm x 9 cm.jpg"
import galleryimg5 from "../../assets/envelopes/Pamphlet Design both side_2 21.5 cm x 9 cm.jpg"
import galleryimg6 from "../../assets/envelopes/Pamphlet Design one side 21.5 cm x 9 cm.jpg"

const Gallery = () => {
  document.body.classList.remove("stopscroll")
  return (
    <>
        <Navbar/>

        <div class="header">
        <video class="banner-video" autoplay muted loop playsinline>
          <source src={bannervid} type="video/mp4"/>
        </video>
    </div>
    <div className='gallery-container'>
    <h2 class="heading">Gallery</h2>
  <div class="gallery-image">
    <div class="img-box">
      <img src={galleryimg1} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">Facebook post</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
    <img src={galleryimg2} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">facebook post</p>
        </div>
      </div>
    </div>
    <div class="img-box">
    <img src={galleryimg3} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">facebook post</p>
        </div>
      </div>
    </div>
    <div class="img-box">
    <img src={galleryimg4} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">facebook post</p>
        </div>
      </div>
    </div>
    <div class="img-box">
    <img src={galleryimg5} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">facebook post</p>
        </div>
      </div>
    </div>
    <div class="img-box">
    <img src={galleryimg6} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Besakina.com</p>
          <p class="opacity-low">facebook post</p>
        </div>
      </div>
    </div>
   
   
    
    
  </div>
  </div>

        <Footer/>
    </>
  )
}

export default Gallery