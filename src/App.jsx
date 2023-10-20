import { useState } from "react";
import Counter from "./components/Counter";
import ProductForm from "./components/Products/ProductForm";
import Products from "./components/Products/Products";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      
      {/* <Counter setCounter={setCounter}  /> */}
      {/* {counter} */}
      <Products />
    </div>
  );
}

export default App;
