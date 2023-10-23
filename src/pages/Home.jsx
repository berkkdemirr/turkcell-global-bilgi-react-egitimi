import { Fragment } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      {/* <a href="/products">Go to Products Page</a> */}
      <Link to={"/products"}>Go to Products Page</Link>
    </Fragment>
  );
}

export default HomePage;
