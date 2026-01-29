import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './Choose.css';
import statueModel from '../../assets/marble+bust+3d+model.glb';
import chooseImg from '../../assets/Choose.png';

const AnimatedNumber = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const step = Math.max(Math.floor(duration / value), 10);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= value) {
        clearInterval(timer);
        setCount(value);
      }
    }, step);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <div className="stat-number">
      {count}
      <span className="plus">+</span>
    </div>
  );
};

const Stat = ({ value, label, className }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const number = parseInt(value, 10);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((midY - y) / midY) * 6;
    const rotateY = ((x - midX) / midX) * 6;

    event.currentTarget.style.setProperty('--tilt-x', `${rotateX}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stat-card-exact ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="stat-card-inner">
        <AnimatedNumber value={number} start={start} />
        <div className="stat-text">{label}</div>
      </div>
    </div>
  );
};

export default function Choose() {
  return (
    <section className="why choose-section">
      <Container fluid className="px-5">
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={6} className="left">
            <span
              className="contact-subtitle text-white"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              A Few Words About
            </span>

            <h1 className="title mb-3">
              Why <br />
              Choose <br />
              Us<span>?</span>
            </h1>

            <p>
              Because playing safe is boring<br></br>Because your business
              deserves more than random efforts<br></br>Because you deserve a
              partner who fights for your success
              <br></br>
              <br></br>
              <br></br>
              Here is what clients love about us<br></br>• We actually
              understand your business before selling anything <br></br>• We
              focus on results not noise <br></br>• We build systems not chaos{' '}
              <br />• We blend creativity with practicality <br /> • We care
              about your customers as much as you do <br /> • We scale what is
              working and fix what is not <br /> • We communicate clearly and
              respectfully <br />• We treat your business like our own
            </p>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6} className="right">
            <div className="visual">
              <img
                src={chooseImg}
                alt="Choose us visual"
                className="choose-image"
              />
              <model-viewer
                src={statueModel}
                alt="Marble bust 3D model"
                className="choose-model"
                rotation-per-second="18deg"
                camera-controls
                disable-zoom
                shadow-intensity="0.35"
              />
              <Stat value="64" label="Award Winning" className="s1" />
              <Stat value="264" label="Satisfied Clients" className="s2" />
              <Stat value="574" label="Successful Projects" className="s3" />
              <Stat value="34" label="Team Member" className="s4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
