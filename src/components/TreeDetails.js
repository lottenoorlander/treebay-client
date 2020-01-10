import React, { Component } from "react";
import { connect } from "react-redux";
import { getTreeDetails } from "../store/trees/actions";

class TreeDetails extends Component {
  componentDidMount() {
    this.props.dispatch(getTreeDetails(this.props.match.params.treeId));
  }

  render() {
    return <div>Details about the trees</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(TreeDetails);
