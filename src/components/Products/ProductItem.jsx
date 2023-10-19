import Button from "../UI/Button";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <img src={props.item.imageUrl} alt="soda" className="product-image" />
      <div className="product-bottom">
        <ProductInfo>
          <b className="product-title">{props.item.productTitle}</b>
          <span className="product-price">{props.item.productPrice}₺</span>
        </ProductInfo>
        <Button title="Sepete Ekle" />
      </div>
    </div>
  );
}

export default ProductItem;
