// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useContext } from "react";
import Link from "next/link";
import FavIconSwitcher from "../../../FavIconSwitcher";
import CartIconSwitcher from "../../../CartIconSwitcher";
import "./Card.css"
// import { ShopContext } from "../../../context/shop-context";

const Card = ({ id, image, name, price }) => {
  // const { addToCart, cartItems } = useContext(ShopContext);
  // const cartItemCount = cartItems[id];
  
  return (
    <>
      <section className="card">
        <Link href={`/products/${id}`} className="card-link">
          <img src={image} alt={name} className="card-img" />
          <h3 className="card-title">{name}</h3>
        </Link>
        <div className="card-details">
          <section className="card-price">
            <div className="price">
              <p>Price: ${price}</p>
            </div> 
            <div className="bag">
              <FavIconSwitcher productId={id}/>
              <CartIconSwitcher productId={id}/>
            </div>
          </section>
        </div>
      </section>
    
    </>
  );
};

export default Card;