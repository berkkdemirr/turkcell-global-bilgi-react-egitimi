import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = (props) => {
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
            <span>
              {props.cartItems}
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
