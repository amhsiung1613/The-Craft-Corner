"use client";

import React, { useState, useContext } from 'react'
import Logo from "../assets/logo.png";
import Link from 'next/link';
import Image from 'next/image';
// import { useRouter } from "next/router";
import ReorderIcon from '@mui/icons-material/Reorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../css/Navbar.css";
// import { ShopContext } from '../context/shop-context';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  // const router = useRouter();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link href = "/home" passHref>
            <Image src={Logo.src} alt="Logo" width={80} height={80} style={{ cursor: 'pointer'}}/>
          </Link>
          <div className="hiddenLinks">
            <Link href="/home"> Home </Link>
            <Link href="/products"> Products </Link>
            {/* <Link to="/search"> Search </Link> */}
            <Link href="/favorites"> Favorites </Link>
            <Link href="/cart" > Cart </Link> 
            {/* <Link to="/account"> Account </Link> */}
            <Link href="/about"> About </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link href="/products"> Products </Link>
          {/* <Link to="/search"> Search </Link> */}
          <Link href="/favorites"> Favorites </Link>
          <Link href="/cart" > Cart </Link>
          {/* <Link to="/account"> Account </Link> */}
          <Link href="/about"> About </Link>
          
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar
