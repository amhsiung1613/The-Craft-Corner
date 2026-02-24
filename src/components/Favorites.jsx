"use client";

import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
import { FavContext } from "../context/fav-context"
import productList from "../inventory/ProductList";
import {FavItem} from "./fav-item";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";

import styles from "../css/Favorites.module.css";
const Fav = () => {
  const { favItems, getTotalFavAmount } = useContext(FavContext);
  const totalAmount = getTotalFavAmount();

  const navigate = useRouter();

  return (
    <div className={styles.fav}>
      <div className={styles.title}>
        <h2>Your Favorites</h2>
      </div>
      <div className={styles.content}>
        {productList.map((product) => {
          if (favItems[product.id] !== 0) {
            return (
              <FavItem
                key={product.id}
                data={product}
              />
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
        </div>
      ) : (
        <>
          <div className={styles.title}>
            <h2> Your Favorites is Empty</h2>
          </div>
          <div className={styles.checkout}>
            <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Fav;