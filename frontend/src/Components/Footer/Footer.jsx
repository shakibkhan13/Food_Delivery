import React from 'react'
import './footer.css'

import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga rem aut eaque consequuntur voluptatem magni voluptas. Quidem repudiandae natus quisquam necessitatibus asperiores labore explicabo, neque quibusdam. Unde, blanditiis perspiciatis?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    {/* <img src={twiter} alt="" /> */}
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+08801711111</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2025 @ Tomato.com - All Right Reserved .
        </p>
    </div>
  )
}

export default Footer