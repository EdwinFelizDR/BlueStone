import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

function ShoppingCart({ userId }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8080/cart-items/${user.userId}`)
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error("Error fetching cart items:", error));
    } else {
      setCartItems([]);
    }
  }, [userId, user]);

  const handleIncrement = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  if (!user) {
    return (
      <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
        <div className="text-center text-gray-800">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p>Please log in to view your cart items.</p>
        </div>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = (totalPrice * 0.08).toFixed(2);

  const navigateToShopAll = () => {
    navigate("/shopall");
  };

  return (
    <>
      <div>
        <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
              <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
              <hr className="border-gray-300 mt-4 mb-8" />

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product_id}
                    className="grid grid-cols-3 items-center gap-4"
                  >
                    <div className="col-span-2 flex items-center gap-4">
                      <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md flex items-center justify-center">
                        <img
                          src={item.image_url}
                          className="w-full h-full object-contain"
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-800">
                          {item.name}
                        </h3>
                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">
                          Remove
                        </h6>

                        <div className="flex gap-4 mt-4">
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                              onClick={() => handleDecrement(item.product_id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2.5 fill-current"
                                viewBox="0 0 124 124"
                              >
                                <path
                                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                            </button>

                            <span className="mx-2.5">{item.quantity}</span>
                            <button
                              type="button"
                              className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                              onClick={() => handleIncrement(item.product_id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2.5 fill-current"
                                viewBox="0 0 42 42"
                              >
                                <path
                                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <h4 className="text-base font-bold text-gray-800">
                        ${item.price.toFixed(2)}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
              <ul className="text-gray-800 mt-8 space-y-4">
                <li className="flex flex-wrap gap-4 text-base">
                  Discount <span className="ml-auto font-bold">$0.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Shipping <span className="ml-auto font-bold">$2.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base">
                  Tax <span className="ml-auto font-bold">${tax}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base font-bold">
                  Total{" "}
                  <span className="ml-auto">${totalPrice.toFixed(2)}</span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                  onClick={navigateToShopAll}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
