import { useState } from "react";
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products1";
import products from "../inventory/ProductList";
// import Recommended from "./Recommended/Recomended";
import Sidebar from "./SideBar/Sidebar";
import Card from "./Product-Components/Card/Card";
import "./index.css";

function Display() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "category") setSelectedCategory(value);
    if (name === "material") setSelectedMaterial(value);
    if (name === "range")
      {
        if (value === "") {
          setSelectedPrice("");
          return;
        }
        if (value <= 50) {
          setSelectedPrice(50);
        } else if (value > 50 && value <= 100) {
          setSelectedPrice(100);
        } else if (value > 100 && value <= 150) {
          setSelectedPrice(150);
        } else if (value > 150) {
          setSelectedPrice(200);
        }
      }
      
  };
  

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  const filteredProducts = products
  .filter(product =>
    !query || product.name.toLowerCase().includes(query.toLowerCase())
  )
  .filter(product =>
    !selectedCategory || product.category === selectedCategory
  )
  .filter(product =>
    !selectedMaterial || product.material === selectedMaterial
  )
  .filter(product =>
    !selectedPrice || product.range === selectedPrice
  );



  return (
    <div className="display-layout">
      <Sidebar 
        handleChange={handleChange} 
        selectedCategory={selectedCategory}
        selectedMaterial={selectedMaterial}
        selectedPrice={selectedPrice} 
      />
      
      <div className="display-content">
        <h1>All Products</h1>
        <Navigation query={query} handleInputChange={handleInputChange} />
        {/* <Recommended handleClick={handleClick} /> */}
        <Products 
          result={filteredProducts.map(product => (
            <Card key={product.id} {...product} />
          ))} 
        />
      </div>
  </div>

  );
}

export default Display;