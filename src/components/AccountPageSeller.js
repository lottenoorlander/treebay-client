import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class AccountPageSeller extends Component {
  componentDidMount() {
    if (!this.props.signedIn || !this.props.isSeller) {
      this.props.history.push("/seller/login");
    }
  }
  render() {
    return (
      <div>
        <h1>Seller Portal</h1>
        <p>Welcome back {this.props.name}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt),
    isSeller: reduxState.auth.isSeller,
    name: reduxState.auth.user
  };
}

export default withRouter(connect(mapStateToProps)(AccountPageSeller));
