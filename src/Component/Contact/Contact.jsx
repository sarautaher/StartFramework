import React from "react"
import style from './Contact.module.css'

export default function Contact(){
    return(
        <>
        <div className='pt-5 mt-5 vh-100'>
           <div className='container'>
        <div className="text-center   " >
        
     <h1 className={`${style.home} t-4` }>CONATCT SECTION</h1>
     <div className=" d-flex align-items-center justify-content-center mb-3" style={{color:"#2c3e50"}}>
     
     <div className={`${style.line} me-3`}></div>
     
     <i className="fa-solid fa-star"></i>
     <div className={`${style.line} ms-3`}></div>
     
     </div>
     <div className="w-50 conatct-form m-auto pb-4">
     <input type="text" id="UseName"  placeholder="userName"  className="form-control  border-0 border-bottom mb-2 pb-3 position-relative" />
     <label className="position-relative "htmlFor="UseName" >UseName</label>
     <input type="email" id="userEmail" placeholder="userEmail"  className="form-control border-0 border-bottom mb-2 pb-3  position-relative" />
     <label className="position-relative "htmlFor="userEmail" >userEmail</label>
     <input type="text"  placeholder="userAge" id="userAge"  className="form-control border-0 border-bottom mb-2 pb-3  position-relative" />
     <label className="position-relative "htmlFor="userAge" >userAge</label>
     <input type="Password"  placeholder="userPassword" id="userPassword" className="form-control border-0 border-bottom mb-2 pb-3  position-relative" />
     <label className="position-relative "htmlFor="userPassword" >userPassword</label>
     <button className="btn btn-info"type="submit">SEND MESSAGE</button> 
     </div>
    </div>
    </div>
     </div></>
    )
}