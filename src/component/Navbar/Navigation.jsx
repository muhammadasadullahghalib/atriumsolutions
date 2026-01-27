import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/atruimlogo.png";
import "./Navigation.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container fluid className="px-5">
          <div className="nav-glass">

            {/* Logo */}
            <NavLink to="/" className="nav-logo">
              <img src={Logo} alt="Atrium Logo" />
            </NavLink>

            {/* Desktop Menu */}
            <Nav className="nav-center">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <a href="#services" className="nav-link">Services</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#career" className="nav-link">Career</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#blog" className="nav-link">Blog</a>
            </Nav>

            {/* Button */}
            <NavLink to="/contact" className="contact-nav-btn">
              Contact Now
            </NavLink>

            {/* Mobile Hamburger */}
            <div
              className="mobile-hamburger"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </div>

          </div>
        </Container>
      </Navbar>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={() => setMobileOpen(false)}>✕</span>

        <div className="mobile-nav-content">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</NavLink>
          <NavLink to="/career" onClick={() => setMobileOpen(false)}>Career</NavLink>
          <NavLink to="/team" onClick={() => setMobileOpen(false)}>Team</NavLink>
          <NavLink to="/blog" onClick={() => setMobileOpen(false)}>Blog</NavLink>

          <NavLink
            to="/contact"
            className="contact-nav-btn d-flex mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Contact Now
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
