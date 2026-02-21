import { useState } from "react";
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products1";
import products from "../inventory/ProductList";
import Recommended from "./Recommended/Recomended";
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
    if (name === "price") setSelectedPrice(value);
  };
  

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // const filteredItems = products.filter(
  //   (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // ----------- Radio Filtering -----------

  

  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // const handleMaterialChange = (event) => {
  //   setSelectedMaterial(event.target.value);
  // };

  // const handlePriceChange = (event) => {
  //   setSelectedPrice(event.target.value);
  // };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  // function filteredData(products, selectedCategory, selectedMaterial, selectedPrice, query) {
  //   let filteredProducts = [...products];

  //   // Search filter
  //   if (query) {
  //     filteredProducts = filteredProducts.filter(product =>
  //       product.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //   }

  //   // Category filter
  //   if (selectedCategory) {
  //     filteredProducts = filteredProducts.filter(product =>
  //       product.category === selectedCategory
  //     );
  //   }

  //   // Material filter
  //   if (selectedMaterial) {
  //     filteredProducts = filteredProducts.filter(product =>
  //       product.material === selectedMaterial
  //     );
  //   }

  //   // Price filter
  //   if (selectedPrice) {
  //     filteredProducts = filteredProducts.filter(product =>
  //       product.price === selectedPrice
  //     );
  //   }

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
    !selectedPrice || product.price === selectedPrice
  );


  //   return filteredProducts.map(({ id, image, name, price }) => (
  //     <Card
  //       key={id}
  //       id={id}
  //       image={image}
  //       name={name}
  //       price={price}
  //     />
  //   ));
  // }

  // const result = filteredData(products, selectedCategory, selectedMaterial, selectedPrice, query);



  return (
    <>
      {/* <Router>
        <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router> */}
      <Sidebar 
      handleChange={handleChange} 
      // handleMaterialChange={handleMaterialChange} 
      // handlePriceChange={handlePriceChange} 
      selectedCategory={selectedCategory}
      selectedMaterial={selectedMaterial}
      selectedPrice={selectedPrice} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      {/* <Products result={result} /> */}

      <Products 
        result={filteredProducts.map(product => (
          <Card key={product.id} {...product} />
        ))} 
      />

    </>
  );
}

export default Display;