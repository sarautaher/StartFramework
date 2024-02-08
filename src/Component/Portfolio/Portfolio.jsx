import React, { useState } from "react";
import img1 from '../../asset/imges/575523.png'
import img2 from '../../asset/imges/1.jpg'
import img3 from '../../asset/imges/6121882.png'
import img4 from '../../asset/imges/693471.png'
import img5 from '../../asset/imges/R.png'
import img6 from '../../asset/imges/icon-cake-slice.png'
import PortfoloCard from "../PortfolioCard/PortfoliCard";
import Modal from "../Model/Model";
import style from './Portfolio.module.css'
export default function Portfolil  (){
    const imgList=[{
        id:1,
        src:img1,
        alt:'web1'
    },{
        id:2,
        src:img2,
        alt:'web2'
    }
    ,{
        id:3,
        src:img3,
        alt:'web3'
    }
    ,{
        id:4,
        src:img4,
        alt:'web4'
    }
    ,{
        id:5,
        src:img5,
        alt:'web5'
    }
    ,{
        id:6,
        src:img6,
        alt:'web6'
    }
]
    const [isOpen , setOpen] =useState(false);
    const [SelectImg , setImg] =useState("");
    const toggleMolda=(src)=>{
        setOpen(true);
        setImg(src)
    }
    
        return(
            <>
            <div className=' pt-5 mt-5 '>
               <div className='container'>
            <div className="text-center  " >
             
         <h1 className={`${style.home}`}>PORTFOLIO COMPONENT</h1>
         <div className=" d-flex align-items-center justify-content-center mb-3" style={{color:"#2c3e50"}}>
     
         <div className={`${style.line} me-3`}></div>
     
     <i className="fa-solid fa-star"></i>
     <div className={`${style.line} ms-3`}></div>
     </div>
         <div className="row gy-4">
           {imgList.map((img)=>(<PortfoloCard key={img.id} toggleMolda={toggleMolda} img={img}/>))}
         </div>
        {isOpen&&<Modal setOpen={setOpen} img={SelectImg}/>}
        </div>
        </div>
         </div></> 
        )
    
}
