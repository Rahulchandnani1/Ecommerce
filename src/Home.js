
import React from 'react';
import "./Home.css";
import img from "./dp.jpg";
const Home = ({pagename}) => {
  return (
    <div className='hodiv'>
      <img src={img} className='imgc'/>
      <h1 className="ht1">Welcome to R Mart</h1>
      <p className="ht2">Discover our wide range of products and enjoy a seamless shopping experience.</p>
      <button className='btn1' onClick={()=>{pagename("Product")}}>See All Our Products</button>
    </div>
  );
};

export default Home;
