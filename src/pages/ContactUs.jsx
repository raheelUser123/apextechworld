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
 <span>We're thrilled to connect with you.</span></h1>
<p>Whether you're a visionary looking to join our innovative team or seeking digital solutions tailored to your needs, we're here to listen. <br />Your inquiries, job applications, or partnership proposals matter to us.</p>
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
              Drop us a line, and
                <br />
                <span>Let's start a conversation.</span>
              </h1>
              <p style={{ color: '#fff' }}>
              Your digital journey begins with a simple HELLO! Use the form to drop us a line. Whether you're exploring career opportunities or seeking innovative solutions for your business, we're ready to connect.
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