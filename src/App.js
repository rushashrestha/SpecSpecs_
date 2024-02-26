
import './App.css';

import { useEffect, useState } from "react";

import Loader from './Components/Loader/loading';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
<<<<<<< HEAD
import Popular from './Components/Popular/Popular';
=======
import LoginSignup from './Components/Login/LoginSignup';


>>>>>>> f419b10317cce80019ca889185164b770225fc42

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
      < Route path='/mens' element={<ShopCategory category='men'/>}/>
      < Route path='/womens' element={<ShopCategory category='women'/>}/>
      < Route path='/kids' element={<ShopCategory category='kid'/>}/>
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
