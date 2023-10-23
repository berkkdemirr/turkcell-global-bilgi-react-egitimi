import { createStore } from "redux";

const counterReducer = (state = { counter: 0, isShow: false }, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "INCREASE") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "SHOW") {
    return {
      ...state,
      isShow: !state.isShow,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
