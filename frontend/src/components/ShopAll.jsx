import React, { useState, useEffect } from 'react';
import '../css/ShopAll.css';

function ShopAll() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/ProductCard');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="shop-all">
      <h1>Shop All Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p className='description'>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="add-to-wishlist">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopAll;