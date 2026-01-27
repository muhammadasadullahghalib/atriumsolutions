import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Consulting.css";

function Consulting() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rff76fe",
        "template_5e4ga26",
        formRef.current,
        "_dtuNXqO23lduSGRv"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message!");
          console.error(error);
        }
      );
  };

  return (
    <section className="consulting-section" id="Contact">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col lg={8} md={12}>
             <span className="contact-subtitle text-white" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="1500">Let’s get started</span>
            <h1 className="contact-title">
              Get a Free <br />
              Consultation<span className="text-purple">.</span>
            </h1>
            <p className="contact-desc mb-5">We always try to implement our creative ideas at the highest level.<br></br>
Tell us about your project and we will make it work.</p>

            <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
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
        </Row>
      </Container>
    </section>
  );
}

export default Consulting;
