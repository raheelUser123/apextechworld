import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Seo from '../assets/Images/products/seo.png'
import Logo from '../assets/Images/products/logo.png'
import UiUx from '../assets/Images/products/uiux.png'
import Web from '../assets/Images/products/web.png'
const Services = () => {
  return (
    <>
    <Header />
    <section id='about-banner'>
        <div className='container'>
            <div className='row'>
                <div className='about-text'>
                    <h1>Transforming Visions into Realities  <br />
 <span>with Innovative Digital Solutions</span></h1>
<p>We combine our design skills with cutting-edge technology to produce innovative design solutions for your business. </p>
                </div>
            </div>
        </div>
    </section>
    <section id='products-ideas'>
        <div className='container'>
            <div className='row' style={{padding:"20px 0px"}}>
                <h3>Our Results Driven </h3>
                <h1>Digital Services</h1>
                
            </div>
            <div className='row'>
                <div className='col-6 col'>
                    <div className='products seo'>
                        <img src={Seo} />
                        <h2>Search Engine Optimization (SEO)</h2>
                        <p>Apex helps its clients stay ahead of the competition through strategic keyword research and ethical practices. We elevate online visibility with tailored strategies, sustained SEO excellence, and regular performance assessments. </p>
                    </div>
                </div>
                <div className='col-6 col'>
                    <div className='products logo'>
                        <img src={Logo} />
                        <h2>Logo Design</h2>
                        <p>We don’t just create logos. We craft a distinctive and memorable brand identity that speaks volumes about your business. Our creative expertise transforms concepts into impactful visual symbols, leaving a lasting impression on your audience.
</p>
                    </div>
                </div>
            </div>
            <div className='row' style={{padding:"20px 0px"}}>
                <div className='col-6 col'>
                    <div className='products uiux'>
                        <img src={UiUx} />
                        <h2>UI/UX Design</h2>
                        <p>We create digital experiences that immerse your audience in seamless, visually captivating interactions. Our design experts blend functionality and aesthetics, ensuring your digital platform stands out for its user-friendly elegance.
 </p>
                    </div>
                </div>
                <div className='col-6 col'>
                    <div className='products web'>
                        <img src={Web} />
                        <h2>Web Development</h2>
                        <p>We craft dynamic and responsive websites tailored to your unique needs from concept to code. Our expert web developers possess the art of enhancing the online presence with a seamless and engaging user experience. </p>
                    </div>
                </div>
            </div>

            <div className='row' style={{padding:"20px 0px"}}>
                <div className='col-6 col'>
                    <div className='products uiux'>
                        <img src={UiUx} />
                        <h2>Mobile App Development </h2>
                        <p>We make every brand accessible with our phenomenally responsive mobile application development. From concept to launch, we blend innovation with functionality to create apps that captivate your audience. 
 </p>
                    </div>
                </div>
                <div className='col-6 col'>
                    <div className='products web'>
                        <img src={Web} />
                        <h2>Social Media Marketing</h2>
                        <p>We make every brand the talk of the town with trend-savvy Social Media Marketing. Our expert team crafts strategic campaigns tailored to every client’s brand, ensuring maximum platform engagement and visibility. 
</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Services