import React from 'react'
import Logo from '../assets/Images/logo.png'
import CustomNavbar from './Navbar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='header'>
    <div class="container">
  <div class="row align-items-center">
    <div class="col-4 col">
      <Link to="/"><img src={Logo} /></Link>
    </div>
    <div class="col-8 col">
      <CustomNavbar />
    </div>
  </div>
 
</div>
    </div>
    </>
  )
}

export default Header