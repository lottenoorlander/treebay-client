import React, { Component } from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class CheckoutFormContainer extends Component {
  render() {
    return (
      <div>
        <StripeProvider apiKey="pk_test_5GgrLOlI0oopZXeMO6nNbpDp00GkzGAiT1">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(CheckoutFormContainer);
