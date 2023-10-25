import React from "react";
import PageWrapper from "../components/PageWrapper";
//import "./Login.css";
const Login = () => {
    return (
        <PageWrapper>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="border border-3 border-dark p-4 mt-4 bg-white ">
                    <form>
                        <h3 className="text-center">Login</h3>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control"
                                name="email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="form-control"
                                name="password"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="checkbox"
                                className="custom-control custom-checkbox"
                            />
                            <label htmlFor="checkbox" className="ms-1">
                                Remember me
                            </label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-danger" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Login;
