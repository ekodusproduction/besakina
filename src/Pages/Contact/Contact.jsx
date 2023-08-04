import React from 'react'
import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar'
import bannervid from "../../assets/BesaKina Animation 2.mp4"
import addressicon from "../../assets/icons/addressicon.png"
import emailicon from "../../assets/icons/emailicon.png"
import phoneicon from "../../assets/icons/phoneicon.png"
import Footer from '../../components/Footer/Footer'
import Swal from 'sweetalert2'

const Contact = () => {

  document.body.classList.remove("stopscroll")


  return (
    <>
        <Navbar/>

        <div class="header">
        <video class="banner-video" autoplay muted loop playsinline>
          <source src={bannervid} type="video/mp4"/>
        </video>
    </div>

    <div class="contact-main">
        <div class="contact-main-text">
          <div>
            <h2>We’re here to help you level up</h2>
            <p>
                We're just one click away to help you take your brand or product from great to incredible. Fill in the form to share more details about your project. Or your favorite gum flavor. Either way, we’d love to talk.</p>
          </div>
          <div>
            <iframe  class="ekodus-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.608800695586!2d91.78189007467356!3d26.144295292691623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5923b109797f%3A0x1e84a3dca5a2bd58!2sEkodus%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1688720770900!5m2!1sen!2sin" width="500" height="420" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="contact-main-form">
            <form class="registration_form_contact" action="https://formsubmit.co/besakina.com@gmail.com" method="POST">
                <h2 style="color: white;">Connect with us</h2>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="http://www.besakina.com/thankyou.html"></input>
                <input type="text" placeholder="Name" name="name" id="name" required/>
                <input type="email" placeholder="Email" name="email" id="email" required/>
                <input type="number" placeholder="Phone Number" name="phonenumber" id="phnumber" required/>
                <input type="text" placeholder="Company name" name="companyname" id="companyname" class="message" required/>
                <textarea name="message" id="message" placeholder="Enter your message" cols="30" rows="6" required style="padding: 1rem;"/>
                <button type="submit" name="submit" id="submitbtn" style="cursor:pointer">Send</button> 
             </form>
        </div>
      </div>

      <div class="contact_container" id="contact_id">
            <h2 class="section_title">Contacts</h2>
            <div class="contacts">
              <div class="contact">
               
              <img src={phoneicon} alt="" style={{width: "40px"}} />
                <p>+91 78963-82896</p>
              
              </div>
              <div class="contact">
               
              <img src={emailicon} alt="" />
                <p>info@ekodus.com
                </p>
             
              </div>
              <div class="contact">
              
                <img src={addressicon} alt="" />
                <p style="font-size: 1rem; text-align: center;">1D Aashi Grande, Kahilipara Road
                  Ganeshguri, Guwahati – 781006, Assam, India</p>
               
              </div>
             
            </div>
          </div>

          <Footer/>
    </>
  )
}

export default Contact