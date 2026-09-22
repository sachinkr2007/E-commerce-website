import React, { useState, useMemo } from "react";
import { useShop } from "../context/ShopContext";
import ProductsCard from "../Components/ProductsCard";
import { categories } from "../data/products";
import { FiSearch, FiSliders, FiX, FiRefreshCw, FiGrid, FiCheck } from "react-icons/fi";
import "./Pages.css";

const Products = () => {
  const {
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useShop();

  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'discount'
  const [priceRange, setPriceRange] = useState(150000);
  const [minRating, setMinRating] = useState(0);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Search filter
        const matchesSearch =
          searchQuery.trim() === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter
        const matchesCategory =
          selectedCategory === "All" || product.category === selectedCategory;

        // Price filter
        const matchesPrice = product.price <= priceRange;

        // Rating filter
        const matchesRating = product.rating >= minRating;

        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "discount") return (b.discount || 0) - (a.discount || 0);
        return a.id - b.id; // default featured
      });
  }, [products, searchQuery, selectedCategory, priceRange, minRating, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange(150000);
    setMinRating(0);
    setSortBy("featured");
  };

  const isFiltered =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    priceRange < 150000 ||
    minRating > 0 ||
    sortBy !== "featured";

  return (
    <div className="catalog-page">
      <div className="app-container">
        {/* Header Title */}
        <div className="catalog-header">
          <div>
            <span className="section-tag">Explore Everything</span>
            <h1 className="catalog-title">Product Catalog</h1>
            <p className="catalog-subtitle">
              Browse our curated collection of verified premium electronics, apparel, and lifestyle accessories.
            </p>
          </div>
          <div className="catalog-stats">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of {products.length} products
            </span>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="catalog-categories-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className="cat-count-badge">
                  {products.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Filters Controls Toolbar */}
        <div className="catalog-toolbar">
          <div className="search-filter-box">
            <FiSearch className="toolbar-search-icon" />
            <input
              type="text"
              placeholder="Search in catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-icon"
                onClick={() => setSearchQuery("")}
              >
                <FiX />
              </button>
            )}
          </div>

          <div className="toolbar-filters-row">
            {/* Price Range Slider Filter */}
            <div className="filter-slider-group">
              <label>
                Max Price: <strong>₹{priceRange.toLocaleString("en-IN")}</strong>
              </label>
              <input
                type="range"
                min="1000"
                max="150000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="price-range-slider"
              />
            </div>

            {/* Rating Filter */}
            <div className="filter-select-group">
              <label>Min Rating:</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="filter-select"
              >
                <option value={0}>All Ratings</option>
                <option value={4.5}>4.5 ★ & Above</option>
                <option value={4.7}>4.7 ★ & Above</option>
                <option value={4.8}>4.8 ★ & Above</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="filter-select-group">
              <label>Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="featured">Featured / Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>

            {/* Reset Button */}
            {isFiltered && (
              <button className="btn-reset-filters" onClick={handleResetFilters}>
                <FiRefreshCw /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid catalog-grid">
            {filteredProducts.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-catalog-state">
            <div className="empty-icon-wrap">🔍</div>
            <h3>No products found</h3>
            <p>
              We couldn't find any products matching your search criteria: "
              {searchQuery || selectedCategory}".
            </p>
            <button className="btn-primary-gradient" onClick={handleResetFilters}>
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;