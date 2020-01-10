import React, { Component } from "react";
import { connect } from "react-redux";
import { getTreeDetails } from "../store/trees/actions";

class TreeDetails extends Component {
  componentDidMount() {
    this.props.dispatch(getTreeDetails(this.props.match.params.treeId));
  }

  render() {
    return (
      <div>
        Details about the trees
        {this.props.tree ? (
          <div>
            {this.props.tree.type} {this.props.tree.price}{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { tree: reduxState.trees.treeDetails };
}

export default connect(mapStateToProps)(TreeDetails);
