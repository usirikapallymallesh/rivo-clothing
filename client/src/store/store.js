import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import productReducer from './productSlice';
const ShopStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // order: orderReducer,
    product: productReducer,
    // filter: filterReducer,
    // wishlist: wishlistReducer,
  },
});

export default ShopStore;