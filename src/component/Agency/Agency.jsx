import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import faceImg from '../../assets/face.png'
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import RotatingText from './RotatingText';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Hero.css'
import LogoCarousel from './LogoCarousel';
import TextType from './TextType.jsx';
function Agency() {
 
  return (
  <section id='agency' className="bg-image hero-section">
      <Container fluid className='px-5 mx-5 mt-5 pt-5'>
        <Row className="align-items-center min-vh-100 mt-5">
          
       
          <Col lg={8} md={12}>
            <div className="hero-content">
              <span className="hero-subtitle" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500">Atrium Solutions The space where brands and talent evolve</span>

              <h1 className="hero-titles " data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
                Creative <br></br>
             <TextType 
  text={["Design.", "Branding.", "Elements.", "Coding."]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

              </h1>

              <p className="hero-desc mt-4" 
              data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2500"
              >
                <span className='p-span'>We Build, You Become Unstoppable</span>
                <br></br>
                <br></br>
                <br></br>
                A powerhouse born in Lahore built for the world.<br></br>We design, edit, market, support and code ambitious<br></br>
businesses into brands that win
              </p>

                <button to="/contact" className="contact-nav-btn mt-3">
                        Grow Your Business
                          </button>
            </div>
          </Col>

       
         <Col lg={6} md={12} className="text-lg-end text-center mt-5 mt-lg-0">

</Col>


        </Row>
      
      </Container>
      
    </section>
  )
}

export default Agency