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
                    <h1>Our Team <span>Our Pride</span></h1>
                    <p>Empowering Excellence Through Innovation</p>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took </h5>
                        <h6><a href="mailto:SarahAngel@mail.com">SarahAngel@mail.com</a></h6>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurTeam