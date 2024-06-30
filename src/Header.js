import React from 'react';
import './Header.css';
import {Link } from 'react-router-dom';
const Header = ({pagename}) => {

  return (
    <header className="header">
      <h1>R Mart</h1>
      <nav>
        
        <ul>
        <li onClick={()=>{pagename("Home")}}>Home
        </li>
        <li onClick={()=>{pagename("Product")}}>Products
        </li>
        <li onClick={()=>{pagename("Cart")}}>Cart
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
