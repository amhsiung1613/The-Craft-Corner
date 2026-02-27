// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useContext } from "react";
// import Link from "next/link";
// import FavIconSwitcher from "../../../FavIconSwitcher";
// import CartIconSwitcher from "../../../CartIconSwitcher";
import "./product-page/Product-Components/Card/Card.css"
// import { ShopContext } from "../../../context/shop-context";

const ProductCard = ({ id, image, name, price }) => {
  // const { addToCart, cartItems } = useContext(ShopContext);
  // const cartItemCount = cartItems[id];
  
  return (
    <>
      <section className="card">
        <img src={image} alt={name} className="card-img" />
        <h3 className="card-title">{name}</h3>
        <div className="card-details">
          <section className="card-price">
            <div className="price">
              <p>Price: ${price}</p>
            </div> 
          </section>
        </div>
      </section>
    
    </>
  );
};

export default ProductCard;