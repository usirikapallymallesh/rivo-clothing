// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: "Men's T-Shirt", category: "men", price: 19.99, img: "https://via.placeholder.com/400x400?text=Men+T-Shirt" },
    { id: 2, title: "Women's Blouse", category: "women", price: 24.99, img: "https://via.placeholder.com/400x400?text=Women+Blouse" },
    { id: 3, title: "Men's Jeans", category: "men", price: 39.99, img: "https://via.placeholder.com/400x400?text=Men+Jeans" },
    { id: 4, title: "Women's Dress", category: "women", price: 49.99, img: "https://via.placeholder.com/400x400?text=Women+Dress" },
    // Add more products up to 30
    { id: 5, title: "Men's Hoodie", category: "men", price: 59.99, img: "https://via.placeholder.com/400x400?text=Men+Hoodie" },
    { id: 6, title: "Women's Skirt", category: "women", price: 34.99, img: "https://via.placeholder.com/400x400?text=Women+Skirt" },
    // ... (add more products)
    { id :30,title :'Women\'s Flats',category :'women',price :39.99,img:'https://via.placeholder.com/400x400?text=Womens+Flats'}
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      // Logic to add item to cart (you can implement this as needed)
      console.log(`Added to cart: ${action.payload.id}`);
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;