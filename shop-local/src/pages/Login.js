import React from "react";
import { BottomShape, PageWrapper } from "../components";
import "./../App.scss";

export default () => {
  return (
    <React.Fragment>
      <PageWrapper>
        <div className="form-wrapper">
          <h2>Login</h2>
          <form action="">
            <div className="form-group">
              <input
                type="email"
                className="user-credentials"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="user-credentials"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="user-credentials form-submit"
                name="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </PageWrapper>
      <BottomShape text="Brand name" />
    </React.Fragment>
  );
}