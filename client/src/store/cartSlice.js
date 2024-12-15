import { createSlice } from "@reduxjs/toolkit";

// Define your slices
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...item, quantity: 1 });
      }
      return state;
    },
    removeFromCart: (state, action) => {
        return state.filter((item) => item.id!== action.payload);
    },
    updateCartQuantity: (state, action) => {
        return state.map((item) =>
          item.id === action.payload.id
           ? {...item, quantity: action.payload.quantity}
            : item
        );
  
        // If quantity becomes zero, remove the item from the cart
        return state.filter((item) => item.quantity > 0);
  
        // If quantity is negative, do not update it
        return state.map((item) =>
          item.id === action.payload.id && action.payload.quantity >= 0
           ? {...item, quantity: action.payload.quantity}
            : item
        );
  
        // If quantity is greater than 10, set it to 10
        return state.map((item) =>
          item.id === action.payload.id && action.payload.quantity > 10
           ? {...item, quantity: 10}
            : item
        );
  
        // If quantity is less than 1, set it to 1
        return state.map((item) =>
          item.id === action.payload.id && action.payload.quantity < 1
           ? {...item, quantity: 1}
            : item
        );
  
        // If quantity is not a number, set it to 1
        return state.map((item) =>
          item.id === action.payload.id && typeof action.payload.quantity!== "number"
           ? {...item, quantity: 1}
            : item
        );
  
        // If item does not exist in the cart, do not update it
        return state.filter((item) => item.id!== action.payload.id);
  

        // If item does not have an id, do not update it
        return state.filter((item) => item.id);
  
    }
  },
});

export const {addToCart,removeFromCart,updateCartQuantity} =cartSlice.actions;
export default cartSlice.reducer;