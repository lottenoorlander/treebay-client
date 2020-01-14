import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import AccountDetailsSeller from "./AccountDetailsSeller";
import { getSellerAccountInfo } from "../store/auth/actions";
import stripeButton from "../images/blue-stripe-button.png";
import "./AccountPageSeller.css";

class AccountPageSeller extends Component {
  componentDidMount() {
    if (!this.props.signedIn || !this.props.isSeller) {
      this.props.history.push("/seller/login");
    }
    this.props.dispatch(getSellerAccountInfo());
  }
  render() {
    const STATE_VALUE = this.props.jwt;
    return (
      <div>
        <h1>Seller Portal</h1>
        {this.props.paymentDetails ? (
          ""
        ) : (
          <div className="connectPayment">
            <p>
              Before you start selling trees, please finish setting up your
              payments details with Stripe, so you can start receiving money as
              soon as possible.
            </p>
            <a
              href={`https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://connect.stripe.com/connect/default/oauth/test&client_id=ca_GWSu0kj73OLqfJpHdpdZrdGsU1yHZd02&state=${STATE_VALUE}&stripe_user[business_type]=individual`}
            >
              <img
                className="stripeButton"
                src={stripeButton}
                alt="finish setting up payments with stripe"
              />
            </a>
          </div>
        )}
        <AccountDetailsSeller />
        <div>Links of things a seller can do</div>
        <div>List of trees unsold</div>
        <div>List of trees sold that need to be maintained</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt),
    isSeller: reduxState.auth.isSeller,
    name: reduxState.auth.user,
    jwt: reduxState.auth.jwt,
    paymentDetails: reduxState.auth.stripeCode
  };
}

export default withRouter(connect(mapStateToProps)(AccountPageSeller));
