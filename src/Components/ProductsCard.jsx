import React from "react";
import { useShop } from "../context/ShopContext";
import { FiHeart, FiEye, FiShoppingCart, FiStar, FiCheck } from "react-icons/fi";
import "./ProductCard.css";

const ProductsCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, cart } = useShop();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const cartItem = cart.find((item) => item.id === product.id);
  const inCart = !!cartItem;

  return (
    <div className="product-card">
      {/* Badges & Floating Actions */}
      <div className="card-top-badges">
        {product.discount > 0 && (
          <span className="card-discount-badge">{product.discount}% OFF</span>
        )}
        {product.badge && (
          <span className="card-featured-badge">{product.badge}</span>
        )}
      </div>

      <div className="card-floating-actions">
        <button
          className={`floating-btn ${inWishlist ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <FiHeart />
        </button>

        <button
          className="floating-btn"
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          title="Quick View"
          aria-label="Quick View"
        >
          <FiEye />
        </button>
      </div>

      {/* Product Image */}
      <div
        className="product-image-box"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80";
          }}
        />
        <div className="image-overlay-view">
          <span>Quick View</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-details">
        <div className="card-category-brand">
          <span className="card-brand">{product.brand}</span>
          <span className="card-category">{product.category}</span>
        </div>

        <h3
          className="product-title"
          title={product.name}
          onClick={() => setQuickViewProduct(product)}
        >
          {product.name}
        </h3>

        {/* Rating Stars & Count */}
        <div className="product-rating">
          <div className="stars-wrapper">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`star-icon ${
                  i < Math.floor(product.rating) ? "filled" : ""
                }`}
              />
            ))}
          </div>
          <span className="rating-val">{product.rating}</span>
          <span className="rating-count">({product.reviewsCount})</span>
        </div>

        {/* Price Structure */}
        <div className="product-pricing">
          <div className="price-values">
            <span className="current-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`card-add-btn ${inCart ? "already-in-cart" : ""}`}
          onClick={() => addToCart(product, 1)}
        >
          {inCart ? (
            <>
              <FiCheck /> In Cart ({cartItem.quantity})
            </>
          ) : (
            <>
              <FiShoppingCart /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;