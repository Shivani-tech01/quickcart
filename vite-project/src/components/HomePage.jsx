import React from "react";
import ProductList from "./ProductList";
import { useCart } from "../context/CartContext";

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} products
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      ) : (
        <p className="no-results">No products found</p>
      )}
    </div>
  );
}

export default HomePage;