import React from "react";
import Home from './Component/Home/Home';
 import {  RouterProvider,  createBrowserRouter } from 'react-router-dom';
import About from './Component/About/About';

import { Component } from 'react';
import Portfolil from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Master from './Component/Master/Master';
import NotFound from "./Component/NotFound/NotFound";


 const router=createBrowserRouter([
   {path:'',element:<Master/>,children:[
    {path:'/home',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/Potfolil',element:<Portfolil/>},
    {path:'/contact',element:<Contact/>},
    {path:'/',element:<Home/>},
    {path:'*',element:<NotFound/>},
  
 ]
 
},

])
class App extends Component{

render()  {
  return(
  <>
 <RouterProvider  router={router} /></> 

   )

}
}
export default App;
