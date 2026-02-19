
import React from "react";
import news1 from "../../assets/ring-images/ring-category-cover.jpg";
import news2 from "../../assets/pearls.jpg";
import {ImageSlider} from "../carousel-new/ImageSlider.tsx";

const IMAGES = [
  { url: news1, alt: "News One" },
  { url: news2, alt: "News Two" },
]

function Carousel() {
  return (
    <div
      style={{
        maxWidth: "1550px",
        width: "100%",
        maxHeight: "400px",
        height: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      {/* <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a> */}
    </div>
  )
}

export default Carousel;