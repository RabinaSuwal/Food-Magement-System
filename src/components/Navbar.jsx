import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import "../App.css";

function Navbar({setShowLogin}) {
    const[menu, setMenu] = useState("menu")
  return (
    <div className='container'>
      <div className='navbar'>
          <div>
            <img src="header2-logo.svg" alt="logo" className='logo' />
          </div>
          <div>
            <ul className="navbar-menu">
              <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
              <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
              <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
              <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
            </ul>
          </div>
          <div className="navbar-right">
            <img src="" alt="" />
            <div className='navbar-search-icon'>
                <CiSearch />
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
