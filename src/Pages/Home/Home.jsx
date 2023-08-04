import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"

import CarouselSlider from '../../components/Carousel/CarouselSlider.jsx'
import aboutimg1 from "../../assets/whychooseus.jpg"
import thinkdummy from "../../assets/pngegg.png"
import Footer from '../../components/Footer/Footer'

import addressicon from "../../assets/icons/addressicon.png"
import emailicon from "../../assets/icons/emailicon.png"
import phoneicon from "../../assets/icons/phoneicon.png"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Home = () => {
  document.body.classList.remove("stopscroll");

  const enquirySubmission = (e) => {
    e.preventDefault()
    let flag = true
    const enquirySubmitBtn = document.getElementById('submitbtn');

    const fname =  document.forms['homeInquiryForm']['name'].value;
    const email =  document.forms['homeInquiryForm']['email'].value;
    const phnumber =  document.forms['homeInquiryForm']['phonenumber'].value;
    const companyname =  document.forms['homeInquiryForm']['companyname'].value;
    const message =  document.forms['homeInquiryForm']['message'].value;
    const regName = /^[a-zA-Z ]*$/;
    const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    const regPhn = /^[6-9]{1}[0-9]{9}$/

    if(fname.length==0){
      setError('name','*Name cannot be empty')
      flag=false

    }
    if(fname.length <3 && fname.length!=0){
      setError('name','*Name too short');
      flag=false;

    }
    if(!regName.test(fname) && fname.length!=0){
      setError('name','*Please write a valid name');
      flag=false;
    }
    if(email.length == 0){
      setError('email','*Email id cannot be empty')
      flag=false
    }
    if(!regEmail.test(email) &&email.length!=0){
      setError('email','*Invalid Email')
      flag=false;
    }

   if(phnumber.length==0){
    setError('phnumber','*Phone number cannot be empty')
   }
    if(!regPhn.test(phnumber) && phnumber.length!=0){
      setError('phnumber','*Invalid phone number.');
      flag=false;
    }
    if(companyname.length==0){
      setError('companyname', '*Company name cannot be empty')
      flag=false;
    }
    if(companyname.length<3 &&companyname.length!=0){
      setError('companyname', '*Company name too short')
      flag=false;
    }
   
    if(message.length<5 || message.length>50){
      setError('message','*Message should be between 5 to 50 characters')
      flag=false;
    }

    if(flag==true){
      enquirySubmitBtn.disabled = true;
      enquirySubmitBtn.innerHTML='Please Wait..'
      fetch("https://formsubmit.co/ajax/besakina.com@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          Name: fname,
          Email: email,
          'Phone Number': phnumber,
          'Company Name': companyname,
          Message: message

      })
  })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Inquiry has been submitted',
      })
      enquirySubmitBtn.disabled = false;
      document.forms['homeInquiryForm']['name'].value = '';
      document.forms['homeInquiryForm']['email'].value = '';
      document.forms['homeInquiryForm']['phonenumber'].value= '';
      document.forms['homeInquiryForm']['companyname'].value= '';
      document.forms['homeInquiryForm']['message'].value = '';
      enquirySubmitBtn.innerHTML='Submit'
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong!',
      })
      enquirySubmitBtn.disabled = false;
      document.forms['homeInquiryForm']['name'].value = '';
      document.forms['homeInquiryForm']['email'].value = '';
      document.forms['homeInquiryForm']['phonenumber'].value= '';
      document.forms['homeInquiryForm']['companyname'].value= '';
      document.forms['homeInquiryForm']['message'].value = '';
      enquirySubmitBtn.innerHTML='Submit'
    });
    }
    
  }
  const setError = (id,error) => {
    const element = document.getElementById(id);
    element.getElementsByClassName('inquiryFormError')[0].innerHTML = error;
  }

  // const checkChangeHandler = () => {
  //   const fname =  document.forms['homeInquiryForm']['name'].value;
  //   const email =  document.forms['homeInquiryForm']['email'].value;
  //   const phnumber =  document.forms['homeInquiryForm']['phonenumber'].value;
  //   const companyname =  document.forms['homeInquiryForm']['companyname'].value;
  //   const message =  document.forms['homeInquiryForm']['message'].value;
  //   const regName = /^[a-zA-Z_]*$/;
  //   const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

   
  //   if(fname.length >3){
  //     setError('name','');

  //   }
  //   if(regName.test(fname) && fname.length!=0){
  //     setError('name','');
      
  //   }
  //   if(regEmail.test(email)){
  //     setError('email','')
      
  //   }
    
  //   if(phnumber.length == 10 || phnumber>0){
  //     setError('phnumber','');
     
  //   }
  //   if(companyname.length>3){
  //     setError('companyname', '')
  //   }

  //   if(message.length>5){
  //     setError('message','')
      
  //   }



  // }
  



  return (
    <>
        <Navbar/>
        <CarouselSlider/>

        <div class="about_container">
          
            <h2 class="section_title">About us</h2>
          
            <div class="aboutus" id="about_id">
            <div class="about_text">
              <img src="./assets/small_logo.png" class="small_logo" alt=""/>
              <p>BesaKina.com is a Direct Mail Advertising Division of Ekodus Technologies Private Limited. BesaKina.com, through its direct mailing services provide information and offers about businesses in any local area to the residents of that area, who share the same Pincode. It uses printed leaflets enclosed in an envelope as a mode of advertisement for small businesses, distribute it to demographically targeted households. 
                BesaKina.com is trusted by businesses to drive sales and brand awareness through its mailing service. Besakina.com is targeting the businesses of Guwahati city. Our team has divided the city into different zones and distributes the creatively designed leaflet enclosed in envelope to the residents of the city once every quarter in a year.
                <br/> <Link to={"/about"} style="margin-top: 1rem; text-decoration: none;">Read More</Link>
  
                </p>
             
            </div>
            <div class="about_image">
              <img src={aboutimg1} alt=""/>
            </div>
          </div>

          </div>

          {/* Enquiry */}

          <div class="tag_strip">
            <div class="tag_strip_text_container">
                <img src={thinkdummy} alt=""/>
                <div class="tag_strip_text">
                    <h3>Advertise your business with BesaKina.com</h3>
                    <p>BesaKina.com targets all the households of your city. Let us help you reach out to the target audience with the help of brand awareness.</p>
                    
                </div>
               
            </div>
          
            {/* <form  class="registration_form" action="https://formsubmit.co/besakina.com@gmail.com" method="POST" id='inquiryform'>
               <h2>Connect with us</h2>
               <input type="hidden" name="_captcha" value="false"/>
               <input type="hidden" name="_next" value="http://www.besakina.com/thankyou.html"></input>
                <input type="hidden" name="_subject" value="Besakina.com Enquiry!"></input>
                <input type="hidden" name="_template" value="table"></input>
                <input type="text" placeholder="Name" name="name" id="name" required/>
                <input type="email" placeholder="Email" name="email" id="email" required />
                <input type="number" placeholder="Phone Number" name="phonenumber" id="phnumber" required/>
                <input type="text" placeholder="Company name" name="companyname" id="companyname" class="message" required/>
                <textarea name="message" id="message" placeholder="Enter your message" cols="30" rows="6" required style="padding: 1rem;"/>
                
                <button type="submit" id="submitbtn" style="cursor:pointer" onSubmit={(e)=>submitHandler}>Send</button> 
            </form> */}
            <form  class="registration_form" name='homeInquiryForm' id='inquiryform'>
               <h2>Connect with us</h2>
               {/* <input type="hidden" name="_captcha" value="false"/>
               <input type="hidden" name="_next" value="http://www.besakina.com/thankyou.html"></input> */}
                {/* <input type="hidden" name="_subject" value="Besakina.com Enquiry!"></input>
                <input type="hidden" name="_template" value="table"></input> */}
                <div id='name'>
                  <input type="text" placeholder="Name" name="name" onChange={()=>{setError('name','')}}  />
                  <p className='inquiryFormError'></p>
                </div>
                <div id='email'>
                  <input type="email" placeholder="Email" name="email" onChange={()=>{setError('email','')}}    />
                  <p className='inquiryFormError'></p>
                </div>
                <div id='phnumber'>
                  <input type="number" placeholder="Phone Number" name="phonenumber" onChange={()=>{setError('phnumber','')}}  />
                  <p className='inquiryFormError'></p>
                </div>
                <div id='companyname'>
                  <input type="text" placeholder="Company name" name="companyname" onChange={()=>{setError('companyname','')}} />
                  <p className='inquiryFormError'></p>
                </div>
                <div id='message'>
                  <textarea name="message" placeholder="Enter your message" cols="30" rows="6" style="padding: 1rem;" onChange={()=>{setError('message','')}} />
                  <p className='inquiryFormError'></p>
                </div>
                
                <button type="submit" id="submitbtn" style="cursor:pointer" onClick={enquirySubmission}>Send</button> 
            </form>

          </div>

          {/* contact */}

          <div class="contact_container" id="contact_id">
            <h2 class="section_title">Contact</h2>
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

export default Home