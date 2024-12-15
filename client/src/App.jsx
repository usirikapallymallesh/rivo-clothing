import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import ClothingServices from "./pages/ClothingServices";
import Contact from "./pages/Contact";
import ShoppingCart from "./pages/ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
// import ProductPage from "./pages/ProductPage";
import ProductCollection from "./pages/ProductCollection ";
// import Product from "./pages/ProductDetails";
// import ProductDetails from "./pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route
            exact
            path="/clothing-services"
            element={<ClothingServices />}
          />
          <Route
            exact
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          {/* <Route exact path="/product/:id" element={<ProductPage />} /> */}
          <Route
            exact
            path="/collections"
            element={<ProductCollection />}
          />
          {/* <Route exact path="/products/:id" element={<ProductDetails/>} /> */}
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
