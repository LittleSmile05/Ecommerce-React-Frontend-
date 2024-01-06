import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                 
                  <ShopWithHeader />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer/>
      </ShopContextProvider>
     
    </div>
  );
}


function ShopWithHeader() {
  const navigate = useNavigate();


  const shouldShowHeader = () => {
    const currentPath = window.location.pathname;
    return currentPath === "/";
  };

  return (
    <>
      {shouldShowHeader() && <Header />}
      <Shop />
    </>
  );
}

export default App;
