import React, { Component } from "react";
import {
  CardElement,
  IbanElement,
  IdealBankElement,
  injectStripe
} from "react-stripe-elements";

class PaymentsForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    //User clicked submit
  };

  render() {
    return (
      <div>
        <div className="checkout">
          <p>Complete the purchase</p>
          <label>
            Email: <br />
            <input type="email"></input> <br />
          </label>
          <label>
            Card information <br />
            <CardElement /> <br />
          </label>
          IBAN: <IbanElement />
          Ideal: <IdealBankElement />
          <button onClick={this.onSubmit}>Purchase</button>
        </div>
      </div>
    );
  }
}

export default injectStripe(PaymentsForm);
