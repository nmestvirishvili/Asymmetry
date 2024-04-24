import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <a href="/"><img src='./images/logo.png' alt='' /></a>
          </div>
          <div className='nav' id="main-nav-horizontal">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex button-menu'>
            <button className='btn1' id="fb-button">
              <a href="https://www.facebook.com/profile.php?id=100092504264433"><i class="fa-brands fa-facebook-f"></i></a> 
            </button>
            <button className='btn1'>
              <a href="https://www.instagram.com/studio.asymmetry/"><i class="fa-brands fa-instagram"></i></a> 
            </button>
            <button className='btn1'>
              <a href="https://www.tiktok.com/@asymmetry.architecture"><i class="fab fa-tiktok"></i></a> 
            </button>
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
