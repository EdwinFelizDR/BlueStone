import React, { useState, useEffect } from 'react';
import '../css/ProductCard.css'; // Ensure the path is correct


function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/ProductCard');
        const data = await response.json();
        setProducts(data); // Update the state with the fetched data
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProduct = products[currentIndex];
  console.log('Current product:', currentProduct);

  return (
    <section className="product-slider">
      <div className="product-card">
        <div className="product-details">
          <h2>{currentProduct.name}</h2>
          <div>
            <img src={currentProduct.imageUrl} alt={currentProduct.name} className="product-image" />
          </div>
          <p>{currentProduct.description}</p>
          <p className="price">${currentProduct.price}</p>
        </div>
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="add-to-wishlist">Add to Wishlist</button>
        </div>
        <div className="navigation">
          <button onClick={handlePrevClick} className="nav-arrow">←</button>
          <button onClick={handleNextClick} className="nav-arrow">→</button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;