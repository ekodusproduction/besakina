import React from 'react'
import "./Specification.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import bannervid from "../../assets/BesaKina Animation 2.mp4"
import ghymap from "../../assets/ghy-map.jpg"
import envelope1 from "../../assets/envelopes/Envelope Front Side 26 cm x 11.5 cm.jpg"
import envelope2 from "../../assets/envelopes/Pamphlet Design both side_1 21.5 cm x 9 cm.jpg"
import envelope3 from "../../assets/envelopes/Pamphlet Design both side_2 21.5 cm x 9 cm.jpg"
import envelope4 from "../../assets/envelopes/Pamphlet Design One Fold 21.5 cm x 18 cm.jpg"
import envelope5 from "../../assets/envelopes/Pamphlet Design one side 21.5 cm x 9 cm.jpg"

const Specification = () => {
  document.body.classList.remove("stopscroll")
  return (
    <>
      <Navbar/>

      <div class="header">
        <video class="banner-video" autoplay muted loop playsinline>
          <source src={bannervid} type="video/mp4"/>
        </video>
    </div>

    <div class="specification-main">
        <h2>How do we work?</h2>
        <ul>
            <li>
                <b> Demographic Market Research :  </b> Our dedicated team of experts understands the importance of recognising target audience and gaining valuable insights to drive the business forward. So the first step is understanding our target audience.

            </li>
            <li>
                <div><b>Demarcation of Zones : </b> Our team ensures efficient operations, we identify the pincodes and municipal ward numbers of the city and then demarcate zones to effectively manage our research activities. Our strategic zoning approach allows us to optimize resources, allocate research teams, and focus on specific regions or target demographics. This ensures accurate data collection and comprehensive coverage, enabling you to access a holistic view of your market landscape. In Guwahati, we have identified 44 pincodes which are segregated between 60 municipal wards. Our team has demarcated 10 zones after thorough research.</div>
                <img class="map-ghy" src={ghymap} alt=""/>
            </li>
            <li><b>Marketing of BesaKina.com : </b> Our marketing experts employ a variety of strategies, both online and offline, to reach our target audience and increase brand visibility. Whether it's digital advertising, social media campaigns, or traditional marketing methods, we tailor our approach to suit your specific goals and objectives. BesaKina.com is active in all the Social Media Platforms such as Facebook, Instagram, Whatsapp, LinkedIn, Twitter, and many more.
            </li>
            <li><b>Designing and Printing : </b> When it comes to designing and printing, we understand the importance of visually appealing materials to convey your message effectively. Our talented team of designers works closely with you to create eye-catching designs that align with your brand identity.From the BesaKina.com envelope to the lucrative Leaflets, we ensure that the marketing materials make a lasting impression.
            </li>
            <li><div><b>Specifications of the Marketing Materials : </b>
                Envelope- (26 x 11)cm 
                Leaflet- (21 x 9)cm
              </div>
              <div class="specifications-envelope-img">
                <img src={envelope1} alt=""/>
                <img src={envelope2} alt=""/>
                <img src={envelope3} alt=""/>
                <img src={envelope4} alt=""/>
                <img src={envelope5} alt=""/>
              </div>
                </li>
            <li><b>Collection and Distribution : </b>Our team handles the printing and collection of these envelopes and trusted delivery handling companies, viz, Indian Postal Service, Local Delivery Agency, etc. delivers the envelope to all the specified zones, once every quarter in a year. Our efficient logistics network ensures that your materials reach the intended recipients in a timely manner. 
            </li>
        </ul>
      </div>

      <Footer/>
    </>
  )
}

export default Specification