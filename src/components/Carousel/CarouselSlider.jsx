import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"

import banner1 from "../../assets/Web Banner 1-01.jpg"
import banner2 from "../../assets/Web Banner-02.jpg"
import banner3 from "../../assets/Web Banner-03.jpg"
import banner4 from "../../assets/Web Banner-04.jpg"

const CarouselSlider = () => {
 
 
        return (
            <>
            <Carousel autoPlay showStatus={false} showIndicators={false} infiniteLoop showThumbs={false} interval={2000} className='carousel-large'>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
             
            </Carousel>
            <Carousel autoPlay showStatus={false} showIndicators={false} infiniteLoop showThumbs={false} interval={2000} className='carousel-mobile'>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                   
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                   
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                   
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                   
                </div>
             
            </Carousel>
          </>
        );
    
  
}

export default CarouselSlider