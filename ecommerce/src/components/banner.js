import React from "react";
import styles from "./banner.module.css";
import banner from "../../src/assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "Discover More, Save More, Shop Online at Your Convenience!"
        </p>
        <p className={styles.subHeading}>
          Welcome to our online shopping haven, where convenience meets
          quality. Explore a world of endless choices and unbeatable deals. Shop
          smarter, shop with us.
        </p>
        <Link to="/Home">
          <button className={styles.btn}>Shop Now</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={banner} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
