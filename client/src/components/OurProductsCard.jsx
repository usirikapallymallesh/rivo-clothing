import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import {  toast } from 'react-toastify';

const OurProductsCard = ({ img, title, description, price }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ id: title, price, quantity: 1 })); // dispatch action to add item to cart slice
    toast.success(`added to cart!`);
   }


  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
      <img 
        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover" 
        src={img} 
        alt={title} 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <span className="text-sm font-bold text-gray-700">Price:</span>
        <span className="block text-lg font-bold text-gray-900">{price}</span>
        <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={addItemToCart}
        >Add to Cart</button>
      </div>
    </div>
  );
}

export default OurProductsCard;