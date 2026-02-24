import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import styles from "../css/Cart.module.css";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={styles["cartItem"]}>
      <img src={image} />
      <div className={styles["description"]}>
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className={styles["countHandler"]}>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};