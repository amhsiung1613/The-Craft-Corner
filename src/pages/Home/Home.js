// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../components/Carousel/Carousel';
// import App from "../components/carousel-new/App";
import React from 'react';
import "./Home.css";
import Rings from "../../assets/ring-images/ring-category-cover.jpg"
import Necklace from "../../assets/necklace-images/diamond-necklace.jpeg"
import Earring from "../../assets/earring-images/gold-diamond-twist-earrings.jpeg"

function Home() {
  
  return (
    <>
      {/* <h2>Latest News</h2> */}
      <br></br>
      <div>
        <Carousel />
      </div>
      <h2>Categories</h2>
      <div className='categories'>
        <div className='card'>
          <img src={Rings.src} alt='Rings' className='img'/>
          <h3 className='title'>Rings</h3>
        </div>
        <div className='card'>
          <img src={Necklace.src} alt='Necklace' className='img'/>
          <h3 className='title'>Necklaces</h3>
        </div>
        <div className='card'>
          <img src={Earring.src} alt='Earring' className='img'/>
          <h3 className='title'>Earrings</h3>
        </div>
      </div>
      <div className="reviews">
        
      </div>
    </>
  )
}

export default Home
