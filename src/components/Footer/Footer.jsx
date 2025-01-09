import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      {/* <img src="https://restho-nextjs.vercel.app/_next/static/media/footer-bg.2200077c.png" alt="" /> */}
      <div className="footer-content">
        <div className="footer-content-left">
            <img src="header2-logo.svg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos, hic officia accusamus aut maxime mollitia nesciunt eaque aperiam similique sint voluptatibus pariatur veritatis aliquam consequatur vitae fuga! Provident, dolores.</p>
            <div>
                <FaFacebook className="footer-social-icons"/>
                <FaInstagram className="footer-social-icons" />
                <FaTwitter className="footer-social-icons"/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+977-9808080808</li>
                <li>contact@restho.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">@Copyright 2025, All Right Reserved.</p>
    </div>
  )
}

export default Footer
