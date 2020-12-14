import React from "react";
import { BottomShape, PageWrapper } from "../components";
import "./../App.scss";

export default () => {
  return (
    <React.Fragment>
      <PageWrapper>
        <h2>Home page</h2>
      </PageWrapper>
      <BottomShape text="Brand name" />
    </React.Fragment>
  );
}