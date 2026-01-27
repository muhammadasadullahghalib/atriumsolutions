import React from "react";
import { Col, Row } from "react-bootstrap";
import RizwanBahi from "../../assets/Rizwan BHai.jpg"
import AsadBahi from "../../assets/Asad Bhai.jpg"
import Irtiza from "../../assets/Irteza.jpg"
import Arham from "../../assets/Arham.jpg"
import Saif from "../../assets/Saif.jpg"
import Sharoon from "../../assets/Sharon.jpg"
import Ali from "../../assets/Ali.jpg"
import Umair from "../../assets/Umair.jpg"
import "./TeamCard.css";

/* ===== LOCAL DATA (same file) ===== */
const teamData = [
  {
    id: 1,
    name: "Rizwan ul Haq",
    span: "The Architect",
    role: "Founder CEO",
    image: RizwanBahi,
    socials: {
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/rizwan-ul-haq-pk/",
      instagram: "#",
    },
    delay: "0ms",
  },
  {
    id: 2,
    name: "Asad Ullah Ghalib",
    role: "Director Of international Sales",
    span: "Deal Hammer",

    image: AsadBahi,
    socials: {
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/asad-ullah-ghalib/",
      instagram: "#",
    },
    delay: "200ms",
  },
  {
    id: 3,
    name: " Syed Irtiza Kazmi",
    role: "Brand and Marketing Manager",
    span: "Story Shaper",

    image: Irtiza,
    socials: {
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/syed-irtiza-kazmi/",
      instagram: "#",
    },
    delay: "400ms",
  },
 {
    id: 6,
    name: "Arham Mansoor",
    role: "Project Manager",
    span: "Mission Control",

    image: Arham,
    socials: {
      facebook: "https://www.facebook.com/people/Arham-Mansoor/pfbid02Gn17bDCYRzPjEEAKNX7Q8QrzfPK3gE2RCTJuNSXrC2DiNfAW6GPnR5FwdeZ2jZRYl/?rdid=tsMO7ELMlCUBeL67&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PyCT6x449%2F",
      linkedin: "#",
      instagram: "https://www.instagram.com/arhammansoor51?igsh=dGhsMG44MHIxbWRt",
    },
    delay: "400ms",
  },
  {
    id: 7,
    name: "Saif ullah Khalid",
    role: "Sales Team Lead",
    span: "Wolf of Close Street",

    image: Saif,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    delay: "400ms",
  },
 
    {
    id: 5,
    name: "Sharoon Khalid",
    role: "Video Editing Team Lead",
    span: "Frame Whisperer",

    image: Sharoon,
    socials: {
      facebook: "https://www.facebook.com/sharoonkhalid06",
      linkedin: "https://www.facebook.com/sharoonkhalid06",
      instagram: "https://www.instagram.com/sharoonkhalid06",
    },
    delay: "400ms",
  },
  {
    id: 4,
    name: "Ali Haider",
    role: "Design Team Lead",
    span: "Color Commander",

    image: Ali,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    delay: "400ms",
  },
  
 {
  id: 8,
  name: "Umair Ali",
  role: "Website Developer",
  span: "The Tech Engine",

  image: Umair,
  socials: {
    facebook: "#",
    linkedin: "#",
    instagram: "#"
  },
  delay: "400ms"
}
];

/* ===== COMPONENT ===== */
function TeamCard() {
  return (
    <>
      {teamData.map((member) => (
        <Col lg={3} md={4} sm={6} className="mb-4" key={member.id}>
          <div
            className="team-block-style2 team-item wow fadeInUp"
            data-wow-delay={member.delay}
          >
            <div className="image-box">
              <figure className="image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid"
                />
              </figure>

              <div className="social-links">
               
                 {member.socials.linkedin && (
  <a
    aria-label="linkedin"
    href={member.socials.linkedin}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
)}

                
              </div>

              <span className="share-icon fa fa-share-alt"></span>
            </div>

            <div className="info-box">
              <h4 className="team-title">
                <a href="/team-details">{member.name}</a>
              </h4>
              <div className="team-subtitle"><span style={{fontWeight: "600"}} className="text-purple">Code Name:</span> {member.span}</div>
              <div className="team-subtitle" style={{fontWeight: "600"}}>{member.role}</div>
              
            </div>

            <div className="nexella-hover-bx hover-bx"></div>
            <div className="nexella-hover-bx hover-bx2"></div>
            <div className="nexella-hover-bx hover-bx3"></div>
            <div className="nexella-hover-bx hover-bx4"></div>
          </div>
        </Col>
      ))}
    </>
  );
}

export default TeamCard;
