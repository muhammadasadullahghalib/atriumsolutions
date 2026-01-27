import React, { useRef } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Consulting from '../../component/Consulting/Consulting'
import headset from '../../assets/Consaltation2.png';
import pro from '../../assets/pro.png';
import emailjs from 'emailjs-com';
import { BsArrowUpRight } from 'react-icons/bs';
import { SlEnvolope } from 'react-icons/sl';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import Logo from '../../assets/atruimlogo.png';
function MoreServices4() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rff76fe',
        'template_5e4ga26',
        formRef.current,
        '_dtuNXqO23lduSGRv'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send message!');
          console.error(error);
        }
      );
  };

  return (
    <>
      <section id="Web" className="webbg-image bg-black">
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
                  Web {''}
                  <span className="text-purple"> Development</span>
                  <br></br>
                </h1>
                <p className="mt-5 boldp">
                  We transform ideas into fully built platforms.
                </p>
                <p
                  className="hero-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                  From e-commerce stores to mobile apps,<br></br>
                  we build digital products ready to scale.
                </p>
                <button to="/contact" className="contact-nav-btn mt-5">
                  Grow Your Business
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className='px-5 mx-5'>
          <Row className="align-items-center mt-5 min-vh-100">
            <Col lg={8} md={12} className="mt-5">
              <div className="hero-content">
                <span
                  className="contact-subtitle"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                >
                  Web & App Development
                </span>

                <h1
                  className="web-titles"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Strong,Professional<br></br>& Clear
                  <span className="text-purple">.</span>
                </h1>

                <p
                  className="expert-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                  We Build Powerful Digital Experiences<br></br>Designed to
                  Perform.
                  <br />
                  <br />
                </p>
                <p>
                  <span className="text-purple" style={{ fontWeight: '600' }}>
                    What we deliver:
                  </span>
                  <br></br>• Custom business websites<br></br>• E-Commerce stores<br></br>• Web applications & dashboards<br></br>• Mobile Apps (iOS & Android)
                  <br></br>• API integrations<br></br>•
                   UI/UX focused development
                  <br></br>
                  <br></br>
                 Outcome: A digital experience that loads fast, works beautifully, and<br></br>converts visitors into customers.
                </p>
                <button to="/contact" className="contact-nav-btn mt-3">
                  Contact to Grow
                </button>
              </div>
            </Col>

            <Col
              lg={4}
              md={12}
              className="text-lg-end text-center mt-5 mt-lg-0"
            >
              <div className="image-wrapper">
                <img
                  src={pro}
                  alt="Creative Face"
                  className="hero-image img-fluid"
                  style={{
                    width: '500px',
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <section className="consulting-section2 pt-5 mt-5 pb-5" id="Contact">
          <Container>
            <Row className="min-vh-100 align-items-center mt-5">
              <Col lg={8} md={12}>
                <span
                  className="contact-subtitle text-white"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                >
                  Let’s get started
                </span>
                <h1 className="contact-title">
                  Get a Free <br />
                  Consultation<span className="text-purple">.</span>
                </h1>
                <p className="contact-desc mb-5">
                  We always try to implement our creative ideas at the highest
                  level.<br></br>
                  Tell us about your project and we will make it work.
                </p>

                <Form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="contact-form"
                >
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        className="contact-input"
                        required
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        className="contact-input mb-2"
                        required
                      />
                    </Col>
                  </Row>

                  <Form.Control
                    as="textarea"
                    rows={1}
                    name="message"
                    placeholder="Message"
                    className="contact-input pb-5 mt-5"
                    required
                  />

                  <Button type="submit" className="contact-btn mt-5">
                    Send Message
                  </Button>
                </Form>
              </Col>
              <Col
                lg={4}
                md={12}
                className="text-lg-end text-center mt-5 mt-lg-0"
              >
                <div className="image-wrapper">
                  <img
                    src={headset}
                    alt="Creative Face"
                    className="hero-image img-fluid"
                    style={{
                      width: '500px',
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div className="container pt-lg-0 pt-5 mt-5">
            <div className="row pt-5">
              <div className="col mt-lg-5">
                <img src={Logo} alt="" />

                <form className="mt-lg-3 ms-lg-0 ms-4">
                  <SlEnvolope className="far-icon" />
                  <input type="email" placeholder="Enter Your Email" required />
                  <button type="submit">
                    <BsArrowRight className="fas-btn" />
                  </button>
                </form>
              </div>

              <div className="col mt-lg-5">
                <ul class="mb-3 text-center">
                  <h3 className="text-light text-center">Menu</h3>

                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      Home
                    </a>
                  </li>
                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      {' '}
                      Services
                    </a>
                  </li>
                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      Career
                    </a>
                  </li>
                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      Team
                    </a>
                  </li>
                  <li className="mb-2" style={{ listStyle: 'none' }}>
                    <a className="text-decoration-none text-light" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col mt-lg-5">
                <h3 className="text-light">Address:</h3>
                <p>
                  938-B Maulana Shaukat<br></br>Ali Rd, Block B Faisal<br></br>
                  Town, Lahore
                </p>
              </div>
              <div className="col mt-lg-5">
                <h3 className="text-light">Hit us up:</h3>
                <p>
                  +92 321 3940 050<br></br>+92 316 4418 356<br></br>
                  info@theatriumsolution.com
                </p>
                <div className="social-icons mt-lg-4 mb-4 responsive">
                  <span className="icons">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </span>
                  <br></br>
                  <span className="icons">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </span>
                  <br></br>
                  <span className="icons">
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </span>
                  <br></br>
                  <span className="icons">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </span>
                  <br></br>
                  <span className="icons">
                    <a href="#">
                      <FiMail />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="bottom-bar-content">
              <div className="text-light">
                Atrium © 2026. All Rights Reserved.
              </div>
              <div className="text-center" style={{ color: '#A150FF' }}>
                Terms and Conditions Privacy Policy
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default MoreServices4;
