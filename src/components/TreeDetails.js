import React, { Component } from "react";
import { connect } from "react-redux";
import { getTreeDetails } from "../store/trees/actions";
import { getCheckout } from "../store/payments/actions";

class TreeDetails extends Component {
  componentDidMount() {
    this.props.dispatch(getTreeDetails(this.props.match.params.treeId));
  }

  handleClick = () => {
    this.props.dispatch(getCheckout(this.props.tree.id));
  };

  render() {
    return (
      <div>
        <h1>Details about the trees</h1>
        {this.props.tree ? (
          <div>
            {this.props.tree.type} {this.props.tree.price}{" "}
            {this.props.tree.buyerId ? (
              ""
            ) : (
              <button onClick={this.handleClick}>BUY</button>
            )}
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
