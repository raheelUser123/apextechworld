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
                    <h1>Foster Innovation and <span>Collaboration</span> <br />
with Your Strategic <span>Digital Partners</span></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus libero exercitationem nemo quaerat dolore minima labore,<br /> corporis quod magni ad velit dolor perferendis eum a voluptatum qui, quia in alias.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta quo. Voluptatibus eos Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta quo. Voluptatibus eos voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta quo. Voluptatibus eos voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta quo. Voluptatibus eos voluptate voluptate nobis! Nesciunt, deleniti maxime, sapiente minima rem nostrum odio, aliquam eaque tempore illum et voluptas hic?</p>
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