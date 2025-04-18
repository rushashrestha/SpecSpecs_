import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/shopping-bag.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/down.png";
import SearchBar from './SearchBar';
import { useAuth } from "../../Context/AuthContext";
import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const dropdown_toggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");
    }
  };
  

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo">
        <img width={50} src={logo} alt="logo" />
        <p>SPECSPECS</p>
      </Link>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="menu toggle"
      />

      <div className="nav-menu" ref={menuRef}>
        <SearchBar />
        <div className="nav-login-cart">
          {user ? (
            <>
              <span className="user-email">Hi, {user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          <div className="cart-image">
            <Link to="/cart">
              <button className="cart-button"><BsCart3 /></button>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
