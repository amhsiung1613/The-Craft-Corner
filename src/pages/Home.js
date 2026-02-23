import Carousel from '../components/Carousel';
// import App from "../components/carousel-new/App";
import React from 'react';
import { Link } from "react-router-dom";
import "../css/Home.css";
import Rings from "../assets/ring-images/gold-rings.jpeg"
import Necklace from "../assets/necklace-images/diamond-necklace.jpeg"
import Earring from "../assets/earring-images/gold-twist-earring.jpeg"
import ReviewCarousel from '../components/review-carousel/ReviewCarousel';
import reviews from "../inventory/ReviewList";

function Home() {
  
  return (
    <div className='home'>
      <br></br>
      {/* <div> */}
        <Carousel />
      {/* </div> */}
      <h2>Categories</h2>
      <div className='categories'>
        <Link to="/products?category=ring" className="card">
          <img src={Rings.src} alt="Rings" className="img"/>
          <h3 className="title">Rings</h3>
        </Link>

        <Link to="/products?category=necklace" className="card">
          <img src={Necklace.src} alt="Necklace" className="img"/>
          <h3 className="title">Necklaces</h3>
        </Link>

        <Link to="/products?category=earring" className="card">
          <img src={Earring.src} alt="Earring" className="img"/>
          <h3 className="title">Earrings</h3>
        </Link>
      </div>
      <div className="reviews">
        <ReviewCarousel reviews={reviews}/>
      </div>
    </div>
  )
}

export default Home