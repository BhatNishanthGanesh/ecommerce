import React, { useState } from 'react';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    // Here, you can add logic to register the user with the provided information.
    // You can also send the `formData` to a server for user registration.
    console.log('Registration Data:', formData);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Sign Up</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              className="btn btn-primary mt-4"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
