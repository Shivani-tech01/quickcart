import "../styles/Header.css";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <h1>QuickCart</h1>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;