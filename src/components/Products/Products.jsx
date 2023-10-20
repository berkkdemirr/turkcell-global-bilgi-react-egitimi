import ProductItem from "./ProductItem";
import { products } from "../../productData";
import "./Products.css";
import { useState } from "react";
import ProductForm from "./ProductForm";

function Products(props) {
  const [allProducts, setAllProducts] = useState(products);
  console.log(allProducts.length);
  return (
    <div className="products">
      <ProductForm setAllProducts={setAllProducts} />
      <h1>{props.componentTitle}</h1>
      <div className="products-list">
        {allProducts.length === 0 ? (
          <h2>Hiç ürün yok!!!</h2>
        ) : (
          allProducts.map((item) => (
            <ProductItem
              item={item}
              key={item.id}
              setAllProducts={setAllProducts}
              allProducts={allProducts}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
