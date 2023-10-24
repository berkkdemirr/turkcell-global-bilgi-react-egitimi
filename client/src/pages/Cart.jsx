import { Fragment } from "react";
import ProductItem from "../components/Products/ProductItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Fragment>
      <h1>Cart Page</h1>
      <div className="products-list">
        {cartItems.map((item) => (
          <ProductItem item={item} key={item.id} cart />
        ))}
      </div>
    </Fragment>
  );
};

export default CartPage;
