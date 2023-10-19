import ProductItem from "./ProductItem";
import "./Products.css";

function Products(props) {
  return (
    <div className="products">
      <h1>{props.componentTitle}</h1>
      <div className="products-list">
        <ProductItem />
      </div>
    </div>
  );
}

export default Products;
