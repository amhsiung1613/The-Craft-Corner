import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import productList from "../inventory/ProductList";
import { CartItem } from "../components/cart-item";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
// import "../Checkout/Checkout"

import "../css/Cart.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="title">
          <h2> Your Cart Items</h2>
        </div>
      <div className="content">
        {productList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount.toFixed(2)} </p>
          <button onClick={() => navigate("/products")}> Continue Shopping </button>
          <button
            onClick={() => {
              // checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <>
        <div className="title">
          <h2> Your Shopping Cart is Empty</h2>
        </div>
          <div className="checkout">
            <button onClick={() => navigate("/products")}> Continue Shopping </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;