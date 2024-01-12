import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import JobPositions from '../components/JobPositions'

const Careers = () => {
  return (
    <>
    {/* HEADER */}
    <Header />
    <section id='about-banner'>
        <div className='container'>
            <div className='row'>
                <div className='about-text'>
                    <h1>Join our <span>team</span></h1>
<p>We have big ideas, a growth mindset, ambitious goals, and we’re looking for<br /> extraordinary people who share our passion. Become a <b style={{textDecoration: "underline"}}>Apex Tech World</b>!</p>
                </div>
            </div>
        </div>
    </section>
    {/* JOB POSTINGS */}
    <JobPositions />
    {/* Footer */}
    <Footer />
    </>
  )
}

export default Careers