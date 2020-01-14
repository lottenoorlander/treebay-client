import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapBuyer from "./GoogleMapBuyer";
import { getBuyerAccountInfo } from "../store/auth/actions";

class AccountPageBuyer extends Component {
  componentDidMount() {
    if (!this.props.signedIn || this.props.isSeller) {
      this.props.history.push("/buyer/login");
    }
    this.props.dispatch(getBuyerAccountInfo());
  }

  render() {
    return (
      <div>
        <h1>Your tree details</h1>
        <GoogleMapBuyer />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { signedIn: Boolean(reduxState.auth.jwt) };
}

export default connect(mapStateToProps)(AccountPageBuyer);
