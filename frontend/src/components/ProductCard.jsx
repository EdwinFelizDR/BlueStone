import React, { useState, useEffect } from "react";
import { useUser } from './UserContext'; // Import useUser to get the current user
import "../css/ProductCard.css";
import "../css/App.css";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user } = useUser(); // Get the current user
  const [message, setMessage] = useState(''); // State for success/error messages

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/ProductCard");
        const data = await response.json();
        setProducts(data); // Update the state with the fetched data

        // Set a random index as the initial product
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentIndex(randomIndex);

      } catch (error) {
        console.error("There was an error!", error);
        setMessage('Error fetching products.');
      }
    }
    fetchData();
  }, []);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = products[currentIndex];

  // Function to handle the add-to-cart functionality
  const addToCart = async () => {
    if (!user) {
      setMessage('Please log in to add items to your cart.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: currentProduct.productId, // Assuming currentProduct has a productId field
          user_id: user.userId,  // Use userId from context
          quantity: 1            // Default quantity is 1
        }),
      });

      if (response.ok) {
        setMessage('Product added to cart successfully!');
      } else {
        setMessage('Failed to add product to cart.');
      }

      // Clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('An error occurred while adding the product to the cart.');
    }
  };

  return (
    <div>
      {/* Insert a video before the product slider */}
      <h1 class="text-4xl font-bold text-center">What is Larimar</h1>
      <div className="video-container">
        <iframe
          src="https://streamable.com/e/iksj7a"
          frameBorder="0"
          width="640"
          height="360"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Product Intro Video"
        ></iframe>
      </div>

      {/* Product slider after the video */}
      <section className="product-slider">
        <div className="product-card">
          {/* Display the message */}
          {message && <div className="message-box">{message}</div>}

          <div className="product-details">
            <h2>{currentProduct.name}</h2>
            <div className="product-image-container">
              <img
                src={currentProduct.imageUrl}
                alt={currentProduct.name}
                className="product-image"
              />
            </div>
            <p>{currentProduct.description}</p>
            <p className="price">${currentProduct.price}</p>
          </div>
          <div className="product-actions">
            <button className="add-to-cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button className="add-to-wishlist">Add to Wishlist</button>
          </div>
          <div className="navigation">
            <button onClick={handlePrevClick} className="nav-arrow">
              ←
            </button>
            <button onClick={handleNextClick} className="nav-arrow">
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
