import { Fragment, useState } from "react";
import UserCard from "../components/UserCard";

function HomePage() {
  const [myUsername, setMyUsername] = useState("Emin");
  console.log("homepage rendered");
  return (
    <Fragment>
      <h1>Home Page</h1>
      <UserCard myUsername={"Emin"} />
      <button onClick={() => setMyUsername("Nur")}>Username Change</button>
    </Fragment>
  );
}

export default HomePage;
