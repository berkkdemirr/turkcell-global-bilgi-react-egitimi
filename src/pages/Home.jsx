import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      {/* <a href="/products">Go to Products Page</a> */}
      <Link to={"/products"}>Go to Products Page</Link>
    </div>
  );
}

export default HomePage;
