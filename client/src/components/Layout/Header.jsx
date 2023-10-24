import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="mt-4">
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
            <span className="flex gap-x-1"> 
              <span className="cart">
                <span className="cart-length">{cartItems.length}</span>
                <FiShoppingCart size={16} />
              </span>
              Cart Page
            </span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
