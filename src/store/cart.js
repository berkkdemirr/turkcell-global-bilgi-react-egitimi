import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload.item);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.productId;
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer