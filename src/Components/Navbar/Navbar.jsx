import React, { useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
     const[menu,setMenu]= useState('shop')

  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <img width={50} src={logo} alt=''/>
           <p>SPECSPECS</p>
        </div>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu('shop')}}><Link  style={{textDecoration: 'none' }} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('vision')}}> <Link style={{textDecoration: 'none' }} to='/vision'>Vision</Link>{menu==='vision'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('sports')}}><Link style={{textDecoration: 'none' }} to='/sports'>Sports</Link>{menu==='sports'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('sunglass')}}><Link style={{textDecoration: 'none' }} to='/sunglass'>Sunglasses</Link>{menu==='sunglass'?<hr/>:<></>}</li>

        </ul>
        <div className='nav-login-cart'>
            <Link to='/Login'><button>Login</button></Link>
             <Link to='/cart'><img src={cart} alt=''></img> </Link>
             <div className='nav-cart-count'>0</div>
        </div>

      
    </div>
  )
}

export default Navbar
