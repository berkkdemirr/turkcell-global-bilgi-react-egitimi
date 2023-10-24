import { Fragment } from "react";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Counter />
      {/* <a href="/products">Go to Products Page</a> */}
      <Link to={"/products"}>Go to Products Page</Link>
    </Fragment>
  );
}

export default HomePage;
