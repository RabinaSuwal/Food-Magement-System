import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import "../App.css";
import { StoreContext } from '../context/StoreContext';

function Navbar({setShowLogin}) {
    const[menu, setMenu] = useState("home")

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='container'>
      <div className='navbar'>
          <div>
            <Link to='/'><img src="header2-logo.svg" alt="logo" className='logo' /></Link>
          </div>
          <div>
            <ul className="navbar-menu">
              <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
              <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
              <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
              <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
            </ul>
          </div>
          <div className="navbar-right">
            <div className='navbar-search-icon'>
                <CiSearch />
            </div>
            <div className='navbar-cart-icon'>
              <Link to='/cart'><IoCartOutline /></Link>
              <div className={getTotalCartAmount()===0?"":"dot"}></div>
                
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
