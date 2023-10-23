import { createStore } from "redux";

const counterReducer = (state = { counter: 0, isShow: false }, action) => {
  if (action.type === "INCREMENT") {
    return {
      isShow: state.isShow,
      counter: state.counter + 1,
    };
  }
  if (action.type === "INCREASE") {
    return {
      isShow: state.isShow,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "SHOW") {
    return {
      counter: state.counter,
      isShow: !state.isShow,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
