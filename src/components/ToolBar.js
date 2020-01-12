import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { logOut } from "../store/auth/actions";

class ToolBar extends Component {
  clickHandler = () => {
    this.props.dispatch(logOut());
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        {this.props.signedIn ? (
          <Link onClick={this.clickHandler}>Logout</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt)
  };
}

export default withRouter(connect(mapStateToProps)(ToolBar));
