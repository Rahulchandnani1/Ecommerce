import React from 'react';
import './Footer.css';

const Footer = ({pagename}) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.</p>
        <nav>
          <ul>
            <li onClick={()=>{pagename("About")}}>About Us</li>
            <li onClick={()=>{pagename("Contact")}}>Contact Us</li>
            
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
