import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { FiX, FiCheckCircle, FiTruck, FiCreditCard, FiDollarSign, FiSmartphone, FiShield, FiPrinter } from "react-icons/fi";
import "./CheckoutModal.css";

const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    couponDiscountAmount,
    shippingFee,
    estimatedTax,
    orderFinalTotal,
    clearCart,
    appliedCoupon
  } = useShop();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: "Sachin Kumar",
    email: "sachinank2007@gmail.com",
    phone: "+91 90654 58334",
    address: "B-402, Skyline Residency, Sector 62",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    paymentMethod: "upi" // 'upi' | 'card' | 'cod'
  });

  const [orderSummary, setOrderSummary] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrderId = `ORD-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
      const placedOrder = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        items: [...cart],
        customer: { ...formData },
        subtotal: cartSubtotal,
        discount: couponDiscountAmount,
        shipping: shippingFee,
        tax: estimatedTax,
        total: orderFinalTotal,
        paymentMethod: formData.paymentMethod.toUpperCase()
      };

      setOrderSummary(placedOrder);
      clearCart();
      setIsProcessing(false);
      setStep(3);
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card checkout-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          <FiX />
        </button>

        {/* Steps Tracker */}
        {step < 3 && (
          <div className="checkout-stepper">
            <div className={`step-item ${step >= 1 ? "active" : ""}`}>
              <span className="step-num">1</span>
              <span className="step-label">Shipping Address</span>
            </div>
            <div className="step-line"></div>
            <div className={`step-item ${step >= 2 ? "active" : ""}`}>
              <span className="step-num">2</span>
              <span className="step-label">Payment</span>
            </div>
          </div>
        )}

        {/* STEP 1: Shipping Address */}
        {step === 1 && (
          <div className="checkout-step-content">
            <h2 className="step-title">
              <FiTruck /> Shipping Information
            </h2>
            <p className="step-subtitle">Where should we deliver your order?</p>

            <form onSubmit={handleShippingSubmit} className="checkout-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="yourname@domain.com"
                />
              </div>

              <div className="form-group">
                <label>Street Address / Flat / Landmark *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House / Flat No., Street, Area"
                />
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength="6"
                    value={formData.pincode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="checkout-order-mini-summary">
                <span>Items ({cart.length}) Total to Pay:</span>
                <strong>₹{orderFinalTotal.toLocaleString("en-IN")}</strong>
              </div>

              <button type="submit" className="btn-primary-gradient w-full">
                Continue to Payment →
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: Payment Method */}
        {step === 2 && (
          <div className="checkout-step-content">
            <h2 className="step-title">
              <FiCreditCard /> Select Payment Method
            </h2>
            <p className="step-subtitle">100% Encrypted & Secure Transactions</p>

            <form onSubmit={handlePaymentSubmit} className="checkout-form">
              <div className="payment-options-grid">
                <label className={`payment-option ${formData.paymentMethod === "upi" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={handleInputChange}
                  />
                  <div className="option-info">
                    <FiSmartphone className="opt-icon" />
                    <div>
                      <strong>Instant UPI / QR Code</strong>
                      <p>Google Pay, PhonePe, Paytm & BHIM</p>
                    </div>
                  </div>
                </label>

                <label className={`payment-option ${formData.paymentMethod === "card" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                  />
                  <div className="option-info">
                    <FiCreditCard className="opt-icon" />
                    <div>
                      <strong>Credit / Debit Card</strong>
                      <p>Visa, MasterCard, RuPay, Amex</p>
                    </div>
                  </div>
                </label>

                <label className={`payment-option ${formData.paymentMethod === "cod" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                  />
                  <div className="option-info">
                    <FiDollarSign className="opt-icon" />
                    <div>
                      <strong>Cash on Delivery (COD)</strong>
                      <p>Pay upon delivery at your doorstep</p>
                    </div>
                  </div>
                </label>
              </div>

              {formData.paymentMethod === "upi" && (
                <div className="upi-demo-box">
                  <span className="upi-badge">⚡ Instant Verification</span>
                  <p>UPI ID: <strong>sachin.kumar@okaxis</strong></p>
                </div>
              )}

              {/* Price Breakdown in Checkout */}
              <div className="checkout-bill-card">
                <div className="bill-row">
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString("en-IN")}</span>
                </div>
                {couponDiscountAmount > 0 && (
                  <div className="bill-row discount">
                    <span>Coupon Savings ({appliedCoupon?.code})</span>
                    <span>-₹{couponDiscountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="bill-row">
                  <span>Delivery Fee</span>
                  <span>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
                </div>
                <div className="bill-row">
                  <span>Taxes & Fees (5%)</span>
                  <span>₹{estimatedTax.toLocaleString("en-IN")}</span>
                </div>
                <div className="bill-row total">
                  <span>Grand Total</span>
                  <span>₹{orderFinalTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="form-actions-row">
                <button
                  type="button"
                  className="btn-back"
                  onClick={() => setStep(1)}
                  disabled={isProcessing}
                >
                  ← Back to Address
                </button>
                <button
                  type="submit"
                  className="btn-primary-gradient flex-1"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Authorizing Payment..." : `Pay ₹${orderFinalTotal.toLocaleString("en-IN")}`}
                </button>
              </div>

              <div className="security-tag">
                <FiShield /> 256-Bit SSL Bank Grade Encryption
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Order Success & Printable Receipt */}
        {step === 3 && orderSummary && (
          <div className="checkout-success-view">
            <div className="success-icon-wrapper">
              <FiCheckCircle className="order-check-icon" />
            </div>

            <h2>Order Placed Successfully!</h2>
            <p className="success-order-msg">
              Thank you, <strong>{orderSummary.customer.fullName}</strong>. Your order is confirmed and being prepared!
            </p>

            <div className="receipt-box" id="printable-receipt">
              <div className="receipt-header">
                <div>
                  <h3 className="receipt-brand">ShopEase Store</h3>
                  <p className="receipt-order-id">Order ID: <strong>{orderSummary.orderId}</strong></p>
                </div>
                <div className="receipt-date">
                  <span>Date: {orderSummary.date}</span>
                  <span className="badge badge-success">Paid via {orderSummary.paymentMethod}</span>
                </div>
              </div>

              <div className="receipt-address-box">
                <p><strong>Deliver To:</strong> {orderSummary.customer.fullName} ({orderSummary.customer.phone})</p>
                <p>{orderSummary.customer.address}, {orderSummary.customer.city}, {orderSummary.customer.state} - {orderSummary.customer.pincode}</p>
              </div>

              <div className="receipt-items-list">
                {orderSummary.items.map((item) => (
                  <div key={item.id} className="receipt-item-row">
                    <div className="item-name-qty">
                      <img src={item.image} alt={item.name} className="receipt-thumb" />
                      <span>{item.name} × {item.quantity}</span>
                    </div>
                    <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                  </div>
                ))}
              </div>

              <div className="receipt-total-footer">
                <div className="r-row">
                  <span>Subtotal:</span>
                  <span>₹{orderSummary.subtotal.toLocaleString("en-IN")}</span>
                </div>
                {orderSummary.discount > 0 && (
                  <div className="r-row discount">
                    <span>Discount:</span>
                    <span>-₹{orderSummary.discount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="r-row">
                  <span>Delivery:</span>
                  <span>{orderSummary.shipping === 0 ? "FREE" : `₹${orderSummary.shipping}`}</span>
                </div>
                <div className="r-row grand-total">
                  <span>Total Amount:</span>
                  <span>₹{orderSummary.total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div className="success-actions">
              <button
                className="btn-print-receipt"
                onClick={() => window.print()}
              >
                <FiPrinter /> Print Receipt
              </button>
              <button
                className="btn-primary-gradient"
                onClick={handleClose}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
