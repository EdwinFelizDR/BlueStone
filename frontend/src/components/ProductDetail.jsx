import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Product ID from params:", id);
    console.log("Location state:", location.state);
    async function fetchProduct() {
      let productId = id;
      if (location.state && location.state.productId) {
        productId = location.state.productId;
      }
      if (!productId || productId === 'unknown') {
        setError("Invalid product ID");
        return;
      }
      try {
        const response = await fetch(`http://localhost:8080/ProductCard/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched product data:", data);
        setProduct(data);
      } catch (error) {
        console.error('There was an error fetching the product:', error);
        setError("Failed to fetch product");
      }
    }
    fetchProduct();
  }, [id, location.state]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img className="w-1/2 h-28 object-cover mb-4 mx-auto" src={product.imageUrl} alt={product.name} />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Wishlist</button>
      </div>
    </div>
  );
}

export default ProductDetail;