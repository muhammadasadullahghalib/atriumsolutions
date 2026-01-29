import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Play } from 'lucide-react';
import ImageCardSlider from './ImageCardSlider';
function Cases() {
  return (
       <section id='portfolio' className="why cases-section">
      <Container className="px-3">
          <span
          className="contact-subtitle text-white"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          Portfolio
        </span>

            <h1 className="title mb-4" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
              Our Latest Services 
              <span>.</span>
            </h1>

         <div className="d-flex" style={{justifyContent: "space-between"}}>
               <p
            
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2500"
          >
            We always try to implement our creative ideas at the highest<br></br>level. You can see it by looking at our portfolio.
          </p>
         <div
    data-aos="fade-up"
    data-aos-delay="450"
    data-aos-duration="700"
  >
  </div>
         </div>
       <ImageCardSlider/>
      </Container>
    </section>
  )
}

export default Cases
