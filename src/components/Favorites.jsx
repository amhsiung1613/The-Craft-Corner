
import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
import { FavContext } from "../context/fav-context"
import productList from "../inventory/ProductList";
import {FavItem} from "./fav-item";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";

import "../css/Favorites.css";
const Fav = () => {
  const { favItems, getTotalFavAmount } = useContext(FavContext);
  const totalAmount = getTotalFavAmount();

  const navigate = useNavigate();

  return (
    <div className="fav">
      <div className="title">
        <h2>Your Favorites</h2>
      </div>
      <div className="content">
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
        <div className="checkout">
          <button onClick={() => navigate("/products")}> Continue Shopping </button>
        </div>
      ) : (
        <>
          <div className="title">
            <h2> Your Favorites is Empty</h2>
          </div>
          <div className="checkout">
            <button onClick={() => navigate("/products")}> Continue Shopping </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Fav;