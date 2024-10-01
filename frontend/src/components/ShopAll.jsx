import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ShopAll.css';
import '../css/App.css';
import { useUser } from './UserContext';

function ShopAll() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(''); // State for success/error messages
  const { user } = useUser(); // Use the useUser hook to get the current logged-in user

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

  // Function to handle the add-to-cart functionality
  const addToCart = async (productId) => {
    if (!user) {
      setMessage('User not logged in');
      return;
    }

    try {
      // Make a POST request to the add-to-cart endpoint
      const response = await fetch('http://localhost:8080/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          user_id: user.userId,  // Use userId from context
          quantity: 1            // Default quantity is 1 (you can allow users to specify this)
        }),
      });

      if (response.ok) {
        setMessage('Product added to cart successfully!');
        setCart((prevCart) => [...prevCart, productId]); // Update the cart state
      } else {
        setMessage('Failed to add product to cart');
      }
      //Clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      setMessage('There was an error!', error);
    }
  }

  return (
    <div className="shop-all">
      <h1>Shop All Products</h1>
      {/* Display success/error message */}
      {message && <div className="message-box">{message}</div>}
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
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product.productId)}
                >
                  Add to Cart
                </button>
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