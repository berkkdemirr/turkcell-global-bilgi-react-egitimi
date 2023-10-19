import Products from "./components/Products/Products";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

function App() {
  function handleClick() {
    console.log("run");
  }

  function deleteProduct() {
    console.log("ürün silindi");
  }

  return (
    <div className="app">
      <Card title="Product Card" link="More">
        <p>Product content</p>
        <p>Product content</p>
        <p>Product content</p>
      </Card>
      <Card title="Profile Card" link="Details">
        <p>Profile content</p>
        <p>Profile content</p>
        <Button title="Profile" onClick={handleClick} />
      </Card>

      <Button
        title="Delete Product"
        addClass="danger"
        onClick={deleteProduct}
      />
    </div>
  );
}

export default App;
