import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStripeDashUrl } from "../store/auth/actions";
import "./AccountDetailsSeller.css";

class AccountDetailsSeller extends Component {
  onClickHandler = () => {
    this.props.dispatch(getStripeDashUrl());
  };

  render() {
    return (
      <div>
        <h3>Sell more tree space</h3>
        <p>
          {" "}
          <Link to="/trees/add/tree">Add a new space for a tree</Link>
        </p>
        <h3>Payment Details</h3>
        {this.props.stripeAccount ? (
          <div>
            <div>
              <Link to="/seller/account" onClick={this.onClickHandler}>
                generate a link to your Stripe account
              </Link>
              {this.props.stripeLink ? (
                <a href={this.props.stripeLink}>To your stripe account</a>
              ) : (
                ""
              )}
            </div>{" "}
          </div>
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
    stripeAccount: reduxState.auth.stripeCode,
    stripeLink: reduxState.auth.stripeLink
  };
}

export default connect(mapStateToProps)(AccountDetailsSeller);
