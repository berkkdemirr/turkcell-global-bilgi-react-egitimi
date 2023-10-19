import Products from "./components/Products/Products";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="app">
      {/* <Button title="Sil" addClass="danger" />
      <Products componentTitle={"Admin Products başlığıdır!!!"} /> */}
      <Card title="Product Card" link="More">
        <p>Product content</p>
        <p>Product content</p>
        <p>Product content</p>
      </Card>
      <Card title="Profile Card" link="Details">
        <p>Profile content</p>
        <p>Profile content</p>
        <button className="main-btn danger">Profile content</button>
      </Card>
    </div>
  );
}

export default App;
