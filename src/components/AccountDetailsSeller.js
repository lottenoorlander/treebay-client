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
      <div className="Money">
        <h3>Payment Details</h3>
        {this.props.stripeAccount ? (
          <div className="shadow">
            <div className="generateLink">
              <Link to="/seller/account" onClick={this.onClickHandler}>
                generate a link to your Stripe account
              </Link>
              {this.props.stripeLink ? (
                <a href={this.props.stripeLink}>To your stripe account</a>
              ) : (
                ""
              )}
            </div>{" "}
            <Link to="/trees/add/tree">Add your own tree</Link>
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
