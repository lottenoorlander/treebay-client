import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrees } from "../store/trees/actions";
import TreeList from "./TreeList";

class TreeListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getTrees());
  }

  render() {
    const treesList = this.props.trees.trees;

    return (
      <div>
        This should show trees
        {treesList
          ? treesList.map(tree => (
              <TreeList type={tree.type} price={tree.price} />
            ))
          : ""}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    trees: reduxState.trees
  };
}

export default connect(mapStateToProps)(TreeListContainer);
