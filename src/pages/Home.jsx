import { Fragment } from "react";
import ForwardCounter from "../components/Counter/ForwardCounter";
import BackwardCounter from "../components/Counter/BackwardCounter";

function HomePage() {
  return (
    <Fragment>
      <h1 className="text-center my-8 text-4xl">Counter Components</h1>
      <div className="flex flex-col gap-y-2">
        <ForwardCounter />
        <BackwardCounter />
      </div>
    </Fragment>
  );
}

export default HomePage;
