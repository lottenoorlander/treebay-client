import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        <h1>List of Trees</h1>
        {treesList
          ? treesList.map(tree => (
              <Link to={`/trees/${tree.id}`}>
                <TreeList type={tree.type} price={tree.price} />
              </Link>
            ))
          : ""}
        <br />
        <br />
        <Link to="/trees/add/tree">Add your own tree</Link>
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
