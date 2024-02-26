import React from 'react'
import './Popular.css'
import products from '../Assets/products'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR PPRODUCTS</h1>
        <hr/>
        <div className="popular-item">
            {products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.price}/>
           
           })}
        </div>



      
    </div>
  )
}

export default Popular
