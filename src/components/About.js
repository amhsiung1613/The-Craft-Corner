import React from 'react';
import Logo from "../assets/logo.png";
import styles from "../css/About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop} >
        <img src={Logo.src} alt="Logo" />
      </div>
      <div className={styles.aboutBottom}>
        <h1>
          About Us!
        </h1>
        <p style={{ fontSize: "24px", textAlign: "center", margin: "0 20px", lineHeight: "1.5" }}>
        Hi there! My name is Amber and I am a UX/UI designer and web developer.<br/> <br/>
        This is my very first UX/UI and web development project. <br/>
        I created the initial UX/UI project for the Google UX Design Certificate and decided to take it <br/>a step further by creating an actual website for it.
        My goal for this project was to create a jewelry e-commerce website <br/>that is simple, elegant, and easy to navigate.
        I am still working to improve this site but I hope you enjoy it! <br/> <br/>
        Feel free to reach out to me at <a href="mailto:amberhsiung@gmail.com">amberhsiung@gmail.com</a> or LinkedIn at <a href="https://www.linkedin.com/in/amber-hsiung-073b2b23b/">Amber Hsiung</a>. <br/>
        </p>
      </div>
    </div>
  )
}

export default About
