import React, { useContext } from "react";
import { FavContext } from "../context/fav-context";
import FavIconSwitcher from "./FavIconSwitcher"
import CartIconSwitcher from "./CartIconSwitcher"

export const FavItem = (props) => {
  const { id, name, price, image } = props.data;
//   const { favItems, addToFav, removeFromFav, updateFavItemCount } =
//     useContext(FavContext);

  return (
    <div className="favItem">
    <img src={image} />
        <div className="description">
            <p>
            <b>{name}</b>
            </p>
            <p> Price: ${price}</p>
            <FavIconSwitcher productId={id}/>
            <CartIconSwitcher productId={id}/>
        </div>
    </div>
  );
};