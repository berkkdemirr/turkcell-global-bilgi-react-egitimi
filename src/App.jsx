import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ProductForm from "./components/Products/ProductForm";
import Products from "./components/Products/Products";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Emin");

  useEffect(() => {
    console.log("bir kez çalıştı");
  }, [counter]);

  return (
    <div className="app">
      {/* <Products /> */}
      {counter}  <br />
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <br />
      {name}  <br />
      <button onClick={() => setName("Ahmet")}>İsmi Değiştir</button>
    </div>
  );
}

export default App;
