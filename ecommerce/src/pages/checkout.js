import React, { useState } from 'react';

function CheckoutPage() {
  // Dummy data for the cart
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
  ]);

  // Dummy data for the form
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
    paymentMethod: 'credit_card',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // Here, you can add logic to process the payment and complete the order.
    // You can also send the `formData` and `cart` data to a server for processing.
    console.log('Checkout Data:', formData);
    console.log('Cart:', cart);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-4">Billing & Shipping Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
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
              <label htmlFor="address">Address</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                className="form-control"
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="mt-4">Order Summary</h2>
          <ul className="list-group">
            {cart.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary mt-4"
            onClick={handleCheckout}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
