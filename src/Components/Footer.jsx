import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import {
  FiShoppingBag,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiHeadphones,
  FiGithub
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const { showToast } = useShop();
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      showToast("Please enter a valid email address", "warning");
      return;
    }
    showToast("Thank you for subscribing to ShopEase updates!", "success");
    setEmailInput("");
  };

  return (
    <footer className="footer-root">
      {/* Top Value Proposition Grid */}
      <div className="footer-perks-bar">
        <div className="app-container">
          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon-wrap"><FiTruck /></div>
              <div>
                <h4>Fast & Free Delivery</h4>
                <p>On all prepaid orders over ₹1,500</p>
              </div>
            </div>
            <div className="perk-card">
              <div className="perk-icon-wrap"><FiShield /></div>
              <div>
                <h4>100% Genuine Products</h4>
                <p>Direct from verified brand partners</p>
              </div>
            </div>
            <div className="perk-card">
              <div className="perk-icon-wrap"><FiRefreshCw /></div>
              <div>
                <h4>7 Days Easy Returns</h4>
                <p>Hassle-free replacement policy</p>
              </div>
            </div>
            <div className="perk-card">
              <div className="perk-icon-wrap"><FiHeadphones /></div>
              <div>
                <h4>24/7 Priority Support</h4>
                <p>Dedicated customer assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="footer-main-section">
        <div className="app-container">
          <div className="footer-columns-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-brand">
                <div className="brand-logo-icon">
                  <FiShoppingBag />
                </div>
                <div className="brand-text">
                  <span className="brand-title">Shop<span className="brand-highlight">Ease</span></span>
                  <span className="brand-tagline">PREMIUM STORE</span>
                </div>
              </Link>
              <p className="footer-about-text">
                Your premier destination for high-performance electronics, curated fashion, and smart lifestyle accessories. Delivering quality, warranty, and customer satisfaction across India.
              </p>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="footer-col">
              <h3 className="col-title">Quick Links</h3>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Support</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Care & Policies */}
            <div className="footer-col">
              <h3 className="col-title">Customer Care</h3>
              <ul className="footer-nav-list">
                <li><Link to="/contact">Track Order</Link></li>
                <li><Link to="/about">Shipping Policy</Link></li>
                <li><Link to="/about">Returns & Refund</Link></li>
                <li><Link to="/about">Terms of Service</Link></li>
                <li><Link to="/about">Privacy Policy</Link></li>
                <li><Link to="/contact">FAQs</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className="footer-col contact-col">
              <h3 className="col-title">Contact Us</h3>
              <div className="footer-contact-items">
                <a href="mailto:sachinank2007@gmail.com" className="contact-link">
                  <FiMail className="c-icon" />
                  <span>sachinank2007@gmail.com</span>
                </a>
                <a href="tel:+919065458334" className="contact-link">
                  <FiPhone className="c-icon" />
                  <span>+91 90654 58334</span>
                </a>
                <div className="contact-link static">
                  <FiMapPin className="c-icon" />
                  <span>Sector 62, Noida, NCR, India</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter-box">
                <h4>Join Our Newsletter</h4>
                <p>Get exclusive discounts and new product drops.</p>
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Bar with Simple Clickable Developer Link */}
      <div className="footer-bottom-signature-bar">
        <div className="app-container footer-bottom-flex">
          <div className="copyright-notice">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </div>

          <div className="developer-signature-text">
            Designed and maintained by{" "}
            <a
              href="https://github.com/sachinkr2007/E-commerce-website"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-signature-link"
            >
              Sachin Kumar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;