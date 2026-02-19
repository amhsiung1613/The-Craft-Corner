import React from 'react';
import Logo from "../assets/logo.png";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" >
        <img src={Logo.src} alt="Logo" />
      </div>
      <div className="aboutBottom">
        <h1>
          About Us!
        </h1>
        <p>
        We are a small woman-owned jewelry shop looking to find the perfect piece for everyone!
        </p>
      </div>
    </div>
  )
}

export default About
