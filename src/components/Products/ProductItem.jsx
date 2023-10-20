import { useState } from "react";
import Button from "../UI/Button";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import Counter from "../Counter";

function ProductItem(props) {
  // let productTitle = props.item.productTitle;
  const [productTitle, setProductTitle] = useState(props.item.productTitle);

  function handleTitleChange() {
    // productTitle = "Değiştirildi";
    // console.log(productTitle);
    setProductTitle(`${productTitle} Değiştirildi`);
  }

  console.log("re-rendered");

  return (
    <div className="product-item">
      <img src={props.item.imageUrl} alt="soda" className="product-image" />
      <div className="product-bottom">
        <ProductInfo>
          <b className="product-title">{productTitle}</b>
          <span className="product-price">{props.item.productPrice}₺</span>
          <Counter />
        </ProductInfo>
        <Button title="Ürün Adı Değiştir" onClick={handleTitleChange} />
      </div>
    </div>
  );
}

export default ProductItem;
