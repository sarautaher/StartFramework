import React from 'react'
import { Link } from 'react-router-dom'

import style from"./Navbar.module.css"

export default function Navbar(){
    return(
      
        <nav id="navbar-example" className={`navbar pt-3 pb-1 fixed-top navbar-expand-lg  navbar-dark ${style.bgc}` } >
              
                    <div className="container">
                    <div className="col-md-9" >
                    <h1> <Link className="navbar-brand  text-white text-uppercase fw-bolder fs-2"  to="/home">START FRAMEWORK</Link></h1>
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown"> 
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase fw-bold "  to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase fw-bold"  to="/Potfolil">PORTFOLIO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-white text-uppercase fw-bold" to="/contact">CONTACT</Link>
                    </li>
                  
                </ul>
            </div>
        </div>
        
  </nav>

     
        )
    
}