import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";

function Products(props) {
  return (
    <div className="products">
      <h1>{props.componentTitle}</h1>
      <div className="products-list">
        {productData.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}

        {/*  <ProductItem
          imageUrl={productData[0].imageUrl}
          productTitle={productData[0].productTitle}
          productPrice={productData[0].productPrice}
        />
        <ProductItem
          imageUrl={productData[1].imageUrl}
          productTitle={productData[1].productTitle}
          productPrice={productData[1].productPrice}
        />
        <ProductItem
          imageUrl={productData[2].imageUrl}
          productTitle={productData[2].productTitle}
          productPrice={productData[2].productPrice}
        /> */}
      </div>
    </div>
  );
}

export default Products;
