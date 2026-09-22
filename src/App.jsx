import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import CheckoutModal from "./Components/CheckoutModal";
import Toast from "./Components/Toast";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Helper component to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ShopProvider>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />

      {/* Global Overlays & Notifications */}
      <ProductModal />
      <CheckoutModal />
      <Toast />
    </ShopProvider>
  );
};

export default App;