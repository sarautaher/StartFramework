import React from "react";
import {Component} from 'react'
import style from './Home.module.css'
import img1 from '../../asset/imges/avataaars.svg'

 export class Home extends Component{
 state={
 }
 render(){
    return(
     <>
    <div className='bg-info vh-100 pt-5 mt-5 d-flex  justify-content-center  align-items-center '>
        <div className='container'>
     <div className="text-center text-white  "  >
         <img src={img1} className="w-25" alt="img" /> 
        
     <h1 className="fw-bolder">START FRAMEWORK</h1>
     <div className=" d-flex align-items-center justify-content-center mb-3">
     
     <div className={`${style.line} me-3`}></div>
     
     <i className="fa-solid fa-star"></i>
     <div className={`${style.line} ms-3`}></div>
     </div>
     <p>Graphic Artist - Web Designer - Illustrator</p>
     </div>
     </div>
     </div>
     </>)
 }
 }
 export default Home;
