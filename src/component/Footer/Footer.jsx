import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { SlEnvolope } from 'react-icons/sl'
import { BsArrowRight } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './footer.css'
import Logo from '../../assets/atruimlogo.png'
const Footer = ({ transparent }) => {
    return (
        <section className={`footer ${transparent ? "footer--transparent" : ""}`}>
            <div className="container pt-lg-0 pt-5">
                <div className="row">
                    <div className="col mt-lg-5">
                        <img src={Logo} alt="" />

                        <form className='mt-lg-3 ms-lg-0 ms-4'>
                            <SlEnvolope className='far-icon' />
                            <input type="email" placeholder='Enter Your Email' required />
                            <button type='submit'><BsArrowRight className='fas-btn' /></button>
                        </form>
                    </div>

                    <div className="col mt-lg-5">

                        <ul class="mb-3 text-center">
                            <h3 className='text-light text-center'>Menu</h3>

                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#">Home</a></li>
                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#"> Services</a></li>
                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#">Portfolio</a></li>
                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#">Career</a></li>
                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#">Team</a></li>
                            <li className='mb-2' style={{ listStyle: "none" }}><a className='text-decoration-none text-light' href="#">Blog</a></li>

                        </ul>
                    </div>
                    <div className="col mt-lg-5">
                        <h3 className='text-light'>Address:</h3>
                        <p>
                            938-B Maulana Shaukat<br></br>Ali Rd, Block B Faisal<br></br>Town, Lahore</p>
                    </div>
                    <div className="col mt-lg-5">
                        <h3 className='text-light'>Hit us up:



                        </h3>
                        <p>
                            +92 321 3940 050<br></br>+92 316 4418 356<br></br>info@theatriumsolution.com</p>
                        <div className='social-icons mt-lg-4 mb-4 responsive'>
                            <span className='icons'><a href="#"><FaFacebookF /></a></span>
                            <br></br>
                            <span className='icons'><a href="#"><FaTwitter /></a></span>
                            <br></br>
                            <span className='icons'><a href="#"><FaDribbble /></a></span>
                            <br></br>
                            <span className='icons'><a href="#"><FaInstagram /></a></span>
                            <br></br>
                            <span className='icons'><a href="#"><FiMail /></a></span>
                        </div>

                    </div>

                </div>


            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text-light">
                        Atrium  © 2026. All Rights Reserved.
                    </div>
                    <div className="text-center" style={{ color: "#A150FF" }}>
                        Terms and Conditions Privacy Policy

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer