import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";

class LoginBuyer extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login isSeller={false} />
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(LoginBuyer);
