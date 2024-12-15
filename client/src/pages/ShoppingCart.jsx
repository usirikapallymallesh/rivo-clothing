import React from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa"; // Importing the delete and empty cart icons
import DefaultLayout from "../Layout/DefaultLayout";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../store/cartSlice"; // Import actions from your cart slice

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  
  const updateQuantity = (id, value) => {
    dispatch(updateCartQuantity({ id, value })); // Dispatching action to update quantity
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id)); // Dispatching action to remove item
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 4; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <DefaultLayout title="Shopping Cart">
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 relative  ">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shopping Cart Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg  ">
            <h2 className="text-2xl font-bold mb-4 text-[#224F34]">Shopping Cart</h2>
            <p className="text-gray-600 mb-4">
              You have {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in your cart.
            </p>

            {/* Conditional Rendering for Empty Cart */}
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-40 top-0 absolute  bg-white w-full h-full left-0">
                <FaShoppingCart size={80} className="text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-[#224F34]">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some items to get started!</p>
                <NavLink to="/" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
                  Start Shopping
                </NavLink>
              </div>
            ) : (
              // Item List
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg shadow-sm transition duration-200 hover:bg-gray-200"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#224F34]">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Quantity Control */}
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-lg font-bold p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                        disabled={item.quantity <= 1} // Disable if quantity is 1
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-lg font-bold p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-lg font-semibold">${item.price}</p>
                    {/* Remove Item Button with Delete Icon */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 transition duration-200"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash size={20} /> {/* Using the delete icon */}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Payment Section */}
          {cartItems.length > 0 && ( // Only show payment section if there are items in the cart
            <div className="bg-[#224F34] text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Total Amount</h2>

              {/* Totals */}
              <div className="mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span> {/* Formatting to two decimal places */}
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total (Tax incl.)</span>
                  <span>${total.toFixed(2)}</span> {/* Formatting to two decimal places */}
                </div>
              </div>

              {/* Checkout Button */}
              <NavLink to={'/checkout'}>
                <button 
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out"
                >
                  Checkout - ${total.toFixed(2)} {/* Formatting to two decimal places */}
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div> 
    </DefaultLayout>
  );
};

export default ShoppingCart;