import React, { useEffect, useState } from 'react'
import Bannerbg from '../../assets/Images/banner.png'
import { Link } from 'react-router-dom'
import BannerVideo from '../../assets/Videos/video.mp4';
const Banner = () => {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const smoothScroll = () => {
  //     setOffset((prevOffset) => prevOffset + (window.scrollY - prevOffset) * 0.2); // Adjust the scroll speed here
  //     window.scrollTo(0, offset);
  //     requestAnimationFrame(smoothScroll);
  //   };

  //   smoothScroll();

  //   return () => {
  //     window.removeEventListener('scroll', smoothScroll);
  //   };
  // }, [offset]);

  var Bannerbgs = {
    background: `url(${Bannerbg})`,
    backgroundSize: `cover`,
  };
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
          <span>BUILDING</span><span>BUILDING</span><br /> EXPERIENCES<br /> F<Link to="/aboutus"><button>Discover More</button></Link>R <em>BRANDS</em>
          </h1>
        </div>
        <div className='row second-row'>
          <div className='col-6 col'>
            <h2>Making the <br />future happen<br /> faster</h2>
          </div>
          <div className='col-6 col text-right'>
            <p>
            Lorem Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took
             a galley of type <br />and scrambled 
            </p>
            <Link to="/aboutus"><button>Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner