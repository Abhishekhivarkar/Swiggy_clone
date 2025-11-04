import { useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form"
import MiddleContent from "./components/MiddleContent"
import Card from "./components/Card"
import ThirdMiddleContent from "./components/ThirdMiddleContent"
//import College from "./Components/College"

import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import SecondMiddleContent from "./components/SecondMiddleContent"
import Places from "./components/Places"
import CityCard from "./components/CityCard"
import Footer from "./components/Footer"

import Home from "./Routers/Home"
import Sign_in_group from "./Routers/Sign_in_group"
import Log_in_group from "./Routers/Log_in_group"
import Item_details_group from "./Routers/Item_details_group"
import Cart_group from "./Routers/Cart_group"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_in" element={<Sign_in_group/>}/>
         <Route path="/log_in" element={<Log_in_group/>}/>
         <Route path="/food/:id" element={<Item_details_group/>}/>
         <Route path="/restaurant/:id" element={
           <Item_details_group/>}/>
           <Route path="/cart" element={<Cart_group/>}/>
      </Routes>
    </>
        
    
  );
}

export default App;