
import React from "react";
import news1 from "../assets/carousel-1.jpg";
import news2 from "../assets/carousel-2.jpg";
import news3 from "../assets/pearls.jpg";
import {ImageSlider} from "./carousel-new/ImageSlider.tsx";
import styles from "../css/Carousel.module.css";

const IMAGES = [
  { id: 1, url: news1.src, alt: "News One" },
  { id: 2, url: news2.src, alt: "News Two" },
  { id: 3, url: news3.src, alt: "News Three" },
]

function Carousel() {
  return (
    <div className={styles.carousel}    >
      <ImageSlider images={IMAGES} />
      {/* <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a> */}
    </div>
  )
}

export default Carousel;