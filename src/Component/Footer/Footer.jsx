import React, { Component } from "react"
import style from './Footer.module.css'
export default class Footer extends Component{
    render(){
    return(
       <>
       <div className={`${style.bgc} footer text-white`}>
       <div className="container py-4">
       <div className="row gy-4 ">
<div className="col-md-4 text-white ">
    <div className="footer text-center ">
    <h2>LOCATION</h2>
    <p>2215 John Daniel Drive</p>
    <p>Clark, MO 65243</p></div>
</div>
<div className="col-md-4 text-white ">
    <div className="text-center footer">
        <h2>AROUND THE WEB</h2>
        <div className="icons p-3 m-3">
        <i className= {`${style.icon } fas fa-brands  fa-facebook p-2 mx-1`}  ></i>
      
        <i className=   {`${style.icon } fas  fa-brands fa-instagram p-2 mx-1 `}    ></i>
        <i className=  {`${style.icon } fas  fa-brands fa-twitter  p-2 mx-1`}   ></i>
        <i className=  {`${style.icon } fas  fa-brands fa-linkedin p-2 mx-1`}    ></i>
        </div>
    </div>
</div>
<div className="col-md-4 text-white ">
    <div className="text-center footer">
        <h2>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
</div>
</div>
       </div>
       </div>
       <div className="text-center footer-end text-white bg-dark p-2"> <p className="fw-bold">2024@ ,Developed By :<b className={`fw-bold text-info`}>SARA Taher</b></p></div>
        </>
    )}
}
