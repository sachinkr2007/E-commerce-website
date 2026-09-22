import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductsCard from "../Components/ProductsCard";
import {
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiTruck,
  FiAward,
  FiStar,
  FiClock,
  FiCheckCircle
} from "react-icons/fi";
import "./Pages.css";

const Home = () => {
  const { products, setSelectedCategory, setQuickViewProduct } = useShop();
  const [activeTab, setActiveTab] = useState("All");

  // Countdown timer for Deal of the Day
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categoriesList = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80", count: "4 Products" },
    { name: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80", count: "3 Products" },
    { name: "Wearables", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=80", count: "2 Products" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80", count: "3 Products" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=80", count: "3 Products" },
    { name: "Home & Office", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80", count: "3 Products" }
  ];

  const filteredProducts = activeTab === "All"
    ? products.slice(0, 8)
    : products.filter((p) => p.category === activeTab).slice(0, 8);

  const dealProduct = products.find((p) => p.id === 1) || products[0];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="app-container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <FiZap className="badge-zap-icon" />
              <span>New Spring 2026 Collection Live</span>
            </div>

            <h1 className="hero-title">
              Engineered For Excellence. <br />
              <span className="gradient-text">Designed For You.</span>
            </h1>

            <p className="hero-description">
              Experience the pinnacle of audio, computing, fashion, and lifestyle essentials. Authentic products with warranty, best price guarantee, and pan-India express delivery.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn-hero-primary">
                Explore Catalog <FiArrowRight />
              </Link>
              <Link to="/about" className="btn-hero-secondary">
                Why ShopEase?
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="hero-metrics">
              <div className="metric-item">
                <strong>50K+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <strong>100%</strong>
                <span>Genuine Brands</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <strong>4.9 ★</strong>
                <span>Overall Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Deal Spotlight */}
          <div className="hero-spotlight-card">
            <div className="spotlight-card-inner">
              <div className="spotlight-badge-row">
                <span className="badge badge-danger">⚡ Flash Deal</span>
                <span className="badge badge-primary">{dealProduct.discount}% OFF</span>
              </div>

              <img
                src={dealProduct.image}
                alt={dealProduct.name}
                className="spotlight-img"
              />

              <div className="spotlight-details">
                <span className="spotlight-cat">{dealProduct.category}</span>
                <h3 className="spotlight-name">{dealProduct.name}</h3>

                <div className="spotlight-pricing">
                  <span className="sp-price">₹{dealProduct.price.toLocaleString("en-IN")}</span>
                  <span className="sp-orig">₹{dealProduct.originalPrice.toLocaleString("en-IN")}</span>
                </div>

                {/* Countdown Timer */}
                <div className="countdown-box">
                  <span className="timer-label"><FiClock /> Deal ends in:</span>
                  <div className="timer-digits">
                    <span className="digit-unit">{String(timeLeft.hours).padStart(2, '0')}h</span> :
                    <span className="digit-unit">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
                    <span className="digit-unit highlight">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>

                <button
                  className="btn-spotlight-view"
                  onClick={() => setQuickViewProduct(dealProduct)}
                >
                  Quick View & Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="categories-section">
        <div className="app-container">
          <div className="section-header">
            <div>
              <span className="section-tag">Browse Collections</span>
              <h2 className="section-title">Shop by Category</h2>
            </div>
            <Link to="/products" className="section-view-all">
              All Categories <FiArrowRight />
            </Link>
          </div>

          <div className="categories-grid">
            {categoriesList.map((cat, idx) => (
              <Link
                key={idx}
                to="/products"
                onClick={() => setSelectedCategory(cat.name)}
                className="category-card"
              >
                <img src={cat.image} alt={cat.name} className="cat-card-img" />
                <div className="cat-card-overlay">
                  <h3>{cat.name}</h3>
                  <span>{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured & Trending Products Showcase */}
      <section className="featured-products-section">
        <div className="app-container">
          <div className="section-header">
            <div>
              <span className="section-tag">Curated Picks</span>
              <h2 className="section-title">Trending Best Sellers</h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="filter-tabs">
              {["All", "Electronics", "Audio", "Fashion", "Wearables"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>

          <div className="explore-more-box">
            <Link to="/products" className="btn-explore-more">
              View All {products.length} Products in Catalog <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="trust-banner-section">
        <div className="app-container">
          <div className="trust-banner-card">
            <div className="trust-item">
              <div className="trust-icon-box"><FiTruck /></div>
              <div>
                <h4>Express Nationwide Delivery</h4>
                <p>Delivered to 19,000+ PIN codes across India within 2-4 business days.</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-box"><FiShield /></div>
              <div>
                <h4>Bank-Grade 256-bit Security</h4>
                <p>100% safe checkout with UPI, Cards, NetBanking, and COD options.</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-box"><FiAward /></div>
              <div>
                <h4>Official Brand Warranty</h4>
                <p>Every product is backed with authentic manufacturer warranty coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <div className="app-container">
          <div className="section-header text-center">
            <span className="section-tag">Loved By Customers</span>
            <h2 className="section-title">What Our Shoppers Say</h2>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="review-text">
                "Ordered the Sony WH-1000XM5 headphones. Delivered within 48 hours in perfect packaging. Sound quality is breathtaking and genuine Indian warranty included!"
              </p>
              <div className="review-user">
                <div className="user-avatar">AK</div>
                <div>
                  <strong>Aman Kapoor</strong>
                  <span className="verified-user"><FiCheckCircle /> Verified Buyer • New Delhi</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="review-text">
                "ShopEase UI is buttery smooth. Used coupon code SAVE10 and got an instant discount. The checkout and order tracking was totally effortless. Top notch!"
              </p>
              <div className="review-user">
                <div className="user-avatar">PS</div>
                <div>
                  <strong>Priya Sharma</strong>
                  <span className="verified-user"><FiCheckCircle /> Verified Buyer • Bengaluru</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="review-text">
                "Bought Nike Air Max and Levi's Jacket. Genuine fit and premium quality. Kudos to Sachin Kumar and the engineering team for building such a clean platform."
              </p>
              <div className="review-user">
                <div className="user-avatar">RV</div>
                <div>
                  <strong>Rahul Verma</strong>
                  <span className="verified-user"><FiCheckCircle /> Verified Buyer • Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;