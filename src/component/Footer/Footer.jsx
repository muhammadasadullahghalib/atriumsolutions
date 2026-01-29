import React from 'react'
import './footer.css'
import Logo from '../../assets/atruimlogo.png'

const Footer = ({ transparent = false }) => {
    return (
        <section className={`footer ${transparent ? "footer-transparent" : ""}`}>
            <div className="footer-inner">
                <div className="footer-brand">
                    <img className="footer-logo" src={Logo} alt="Atrium Solutions" />
                </div>

                <div className="footer-columns">
                    <div className="footer-block footer-address">
                        <h3 className="footer-heading">Address:</h3>
                        <p className="footer-text">
                            938-B Maulana Shaukat Ali Rd,<br />Block B Faisal Town, Lahore
                        </p>
                    </div>

                    <div className="footer-block footer-hit">
                        <h3 className="footer-heading">Hit us up:</h3>
                        <p className="footer-text">
                            +92 321 3940 050<br />+92 316 4418 356<br />info@theatriumsolution.com
                        </p>
                    </div>

                    <div className="footer-block footer-services">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-list">
                            <li>Digital Marketing</li>
                            <li>Graphic Designing</li>
                            <li>UI/UX</li>
                            <li>Video Editing</li>
                            <li>AI Video Creation</li>
                            <li>Web Development</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>

                    <div className="footer-block footer-follow">
                        <h3 className="footer-heading">Follow Us</h3>
                        <ul className="footer-list">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>X(Twitter)</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <div className="footer-bottom-links">
                        <span>Privacy Policy</span>
                        <span className="footer-separator">|</span>
                        <span>Terms &amp; Conditions</span>
                    </div>
                    <div className="footer-bottom-copy">
                        &copy; 2026 All Rights Reserved
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
