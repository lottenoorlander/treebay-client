import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrees } from "../store/trees/actions";

class TreeListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getTrees());
  }

  render() {
    return <div>This shoud show trees</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(TreeListContainer);
