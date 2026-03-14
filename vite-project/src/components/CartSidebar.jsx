import "../styles/CartSidebar.css";
import "../styles/CartSidebar.css";
function CartSidebar({ cart, isOpen, onClose, onUpdateQuantity, onRemoveItem }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>

                <div className="quantity">
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>

                <button
                  className="remove"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;