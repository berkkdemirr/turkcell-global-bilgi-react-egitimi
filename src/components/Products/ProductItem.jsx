import { useState } from "react";
import Button from "../UI/Button";
import ProductInfo from "./ProductInfo";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import "./ProductItem.css";

function ProductItem(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = cartActions;
  const { item, allProducts, setAllProducts } = props;
  const [productTitle] = useState(item.productTitle);
  const findProduct = cartItems.find(
    (productItem) => productItem.id === item.id
  );

  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`/product-detail/${item.id}`);
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
        {!props.cart && (
          <Button
            title="Sepete Ekle"
            onClick={() => dispatch(addToCart({ item }))}
            disabled={findProduct}
            icon={<FiShoppingCart size={16} />}
          />
        )}

        <Button
          title={props.cart ? "Sepetten Sil" : "Ürünü Sil"}
          addClass="danger"
          onClick={
            props.cart
              ? () => dispatch(removeFromCart({ productId: item.id }))
              : handleDelete
          }
        />
        <Button
          title="Ürün Detayına Git"
          addClass="info"
          onClick={navigateHandler}
        />
      </div>
    </div>
  );
}

export default ProductItem;
