import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, cart: cartSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
