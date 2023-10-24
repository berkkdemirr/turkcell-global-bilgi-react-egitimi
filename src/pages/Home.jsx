import { Fragment } from "react";
import FormUseRef from "../components/FormUseRef";

function HomePage() {
  return (
    <Fragment>
      <h1 className="text-center my-8 text-4xl">useRef Hook</h1>
      <FormUseRef />
    </Fragment>
  );
}

export default HomePage;
