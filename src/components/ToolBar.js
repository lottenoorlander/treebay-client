import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { logOut } from "../store/auth/actions";
import logo from "../images/logoblack.png";
import "./ToolBar.css";

class ToolBar extends Component {
  clickHandler = () => {
    this.props.dispatch(logOut());
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ToolBar">
        {this.props.signedIn ? (
          <ul>
            <li>
              {this.props.isSeller ? (
                <Link to="/seller/account">To Seller Portal</Link>
              ) : (
                <Link to="/buyer/account">Tree Dashboard</Link>
              )}
            </li>
            <li className="logoName">
              <Link to="/trees">
                Tree
                <img src={logo} />
                Bay
              </Link>{" "}
            </li>
            <li className="LogOut">
              <Link to="/" onClick={this.clickHandler}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt),
    isSeller: reduxState.auth.isSeller
  };
}

export default withRouter(connect(mapStateToProps)(ToolBar));
