import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'

const ShopCategory = (props) => {
    const{allproducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='banner-left'>
      <p>Get your </p>
      <p><h6>Spectacular Spectacles</h6></p>
      <p>On Special <h2>Discount</h2> offers</p>
      </div>
      <div className='banner-right'>
      <img src={props.banner} alt="image" />
      </div>
    </div>
  )
}

export default ShopCategory
