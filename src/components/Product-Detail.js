"use client";

// import { useParams, useNavigate } from "react-router-dom";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import FavIconSwitcher from "./FavIconSwitcher"
// import addToCart from "../../components/CartIconSwitcher"
import products from "../inventory/ProductList";
import "../css/Product-Detail.css";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const navigate = useRouter();
  const { updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="text">
        <h1>{product.name}
        <FavIconSwitcher productId={id}/>
        </h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <div className="buttons">
          <div className="countHandler">
            <button onClick={() =>
              setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}> - </button>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 1) {
                  setQuantity(value);
                }}} />
            <button onClick={() => 
              setQuantity((prev) => prev + 1)}> + </button>
          </div>
          <button onClick={(e) => updateCartItemCount(quantity, id)}>Add to Cart</button>
          <button onClick={() => navigate.push("/products")}> Continue Shopping </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;