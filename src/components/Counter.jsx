import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const { increment, decrement, increase, toggleCounter } = counterActions;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      {showCounter && <span> {counter} </span>}
      <button onClick={decrementHandler}>Decrement</button> <br />
      <button onClick={() => dispatch(toggleCounter())}>Counter Show</button>
    </div>
  );
}

export default Counter;
