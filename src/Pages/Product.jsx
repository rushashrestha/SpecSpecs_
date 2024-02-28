
import React from 'react';
import  { useContext } from 'react';
import ShopContext from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
  const {allproducts} = useContext(ShopContext);
  const {productID} = useParams();
  const product = allproducts.find((e)=> e.id === Number(productID))
  return (
    <div>
      <ProductDisplay product={allproducts}/>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
