import Cart from "../Cart/Cart"
import "./Checkout.css"
import React, { useContext } from "react";
import Card from "../../product-page/Product-Components/Card/Card"
import ProductList from "../../inventory/ProductList"
import { CartItem } from "../Cart/cart-item"
import { ShopContext } from "../../context/shop-context"
// import "../Cart/Cart.css"

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='body'>
        {/* <span> */}
        <div className="wrapper">
            <div className='shopping-cart'>
                <h1>Your Cart</h1>
                <div className="cart">
                    {ProductList.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                    })}
                </div>
                {totalAmount > 0 ? (
                    <div className="checkout">
                    <button onClick={() => navigate("/products")}> Continue Shopping </button>
                    </div>
                ) : (
                    <>
                    <h2> Your Shopping Cart is Empty</h2>
                    <div className="checkout">
                        <button onClick={() => navigate("/products")}> Continue Shopping </button>
                    </div>
                    </>
                )}

            </div>
            
            <div className='credit-card'>
                {/* <Cart /> */}
                <h1>Checkout</h1>
                <p> Subtotal: ${totalAmount} </p>

                <form action='' >
                    <div className='input-box'>
                        <label for="credit-card-number">Credit Card Number: </label>
                        <input type='password' id="credit-card-number" placeholder='Credit Card Number' required maxLength={16}/>
                    </div>
                    <div className='input-box'>
                        <label for="credit-card-expiration">Expiration Date: </label>
                        <input type='text' id="credit-card-expiration" placeholder='mm/yy' required />
                    </div>
                    <div className='input-box'>
                        <label for="credit-card-cvv">CVV: </label>
                        <input type='password' id="credit-card-cvv" placeholder='CVV' required maxLength={3}/>
                    </div>

                    {/* <input className="input-box" type="submit" value="Checkout"/> */}
                </form>

                <br/>
                <h1>Shipping</h1>

                <form action='' >
                    <div className='input-box'>
                        <label for="shipping-address">Address: </label>
                        <input type='text' id="shipping-address" placeholder='Address' required />
                    </div>
                    <div className='input-box'>
                        <label for="shipping-city">City: </label>
                        <input type='text' id="shipping-city" placeholder='City' required />
                    </div>
                    <div className='input-box'>
                        <label for="shipping-state">State: </label>
                        <input type='text' id="shipping-state" placeholder='State' required />
                    </div>
                    <div className='input-box'>
                        <label for="shipping-zip">Zip Code: </label>
                        <input type='text' id="shipping-zip" placeholder='Zip Code' required />
                    </div>

                    <input className="input-box" type="submit" value="Checkout"/>
                </form>
            
            </div>
        {/* </span> */}
        </div>
    </div>
  )
}

export default Checkout
