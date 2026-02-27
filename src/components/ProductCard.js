import React, { useContext } from "react";
import "./product-page/Product-Components/Card/Card.css"
import { ShopContext } from "../context/shop-context";

export const ProductCard = () => {
  const { cartItems } = useContext(ShopContext);
  // const cartItemCount = cartItems[id];
  
  return (
    <>
      <section className="card">
        <img src={cartItems.image} className="card-img" />
        <h3 className="card-title">{cartItems.name}</h3>
        <div className="card-details">
          <section className="card-price">
            <div className="price">
              <p>Price: ${cartItems.price}</p>
            </div> 
          </section>
        </div>
      </section>
    
    </>
  );
};

// export default ProductCard;