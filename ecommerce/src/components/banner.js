import React from "react";
import styles from "./banner.module.css";

const Banner = ({ image, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>{children}</div>
            <div className={styles.right}>
                <img src={image} alt="img" />
            </div>
        </div>
    );
};

export default Banner;
