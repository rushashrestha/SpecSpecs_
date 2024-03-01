


      
import React, { useState, useRef ,useContext} from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "../Assets/dropdown_icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classlist.toggle("nav-menu-visible");
    e.target.classlist.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img width={50} src={logo} alt="" />
        <p>SPECSPECS</p>
      </div>
      <div className="downdrop">
        <img
          className="nav-dropdown"
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt=""
        />
      </div> 
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop");}} >
          <Link style={{ textDecoration: "none" }} to="/">Shop</Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("vision");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/vision">
            Vision
          </Link>
          {menu === "vision" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sports");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sports">
            Sports
          </Link>
          {menu === "sports" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sunglass");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sunglass">
            Sunglasses
          </Link>
          {menu === "sunglass" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/Login"><button>Login</button> </Link>
        <Link to="/cart"><img src={cart} alt=""></img>{" "}  </Link>
        
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
