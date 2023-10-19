import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Button title="Sil" addClass="danger" />
      <Products componentTitle={"Admin Products başlığıdır!!!"} />
      <Products componentTitle={"Customer Products başlığır!!!"} />
    </div>
  );
}

export default App;
