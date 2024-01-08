import React from 'react'
import Bannerbg from '../../assets/Images/banner.png'
import { Link } from 'react-router-dom'
import BannerVideo from '../../assets/Videos/video.mp4';
const Banner = () => {

  var Bannerbgs = {
    background: `url(${Bannerbg})`,
    backgroundSize: `cover`
  };
  return (
    <section id='banner'>
      <video autoPlay loop muted style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
        <source src={BannerVideo} type='video/mp4' />
      </video>
      <div className='container'>
        <div className='row first-row'>
          <h1 className="animated-text">
          <span>BUILDING</span><span>BUILDING</span><br /> EXPERIENCES<br /> F<Link to="#"><button>Discover More</button></Link>R BRANDS
          </h1>
        </div>
        <div className='row second-row'>
          <div className='col-6'>
            <h2>Making the <br />future happen<br /> faster</h2>
          </div>
          <div className='col-6 text-right'>
            <p>
            Lorem Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took
             a galley of type <br />and scrambled 
            </p>
            <Link><button>Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner