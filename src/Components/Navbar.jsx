import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { FiShoppingBag, FiHeart, FiSearch, FiMenu, FiX, FiArrowRight, FiPercent } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const {
    totalCartItems,
    wishlist,
    searchQuery,
    setSearchQuery,
    products,
    setQuickViewProduct
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Filtered live search suggestions
  const searchSuggestions = searchQuery.trim() === ""
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchDropdown(false);
      navigate("/products");
    }
  };

  const handleSelectSuggestion = (product) => {
    setShowSearchDropdown(false);
    setSearchQuery("");
    setQuickViewProduct(product);
  };

  return (
    <header className="navbar-wrapper">
      {/* Top promotional announcement bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>
            🔥 <strong>MEGA SALE:</strong> Get extra 10% OFF with code <strong>SAVE10</strong> | Free Express Shipping on orders above ₹1,500!
          </span>
        </div>
      </div>

      <nav className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-logo-icon">
            <FiShoppingBag />
          </div>
          <div className="brand-text">
            <span className="brand-title">Shop<span className="brand-highlight">Ease</span></span>
            <span className="brand-tagline">PREMIUM STORE</span>
          </div>
        </Link>

        {/* Search Bar with live autocomplete dropdown */}
        <div className="navbar-search" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="search-form">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products, brands, electronics..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
              >
                <FiX />
              </button>
            )}
          </form>

          {/* Autocomplete Dropdown */}
          {showSearchDropdown && searchSuggestions.length > 0 && (
            <div className="search-dropdown-menu">
              <div className="dropdown-header">Top Results</div>
              {searchSuggestions.map((item) => (
                <div
                  key={item.id}
                  className="dropdown-item"
                  onClick={() => handleSelectSuggestion(item)}
                >
                  <img src={item.image} alt={item.name} className="dropdown-item-img" />
                  <div className="dropdown-item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-category">{item.category} • ₹{item.price.toLocaleString("en-IN")}</span>
                  </div>
                  <FiArrowRight className="dropdown-arrow" />
                </div>
              ))}
              <div
                className="dropdown-footer"
                onClick={() => {
                  setShowSearchDropdown(false);
                  navigate("/products");
                }}
              >
                View all results for "{searchQuery}"
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Catalog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact
          </NavLink>
        </div>

        {/* Navbar Action Icons (Wishlist & Cart) */}
        <div className="navbar-actions">
          <Link to="/wishlist" className="action-btn" title="Wishlist">
            <FiHeart className="action-icon" />
            {wishlist.length > 0 && (
              <span className="action-badge badge-rose">{wishlist.length}</span>
            )}
          </Link>

          <Link to="/cart" className="action-btn cart-action-btn" title="View Cart">
            <FiShoppingBag className="action-icon" />
            {totalCartItems > 0 && (
              <span className="action-badge badge-primary-pulse">{totalCartItems}</span>
            )}
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-search-wrapper">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <div className="mobile-nav-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              Catalog & Products
            </Link>
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>
              Wishlist ({wishlist.length})
            </Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              Cart ({totalCartItems})
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;