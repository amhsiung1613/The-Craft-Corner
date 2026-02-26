"use client";

import React, { useContext } from "react";
import { CartItem } from "./cart-item";
import ProductList from "../inventory/ProductList"
import styles from "../css/CheckoutSuccess.module.css";
import { useRouter } from "next/navigation";
import { ShopContext } from "../context/shop-context";

function CheckoutSuccess() {
    const { cartItems } = useContext(ShopContext);
    const navigate = useRouter();

    return (
        <div className={styles["success-page"]} >
            <h1> Thank you for your purchase!</h1>

            <h2>Items purchased today: </h2>

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

            <p>We have received your order. You should receive a confirmation email from us soon. 
                It may take a couple minutes to send. We will send you your tracking number when 
                your items are shipped. Thank you for shopping with us! 
            </p>

            <div className={styles["checkout"]}>
                <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
            </div>
        </div>
    )

}

export default CheckoutSuccess