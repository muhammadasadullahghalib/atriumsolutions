import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Play } from 'lucide-react';
import TeamCard from './TeamCard';
function Champs() {
  return (
    <section id='team' className="why champs-section bg_champs">
      <Container fluid className="px-5">
        <Row className="align-items-center">
          <span className="contact-subtitle" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500">Our Team</span>

          <h1 className="title" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000">
            Champs
            <span>.</span>
          </h1>

          <div className="d-flex mt-4" style={{ justifyContent: "space-between" }}>
            <p data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2500"
              className='text-white'>
              We Have Passionate and Creatives Minds and they have a<br></br>huge hunger to Grow.
            </p>

          </div>
         
          <TeamCard />

        

        </Row>
      </Container>
    </section>
  )
}

export default Champs
