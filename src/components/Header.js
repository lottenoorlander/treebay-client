import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ToolBar from "./ToolBar";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.signedIn ? (
          <ToolBar />
        ) : (
          <div className="Header">
            <h1>Welcome to Treebay</h1>
            <Link to="/seller/login">Start selling</Link>
            <Link to="/buyer/login">Start buying</Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { signedIn: Boolean(reduxState.auth.jwt) };
}
export default connect(mapStateToProps)(Header);
