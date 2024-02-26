import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'

const ShopCategory = (props) => {
    const{allproducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      
      

      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
