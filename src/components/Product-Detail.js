"use client";

// import { useParams, useNavigate } from "react-router-dom";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import FavIconSwitcher from "./FavIconSwitcher"
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
// import addToCart from "../../components/CartIconSwitcher"
import products from "../inventory/ProductList";
import "../css/Product-Detail.css";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const navigate = useRouter();
  const { updateCartItemCount, addToCart } =
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
          <button onClick={() => { 
            // updateCartItemCount(quantity, id); 
            addToCart(id);
            setOpen(true);
          }}>Add to Cart</button>
          <button onClick={() => navigate.push("/products")}> Back to Products </button>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductDetail;