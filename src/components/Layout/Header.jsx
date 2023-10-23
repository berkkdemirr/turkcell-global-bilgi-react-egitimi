import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/products">Products Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart Page</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
