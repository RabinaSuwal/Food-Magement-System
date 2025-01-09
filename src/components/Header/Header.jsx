import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-container'>
          <div className='header-contents'>
              <h6>Welcome To Restho</h6>
              <h1>Find Your Best Healthy & Tasty Food.</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page. </p>
              <button className='button'>Discover More</button>
          </div>
          <div className='header-right'>
              <img src="image2.png" alt="food" className='img-fluid img-2'/>
              <img src="image3.png" alt="food" className='img-fluid img-3'/>
              <img src="image4.png" alt="food" className='img-fluid img-4'/>
              <img src="image5.png" alt="food" className='img-fluid img-5'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
