import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ShopAll.css';

function ShopAll() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
    console.log('Add to cart:', productId);
  }

  return (
    <div className="shop-all">
      <h1>Shop All Products</h1>
      <div className="product-grid">
        {products && products.length > 0 ? (
          products.map((product, index) => {
            const productUrl = `/product/${product.productId || 'unknown'}`;
            return product ? (
              <div key={product.id || `unknown-${index}`} className="product-card">
                <Link to={productUrl}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className='description'>{product.description}</p>
                  <p>${product.price.toFixed(2)}</p>
                </Link>
                <button className="add-to-cart" onClick={() => addToCart(product.productId)}>Add to Cart</button>
                <button className="add-to-wishlist">Add to Wishlist</button>
              </div>
            ) : null;
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ShopAll;