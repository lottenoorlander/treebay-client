import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapBuyer from "./GoogleMapBuyer";
import { getBuyerAccountInfo } from "../store/auth/actions";
import "./AccountPageBuyer.css";

class AccountPageBuyer extends Component {
  componentDidMount() {
    if (!this.props.signedIn || this.props.isSeller) {
      this.props.history.push("/buyer/login");
    } else {
      this.props.dispatch(getBuyerAccountInfo());
    }
  }

  render() {
    const trees = this.props.trees ? this.props.trees : [];
    return (
      <div className="AccountPageBuyer">
        <div className="WelcomeMessage">
          <h1>
            Welcome Back <br /> {this.props.name}
          </h1>
        </div>
        <div className="Stats">
          <p>
            Total tree planted: {trees.length}
            <br />
            You compensated {26 * trees.length} kg of your yearly CO2 footprint
          </p>
        </div>
        <div className="YourTrees">
          <GoogleMapBuyer trees={this.props.trees} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: Boolean(reduxState.auth.jwt),
    name: reduxState.auth.user,
    isSeller: reduxState.auth.isSeller,
    trees: reduxState.auth.trees
  };
}

export default connect(mapStateToProps)(AccountPageBuyer);
