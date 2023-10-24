import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  function removeFromCart(itemId) {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== itemId;
    });
    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
