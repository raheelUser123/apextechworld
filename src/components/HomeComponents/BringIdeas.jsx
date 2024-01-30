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
        <div className='col-6 col'>
            <img src={Img4} />
        </div>
        <div className='col-6 col'>
            <h1>DISCO<span>VER</span></h1>
            <p>The first step of our creative journey begins with understanding the true essence of your vision. We delve deep into your goals, aspirations, and market dynamics, ensuring a comprehensive understanding that becomes the foundation for your project.</p>
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
      <div className='col-6 col'>
          <img src={Img2} />
      </div>
      <div className='col-6 col'>
          <h1>Conceptualiza<span>tion</span></h1>
          <p>After understanding the thought behind your idea, we enter the realm of creative briefing, which we call a conceptualization stage. We transform all ideas into tangible plans and strategies. Our collaborative brainstorming and design sessions shape the blueprints of the project.</p>
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
      <div className='col-6 col'>
          <img src={Img3} />
      </div>
      <div className='col-6 col'>
          <h1>PRODUC<span>TION</span></h1>
          <p>Once we give your idea a tangible form, our expert team, equipped with cutting-edge technologies and software, will start creating a masterpiece that is a testament to precision and innovation. From coding intricacies to design finesse, we ensure every detail is polished. </p>
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
      <div className='col-6 col'>
          <img src={Img1} />
      </div>
      <div className='col-6 col'>
          <h1>DELIV<span>ERY</span></h1>
          <p>Now that the project is ready, it undergoes meticulous testing and refinement, ensuring a flawless presentation. With a seamless handover, your idea transforms into reality, ready to make its mark in the digital landscape.</p>
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
      <div className='col-6 col'>
          <img src={Img5} />
      </div>
      <div className='col-6 col'>
          <h1>FEED<span>BACK</span></h1>
          <p>After the successful testing and delivery of the project, our client’s feedback helps us gauge their satisfaction level. This interactive process not only fine-tunes the finishing touches but ensures that the final product not only meets but surpasses their expectations.</p>
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
          <div className='col-5 col'>
            <div className='headings'>
              <p>How We Bring</p>
              <h1>Ideas to <span>Life</span></h1>
            </div>
          </div>
          <div className='col-7 col'>
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
