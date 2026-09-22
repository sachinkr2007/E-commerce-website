import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiMessageSquare
} from "react-icons/fi";
import "./Pages.css";

const Contact = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How fast will my order be dispatched and delivered?",
      a: "Orders placed before 2:00 PM are dispatched the same business day. Delivery across major metro cities takes 24-48 hours, while other regional locations are completed within 3-4 business days."
    },
    {
      q: "What is the 7-day return and exchange policy?",
      a: "If your item is damaged, defective, or different from described, you can initiate a 1-click return or replacement request from your account or by emailing us within 7 days of delivery."
    },
    {
      q: "Are all electronics and apparel 100% authentic with warranty?",
      a: "Yes! Every single product on ShopEase is sourced directly from brand-authorized distributors. Products arrive in sealed brand packaging with official tax invoice and manufacturer warranty."
    },
    {
      q: "What payment options are supported at checkout?",
      a: "We support instant UPI (GPay, PhonePe, Paytm), all major Credit/Debit cards (Visa, MasterCard, RuPay, Amex), Net Banking across 50+ banks, and Cash on Delivery (COD)."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields", "warning");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      showToast(`Thank you, ${formData.name}! Your message has been received. Our team will contact you within 2 hours.`, "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Order Inquiry",
        message: ""
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="contact-page">
      <div className="app-container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-tag">24/7 Assistance</span>
          <h1 className="contact-title">Contact Support & Helpdesk</h1>
          <p className="contact-subtitle">
            Have questions about an order, shipment, or partnership? Reach out to our dedicated support team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="c-info-icon-box"><FiMail /></div>
              <div>
                <h4>Official Email Support</h4>
                <p>For order queries, returns, and business inquiries</p>
                <a href="mailto:sachinank2007@gmail.com" className="c-info-val">
                  sachinank2007@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="c-info-icon-box"><FiPhone /></div>
              <div>
                <h4>Customer Care Helpline</h4>
                <p>Mon - Sat: 9:00 AM - 8:00 PM IST</p>
                <a href="tel:+919065458334" className="c-info-val">
                  +91 90654 58334
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="c-info-icon-box"><FiMapPin /></div>
              <div>
                <h4>Headquarters & Tech Center</h4>
                <p>ShopEase Technologies Center</p>
                <span className="c-info-val text-dark">
                  Sector 62, Noida, NCR, 201301, India
                </span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="c-info-icon-box"><FiClock /></div>
              <div>
                <h4>Average Response Time</h4>
                <p>Dedicated resolution speed</p>
                <span className="c-info-val text-dark">Under 2 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <FiMessageSquare className="header-icon" />
                <div>
                  <h3>Send Us a Direct Message</h3>
                  <p>We'll respond to your registered email address.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="support-form">
                <div className="form-row-2">
                  <div className="form-field">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sachin Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Query Topic *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="Order Inquiry">Order Status & Delivery</option>
                      <option value="Returns">Returns & Refund Request</option>
                      <option value="Product">Product Technical Specs</option>
                      <option value="Partnership">Business Partnership</option>
                      <option value="Feedback">Website Feedback for Sachin</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Please describe your question or issue in detail..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary-gradient btn-submit-message"
                  disabled={isSubmitting}
                >
                  <FiSend /> {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <div className="section-header text-center">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? "open" : ""}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <div className="faq-question-row">
                    <h4>{faq.q}</h4>
                    <span className="faq-toggle-icon">
                      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </div>
                  {isOpen && <p className="faq-answer-text">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;