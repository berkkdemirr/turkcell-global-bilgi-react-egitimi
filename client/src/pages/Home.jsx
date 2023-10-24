import { Fragment } from "react";
import Colors from "../components/Colors";

function HomePage() {
  return (
    <Fragment>
      <h1 className="text-center my-8 text-4xl">Socket io Colors</h1>
      <Colors />
    </Fragment>
  );
}

export default HomePage;
