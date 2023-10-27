import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ContactForm from "./pages/ContactForm";
import AboutUs from "./pages/About";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import ShoppingPage from "./pages/ShoppingPage";

import CheckoutPage from "./pages/checkout";
import SignUpPage from "./pages/Signup";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<AboutUs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cart" element={<ShoppingPage />}></Route>
                <Route path="/profile" element={<UserProfile />}></Route>
                <Route path="/contact" element={<ContactForm />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/contacts" element={<ContactForm />}></Route>
                <Route path="/checkout" element={<CheckoutPage />}></Route>
                <Route path="/signup" element={<SignUpPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
