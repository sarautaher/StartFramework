import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
    const hanScrollTop=()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }
    return(<>

    <section className="d-flex align-items-center justify-content-center min-vh-100 py-5">
        <div className="container mt-5 d-flex align-items-center justify-content-center">
            <p className="text-danger fs-4 my-2 text-center">
                Oops! It looks like this page doesnt exist .Please check the URL and Try again.
            </p>
            <Link onClick={()=>hanScrollTop(0)} className="btn my-4 text-white" to="">Back Home </Link>
        </div>
    </section>
    </>)
}