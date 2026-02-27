"use client";

import React, { useContext } from "react";
// import { FavItem } from "./fav-item";
// import { CartItem } from "./cart-item";
import { ProductCard } from "./ProductCard";
import ProductList from "../inventory/ProductList"
import styles from "../css/CheckoutSuccess.module.css";
import { useRouter } from "next/navigation";
import { ShopContext } from "../context/shop-context";

function CheckoutSuccess() {
    const { cartItems, checkout } = useContext(ShopContext);
    const navigate = useRouter();

    const handleCheckout = () => {
        navigate.push("/products");
        checkout();              // clears the cart
    };

    return (
        <div className={styles["success-page"]} >
            <h1> Thank you for your purchase!</h1>
            <br/>
            <h2>Items purchased today: </h2>

            <div className={styles["cart"]}>
                {ProductList.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                        <ProductCard
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
            <br/>

            <div className={styles["checkout"]}>
                <button onClick={handleCheckout}> Back to Products </button>
            </div>
        </div>
    )

}

export default CheckoutSuccess