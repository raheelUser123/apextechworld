import React from 'react'
import CardCarousel from '../CardCarousel'

const OurTeam = () => {
  return (
    <>
    <section id='ourteams'>
        <div className='container-fluid'>
            <div className='row'>
                <CardCarousel />
                <div className='heading-text'>
                    <h1>Meet Our <span>Team</span></h1>
                    <p>Discover the Driving Force</p>
                    <h5>Meet the creative minds steering Apex Tech World towards digital excellence. Our team is more than just professionals; we're a family of innovators, each contributing a unique skill set to redefine the digital landscape.</h5>
                        <h6><a href="mailto:info@apextechworld.com">info@apextechworld.com</a></h6>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurTeam