

import React from 'react';
import './App.css';
import Footer from './Footer';
import Home from "./Home";
import Cart from './Cart';
import Header from "./Header";
import Product from './Product';
import { useState } from 'react';
import "./Header.css";
import Contact from './ContactUs';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import About from './AboutUs';
const App = () => {
 const [page,setpage]=useState("Home"); 
function pagename(e){
  setpage(e);
}
  return (
      <div className="app">
        <Header pagename={pagename}  />
        
       {page=="Home"?
<Home pagename={pagename}/>
:page=="Product"?<Product/>:page=="Cart"?<Cart/>
 :page=="About"?<About/>:page=="Contact"?<Contact/>:""     }
       <Footer  pagename={pagename}/>
      </div>
  );
};

export default App;
