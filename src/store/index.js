import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import cartSlice from "./cart";

const store = configureStore({
  reducer: { counter: counterSlice, cart: cartSlice },
});

export default store;
