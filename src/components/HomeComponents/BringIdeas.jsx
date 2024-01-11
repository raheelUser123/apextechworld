import React, { useState } from 'react';
import Img1 from '../../assets/Images/tabsimages/process1.png'
import Img2 from '../../assets/Images/tabsimages/timeframese.png'
import Img3 from '../../assets/Images/tabsimages/websiteinfographic.png'
import Img4 from '../../assets/Images/tabsimages/yourwork.png'
import Img5 from '../../assets/Images/tabsimages/manchatting.png'
import { Link } from 'react-router-dom';
const DiscoverContent = () => {
  return <div><section id='discover'>
    <div className='row align-items-center'>
        <div className='col-6'>
            <img src={Img4} />
        </div>
        <div className='col-6'>
            <h1>DISCO<span>VER</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer tandard dummy text ever since the 
                1500s, when an unknown printer tandard dummy text ever since the 
                1500s, when an unknown printer </p>
                <div className='calltoactions'>
                <Link to="/contactus">Contact Us</Link>
                <Link to="mailto:info@apextechworld.com">Email Us</Link>
                </div>
        </div>
    </div>
    </section></div>;
};

const ConceptualizationContent = () => {
  return <div><section id='discover'>
  <div className='row align-items-center'>
      <div className='col-6'>
          <img src={Img2} />
      </div>
      <div className='col-6'>
          <h1>Conceptualiza<span>tion</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer </p>
              <div className='calltoactions'>
              <Link to="/contactus">Contact Us</Link>
              <Link to="mailto:info@apextechworld.com">Email Us</Link>
              </div>
      </div>
  </div>
  </section></div>;
};

const ProductionContent = () => {
  return <div><section id='discover'>
  <div className='row align-items-center'>
      <div className='col-6'>
          <img src={Img3} />
      </div>
      <div className='col-6'>
          <h1>PRODUC<span>TION</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer </p>
              <div className='calltoactions'>
              <Link to="/contactus">Contact Us</Link>
              <Link to="mailto:info@apextechworld.com">Email Us</Link>
              </div>
      </div>
  </div>
  </section></div>;
};

const DeliveryContent = () => {
  return <div><section id='discover'>
  <div className='row align-items-center'>
      <div className='col-6'>
          <img src={Img1} />
      </div>
      <div className='col-6'>
          <h1>DELIV<span>ERY</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer </p>
              <div className='calltoactions'>
              <Link to="/contactus">Contact Us</Link>
              <Link to="mailto:info@apextechworld.com">Email Us</Link>
              </div>
      </div>
  </div>
  </section></div>;
};

const FeedbackContent = () => {
  return <div><section id='discover'>
  <div className='row align-items-center'>
      <div className='col-6'>
          <img src={Img5} />
      </div>
      <div className='col-6'>
          <h1>FEED<span>BACK</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer tandard dummy text ever since the 
              1500s, when an unknown printer </p>
              <div className='calltoactions'>
              <Link to="/contactus">Contact Us</Link>
              <Link to="mailto:info@apextechworld.com">Email Us</Link>
              </div>
      </div>
  </div>
  </section></div>;
};

const BringIdeas = () => {
  const tabs = ['discover', 'conceptualization', 'production', 'delivery', 'feedback'];
  const [activeTab, setActiveTab] = useState('discover');

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to handle next/previous tab
  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[nextIndex]);
  };

  const handlePrevTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[prevIndex]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'discover':
        return <DiscoverContent />;
      case 'conceptualization':
        return <ConceptualizationContent />;
      case 'production':
        return <ProductionContent />;
      case 'delivery':
        return <DeliveryContent />;
      case 'feedback':
        return <FeedbackContent />;
      default:
        return null;
    }
  };

  return (
    <section id='bringideas'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='headings'>
              <p>How We Bring</p>
              <h1>Ideas to <span>Life</span></h1>
            </div>
          </div>
          <div className='col-7'>
            <div className='tabs'>
              
              <ul>
                {tabs.map((tab) => (
                  <li key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => handleTabClick(tab)}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='tab-content'>
            {/* Render content based on active tab */}
            {renderTabContent()}
          </div>
          <div className='tabs-componentbutton'>
          <button onClick={handlePrevTab}>{'<'}</button>
          <button onClick={handleNextTab}>{'>'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BringIdeas;
