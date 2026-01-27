import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Play } from 'lucide-react';
import Benefits from './Benefits';
function Career() {
    return (
        <section id='career' className="why">
            <Container fluid className="px-5">
                <Row className="align-items-center mb-5">
                    <span className="hero-subtitle" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">Career</span>

                    <h1 className="title" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="2000">
                        Be A Champ
                        <span>.</span>
                    </h1>

                    <div className="d-flex mb-5" style={{ justifyContent: "space-between" }}>
                        <p className="intro" data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="2500">
                            We will give you a chance to grow and outshine in the industry
                            But this is only for the person who has hunger of learning and growth.
                        </p>

                    </div>
                  <Benefits/>
                </Row>
           <div className="mt-5 line_border">
             <hr />
           </div>

            </Container>

        </section>
    )
}

export default Career