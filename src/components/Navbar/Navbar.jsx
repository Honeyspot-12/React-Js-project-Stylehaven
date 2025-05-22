import React, { useContext } from "react";
import './Navbar.css';
import logo from '../asset/logo2.png';
import mobileIcon from '../asset/mobile.svg';
import arrowDownIcon from '../asset/arrowdown.svg';
import searchIcon from '../asset/search.svg';
import profileIcon from '../asset/profile.svg';
import heartIcon from '../asset/heart.svg';
import cartIcon from '../asset/cart.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { Wishlistcontext } from "../../context/Wishlistcontext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const {wishlist}=useContext(Wishlistcontext);
  const wishlistCount = wishlist.reduce((total, item) => total + item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="navbar">
      <div className="topheader">
        <div className="wmk">
          <ul>
            <li><Link to="/"> WOMEN</Link></li>
            <li><Link to="/mens"> MEN</Link></li>
            <li><Link to="/kids"> KIDS</Link></li>
          </ul>
        </div>
        <div className="tcd">
          <ul>
            <li><a href="/track-order">TRACK ORDER</a></li>
            <li><a href="#contact-us">CONTACT US</a></li>
            <img src={mobileIcon} alt="Mobile Icon" />
            <li><a href="/download-app">DOWNLOAD APP</a></li>
          </ul>
        </div>
      </div>
      {/* Header */}
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="genre">
          <ul>
            <li><a href="/summer-collection">SUMMER COLLECTION <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
            <li><a href="/topwear">TOPWEAR <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
            <li><a href="/bottomwear">BOTTOMWEAR <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
            <li><a href="/bestsellers">BESTSELLERS <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
            <li><a href="/footwear">FOOTWEAR <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
            <li><a href="/accessories">ACCESSORIES <img src={arrowDownIcon} alt="Arrow Down" /></a></li>
          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="Search for products, brands and more" />
          <button type="submit"><img src={searchIcon} alt="Search" /></button>
        </div>

        <div className="crp">
          <a href="/signup"><img src={profileIcon} alt="Profile" /></a>
          <Link to="/wishlist"><img src={heartIcon} alt="Wishlist" />
          <span className="wishlist-count">{wishlistCount}</span>
          </Link>
          <Link to="/cart"><img src={cartIcon} alt="Cart" />
          <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </header>
      </div>
  );
};

export default Navbar;