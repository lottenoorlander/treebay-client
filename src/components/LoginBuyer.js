import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";

class LoginBuyer extends Component {
  render() {
    return (
      <div>
        <h1>Login to see your trees</h1>
        <Login />
        <p>
          If you don't have an account yet, you can sign up
          <Link to="/buyer/signup">here</Link>
        </p>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(LoginBuyer);
