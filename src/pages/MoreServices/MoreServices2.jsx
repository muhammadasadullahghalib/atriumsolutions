import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './MoreServices.css';
import Consulting from '../../component/Consulting/Consulting';

function MoreServices2() {
  return (
    <>
      <section
        id="Marketers"
        className="marketerbg-image hero-section bg-black"
      >
        <Container className="mt-4">
          <Row className="align-items-center text-center pt-5 mt-5 min-vh-100">
            <Col lg={12} md={12} className="mt-5">
              <div className="hero-content mt-5">
                <h1
                  className="marketing-title"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Digital{''}
                  <span className="text-purple"> Marketing</span>
                  <br></br>
                </h1>
                <p className="mt-5 boldp">
                  Visibility is the key to Business Growth
                </p>
                <p
                  className="hero-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                   We help you get seen, get remembered and get chosen through
                  <br></br>
                  full funnel branding and performance marketing.
                </p>
                <button to="/contact" className="contact-nav-btn mt-5">
                  Grow Your Business
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="expert-section seobg bg-black pt-5">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8} md={12}>
              <div className="hero-contents">
                <span
                  className="contact-subtitle"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                >
                  Search Engine Optimization
                </span>

                <h1
                  className="seo-titles"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Get Found,<br></br>
                  Get Chosen<span className="text-purple">.</span>
                </h1>

                <p
                  className="expert-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                  We help your business appear where it<br></br>matters most:
                  the top of Google.
                  <br />
                  <br />
                 
                </p>
                 <p>
                    <span className="text-purple" style={{ fontWeight: '600' }}>
                      How we do it:
                    </span>
                    <br></br>• Smart keyword targeting<br></br>• On-page fixes
                    that search engines love<br></br>• Content built to rank and
                    convert<br></br>• Technical cleanup for speed and indexing
                    <br></br>• Quality backlinks and authority growth<br></br>•
                    Clear reporting so you see real results
                    <br></br>
                    <br></br>
                    Outcome: More visibility, more traffic, more customers,
                    organically.
                  </p>
                <button to="/contact" className="contact-nav-btn mt-3">
                  Contact to Grow
                </button>
              </div>
            </Col>

            <Col lg={6} md={12}></Col>
          </Row>
        </Container>
      </section>
      <Consulting/>
    </>
  );
}

export default MoreServices2;
