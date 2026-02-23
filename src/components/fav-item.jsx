import React, { useContext } from "react";
// import { FavContext } from "../context/fav-context";
import FavIconSwitcher from "./FavIconSwitcher";
import CartIconSwitcher from "./CartIconSwitcher";
import { Link } from "react-router-dom";
// import "../product-page/Product-Components/Card/Card.css"

export const FavItem = (props) => {
  const { id, name, price, image } = props.data;
//   const { favItems, addToFav, removeFromFav, updateFavItemCount } =
//     useContext(FavContext);

  return (
    <div className="favItem">
      <Link to={`/products/${id}`} className="card-link">
        <img src={image} alt={name} className="card-img" />
        <h3 className="card-title">{name}</h3>
      </Link>
      <div className="description">
        <p> Price: ${price}</p>
        <div className="bag">
          <FavIconSwitcher productId={id}/>
          <CartIconSwitcher productId={id}/>
        </div>
      </div>
    </div>
  );
};
