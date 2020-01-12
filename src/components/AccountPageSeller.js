import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import stripeButton from "../images/blue-stripe-button.png";
import "./AccountPageSeller.css";

class AccountPageSeller extends Component {
  componentDidMount() {
    if (!this.props.signedIn || !this.props.isSeller) {
      this.props.history.push("/seller/login");
    }
  }
  render() {
    const STATE_VALUE = this.props.id;
    return (
      <div>
        <h1>Seller Portal</h1>
        <h3>Welcome {this.props.name}</h3>
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
              href={`https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://connect.stripe.com/connect/default/oauth/test&client_id=ca_GWSu0kj73OLqfJpHdpdZrdGsU1yHZd02&state=${STATE_VALUE}`}
            >
              <img
                className="stripeButton"
                src={stripeButton}
                alt="finish setting up payments with stripe"
              />
            </a>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt),
    isSeller: reduxState.auth.isSeller,
    name: reduxState.auth.user,
    id: reduxState.auth.id
  };
}

export default withRouter(connect(mapStateToProps)(AccountPageSeller));
