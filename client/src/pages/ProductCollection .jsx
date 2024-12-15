// src/components/ProductCollection.js
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from '../Layout/DefaultLayout';

const products = [
  { id: 1, title: "Men's T-Shirt", category: "men", price: 19.99, img: "https://via.placeholder.com/400x400?text=Men+T-Shirt" },
  { id: 2, title: "Women's Blouse", category: "women", price: 24.99, img: "https://via.placeholder.com/400x400?text=Women+Blouse" },
  { id: 3, title: "Men's Jeans", category: "men", price: 39.99, img: "https://via.placeholder.com/400x400?text=Men+Jeans" },
  { id: 4, title: "Women's Dress", category: "women", price: 49.99, img: "https://via.placeholder.com/400x400?text=Women+Dress" },
  { id: 5, title: "Men's Hoodie", category: "men", price: 59.99, img: "https://via.placeholder.com/400x400?text=Men+Hoodie" },
  { id: 6, title: "Women's Skirt", category: "women", price: 34.99, img: "https://via.placeholder.com/400x400?text=Women+Skirt" },
  { id: 7, title: "Men's Jacket", category: "men", price: 89.99, img: "https://via.placeholder.com/400x400?text=Men+Jacket" },
  { id: 8, title: "Women's Coat", category: "women", price: 99.99, img: "https://via.placeholder.com/400x400?text=Women+Coat" },
  { id: 9, title: "Men's Sneakers", category: "men", price: 69.99, img: "https://via.placeholder.com/400x400?text=Men+Sneakers" },
  { id: 10, title: "Women's Sandals", category: "women", price: 29.99, img: "https://via.placeholder.com/400x400?text=Women+Sandals" },
  { id: 11, title: "Men's Shorts", category: "men", price: 29.99, img: "https://via.placeholder.com/400x400?text=Men+Shorts" },
  { id: 12, title: "Women's Leggings", category: "women", price: 24.99, img: "https://via.placeholder.com/400x400?text=Women+Leggings" },
  { id: 13, title: "Men's Cap", category: "men", price: 15.99, img: "https://via.placeholder.com/400x400?text=Men+Cap" },
  { id: 14, title: "Women's Scarf", category: "women", price: 19.99, img: "https://via.placeholder.com/400x400?text=Women+Scarf" },
  { id: 15, title: "Men's Belt", category: "men", price: 25.99, img: "https://via.placeholder.com/400x400?text=Men+Belt" },
  { id: 16, title: "Women's Handbag", category: "women", price: 79.99, img:"https://via.placeholder.com/400x400?text=Women+Handbag"},
  
   // Add more products to reach a total of at least 30
   // Example:
   { id :17 , title : 'Men\'s Casual Shirt' , category : 'men' , price :29.99 , img:'https://via.placeholder.com/400x400?text=Casual+Shirt'},
   { id :18 , title : 'Women\'s Summer Dress' , category : 'women' , price :39.99 , img:'https://via.placeholder.com/400x400?text=Summer+Dress'},
   { id :19 , title : 'Men\'s Running Shoes' , category : 'men' , price :59.99 , img:'https://via.placeholder.com/400x400?text=Running+Shoes'},
   { id :20 , title : 'Women\'s Sports Bra' , category : 'women' , price :24.99 , img:'https://via.placeholder.com/400x400?text=Sports+Bra'},
   { id :21 , title : 'Men\'s Swim Trunks' , category : 'men' , price :34.99 , img:'https://via.placeholder.com/400x400?text=Swim+Trunks'},
   { id :22 , title : 'Women\'s Yoga Pants' , category : 'women' , price :39.99 , img:'https://via.placeholder.com/400x400?text=Yoga+Pants'},
   { id :23 , title : 'Men\'s Winter Jacket' , category : 'men' , price :89.99 , img:'https://via.placeholder.com/400x400?text=Winter+Jacket'},
   { id :24 , title : 'Women\'s Raincoat' , category : 'women' , price :69.99 , img:'https://via.placeholder.com/400x400?text=Raincoat'},
   { id :25 , title : 'Men\'s Formal Pants' , category : 'men' , price :49.99 , img:'https://via.placeholder.com/400x400?text=Formal+Pants'},
   { id :26 , title : 'Women\'s Formal Skirt' , category : 'women' , price :49.99 , img:'https://via.placeholder.com/400x400?text=Formal+Skirt'},
   { id :27 , title : 'Men\'s Sports Jacket' , category : 'men' , price :79.99 , img:'https://via.placeholder.com/400x400?text=Sports+Jacket'},
   { id :28 , title : 'Women\'s Evening Gown' , category : 'women' , price :129.99 , img:'https://via.placeholder.com/400x400?text=Evening+Gown'},
   { id :29 , title : 'Men\'s Sneakers (Black)' , category : 'men' , price :69.99 , img:'https://via.placeholder.com/400x400?text=Sneakers+(Black)'},
   { id :30 , title : 'Women\'s Flats' , category : 'women' , price :39.99,img:'https://via.placeholder.com/400x400?text=Womens+Flats'}
];

const ProductCollection = () => {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priceFilter, setPriceFilter] = useState(100); // Default max price

    const handleFilterChange = () => {
      let filtered = products;

      if (categoryFilter !== 'all') {
        filtered = filtered.filter(product => product.category === categoryFilter);
      }

      filtered = filtered.filter(product => product.price <= priceFilter);

      setFilteredProducts(filtered);
    };

    const handleAddToCart = (product) => {
      toast.success(`${product.title} added to cart!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      // Implement add to cart logic here
    };

    return (
        <DefaultLayout>
      <div className="min-h-screen bg-gray-100 p-4">
        <h2 className="text-3xl font-bold text-center text-[#224F34] mb-6">Clothing Store</h2>

        {/* Filter Section */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaFilter className="mr-2 text-gray-600" />
            <label className="mr-2">Category:</label>
            <select 
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                handleFilterChange();
              }}
              className="border rounded-md p-2"
            >
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="mr-2">Max Price:</label>
            <input 
              type="number"
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                handleFilterChange();
              }}
              className="border rounded-md p-2 w-24"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0,30).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 hover:-translate-y-1 hover:bg-gray-50">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-[#224F34]">{product.title}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-[#224F34] text-white py-2 rounded-md hover:bg-[#C2EFD4] transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </div>
      </DefaultLayout>
    );
};

export default ProductCollection;