import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <a href="/products">Go to Products Page</a> */}
      <Link to={"/products"}>Go to Products Page</Link>
    </div>
  );
}

export default HomePage;
