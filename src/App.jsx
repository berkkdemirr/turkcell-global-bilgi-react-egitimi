import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ProductForm from "./components/Products/ProductForm";
import Products from "./components/Products/Products";

function App() {
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("counter"))
  );
  const [name, setName] = useState("Emin");

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  return (
    <div className="app">
      {/* <Products /> */}
      {counter} <br />
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <br />
      {name} <br />
      <button onClick={() => setName("Ahmet")}>İsmi Değiştir</button>
    </div>
  );
}

export default App;
