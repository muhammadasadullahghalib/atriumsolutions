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
                className="expert-desc mt-4"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2500"
              >
                We are Atrium Solutions, Born in Lahore
                <br />
                Working with brands across the world
              </p>

              <div className="expert-lines mt-4">
                <p className="expert-line">
                  Our purpose is sweet and simple Build brands that matter,
                </p>
                <p className="expert-line">
                  and build careers that last We are not just a service company
                </p>
                <p className="expert-line">
                  we are a launchpad, a tribe, a creative playground, a magnet
                </p>
                <p className="expert-line">
                  for people who want more from life than just a job
                </p>
              </div>

              <div className="expert-lines expert-lines--accent mt-3">
                <p className="expert-line">If you are a client, welcome home</p>
                <p className="expert-line">If you are talented, welcome family</p>
                <p className="expert-line">
                  If you are curious, welcome to the Atrium
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experts;
