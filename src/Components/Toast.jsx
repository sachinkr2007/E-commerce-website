import React from "react";
import { useShop } from "../context/ShopContext";
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXCircle } from "react-icons/fi";
import "./Toast.css";

const Toast = () => {
  const { toast } = useShop();

  if (!toast.show) return null;

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <FiCheckCircle className="toast-icon success" />;
      case "warning":
        return <FiAlertTriangle className="toast-icon warning" />;
      case "error":
        return <FiXCircle className="toast-icon error" />;
      default:
        return <FiInfo className="toast-icon info" />;
    }
  };

  return (
    <div className={`toast-container ${toast.type} ${toast.show ? "show" : ""}`}>
      <div className="toast-content">
        {getIcon()}
        <span className="toast-message">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
