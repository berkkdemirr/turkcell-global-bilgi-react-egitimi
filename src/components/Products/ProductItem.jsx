import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <img src={props.item.imageUrl} alt="soda" className="product-image" />
      <div className="product-bottom">
        <b className="product-title">{props.item.productTitle}</b>
        <span className="product-price">{props.item.productPrice}₺</span>
        <Button title="Sepete Ekle" />
      </div>
    </div>
  );
}

export default ProductItem;
