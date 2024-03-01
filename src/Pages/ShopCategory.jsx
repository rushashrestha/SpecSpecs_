import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  console.log(useContext(ShopContext),"abc")
    const{allproducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='top'>
      <div className='banner-left'>
      <p>Get your </p>
      <p><h6>Spectacular Spectacles</h6></p>
      <p>On Special <h2>Discount</h2> offers</p>
      </div> 
      <div className='shopcategory-banner'>
      <img src={props.banner} alt="image" />
      </div>
      </div>
      
      
      <div className="shopcategory-indexSort">
      </div>
      <div className="shopcategory-product">
        {allproducts.map((item,i)=>{
          if (props.category===item.category){
             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
