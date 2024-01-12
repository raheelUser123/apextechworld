import React from 'react'
import Img1 from '../../assets/Images/featurework/1.png'
import Img2 from '../../assets/Images/featurework/2.png'
import Img3 from '../../assets/Images/featurework/3.png'
import Img4 from '../../assets/Images/featurework/4.png'
import { Link } from 'react-router-dom'
const FeaturedWork = () => {
  return (
    <section id='featurework'>
      <div className='container'>
        <div className='row'>
          <h1>FEATURED <span>WORK</span></h1>
          <div className='col-6 col'>
            <div className='image-hover'>
            <div className='mg'>
            <img src={Img1} />
            </div>
            <div className='content'>
              <h2>How We create Ideas into</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            <div className='image-hover'>
            <div className='mg'>
            <img src={Img2} />
            </div>
            <div className='content'>
              <h2>How We create Ideas into</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
          </div>
          <div className='col-6 col'>
          <div className='image-hover'>
          <div className='mg'>
            <img src={Img3} />
            </div>
            <div className='content'>
              <h2>How We create Ideas into</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
            <div className='image-hover'>
            <div className='mg'>
            <img src={Img4} />
            </div>
            <div className='content'>
              <h2>How We create Ideas into</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
          </div>
        </div>
        <div className='row'
        style={{padding: "30px 0px", textAlign: "center"}}
        >
        <Link to="/services"><button>Discover More</button></Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork