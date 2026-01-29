import React, { useRef } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Consulting from '../../component/Consulting/Consulting'
import headset from '../../assets/Consaltation2.png';
import pro from '../../assets/custpro.png';
import emailjs from 'emailjs-com';
import Footer from '../../component/Footer/Footer';

function MoreServices5() {
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
      <section id="Customer" className="cusbg-image bg-black">
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
                  Customer {''}
                  <span className="text-purple"> Support</span>
                  <br></br>
                </h1>
                <p className="mt-5 boldp">
                  People buy experiences, not just products.
                </p>
                <p
                  className="hero-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                  Our trained support champs connect, close,<br></br>retain and elevate customer satisfaction.
                </p>
                <button to="/contact" className="contact-nav-btn mt-5">
                  Grow Your Business
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-lg-5 mx-lg-5">
          <Row className="align-items-center mt-lg-5 min-vh-70">
            <Col lg={8} md={12} className="mt-5">
              <div className="hero-contents">
                <span
                  className="contact-subtitle"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1500"
                >
                  Customer Support
                </span>

                <h1
                  className="graph-titles"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2000"
                >
                  Stronger Brand<br></br>Reputation
                  <span className="text-purple">.</span>
                </h1>

                <p
                  className="expert-desc mt-4"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="2500"
                >
                 Your customers deserve answers, not<br></br>frustration.
                  <br />
                  <br />
                </p>
                <p>
                  <span className="text-purple" style={{ fontWeight: '600' }}>
                    What We Handle:
                  </span>
                  <br></br>• Live chat support<br></br>• Email & ticket responses<br></br>• WhatsApp support & inquiry handling
                  <br></br>• Lead qualification & follow-ups
                  <br></br>• Appointment booking and escalation
                  <br></br>
                  <br></br>
                 Outcome: Whether you need daily message handling, full-time chat<br></br>support, or seasonal backup, we scale with your business.
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

export default MoreServices5;
