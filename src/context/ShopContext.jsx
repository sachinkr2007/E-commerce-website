import React, { createContext, useContext, useState, useEffect } from "react";
import { products, promotionalCoupons } from "../data/products";

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopease_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("shopease_wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  // Toast Notification state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" // 'success' | 'info' | 'warning' | 'error'
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal states
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("shopease_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("shopease_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  // Toast helper
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3200);
  };

  // Cart actions
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showToast(`Added ${quantity}x "${product.name.slice(0, 24)}..." to Cart!`, "success");
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cart.find((item) => item.id === productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    if (itemToRemove) {
      showToast(`Removed "${itemToRemove.name.slice(0, 20)}..." from Cart`, "info");
    }
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Wishlist actions
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from your Wishlist`, "info");
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added to your Wishlist ❤️`, "success");
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Coupon handling
  const applyCoupon = (code) => {
    const formattedCode = code.trim().toUpperCase();
    const foundCoupon = promotionalCoupons.find((c) => c.code === formattedCode);

    if (!foundCoupon) {
      setCouponError("Invalid coupon code! Try 'SAVE10' or 'SACHIN500'");
      showToast("Invalid Coupon Code", "error");
      return false;
    }

    if (cartSubtotal < foundCoupon.minOrder) {
      setCouponError(`Minimum order amount of ₹${foundCoupon.minOrder.toLocaleString("en-IN")} required.`);
      showToast(`Min order ₹${foundCoupon.minOrder} required for ${formattedCode}`, "warning");
      return false;
    }

    setAppliedCoupon(foundCoupon);
    setCouponError("");
    showToast(`Coupon "${formattedCode}" applied successfully! 🎉`, "success");
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError("");
    showToast("Coupon removed", "info");
  };

  // Financial calculations
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartOriginalTotal = cart.reduce(
    (total, item) => total + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const productDiscountSavings = cartOriginalTotal - cartSubtotal;

  let couponDiscountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      couponDiscountAmount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.flatDiscount) {
      couponDiscountAmount = appliedCoupon.flatDiscount;
    }
  }

  // Free delivery threshold: ₹1,500
  const freeShippingThreshold = 1500;
  const shippingFee = cartSubtotal > 0 && cartSubtotal >= freeShippingThreshold ? 0 : cartSubtotal > 0 ? 99 : 0;
  
  // 18% GST included or calculated breakdown
  const estimatedTax = Math.round((cartSubtotal - couponDiscountAmount) * 0.05); // 5% nominal packaging & tax
  const orderFinalTotal = Math.max(0, cartSubtotal - couponDiscountAmount + shippingFee + estimatedTax);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
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
        toast,
        showToast,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
