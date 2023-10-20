/* Previous State */
function Counter(props) {
  return (
    <div>
      <button onClick={() => props.setCounter((prevState) => prevState + 1)}>
        +
      </button>
      {/* <span> {props.counter} </span> */}
      <button onClick={() => props.setCounter((prevState) => prevState - 1)}>
        -
      </button>
    </div>
  );
}

export default Counter;
