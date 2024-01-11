import React, { useEffect } from 'react';
import Flickity from 'flickity';
import Clientimage1 from '../assets/Images/card/1.png'
import Icon1 from '../assets/Images/instagram.png'
import Icon2 from '../assets/Images/linkedin.png'
import Icon3 from '../assets/Images/twitter.png'
import 'flickity/css/flickity.css';

const CardCarousel = () => {
  useEffect(() => {
    const flkty = new Flickity('.carousel', {
      cellAlign: 'center',
      pageDots: false,
      groupCells: '20%',
      selectedAttraction: 0.03,
      friction: 0.15
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-cell">
        <img src={Clientimage1} className="p" />
        <h2>John Doe</h2>
        <p>UI UX Designer</p>
        <div className='sociallinks'>
            <ul>
                <li><a href=""><img src={Icon1} /></a></li>
                <li><a href=""><img src={Icon2} /></a></li>
                <li><a href=""><img src={Icon3} /></a></li>
            </ul>
        </div>
      </div>

      <div className="carousel-cell">
        <img src={Clientimage1} className="p" />
        <h2>Smith Lewis</h2>
        <p>Web Development</p>
        <div className='sociallinks'>
            <ul>
                <li><a href=""><img src={Icon1} /></a></li>
                <li><a href=""><img src={Icon2} /></a></li>
                <li><a href=""><img src={Icon3} /></a></li>
            </ul>
        </div>
      </div>
      <div className="carousel-cell">
        <img src={Clientimage1} className="p" />
        <h2>Danny Quill</h2>
        <p>Sale Force</p>
        <div className='sociallinks'>
            <ul>
                <li><a href=""><img src={Icon1} /></a></li>
                <li><a href=""><img src={Icon2} /></a></li>
                <li><a href=""><img src={Icon3} /></a></li>
            </ul>
        </div>
      </div>
      <div className="carousel-cell">
        <img src={Clientimage1} className="p" />
        <h2>Mathew Jane</h2>
        <p>Upsellers</p>
        <div className='sociallinks'>
            <ul>
                <li><a href=""><img src={Icon1} /></a></li>
                <li><a href=""><img src={Icon2} /></a></li>
                <li><a href=""><img src={Icon3} /></a></li>
            </ul>
        </div>
      </div>
     
      {/* Other carousel cells here */}
    </div>
  );
};

export default CardCarousel;
