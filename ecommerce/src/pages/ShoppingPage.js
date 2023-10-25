import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import PageWrapper from "../components/PageWrapper";

const dummyProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        image: "https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 19.99,
        image: "https://assets.ajio.com/medias/sys_master/root/20230906/vVWa/64f80929afa4cf41f5b34d62/-473Wx593H-461119105-blue-MODEL.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: 5.99,
        image: "https://contents.mediadecathlon.com/p1859835/8d58e16110f65ec104db80df364956b2/p1859835.jpg?format=auto&quality=70&f=650x0",
    },
    // Add more dummy products here
];

function ShoppingPage() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    return (
        <PageWrapper>
            <div className="container">
                <h1 className="mt-4">Shopping Cart</h1>
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="mt-4">Products</h2>
                        <div className="row">
                            {dummyProducts.map((product) => (
                                <div className="col-md-4" key={product.id}>
                                    <div className="card mb-4">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.name}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {product.name}
                                            </h5>
                                            <p className="card-text">
                                                ${product.price}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    addToCart(product)
                                                }
                                                className="btn btn-primary"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className="mt-4">Cart</h2>
                        <ul className="list-group">
                            {cart.map((item) => (
                                <li className="list-group-item" key={item.id}>
                                    {item.name} - ${item.price}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="btn btn-danger btn-sm float-right"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default ShoppingPage;
