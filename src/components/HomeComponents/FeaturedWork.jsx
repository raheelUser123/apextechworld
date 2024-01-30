import React from 'react';
import { Link } from 'react-router-dom';


import Img1 from '../../assets/Images/featurework/1.png';
import Img2 from '../../assets/Images/featurework/2.png';
import Img3 from '../../assets/Images/featurework/3.png';
import Img4 from '../../assets/Images/featurework/4.png';

const featuredWorkItems = [
  {
    id: 1,
    imgSrc: Img1,
    title: 'Innovative Features',
    description: 'Our expert web designers and developers understand the art of enhancing the web experience for any brand. ',
  },
  {
    id: 2,
    imgSrc: Img2,
    title: 'User-friendly UX',
    description: 'A user journey is our utmost priority when designing a website. We ensure our web projects provide a smooth and seamless user experience.',
  },
  {
    id: 3,
    imgSrc: Img3,
    title: 'Personalization',
    description: 'Every business has unique needs and requirements that we entertain in our web projects.',
  },
  {
    id: 4,
    imgSrc: Img4,
    title: 'Security and Privacy',
    description: 'Our team never takes your users privacy for granted, so we design websites with robust security measures and privacy features.',
  },
];

const FeaturedWork = () => {
  return (
    <section id='featurework'>
      <div className='container'>
        <div className='row'>
          <h1>
            FEATURED <span>WORK</span>
          </h1>
          <div className='col-6 col'>
            {featuredWorkItems.slice(0, 2).map((item) => (
              <div className='image-hover' key={item.id}>
                <div className='mg'>
                  <img src={item.imgSrc} alt={`Featured Work ${item.id}`} />
                </div>
                <div className='content'>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='col-6 col'>
            {featuredWorkItems.slice(2).map((item) => (
              <div className='image-hover' key={item.id}>
                <div className='mg'>
                  <img src={item.imgSrc} alt={`Featured Work ${item.id}`} />
                </div>
                <div className='content'>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='row' style={{ padding: '30px 0px', textAlign: 'center' }}>
          <Link to='/services'>
            <button>Discover More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
