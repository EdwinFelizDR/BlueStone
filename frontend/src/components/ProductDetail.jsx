import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);   // State for reviews
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Product ID from params:", id);
    console.log("Location state:", location.state);

    async function fetchProductAndReviews() {
      let productId = id;
      if (location.state && location.state.productId) {
        productId = location.state.productId;
      }
      if (!productId || productId === 'unknown') {
        setError("Invalid product ID");
        return;
      }
      try {
        // Fetch product details
        const productResponse = await fetch(`http://localhost:8080/ProductCard/${productId}`);
        if (!productResponse.ok) {
          throw new Error(`HTTP error! status: ${productResponse.status}`);
        }
        const productData = await productResponse.json();
        setProduct(productData);

        // Fetch reviews for this product
        const reviewsResponse = await fetch(`http://localhost:8080/reviews/${productId}`);
        if (!reviewsResponse.ok) {
          throw new Error(`HTTP error! status: ${reviewsResponse.status}`);
        }
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);

      } catch (error) {
        setReviews =  [];
        console.error('There was an error fetching the product or reviews:', error);
        setError("Failed to fetch product or reviews");
      }
    }

    fetchProductAndReviews();
  }, [id, location.state]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Product Details */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img className="w-1/2 h-28 object-cover mb-4 mx-auto" src={product.imageUrl} alt={product.name} />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Wishlist</button>
      </div>
  
      {/* Product Reviews */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.reviewId} className="border-b pb-4">
              <p><strong>Rating:</strong> {review.rating}</p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">Reviewed on {new Date(review.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default ProductDetail;
