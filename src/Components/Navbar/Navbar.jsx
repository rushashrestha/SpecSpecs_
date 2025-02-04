import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/shopping-bag.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/down.png";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [menu, setMenu] = useState();
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to ='/' className="nav-logo">
      {/* <div className=""> */}
        <img width={50} src={logo} alt="" />
        <p>SPECSPECS</p>
      {/* </div> */}

      </Link>
      
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
       <SearchBar />
      
      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <div className="cart-image">
        <Link to="/cart">
          <img src={cart} alt=""></img>{" "}
        </Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;