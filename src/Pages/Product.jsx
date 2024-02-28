import React from 'react'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import allproducts from '../Components/Assets/allproducts'

const Product = () => {
  
  return (
    <div>
      <ProductDisplay product={allproducts}/>
    </div>
  )
}

export default Product
