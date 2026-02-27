import React, { useContext } from "react";
// import { FavContext } from "../context/fav-context";
// import FavIconSwitcher from "./FavIconSwitcher";
// import CartIconSwitcher from "./CartIconSwitcher";
// import Link from "next/link";
// import "../product-page/Product-Components/Card/Card.css"
import styles from "../css/CheckoutSuccess.module.css";

export const ProductCard = (props) => {
  const { id, name, price, image } = props.data;
//   const { favItems, addToFav, removeFromFav, updateFavItemCount } =
//     useContext(FavContext);

  return (
    <div className={styles["favItem"]}>
      {/* <Link href={`/products/${id}`} className={styles["card-link"]}> */}
      <img src={image} alt={name} className={styles["card-img"]} />
      <h3 className={styles["card-title"]}>{name}</h3>
      {/* </Link> */}
      <div className={styles["description"]}>
        <p> Price: ${price}</p>
        {/* <div className={styles["bag"]}>
          <FavIconSwitcher productId={id}/>
          <CartIconSwitcher productId={id}/>
        </div> */}
      </div>
    </div>
  );
};
