import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6} className="mb-4">
          <h2>Welcome to Our E-commerce Store</h2>
          <h3 className="mt-3">About Us</h3>
          <p>
            At our e-commerce store, we offer a wide variety of products to
            cater to your needs. Whether you are looking for the latest
            electronics, trendy fashion, or home essentials, we've got you
            covered. Our curated selection ensures that you find the best
            quality items at competitive prices.
          </p>
        </Col>
        <Col lg={6}>
          <Image
            src="https://via.placeholder.com/400"
            alt="About Us"
            fluid
            className="about-us-image"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Our Mission</h3>
          <p>
            Our mission is to simplify online shopping for our customers. We
            strive to provide a seamless experience by offering a user-friendly
            website, secure payment options, and prompt customer support. We
            are dedicated to delivering high-quality products and excellent
            service to ensure your satisfaction.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide Range of Products</li>
            <li>Quality Assurance</li>
            <li>Secure and Easy Transactions</li>
            <li>Fast and Reliable Shipping</li>
            <li>Exceptional Customer Support</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;