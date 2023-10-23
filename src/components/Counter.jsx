import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const isShow = useSelector((state) => state.isShow);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <span> {counter} </span>
      <button onClick={decrementHandler}>-</button> <br />
      <button onClick={() => dispatch({ type: "SHOW" })}>Text Show</button>
      {isShow && <span>SHOW</span>}
    </div>
  );
}

export default Counter;
