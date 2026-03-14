import React from "react";
import "../styles/CartSidebar.css";

function CartSidebar({ cartItems = [], isOpen, onClose, onIncrease, onDecrease }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />

                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total Price:</strong> ₹{totalPrice}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSidebar;