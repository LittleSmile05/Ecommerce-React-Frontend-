// Header.jsx
import React from "react";
import "./Header.css"; // Import the CSS file for styling
import logoImg from "../assets/products/hero_image.png"; // Import your image file

const Header = () => {
  return (
    <header className="header">
        <div className="headtext">
        <h1 className="head"><span className="prx">New Arrivals only</span> <br/>New Collections For Everyone<br/></h1>
        <h2><span className="pur">Latest Collections→ </span></h2>
        </div>
      <img  src={logoImg} alt="Website Logo" className="logo" />
      
    </header>
  );
};

export default Header;
