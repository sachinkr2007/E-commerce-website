import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductsCard from "../Components/ProductsCard";
import { FiHeart, FiArrowRight, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import "./Pages.css";

const Wishlist = () => {
  const { wishlist, addToCart, toggleWishlist, showToast } = useShop();

  const handleMoveAllToCart = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach((item) => {
      addToCart(item, 1);
    });
    showToast(`Moved all ${wishlist.length} items to your Cart!`, "success");
  };

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page empty-wishlist-page">
        <div className="app-container">
          <div className="empty-cart-card">
            <div className="empty-cart-icon wishlist-icon-empty">
              <FiHeart />
            </div>
            <h2>Your Wishlist is Empty</h2>
            <p>Save items you love by clicking the heart icon on any product card!</p>
            <Link to="/products" className="btn-primary-gradient">
              Explore Catalog <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="app-container">
        {/* Wishlist Header */}
        <div className="wishlist-header">
          <div>
            <span className="section-tag">Saved Favorites</span>
            <h1 className="wishlist-title">My Wishlist</h1>
            <p className="wishlist-subtitle">
              You have {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved for later.
            </p>
          </div>

          <button className="btn-move-all-cart" onClick={handleMoveAllToCart}>
            <FiShoppingCart /> Move All to Cart
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="products-grid wishlist-grid">
          {wishlist.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
