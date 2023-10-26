import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PageWrapper from "../components/PageWrapper";
import Banner from "../components/banner";
import styles from "../components/banner.module.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
const AboutUs = () => {
    return (
        <PageWrapper>
            <Banner image={about1}>
                <h2 className={styles.heading}>
                    Welcome to Our E-commerce Store!
                </h2>
                <p className={styles.subHeading}>
                    At our e-commerce store, we offer a wide variety of products
                    to cater to your needs. Whether you are looking for the
                    latest electronics, trendy fashion, or home essentials,
                    we've got you covered. Our curated selection ensures that
                    you find the best quality items at competitive prices.
                </p>
            </Banner>
            <Container className="my-5">
                <Row>
                    <Col lg={8} className="mb-4">
                        <div className="h-100 d-flex flex-column justify-content-center">
                            <h3>Our Mission</h3>
                            <p></p>
                            <p>
                                Our mission is to simplify online shopping for
                                our customers. We strive to provide a seamless
                                experience by offering a user-friendly website,
                                secure payment options, and prompt customer
                                support. We are dedicated to delivering
                                high-quality products and excellent service to
                                ensure your satisfaction.
                            </p>
                            <p></p>
                            <h3>Why Choose Us?</h3>
                            <ul>
                                <li>Wide Range of Products</li>
                                <li>Quality Assurance</li>
                                <li>Secure and Easy Transactions</li>
                                <li>Fast and Reliable Shipping</li>
                                <li>Exceptional Customer Support</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Image
                            src={about2}
                            alt="About Us"
                            fluid
                            className="about-us-image"
                        />
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    );
};

export default AboutUs;
