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
            <div className='col-7'>
                <h1>Let’s Start <br /> Something New</h1>
            </div>
            <div className='col-5'>
                <Link to="mailto:info@apexbookpublishing.com"><button>Reach out</button></Link>
            </div>
        </div>
        <div className='row footer-linkss'>
            <div className='col-3'>
                <div className='about'>
                <Link to="/"><img src={Footerlogo} /></Link>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer </p>
                        <div className='social'>
                            <ul>
                                <li><Link><img src={icon} /></Link></li>
                                <li><Link><img src={icon1} /></Link></li>
                                <li><Link><img src={icon2} /></Link></li>
                              
                            </ul>
                        </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='footer-nav-links'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Services</Link></li>
                        <li><Link to="#">Portfolio </Link></li>
                    </ul>
                </div>
            </div>
            <div className='col-3'>
            <div className='footer-nav-links'>
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="#">Terms & Condition</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Refund Policy</Link></li>
                        <li><Link to="#">Site Map</Link></li>
                    </ul>
                </div>
            </div>
            <div className='col-3'>
            <div className='footer-nav-links'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li><em>Phone :</em><span>(737) 377-5786</span></li>
                        <li><em>Email:</em><span>info@apexbookpublishing.com</span></li>
                        <li><em>Address:</em><span>14423 Falcon Head Blvd Austin, TX, US 78738 3867 Bay Street,</span></li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Footer