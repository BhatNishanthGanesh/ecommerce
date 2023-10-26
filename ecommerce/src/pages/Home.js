import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";
import NewsLetter from "../components/subscribe";
import Testimonial from "../components/testimonial";
import styles from "../components/banner.module.css";
import banner from "../../src/assets/banner.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner image={banner}>
                <p className={styles.heading}>
                    "Discover More, Save More, Shop Online at Your Convenience!"
                </p>
                <p className={styles.subHeading}>
                    Welcome to our online shopping haven, where convenience
                    meets quality. Explore a world of endless choices and
                    unbeatable deals. Shop smarter, shop with us.
                </p>
                <Link to="/Home">
                    <button className={styles.btn}>Shop Now</button>
                </Link>
            </Banner>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h1>Welcome to Our E-Commerce Store</h1>
                        <p>
                            Discover a wide range of products at amazing prices.
                            Start shopping now!
                        </p>
                        <a href="/products" className="btn btn-primary">
                            Shop Now
                        </a>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://via.placeholder.com/150"
                                className="card-img-top"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">$19.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://via.placeholder.com/150"
                                className="card-img-top"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">$24.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://via.placeholder.com/150"
                                className="card-img-top"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">$14.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default Home;
