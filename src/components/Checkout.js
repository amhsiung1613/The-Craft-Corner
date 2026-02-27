"use client";

import styles from "../css/Checkout.module.css";
import React, { useContext } from "react";
import ProductList from "../inventory/ProductList"
import { CartItem } from "./cart-item";
import { ShopContext } from "../context/shop-context"
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import "../Cart/Cart.css"

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const stateTax = totalAmount * 0.06;
  const shippingCost = totalAmount > 0? 5 : 0;

  const navigate = useRouter();

  return (
    <div className={styles["body"]}>
        console.log("SUCCESS cartItems:", cartItems);
        {/* <span> */}
        <div className={styles["wrapper"]}>
            <div className={styles["shopping-cart"]}>
                <h1>Your Cart</h1>
                <div className={styles["cart"]}>
                    {ProductList.map((product) => {
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
                    <div className={styles["checkout"]}>
                        <button onClick={() => navigate.push("/products")}> Back to Products </button>
                    </div>
                ) : (
                    <>
                    <h2 className={styles["empty-cart"]}> Your Shopping Cart is Empty</h2>
                    <div className={styles["checkout"]}>
                        <button onClick={() => navigate.push("/products")}> Back to Products </button>
                    </div>
                    </>
                )}

            </div>
            
            <div className={styles["credit-card"]}>
                {/* <Cart /> */}
                <h1>Checkout</h1> <br/>
                <p style={{ fontWeight: 'bold' }}> Subtotal: ${totalAmount.toFixed(2)} </p> 
                <p style={{ fontSize: '12px' }}> *Taxes and shipping not yet calculated. </p> <br/>

                <form action='' >
                    <div className={styles["input-box"]}>
                        <label id="credit-card-number">Credit Card Number: </label>
                        <input type='password' id="credit-card-number" placeholder='Credit Card Number' required maxLength={16}/>
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="credit-card-expiration">Expiration Date: </label>
                        <input type="text" id="credit-card-expiration" placeholder='mm/yy' required />
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="credit-card-cvv">CVV: </label>
                        <input type='password' id="credit-card-cvv" placeholder='CVV' required maxLength={3}/>
                    </div>
                    {/* <input className="input-box" type="submit" value="Checkout"/> */}
                </form>

                <br/>
                <h1>Shipping</h1>

                <form action='' >
                    <div className={styles["input-box"]}>
                        <label id="shipping-address">Address: </label>
                        <input type='text' id="shipping-address" placeholder='Address' required />
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="shipping-city">City: </label>
                        <input type='text' id="shipping-city" placeholder='City' required />
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="shipping-state">State: </label>
                        <input type='text' id="shipping-state" placeholder='State' required />
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="shipping-zip">Zip Code: </label>
                        <input type='text' id="shipping-zip" placeholder='Zip Code' required />
                    </div>
                </form> 
                
                <br/>
                <h1>Contact</h1>

                <form action='' >
                    <div className={styles["input-box"]}>
                        <label id="email-address">Email Address: </label>
                        <input type='text' id="email-address" placeholder='Email Address' required />
                    </div>
                    <div className={styles["input-box"]}>
                        <label id="phone">Phone Number: </label>
                        <input type='text' id="phone" placeholder='Phone Number' />
                    </div>
                </form>

                <br/>
                <p> 
                    Subtotal:${totalAmount.toFixed(2)}
                    <br/>
                    State Tax: ${stateTax.toFixed(2)} 
                    <br/>
                    Shipping: ${shippingCost.toFixed(2)}
                    <br/>
                    Total: ${(totalAmount + stateTax + shippingCost).toFixed(2)}
                </p>

                <div className={styles["checkout"]}>
                    <button onClick={() => navigate.push("/checkout-success")}> Checkout </button>
                </div>


                <p style={{ fontSize: '12px', marginTop: '20px' }}> *This is a demo website. No actual purchases will be made. </p>
            
            </div>
        {/* </span> */}
        </div>
    </div>
  )
}

export default Checkout
