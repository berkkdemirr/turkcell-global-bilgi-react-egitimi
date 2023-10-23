import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
