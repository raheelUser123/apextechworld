import React from 'react'
import Seo from '../../assets/Images/products/seo.png'
import Logo from '../../assets/Images/products/logo.png'
import UiUx from '../../assets/Images/products/uiux.png'
import Web from '../../assets/Images/products/web.png'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <section id='products-ideas'>
        <div className='container'>
            <div className='row' style={{padding:"20px 0px"}}>
                <h3>How We create Ideas into</h3>
                <h1>Products</h1>
                <Link className='view' to="/services">View More</Link>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='products seo'>
                        <img src={Seo} />
                        <h2>Search Engine Optimization</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since
                             the 1500s, when an unknown printer </p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='products logo'>
                        <img src={Logo} />
                        <h2>Logo Design</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since
                             the 1500s, when an unknown printer </p>
                    </div>
                </div>
            </div>
            <div className='row' style={{padding:"20px 0px"}}>
                <div className='col-6'>
                    <div className='products uiux'>
                        <img src={UiUx} />
                        <h2>UI/UX Design</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since
                             the 1500s, when an unknown printer </p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='products web'>
                        <img src={Web} />
                        <h2>Web Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since
                             the 1500s, when an unknown printer </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products