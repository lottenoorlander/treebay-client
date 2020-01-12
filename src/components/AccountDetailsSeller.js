import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStripeDashUrl } from "../store/auth/actions";

class AccountDetailsSeller extends Component {
  onClickHandler = () => {
    this.props.dispatch(getStripeDashUrl());
  };

  render() {
    return (
      <div>
        <h2>Welcome {this.props.name}</h2>
        <Link to="/seller/account" onClick={this.onClickHandler}>
          generate a link to your Stripe account
        </Link>
        {this.props.stripeLink ? (
          <a href={this.props.stripeLink}>To your stripe account</a>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    name: reduxState.auth.user,
    jwt: reduxState.auth.jwt,
    stripeLink: reduxState.auth.stripeLink
  };
}

export default connect(mapStateToProps)(AccountDetailsSeller);
