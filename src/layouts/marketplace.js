import React, { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function MarketplaceLayout({ children }) {
  return (
    <Fragment>
      <Header />

      {children}

      <Footer />
    </Fragment>
  )
}