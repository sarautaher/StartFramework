import React from "react";
export default function Modal({img, setOpen}){
const closeModel=(e)=>{
    if(e.target.classList.contains('modal-container')){
        setOpen(false)
    }
    else{
        setOpen(true)
    }
};
return(<>
<div className="modal-container rounded-3 overflow-hidden position-fixed top-1  bottom-0 start-0  d-flex align-items-center justify-content-center end-0 w-50 m-auto"onClick={closeModel}>
            <img src={img} alt="seleted" className="d-block w-75  rounded-3"/>
        </div>
</>)
}