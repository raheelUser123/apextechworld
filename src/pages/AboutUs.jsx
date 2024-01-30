import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aboutimage from '../assets/Images/tabsimages/about.png'

import { Link } from 'react-router-dom'
const AboutUs = () => {

  return (
    <>
    {/* HEADER */}
    <Header />
    <section id='about-banner'>
        <div className='container'>
            <div className='row'>
                <div className='about-text'>
                    <h1>Discover the <span>Apex Tech World </span>Experience <br />
                    Where innovation meets digital excellence</h1>
<p>Our journey is more than services; it's a commitment to redefine possibilities in the digital realm.<br /> We invite you to explore, connect, and embark on a journey with Apex Tech World.</p>
                </div>
            </div>
        </div>
    </section>
    <section id='aboutus'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-6 col'>
                    <img src={Aboutimage} />
                </div>
                <div className='col-6 col'>
                <h3>Where Creativity Meets Concrete Results!</h3>
                <h1>ABOUT US</h1>
                <p>Honing the name and taking the brands to the edge of the future are the core values we uphold at Apex Tech World. With our cutting-edge technology & software, we build phenomenal experience in web development and design, app development and design, and digital marketing solutions like SEO, PPC, and Social Media Marketing; we are committed to delivering the best services to help your brand stand out digitally.</p>
                <Link to="/contactus"><button>Contact Us</button></Link>
                </div>
            </div>
        </div>
    </section>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default AboutUs