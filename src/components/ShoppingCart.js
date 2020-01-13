import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return <div>Shopping Cart</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ShoppingCart);
