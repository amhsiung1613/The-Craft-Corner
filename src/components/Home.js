import Carousel from './Carousel';
// import App from "../components/carousel-new/App";
import React from 'react';
import Link from "next/link";
import styles from "../css/Home.module.css";
import Rings from "../assets/ring-images/gold-rings.jpeg"
import Necklace from "../assets/necklace-images/diamond-necklace.jpeg"
import Earring from "../assets/earring-images/gold-twist-earring.jpeg"
import ReviewCarousel from './review-carousel/ReviewCarousel';
import reviews from "../inventory/ReviewList";

function Home() {
  
  return (
    <div className={styles["home"]}>
      <br></br>
      {/* <div> */}
        <Carousel />
      {/* </div> */}
      <h2 className={styles["categories-title"]}>Categories</h2>
      <div className={styles["categories"]}>
        <Link href="/products?category=ring" className={styles["card"]}>
          <img src={Rings.src} alt="Rings" className={styles["img"]}/>
          <h3 className={styles["title"]}>Rings</h3>
        </Link>

        <Link href="/products?category=necklace" className={styles["card"]}>
          <img src={Necklace.src} alt="Necklace" className={styles["img"]}/>
          <h3 className={styles["title"]}>Necklaces</h3>
        </Link>

        <Link href="/products?category=earring" className={styles["card"]}>
          <img src={Earring.src} alt="Earring" className={styles["img"]}/>
          <h3 className={styles["title"]}>Earrings</h3>
        </Link>
      </div>
      <div className={styles["reviews"]}>
        <ReviewCarousel reviews={reviews}/>
      </div>
    </div>
  )
}

export default Home