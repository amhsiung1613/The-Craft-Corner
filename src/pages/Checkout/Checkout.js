import Cart from "../Cart/Cart"
import "./Checkout.css"
import React, { useContext } from "react";
import Card from "../../product-page/Product-Components/Card/Card"
import ProductList from "../../inventory/ProductList"
import { CartItem } from "../Cart/cart-item"
import { ShopContext } from "../../context/shop-context"

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
            </div>
            
            <div className='credit-card'>
                {/* <Cart /> */}
                <form action='' >
                    <h1>Checkout</h1>
                    <div className='input-box'>
                        <input type='password' placeholder='Credit Card Number' required maxLength={16}/>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='mm/yy' required />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='CVV' required maxLength={3}/>
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
