import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="container-fluid container-fluid-custom">
        <div className="row">
          <div className="col-md-4 col-sm-12 navigate">
            <div
              className="card card-footer p-5"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="card-header card-header-custom">REACH US</div>

              <div className="card-body">
                <p className="card-text">
                  We Provide the best products at affordable prices
                </p>
                <div className="icons">
                  <FaInstagram className="footer-icon" />

                  <FiYoutube className="footer-icon" />

                  <FiMail className="footer-icon" />

                  <FiPhoneCall className="footer-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 links">
            <div className="card card-footer p-5">
              <div className="card-header card-header-custom">NAVIGATE</div>
              <ul className="list-group list-group-flush p-3">
                <li className="list-group-item">Home</li>
                <li className="list-group-item">Section -2</li>
                <li className="list-group-item">Section-3</li>
                <li className="list-group-item">Section-4</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 reach-us">
            <div className="card card-footer p-5">
              <div className="card-header card-header-custom">LINKS</div>
              <ul className="list-group list-group-flush p-3">
                <li className="list-group-item">Privacy policy</li>
                <li className="list-group-item">
                  Refund and cancellation policy
                </li>
                <li className="list-group-item">Terms and conditions</li>
              </ul>
            </div>
          </div>
          <div
            className="card-text copyright"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <center>&copy; 2023 E-commerce store.</center>
            <center>All rights reserved</center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
