import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/loading";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Components/Login/LoginSignup";
import Footer from "./Components/Footer/Footer";
import vision_banner from "./Components/Assets/Categories/visionmod1.jpg";
import sports_banner from "./Components/Assets/Categories/sportsmod1.jpg";
import suns_banner from "./Components/Assets/Categories/sunmod1.jpg";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import OrderConfirmation from "./Components/Assets/CartItems/OrderConfirmation";
import PaymentSuccess from "./Components/Assets/CartItems/PaymentSuccess";
import PaymentFailure from "./Components/Assets/CartItems/PaymentFailure";
import { AuthProvider } from "./Context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import { Navigate } from "react-router-dom";



function App() {
  const [showLoader, setShowLoader] =
   useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  if (showLoader) {
    return <Loader />;
  }
  const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    return user ? children : <Navigate to="/Login" />;
  };

  return (
    <AuthProvider>
      <div>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/" element={<Shop />}></Route>
            <Route
              path="/vision"
              element={
                <ShopCategory banner={vision_banner} category="Vision" />
              }
            />
            <Route
              path="/sports"
              element={
                <ShopCategory banner={sports_banner} category="Sports" />
              }
            />
            <Route
              path="/sunglass"
              element={
                <ShopCategory banner={suns_banner} category="Sunglasses" />
              }
            />
            <Route path="/product/:productID" element={<ProductDisplay />} />
            <Route path="/cart" element={
              <PrivateRoute><Cart /></PrivateRoute>
              } />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
          <Footer />
    
      </div>
    </AuthProvider>
  );
}

export default App;
