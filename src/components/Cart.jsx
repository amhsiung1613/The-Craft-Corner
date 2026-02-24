"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import productList from "../inventory/ProductList";
import { CartItem } from "./cart-item";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
// import "../Checkout/Checkout"

import styles from "../css/Cart.module.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useRouter();

  return (
    <div className={styles.cart}>
      <div className={styles.title}>
          <h2> Your Cart Items</h2>
        </div>
      <div className={styles.content}>
        {productList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                data={product}
              />
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p> Subtotal: ${totalAmount.toFixed(2)} </p>
          <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
          <button
            onClick={() => {
              // checkout();
              navigate.push("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <>
        <div className={styles.title}>
          <h2> Your Shopping Cart is Empty</h2>
        </div>
          <div className={styles.checkout}>
            <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;