import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import {
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
  FiTag,
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiPercent,
  FiX
} from "react-icons/fi";
import "./Pages.css";

const Cart = () => {
  const {
    cart,
    totalCartItems,
    cartSubtotal,
    cartOriginalTotal,
    productDiscountSavings,
    couponDiscountAmount,
    appliedCoupon,
    couponError,
    shippingFee,
    freeShippingThreshold,
    estimatedTax,
    orderFinalTotal,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen
  } = useShop();

  const [couponCodeInput, setCouponCodeInput] = useState("");

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCodeInput.trim()) return;
    const success = applyCoupon(couponCodeInput);
    if (success) {
      setCouponCodeInput("");
    }
  };

  // Free shipping progress calculation
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart-page">
        <div className="app-container">
          <div className="empty-cart-card">
            <div className="empty-cart-icon">
              <FiShoppingBag />
            </div>
            <h2>Your Shopping Cart is Empty</h2>
            <p>Looks like you haven't added any premium gadgets or apparel to your bag yet.</p>
            <div className="empty-cart-actions">
              <Link to="/products" className="btn-primary-gradient">
                Explore Catalog <FiArrowRight />
              </Link>
              <Link to="/wishlist" className="btn-secondary-outline">
                Check Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="app-container">
        {/* Cart Header */}
        <div className="cart-header">
          <div>
            <span className="section-tag">Review Your Items</span>
            <h1 className="cart-title">Shopping Cart</h1>
          </div>
          <span className="cart-items-badge">
            {totalCartItems} {totalCartItems === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="shipping-progress-banner">
          <div className="progress-info">
            <FiTruck className="truck-icon" />
            {amountToFreeShipping > 0 ? (
              <span>
                Add <strong>₹{amountToFreeShipping.toLocaleString("en-IN")}</strong> more to unlock <strong>FREE Express Delivery</strong>!
              </span>
            ) : (
              <span className="free-unlocked">
                <FiCheckCircle /> Congratulations! You've unlocked <strong>FREE Express Delivery</strong>!
              </span>
            )}
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${freeShippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Main Content Grid */}
        <div className="cart-layout-grid">
          {/* Left Column: Cart Items List */}
          <div className="cart-items-column">
            <div className="cart-table-card">
              <div className="cart-table-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>

              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    {/* Product Info */}
                    <div className="item-info-cell">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-thumb"
                      />
                      <div className="cart-item-details">
                        <span className="cart-item-cat">{item.category}</span>
                        <h4 className="cart-item-name">{item.name}</h4>
                        <span className="cart-item-brand">{item.brand}</span>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="item-price-cell">
                      <span className="unit-price">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      {item.originalPrice && (
                        <span className="unit-orig-price">
                          ₹{item.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    {/* Quantity Picker */}
                    <div className="item-qty-cell">
                      <div className="cart-qty-picker">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="cart-qty-btn"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="cart-qty-val">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="cart-qty-btn"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Line Item Subtotal */}
                    <div className="item-total-cell">
                      <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                    </div>

                    {/* Delete Button */}
                    <div className="item-remove-cell">
                      <button
                        className="btn-remove-item"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer Actions */}
              <div className="cart-table-actions">
                <Link to="/products" className="btn-continue-shopping">
                  ← Continue Shopping
                </Link>
                <button className="btn-clear-cart" onClick={clearCart}>
                  <FiTrash2 /> Clear Entire Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="cart-summary-column">
            <div className="order-summary-card">
              <h3 className="summary-title">Order Summary</h3>

              {/* Promo Coupon Form */}
              <div className="coupon-section">
                <label className="coupon-label">
                  <FiTag /> Have a Promotional Code?
                </label>
                {appliedCoupon ? (
                  <div className="active-coupon-badge">
                    <div className="applied-coupon-info">
                      <FiCheckCircle className="check-icon" />
                      <div>
                        <strong>{appliedCoupon.code}</strong>
                        <p>{appliedCoupon.description}</p>
                      </div>
                    </div>
                    <button
                      className="btn-remove-coupon"
                      onClick={removeCoupon}
                      title="Remove coupon"
                    >
                      <FiX />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="coupon-form">
                    <input
                      type="text"
                      placeholder="e.g. SAVE10 or SACHIN500"
                      value={couponCodeInput}
                      onChange={(e) => setCouponCodeInput(e.target.value)}
                    />
                    <button type="submit" className="btn-apply-coupon">
                      Apply
                    </button>
                  </form>
                )}
                {couponError && <p className="coupon-error-msg">{couponError}</p>}
                <div className="coupon-suggestions">
                  <span>Try: <strong>SAVE10</strong> (10% OFF) or <strong>SACHIN500</strong></span>
                </div>
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="summary-breakdown">
                <div className="breakdown-row">
                  <span>Bag Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString("en-IN")}</span>
                </div>

                {productDiscountSavings > 0 && (
                  <div className="breakdown-row savings">
                    <span>Retail Catalog Discount</span>
                    <span>-₹{productDiscountSavings.toLocaleString("en-IN")}</span>
                  </div>
                )}

                {couponDiscountAmount > 0 && (
                  <div className="breakdown-row coupon-savings">
                    <span>Coupon Discount ({appliedCoupon.code})</span>
                    <span>-₹{couponDiscountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="breakdown-row">
                  <span>Estimated Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-free">FREE</strong> : `₹${shippingFee}`}</span>
                </div>

                <div className="breakdown-row">
                  <span>Estimated Tax & GST (5%)</span>
                  <span>₹{estimatedTax.toLocaleString("en-IN")}</span>
                </div>

                <div className="breakdown-divider"></div>

                <div className="breakdown-row grand-total-row">
                  <span>Total Amount</span>
                  <span className="grand-total-val">
                    ₹{orderFinalTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                className="btn-primary-gradient btn-checkout-action"
                onClick={() => setIsCheckoutOpen(true)}
              >
                Proceed to Checkout ({totalCartItems} items) <FiArrowRight />
              </button>

              {/* Trust Indicators */}
              <div className="cart-security-badges">
                <div className="sec-item">
                  <FiShield /> 256-bit Secure Encryption
                </div>
                <div className="sec-item">
                  <FiCheckCircle /> 7 Days Replacement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;