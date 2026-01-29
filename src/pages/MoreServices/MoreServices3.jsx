import React, { useRef } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Consulting from '../../component/Consulting/Consulting'
import headset from '../../assets/Consaltation2.png';
import videopro from '../../assets/videopro.png';
import emailjs from 'emailjs-com';
import Footer from '../../component/Footer/Footer';

function MoreServices3() {
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
      <section id="Video" className="videobg-image bg-black">
        <Container className="mt-4">
          <Row className="align-items-center text-center pt-lg-5 mt-5 min-vh-100">
            <Col lg={12} md={12} className="mt-5">
              <div className="hero-content mt-5">
                <h1
                  className="marketing-title"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Video{''}
                  <span className="text-purple"> Editing</span>
                  <br></br>
                </h1>
                <p className="mt-5 boldp">If it moves, we edit it</p>
                <p
                  className="hero-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                   From short form reels to cinematic trailers, our editors
                  <br></br>deliver edge, style and storytelling packed with
                  impact.
                </p>
                <button to="/contact" className="contact-nav-btn mt-5">
                  Grow Your Business
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-lg-5 mx-lg-5">
          <Row className="align-items-center  mt-lg-5 mt-0 min-vh-70">
            <Col lg={8} md={12} className="mt-5">
              <div className="hero-contents">
                <span
                  className="contact-subtitle"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                >
                  Video Editing
                </span>

                <h1
                  className="web-titles"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Grabs Attention and Keeps It
                  <span className="text-purple">.</span>
                </h1>

                <p
                  className="expert-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                  Your story deserves more than clips<br></br>stitched together.
                  <br />
                  <br />
                </p>
                <p>
                  <span className="text-purple" style={{ fontWeight: '600' }}>
                    What We Do:
                  </span>
                  <br></br>• Cut, refine, and shape your footage into a
                  high-impact final edit<br></br>• Add motion graphics, captions, transitions, and sound design<br></br>•
                  Create formats for all platforms — reels, shorts, ads, YouTube, or brand videos<br></br>• Match your brand tone, colours, and message every step of the way
                
                  <br></br>
                  <br></br>
                  Outcome: Every edit is made with purpose, whether your goal is<br></br>engagement, awareness, or conversions.
                </p>
                <button to="/contact" className="contact-nav-btn mt-3">
                  Contact to Grow
                </button>
              </div>
            </Col>

            <Col
              lg={4}
              md={12}
              className="text-lg-end text-center mt-5 mt-lg-0 d-lg-flex d-none"
            >
              <div className="image-wrapper">
                <img
                  src={videopro}
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
                className="text-lg-end text-center mt-5 mt-lg-0 d-lg-flex d-none"
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
        <Footer transparent />
      </section>
    </>
  );
}

export default MoreServices3;
