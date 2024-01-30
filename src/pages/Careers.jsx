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
                    <h1>Become an <span>Apexian!</span></h1>
<p>Got big ideas, a growth mindset, and ambitious goals?  Congratulations! we’re looking for<br />
extraordinary people like you who share our passion. Join hands with us and become an Apexian!
</p>
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