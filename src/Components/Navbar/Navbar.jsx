import React, { useState, useContext } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    
     const[menu,setMenu]= useState('shop');
     const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <img width={50} src={logo} alt=''/>
           <p>SPECSPECS</p>
        </div>
        <ul className='nav-menu'>
<<<<<<< HEAD
           <li onClick={()=>{setMenu('shop')}}><Link  style={{textDecoration: 'none' }} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('vision')}}> <Link style={{textDecoration: 'none' }} to='/vision'>Vision</Link>{menu==='vision'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('sports')}}><Link style={{textDecoration: 'none' }} to='/sports'>Sports</Link>{menu==='sports'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('sunglass')}}><Link style={{textDecoration: 'none' }} to='/sunglass'>Sunglasses</Link>{menu==='sunglass'?<hr/>:<></>}</li>
=======
            <li onClick={()=>{setMenu('shop')}}>Shop{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}>Men{menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}>Women{menu==='womens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}>Kids{menu==='kids'?<hr/>:<></>}</li>
>>>>>>> 2b8eca1e40ccd77ac17015ea59864948aa242764

        </ul>
        <div className='nav-login-cart'>
            <Link to='/Login'><button>Login</button></Link>
             <Link to='/cart'><img src={cart} alt=''></img> </Link>
             <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

      
    </div>
  )
}

export default Navbar
