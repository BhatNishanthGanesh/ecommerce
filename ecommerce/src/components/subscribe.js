import React from "react";
import "./subscribe.css";
import { Link } from "react-router-dom";


const NewsLetter = () => {
  return (
    <div class="newsletter-bg">
      <div class="container" className="news-letter">
        <div class="info">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail update about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div class="form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="email"
            required
          />
          <Link to="/Home">
          <button className="btn">Subscribe</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
