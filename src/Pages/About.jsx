import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiTruck,
  FiShield,
  FiCode,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiGithub,
  FiLinkedin
} from "react-icons/fi";
import "./Pages.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero-section">
        <div className="app-container">
          <div className="about-hero-card">
            <span className="section-tag">About ShopEase</span>
            <h1 className="about-hero-title">
              Crafting The Future of <br />
              <span className="gradient-text">Modern Online Shopping</span>
            </h1>
            <p className="about-hero-sub">
              ShopEase was founded with a singular purpose: to deliver world-class consumer technology, premium fashion, and home lifestyle products with uncompromising quality, transparent pricing, and instant express delivery across India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="about-stats-section">
        <div className="app-container">
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Happy Indian Shoppers</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">On-Time Delivery Rate</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Brand Products</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">4.9 / 5</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-values-section">
        <div className="app-container">
          <div className="section-header text-center">
            <span className="section-tag">Our Guiding Pillars</span>
            <h2 className="section-title">Why Shoppers Trust ShopEase</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FiAward /></div>
              <h3>Curated Excellence</h3>
              <p>
                Every gadget, headphone, sneaker, and timepiece in our inventory undergoes rigorous quality verification before listing.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FiShield /></div>
              <h3>Radical Transparency</h3>
              <p>
                Zero hidden charges. Real-world retail prices, verified manufacturer warranties, and guaranteed genuine invoices.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FiTruck /></div>
              <h3>Lightning Logistics</h3>
              <p>
                Partnered with premier logistics networks to provide same-day dispatch and live tracking across 19,000+ pin codes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><FiUsers /></div>
              <h3>Customer-First Support</h3>
              <p>
                Round-the-clock priority customer service, instant 7-day hassle-free replacements, and dedicated resolution reps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Spotlight: Sachin Kumar */}
      <section className="developer-spotlight-section">
        <div className="app-container">
          <div className="dev-spotlight-card">
            <div className="dev-photo-col">
              <div className="dev-avatar-circle">
                <span className="dev-initials">SK</span>
              </div>
              <div className="dev-status-badge">
                <span className="online-dot"></span> Available for Hire & Collaborations
              </div>
            </div>

            <div className="dev-info-col">
              <div className="dev-badge-title">
                <FiCode className="code-icon" />
                <span>Lead Architect & Full Stack Engineer</span>
              </div>

              <h2 className="dev-full-name">Sachin Kumar</h2>
              <p className="dev-role-desc">
                Creator and Maintainer of ShopEase E-Commerce Platform
              </p>

              <p className="dev-bio">
                Passionate software developer specializing in high-performance frontend architecture, scalable React applications, modern UI/UX design systems, and seamless state management. Engineered ShopEase from ground up to demonstrate enterprise-grade engineering standards, responsive aesthetics, and robust real-world ecommerce capabilities.
              </p>

              {/* Skills / Tech Stack */}
              <div className="dev-tech-stack">
                <span className="tech-pill">React 19</span>
                <span className="tech-pill">JavaScript ES6+</span>
                <span className="tech-pill">Modern CSS Design Systems</span>
                <span className="tech-pill">State Architecture</span>
                <span className="tech-pill">Vite</span>
                <span className="tech-pill">Responsive UI/UX</span>
                <span className="tech-pill">REST APIs</span>
              </div>

              {/* Contact Links */}
              <div className="dev-contact-row">
                <a
                  href="https://github.com/sachinkr2007/E-commerce-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-btn github"
                >
                  <FiGithub /> GitHub Repository
                </a>
                <a href="mailto:sachinank2007@gmail.com" className="dev-btn primary">
                  <FiMail /> sachinank2007@gmail.com
                </a>
                <a href="tel:+919065458334" className="dev-btn secondary">
                  <FiPhone /> +91 90654 58334
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;