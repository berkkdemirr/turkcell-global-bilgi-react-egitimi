import { Fragment, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import ProductItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Fragment>
      <h1>Cart Page</h1>
      <div className="products-list">
        {cartItems.map((item) => (
          <ProductItem item={item} cart />
        ))}
      </div>
    </Fragment>
  );
};

export default CartPage;
