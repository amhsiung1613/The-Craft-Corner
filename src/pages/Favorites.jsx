
import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
import { FavContext } from "../context/fav-context"
import productList from "../inventory/ProductList";
import { FavItem } from "../components/fav-item";
import { useRouter } from "next/router";

import "../css/Favorites.css";
const Fav = () => {
  const { favItems, getTotalFavAmount } = useContext(FavContext);
  const totalAmount = getTotalFavAmount();

  const router = useRouter();

  return (
    <div className="fav">
      <div className="title">
        <h2>Your Favorites</h2>
      </div>
      <div className="content">
        {productList.map((product) => {
          if (favItems[product.id] !== 0) {
            return <FavItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <button onClick={() => router.push("/products")}> Continue Shopping </button>
        </div>
      ) : (
        <>
          <div className="title">
            <h2> Your Favorites is Empty</h2>
          </div>
          <div className="checkout">
            <button onClick={() => router.push("/products")}> Continue Shopping </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Fav;