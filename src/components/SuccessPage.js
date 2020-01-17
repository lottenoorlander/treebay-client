import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SuccessPage.css";

class SuccessPage extends Component {
  render() {
    return (
      <div className="successPage">
        <div className="success">
          <h3>Congratulations!</h3>
          <p>You just made the environment a little bit better</p>
        </div>
        <br />

        <Link to={`/trees/${this.props.match.params.id}`}>See your tree</Link>
        <br />
        <Link to="/trees">Buy more trees</Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SuccessPage);
