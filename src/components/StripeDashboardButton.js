import React, { Component } from "react";
import { connect } from "react-redux";

class StripeDashboardButton extends Component {
  render() {
    return <div></div>;
  }
}

function mapStateToProps(reduxState) {
  return {
    jwt: reduxState.auth.jwt
  };
}

export default connect(mapStateToProps)(StripeDashboardButton);
