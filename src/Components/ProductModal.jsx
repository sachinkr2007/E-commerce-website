import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { FiX, FiShoppingCart, FiHeart, FiStar, FiCheck, FiShield, FiTruck, FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./ProductModal.css";

const ProductModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  if (!quickViewProduct) return null;

  const handleClose = () => {
    setQuickViewProduct(null);
    setQty(1);
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, qty);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, qty);
    handleClose();
    navigate("/cart");
  };

  const inWishlist = isInWishlist(quickViewProduct.id);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card product-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className="product-modal-grid">
          {/* Image Showcase */}
          <div className="modal-image-col">
            <div className="modal-badge-wrapper">
              {quickViewProduct.badge && (
                <span className="badge badge-primary modal-badge">{quickViewProduct.badge}</span>
              )}
              {quickViewProduct.discount > 0 && (
                <span className="badge badge-danger modal-badge">
                  {quickViewProduct.discount}% OFF
                </span>
              )}
            </div>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="modal-product-image"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Details Column */}
          <div className="modal-info-col">
            <div className="modal-category-brand">
              <span className="modal-brand">{quickViewProduct.brand || "ShopEase Exclusive"}</span>
              <span className="modal-category-tag">{quickViewProduct.category}</span>
            </div>

            <h2 className="modal-product-title">{quickViewProduct.name}</h2>

            <div className="modal-rating-row">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`star-icon ${
                      i < Math.floor(quickViewProduct.rating) ? "filled" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="rating-score">{quickViewProduct.rating}</span>
              <span className="reviews-count">({quickViewProduct.reviewsCount.toLocaleString()} customer reviews)</span>
            </div>

            <div className="modal-price-box">
              <span className="modal-current-price">
                ₹{quickViewProduct.price.toLocaleString("en-IN")}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="modal-original-price">
                  ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {quickViewProduct.discount > 0 && (
                <span className="modal-savings">
                  Save ₹{(quickViewProduct.originalPrice - quickViewProduct.price).toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="modal-description">{quickViewProduct.description}</p>

            {/* Key Features */}
            {quickViewProduct.features && (
              <div className="modal-features-list">
                <h4>Highlights:</h4>
                <ul>
                  {quickViewProduct.features.map((feat, idx) => (
                    <li key={idx}>
                      <FiCheck className="feat-check-icon" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stock status */}
            <div className="modal-stock-status">
              <span className="stock-dot"></span>
              {quickViewProduct.stock > 0 ? (
                <span>
                  In Stock ({quickViewProduct.stock} units ready to ship)
                </span>
              ) : (
                <span className="out-of-stock">Currently Out of Stock</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="modal-actions-wrapper">
              <div className="qty-picker">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="qty-btn"
                >
                  -
                </button>
                <span className="qty-number">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(quickViewProduct.stock || 10, qty + 1))}
                  className="qty-btn"
                >
                  +
                </button>
              </div>

              <button
                className="btn-primary-gradient add-cart-btn"
                onClick={handleAddToCart}
              >
                <FiShoppingCart /> Add to Cart
              </button>

              <button
                className={`btn-wishlist-toggle ${inWishlist ? "active" : ""}`}
                onClick={() => toggleWishlist(quickViewProduct)}
                title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <FiHeart />
              </button>
            </div>

            <button className="btn-buy-now" onClick={handleBuyNow}>
              Buy Now with Instant Checkout
            </button>

            {/* Value Guarantees */}
            <div className="modal-guarantees">
              <div className="guarantee-item">
                <FiTruck /> Free Shipping
              </div>
              <div className="guarantee-item">
                <FiRefreshCw /> 7 Days Replacement
              </div>
              <div className="guarantee-item">
                <FiShield /> 1 Year Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
