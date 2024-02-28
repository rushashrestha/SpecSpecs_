
import './App.css';

import { useEffect, useState } from "react";

import Loader from './Components/Loader/loading';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';import Shop from './Pages/Shop';

import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Components/Login/LoginSignup';
import Footer from './Components/Footer/Footer';



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
      
      <Route path="/product" element={<Product/>}>
        <Route path=':productID' element={<Product/>}/>
      </Route>
      < Route path='/cart' element={<Cart/>}/>
      < Route path='/login' element={<LoginSignup/>}/>
      
       
    </Routes>
    
    <Footer/>

    </BrowserRouter>
    

  
   
  

    </div>
    
  );
}

export default App;
