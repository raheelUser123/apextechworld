import React from 'react'
import Footerbg1 from '../assets/Images/footer.png'
import { Link } from 'react-router-dom';
import Footerlogo from '../assets/Images/logo-footer.png'
import icon from '../assets/Images/instagram.png'
import icon1 from '../assets/Images/linkedin.png'
import icon2 from '../assets/Images/twitter.png'
const Footer = () => {

    var Bannerbgs1 = {
        background: `url(${Footerbg1})`,
        backgroundSize: `cover`,
        padding: '30PX 0PX',
      };
  return (
    <section id='footer' style={Bannerbgs1}>
        <div className='container'>
        <div className='row call-to-action align-items-center'>
            <div className='col-7 col'>
                <h1>Let’s <span>Start <br /> Something</span> New</h1>
            </div>
            <div className='col-5 col'>
                <Link to="mailto:info@apexbookpublishing.com"><button>Reach out</button></Link>
            </div>
        </div>
        <div className='row footer-linkss'>
            <div className='col-3 col'>
                <div className='about'>
                <Link to="/"><img src={Footerlogo} /></Link>

                    <p>We build empowering digital experiences for brands. From cutting-edge Digital Marketing strategies to bespoke Web/App Development and captivating Design services. </p>
                        <div className='social'>
                            <ul>
                                <li><Link><img src={icon} /></Link></li>
                                <li><Link><img src={icon1} /></Link></li>
                                <li><Link><img src={icon2} /></Link></li>
                              
                            </ul>
                        </div>
                </div>
            </div>
            <div className='col-3 col'>
                <div className='footer-nav-links'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contactus">Contact Us </Link></li>
                    </ul>
                </div>
            </div>
            <div className='col-3 col'>
            <div className='footer-nav-links'>
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/">Our Team</Link></li>
                    </ul>
                </div>
            </div>
            <div className='col-3 col'>
            <div className='footer-nav-links'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li><em>Phone :</em><span>0322-8604326</span></li>
                        <li><em>Email:</em><span>info@apextechworld.com</span></li>
                        <li><em>Address:</em><span>27C, 4th Floor, Bukhari Commercial - Lane 11, Phase VI DHA Karachi.</span></li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Footer