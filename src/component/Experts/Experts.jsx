import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Expert.css';
function Experts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="expert-section pt-5">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} md={12}>
            <div className="hero-content">
              <span
                className="exp-subtitle"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1500"
              >
                About Us
              </span>

              <h1
                className="hero-titles"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
              >
                <span>We Are</span> <br />
                Experts<span className="text-purple">.</span>
              </h1>

              <p
                className="expert-desc mt-5"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2500"
              >
                Our digital company of professionals
                <br />
                has been developing products for 15 years.
                <br />
                <br />
                <span>
                  Our purpose is sweet and simple Build<br></br>brands that
                  matter, and build careers that last<br></br>We are not just a
                  service company, we are a launchpad, a tribe,<br></br>a
                  creative playground, a magnet for people who want more from
                  <br></br>life than just a job
                  <br></br>
                  <br></br>
                  If you are a client, welcome home<br></br>If you are talented,
                  welcome family<br></br>If you are curious, welcome to the
                  Atrium
                </span>
              </p>
            </div>
          </Col>

          <Col lg={6} md={12}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experts;
