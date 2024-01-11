import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
const ContactUs = () => {

  return (
    <>
    {/* HEADER */}
    <Header />
    <section id='about-banner'>
        <div className='container'>
            <div className='row'>
                <div className='about-text'>
                    <h1>Reach out for inquiries or just to say hello. <br />
 <span>We're here to bring your ideas to life.</span></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus libero exercitationem nemo quaerat dolore minima labore,<br /> corporis quod magni ad velit dolor perferendis eum a voluptatum qui, quia in alias.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="logo-contact-form" style={{ padding: '70px 0px' }}>
      <div className="container">
        <div className="row contact-inner align-items-center">
          <div className="col-6 col">
            <ContactForm />
          </div>

          <div className="col-6 col">
            <div className="heading-text">
              <h1>
                If You Like What You See
                <br />
                <span>Let’s Connect Than!</span>
              </h1>
              <p style={{ color: '#fff' }}>
                Our experienced and skilled designers are waiting for your response,
                so, we can talk business and let the magic happen. Don’t hassle
                around and partner with the award-winning design agency in US –
                before your competitor do so.
              </p>
              <div className="about-banner-buttons animate__animated animate__bounce" style={{ paddingTop: '30px' }}>
                <ul>
                  <li>
                   <Link to="tel:123-2321-21">Call Us</Link>
                  </li>
                  <li>
                  <Link to="mailto:info@apextechworld.com">Email Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default ContactUs