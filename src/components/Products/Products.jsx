import ProductItem from "./ProductItem";
import { products } from "../../productData";
import "./Products.css";
import { useState } from "react";
import ProductForm from "./ProductForm";

function Products(props) {
  const [allProducts, setAllProducts] = useState(products);
  console.log(allProducts);
  return (
    <div className="products">
      <ProductForm setAllProducts={setAllProducts} />
      <h1>{props.componentTitle}</h1>
      <div className="products-list">
        {allProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
