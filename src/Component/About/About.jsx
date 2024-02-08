import React from "react"
import style from'./About.module.css'
export default function About(){
    return(
       <>
       <div className='about bg-info  pt-5 mt-5 vh-100 d-flex  justify-content-center  align-items-center'>
          <div className='container'>
        <div className="text-center text-white   " >
     <h1 className=" fw-bolder  ">ABOUT COMPONENT</h1>
     <div className=" d-flex align-items-center justify-content-center mb-3">
     
     <div className={`${style.line} me-3`}></div>
     
     <i className="fa-solid fa-star"></i>
     <div className={`${style.line} ms-3`}></div>
     </div>
     <div className="row justify-content-center ">
        <div className="col-md-5 ">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
     </div>
    </div></div>
     </div></>
    )
}