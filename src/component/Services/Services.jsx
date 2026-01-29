import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'Marketers',
    title: 'Social Media Marketing',
    pos: 'left',
    desc: 'Grow your brand on social platforms.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'Designers',
    title: 'Graphic Designing',
    pos: 'right',
    desc: 'Creative designs that define your brand.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'VFX',
    title: 'Video Editing',
    pos: 'right',
    desc: 'Professional videos for ads & reels.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'Content',
    title: 'Content Writing',
    pos: 'left',
    desc: 'SEO friendly and engaging content.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'Designers',
    title: 'UI/UX',
    pos: 'right',
    desc: 'Modern and user-focused interfaces.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'Designers',
    title: 'Web Development',
    pos: 'right',
    desc: 'Fast, scalable and secure websites.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
  {
    id: 'Marketers',
    title: 'SEO (Search Engine Optimization)',
    pos: 'bottom',
    desc: 'Rank higher & get organic traffic.',
    thumb:
      'https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480',
  },
];

function Services() {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width:767px)').matches
  );
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const activeService = clicked || hovered;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setClicked(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.matchMedia('(max-width:767px)').matches);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="services" className="serv_bg services-section pt-5">
      <Container fluid>
        <Row className="justify-center text-center mt-5">
          <Col lg={12} md={12}>
            <div>
              <div className="pt-5 mt-5">
                <span className="serv-subtitle">Our Services</span>
                <h1 className="serv-title">
                  We Do Everything<span className="text-purple">.</span>
                </h1>

                <div className="services-pills m-auto">
                  {services.map((service, i) => (
                    <div
                      key={i}
                      className="service-pill"
                      onMouseEnter={() => !isMobile && setHovered(service)}
                      onMouseLeave={() => !isMobile && setHovered(null)}
                      onClick={() => {
                        if (isMobile) {
                          navigate(`/more-services/${service.id}`);
                          return;
                        }
                        setClicked(
                          clicked?.title === service.title ? null : service
                        );
                      }}
                    >
                      {service.title}
                    </div>
                  ))}
                </div>

                {activeService && (
                  <div
                    ref={cardRef}
                    className={`service-click-card ${activeService.pos} ${
                      clicked ? 'sticky' : ''
                    }`}
                  >
                    <img
                      className="project-active__thumb"
                      src={activeService.thumb}
                      alt={activeService.title}
                    />
                    <div>
                      <h4 className="project-active__title mt-3">
                        {activeService.title}
                      </h4>
                      <p className="project-active__desc mt-2 mx-5">
                        {activeService.desc}
                      </p>
                      <Link
                        className="project-active__btn mb-3"
                        to={`/more-services/${activeService.id}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
