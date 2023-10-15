import React from 'react';

const Navbar = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='col'>
                    <nav class="navbar navbar-expand-lg navbar-dark  sticky-top colored-section">
                        <a href="#" class="navbar-brand">E-Commerce</a>
                        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span id="navbar-toggler" class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <ul class="navbar-nav align-items-center ms-auto text-white">
                                <li class="nav-item">
                                    <a href="#" class="nav-link bg">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#pricing" class="nav-link">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#cta" class="nav-link">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#contact" class="nav-link">Contact us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="loginSignup.html" class="btn btn-outline-light btn-md download-button">Signup</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;