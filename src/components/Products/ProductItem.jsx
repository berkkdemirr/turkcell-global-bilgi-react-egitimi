import { useState } from "react";
import Button from "../UI/Button";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

function ProductItem(props) {
  const { item, allProducts, setAllProducts } = props;
  const [productTitle, setProductTitle] = useState(item.productTitle);

  function handleTitleChange() {
    setProductTitle(`${productTitle} Değiştirildi`);
  }

  function handleDelete() {
    const filteredProducts = allProducts.filter(
      (productItem) => productItem.id !== item.id
    );
    setAllProducts(filteredProducts);
  }

  return (
    <div className="product-item">
      <img src={props.item.imageUrl} alt="soda" className="product-image" />
      <div className="product-bottom">
        <ProductInfo>
          <b className="product-title">{productTitle}</b>
          <p>{item.description?.slice(0, 50)} </p>
          <span className="product-price">{props.item.productPrice}₺</span>
        </ProductInfo>
        <Button title="Sepete Ekle" onClick={handleTitleChange} />
        <Button title="Ürünü Sil" addClass="danger" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default ProductItem;
