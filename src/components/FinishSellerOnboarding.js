import React, { Component } from "react";
import { Link } from "react-router-dom";

class FinishSellerOnboarding extends Component {
  render() {
    return (
      <div>
        <h2>You are now ready to start selling trees!</h2>{" "}
        <p>
          Go back to your <Link to="/seller/account">account overview</Link>{" "}
          <br /> or start{" "}
          <Link to="/trees/add/tree">selling trees immediately</Link>
        </p>
      </div>
    );
  }
}

export default FinishSellerOnboarding;
