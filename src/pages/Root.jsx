import { Fragment } from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
