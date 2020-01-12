import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";

class LoginBuyer extends Component {
  render() {
    return (
      <div>
        <h1>To the seller portal</h1>
        <Login isSeller={true} />
        <p>
          If you don't have an account yet, you can sign up 
          <Link to="/seller/signup">here</Link>
        </p>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(LoginBuyer);
