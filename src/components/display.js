"use client";


import BreadCrumb from './Breadcrumb';
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from "./product-page/Navigation/Nav";
import Products from "./product-page/Products/Products1";
import products from "../inventory/ProductList";
// import Recommended from "./Recommended/Recomended";
import Sidebar from "./product-page/SideBar/Sidebar";
import Card from "./product-page/Product-Components/Card/Card";
import styles from "../css/index.module.css";

export default function Display() {
  // console.log("DISPLAY LOADED");
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

  // ------- URL Filter From Home -------
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category");  

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  // -----------breadcrumbs nav---------------

  const breadcrumbPages = selectedCategory
    ? [
        {
          name: selectedCategory,
          link: "",
        },
      ]
    : [];

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


  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  return (
    <div className={styles.displayLayout}>
      {/* <aside class="sidebar"> */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <Sidebar setSidebarOpen={setSidebarOpen} 
          handleChange={handleChange} 
          selectedCategory={selectedCategory}
          selectedMaterial={selectedMaterial}
          selectedPrice={selectedPrice} 
          // closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>
      
      <div className={styles.displayContent}>
        <BreadCrumb pages={breadcrumbPages} />
        <h1>All Products</h1>
        <Navigation query={query} handleInputChange={handleInputChange} />

        <button
            className={styles.filterButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            Filter by
        </button>
        
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