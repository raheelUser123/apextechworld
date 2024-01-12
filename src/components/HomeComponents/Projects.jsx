import React from 'react'
import Image1 from '../../assets/Images/Projects/1.png'
import Image2 from '../../assets/Images/Projects/2.png'
import Image3 from '../../assets/Images/Projects/3.png'
import Image4 from '../../assets/Images/Projects/4.png'
import Image5 from '../../assets/Images/Projects/5.png'
import Image6 from '../../assets/Images/Projects/6.png'

const Projects = () => {
  return (
    <>
    <section id='projects'>
        <div className='container'>
            <div className='row'>
                <h1>Our <span>Successfull</span> Projects</h1>
            </div>
            <div className='row align-items-center'>
                <div className='col-2 col'>
                    <img src={Image1} />
                </div>
                <div className='col-2 col'>
                    <img src={Image2} />
                </div>
                <div className='col-2 col'>
                    <img src={Image3} />
                </div>
                <div className='col-2 col'>
                    <img src={Image4} />
                </div>
                <div className='col-2 col'>
                    <img src={Image5} />
                </div>
                <div className='col-2 col'>
                    <img src={Image6} />
                </div>
            </div>
            <div className='row'>
                <div className='col-3 col'>
                    <img src={Image1} />
                </div>
                <div className='col-3 col'>
                    <img src={Image2} />
                </div>
                <div className='col-3 col'>
                    <img src={Image3} />
                </div>
                <div className='col-3 col'>
                    <img src={Image4} />
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects