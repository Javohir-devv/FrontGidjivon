import React, { useState, useEffect } from "react";
import "../style/cartMain.scss";

const Cart = () => {
  const [products, setProducts] = useState([]);

  // LocalStorage'dan mahsulotlarni olish
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(storedCart);
  }, []);

  // Narxlarni hisoblash
  const calculateSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // Miqdorni o'zgartirish
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Miqdor 1 dan kam bo'lmasligi kerak
    const updatedProducts = products.map((product) =>
      product._id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // Mahsulotni o'chirish
  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product._id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // Mahsulotni id bo'yicha olish
  const getProductById = (id) => {
    return products.find((product) => product._id === id);
  };

  const subtotal = calculateSubtotal();
  const shipping = 4.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart Items</h1>
      <div className="cart-content">
        <div className="cart-products">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="cart-product-item" key={product._id}>
                <img
                  src={product.image_url}
                  alt={product.en_name}
                  className="cart-product-image"
                />
                <div className="cart-product-details">
                  <h2 className="cart-product-title">{product.en_name}</h2>
                  <p className="cart-product-size">{product.ru_description}</p>
                  <div className="cart-product-actions">
                    <div className="cart-product-quantity">
                      <span
                        className="quantity-decrease"
                        onClick={() =>
                          handleQuantityChange(product._id, product.quantity - 1)
                        }
                      >
                        -
                      </span>
                      <input
                        type="number"
                        value={product.quantity}
                        min="1"
                        className="quantity-input"
                        onChange={(e) =>
                          handleQuantityChange(
                            product._id,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                      <span
                        className="quantity-increase"
                        onClick={() =>
                          handleQuantityChange(product._id, product.quantity + 1)
                        }
                      >
                        +
                      </span>
                    </div>
                    <div className="cart-product-price">
                      <p className="price">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="remove-icon"
                        onClick={() => removeProduct(product._id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Savatda hech qanday mahsulot yo'q</p>
          )}
        </div>
        {/* Subtotal */}
        {products.length > 0 && (
          <div className="cart-subtotal">
            <div className="subtotal-info">
              <p className="subtotal-label">Subtotal</p>
              <p className="subtotal-value">${subtotal.toFixed(2)}</p>
            </div>
            <div className="subtotal-info">
              <p className="subtotal-label">Shipping</p>
              <p className="subtotal-value">${shipping.toFixed(2)}</p>
            </div>
            <hr className="subtotal-divider" />
            <div className="subtotal-info">
              <p className="total-label">Total</p>
              <div className="total-value">
                <p className="total-amount">${total.toFixed(2)} USD</p>
                <p className="vat-label">including VAT</p>
              </div>
            </div>
            <button className="checkout-button">Check out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
