
import './App.css';

import { useEffect, useState } from "react";

import Loader from './Components/Loader/loading';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Popular from './Components/Popular/Popular';
import LoginSignup from './Components/Login/LoginSignup';
import sports_banner from './Components/Assets/Categories/sportsmod1.jpg'
import suns_banner from './Components/Assets/Categories/sunmod1.jpg'
import vision_banner from './Components/Assets/Categories/visionmod1.jpg'


function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  if (showLoader) {
    return <Loader/>;
  }

  return (
    <div >
      
      <BrowserRouter>

     
    <Navbar/>
    
    <Routes>
    
      < Route path='/' element={<Shop/>}/>
      < Route path='/vision' element={<ShopCategory banner={vision_banner}category='Vision'/>}/>
    < Route path='/sports' element={<ShopCategory banner={sports_banner}category='Sports'/>}/>
      < Route path='/sunglass' element={<ShopCategory banner={suns_banner}category='Sunglasses'/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path=':productID' element={<Product/>}/>
      </Route>
      < Route path='/cart' element={<Cart/>}/>
      < Route path='/login' element={<LoginSignup/>}/>
      
       
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
