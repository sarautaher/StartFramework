import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navber";

export default function Master(){
    return(
        <>
        <Navbar/>
    
  <Outlet/>
   <Footer/>
       </>
    )
}