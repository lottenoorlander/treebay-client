import React, { Component } from "react";
import { connect } from "react-redux";

class AccountPageSeller extends Component {
  render() {
    return <div>Seller Portal</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AccountPageSeller);
