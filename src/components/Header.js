import React, { Component } from "react";
import { connect } from "react-redux";
import ToolBar from "./ToolBar";

class Header extends Component {
  render() {
    return <div>{this.props.signedIn ? <ToolBar /> : ""}</div>;
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt)
  };
}
export default connect(mapStateToProps)(Header);
