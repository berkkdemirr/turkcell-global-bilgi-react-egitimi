import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/products"
          >
            Products Page
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/cart"
          >
            <span className="cart">
              <span className="cart-length">{cartItems.length}</span>
              <FiShoppingCart size={16} />
            </span>
            Cart Page
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
