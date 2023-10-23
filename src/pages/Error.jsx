import React, { Fragment } from "react";
import Header from "../components/Layout/Header";

const ErrorPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <h1>Bir hata oluştu!</h1>
        <p>Bu sayfa bulunamadı!</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
