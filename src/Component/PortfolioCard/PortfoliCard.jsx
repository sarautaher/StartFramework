import React from "react";
import"./PortfolioCard.css";
export default function PortfoloCard({img,toggleMolda}){
    return(<>
    <div className="col-md-4  mb-5 ">
        <div className="inner rounded-3 overflow-hidden position-relative">
            <img src={img.src} alt={img.alt} className="d-block w-75 m-auto  rounded-3"/>
            <div className="img-layer position-absolute start-0 w-100 top-0 h-100 d-flex align-items-center justify-content-center" 
        onClick={()=>toggleMolda(img.src)}>
            <i className=" text-white  fa-solid fa-plus fa-8x "></i>
        </div>
        </div>
       
    </div>
    </>)
}