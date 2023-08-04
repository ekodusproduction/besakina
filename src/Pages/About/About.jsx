import React from 'react'

import "./About.css"
import Navbar from '../../components/Navbar/Navbar'

import bannervid from "../../assets/BesaKina Animation 2.mp4"
import aboutimg1 from "../../assets/whychooseus.jpg"

import team1 from "../../assets/9.jpeg"
import team2 from "../../assets/1.jpeg"
import team3 from "../../assets/11.jpeg"
import team4 from "../../assets/7.png"
import team5 from "../../assets/2.png"
import team6 from "../../assets/12.jpg"
import team7 from "../../assets/5.png"
import team8 from "../../assets/6.png"
import team9 from "../../assets/11.jpg"
import team10 from "../../assets/10.jpeg"
import team11 from "../../assets/8.jpeg"
import team12 from "../../assets/13.jpeg"
import team13 from "../../assets/14.jpeg"
import team14 from "../../assets/karishma.jpeg"
import team15 from "../../assets/udayan.jpg"
import team16 from "../../assets/intiza.jpg"
import team17 from "../../assets/pratiksha.jpeg"
import team18 from "../../assets/anita.jpeg"
import team19 from "../../assets/15.jpeg"
import team20 from "../../assets/16.jpeg"
import Footer from '../../components/Footer/Footer'


const About = () => {
 
  
   

  document.body.classList.remove("stopscroll")
  return (
    <>
    <Navbar/>
    

    <div class="header" id='header'>
        <video class="banner-video" autoplay muted loop playsinline>
          <source src={bannervid} type="video/mp4"/>
        </video>
    </div>

    <div class="about-main">
        <div class="about-main-img">
          <img src={aboutimg1} alt=""/>
        </div>
        <div class="about-main-text">
            <h2>About us</h2>
            <p>BesaKina.com is a direct mail advertising division of Ekodus Technologies Private Limited. BesaKina.com, through it's direct mailing services provide information and offers about businesses in any local area to the residents of that area, who share the same pincode. It uses printed leaflets enclosed in an envelope as a mode of advertisement for all businesses, and distribute it to demographically targeted households. BesaKina.com is trusted by businesses to drive sales and brand awareness through its mailing service. BesaKina.com is targeting the businesses of Guwahati city. Our team has divided the city into different zones and distribute the creatively designed leaflet enclosed in the envelope to the residents of the city once every quarter in a year.</p>
        </div>
        
      </div>

      <div class="about-main-second" id="whybesakinadotcom">
       
       <div class="about-main-second-text">
       <h2>Why Besakina.com?</h2>
       <p>BesaKina.com is a marketing tool which aims to create brand awareness through leaflet in an envelope. It targets all the residents of the city. This helps all businesses to reach a larger target audience and increase the conversion rate.  BesaKina.com is an efficient offline marketing tool at an economical price range.</p>
     </div>
     </div>

     <div class="about-team" id="teambesakina">
        <h2>Our Team</h2>
        <div class="team-items">
          <div class="team-item">
            <div class="team-item-img">
              <img src={team1} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Mark Bordoloi <a href="https://www.linkedin.com/in/mark-bordoloi/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div class="team-item">
          <div class="team-item-img">
              <img src={team2} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Sita Chetri <a href="https://www.linkedin.com/in/sita-chetri-88a111233/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p> Division Head & Project Lead</p>
            </div>
          </div>
          <div class="team-item">
            <div class="team-item-img">
              <img src={team3} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Hirak Jyoti Das <a href=" https://www.linkedin.com/in/hirak-das-/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p> Lead, Software Development </p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team4} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Arghadwip Biswas <a href="https://www.linkedin.com/in/arghadwip-biswas-43123b201/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Lead, Digital Services</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team5} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Joyshree Choudhury <a href="https://www.linkedin.com/in/joyshree-choudhury-2b51b7257/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p> Digital Content Management</p>
            </div>
          </div>
          <div class="team-item">
            <div class="team-item-img">
              <img src={team6} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Sweta Deka <a href="https://www.linkedin.com/in/sweta-deka-593206205/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Research Analyst</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team7} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Pradyut Lal Das <a href="https://www.linkedin.com/in/pradyut-das-ab717b270/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Graphics & Animation Designer</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team10} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Raju Saha <a href="  https://www.linkedin.com/in/raju-saha-b014226b/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p> Accounts Management</p>
            </div>
          </div>
          <div class="team-item">
            <div class="team-item-img">
              <img src={team14} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Karishma Choudhury <a href="https://www.linkedin.com/in/karishma-choudhury-4b650a1b9/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Creative Design Associate</p>
            </div>
            </div>

            <div class="team-item-a">
            <div class="team-item-img">
              <img src={team15} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Udayan Bordoloi <a href="https://www.linkedin.com/in/udayan-bordoloi-769463253/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Creative Strategist</p>
            </div>
            </div>
            <div class="team-item-a">
            <div class="team-item-img">
              <img src={team17} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Pratiksha Guha<a href="https://www.linkedin.com/in/pratiksha-guha-15b676209/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Creative Design Associate</p>
            </div>
            </div>

            <div class="team-item-a">
            <div class="team-item-img">
              <img src={team8}alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Dhruba Talukdar <a href="https://www.linkedin.com/in/dhruv-talukdar-696a85189/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Motion Graphic Designer</p>
            </div>
          </div>
          
         
          
          <div class="team-item">
            <div class="team-item-img">
              <img src={team11} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Rituraj Pathak <a href="https://www.linkedin.com/in/rituraj-pathak-0983191a0/
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p> Website Design & Development</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team12} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Bhrignesh Goswami <a href="https://www.linkedin.com/in/bhrignesh-goswami-41a2a5150
                " target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Business Growth Executive</p>
            </div>
          </div>
          
          
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team16} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Intiza Hashmi <a href="https://www.linkedin.com/in/intiza-hashmi-742013285" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Customer Relationship Executive</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team13} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Sanjib Hazarika <a href="https://www.linkedin.com/in/sanjib-hazarika-873454283" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Business Growth Executive</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team18} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>L. Anita Singha <a href="https://www.linkedin.com/in/l-anitaa-singha-5301921a0/" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Social Media Content Writer</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team19} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Rajesh Biswas <a href="https://www.linkedin.com/in/rajesh-biswas-254515285" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Seals and marketing representative</p>
            </div>
          </div>
          <div class="team-item-a">
            <div class="team-item-img">
              <img src={team20} alt=""/>
            </div>
            <div class="team-item-info">
              <h5>Paruyaz Ahmed <a href="https://www.linkedin.com/in/paruyaz-ahmed-30456a238" target="_blank"><i style="font-size: 1.2rem;" class="fa-brands fa-linkedin"></i></a></h5>
              <p>Business Growth Executive</p>
            </div>
          </div>
          </div>
        </div>


        <Footer/>

          
       
    </>
  )
}

export default About