import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import BigLogo from "../images/logoblack.png";
import "./MainPage.css";

class MainPage extends Component {
  onClickSeller = () => {
    this.props.history.push("/seller/login");
  };

  onClickBuyer = () => {
    this.props.history.push("/buyer/login");
  };

  render() {
    return (
      <div>
        <div className="MainPage">
          <div className="MainLogo">
            <h1>
              Tree
              <img src={BigLogo} />
              Bay
            </h1>
          </div>
          <div className="StartLinkContainer">
            <div className="StartLink">
              <Button
                onClick={this.onClickSeller}
                variant="contained"
                color="secondary"
              >
                Start selling
              </Button>
            </div>
            <div className="StartLink">
              <Button
                onClick={this.onClickBuyer}
                variant="contained"
                color="secondary"
              >
                Start buying
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(MainPage);
