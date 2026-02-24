import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["socialMedia"]}>
        {/* <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> */}
        <a href="https://www.linkedin.com/in/amber-hsiung-073b2b23b/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2024 bearhousehandmade.com</p>
    </div>
  )
}

export default Footer
