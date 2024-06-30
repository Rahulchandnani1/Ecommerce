import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css";
const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
 
  return (
    <div className='cdiv'>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li className='li' key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
       
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
