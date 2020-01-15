import React, { Component } from "react";
import { connect } from "react-redux";
import { getTreeDetails } from "../store/trees/actions";
import { getCheckout } from "../store/payments/actions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import locationImg from "../images/location.svg";
import "./TreeDetails.css";

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
        {this.props.tree ? (
          <div className="TreeDetailsContainer">
            <img className="TreeImage  " src={this.props.tree.img} />
            <div className="TreeText">
              <h1>{this.props.tree.type}</h1>
              <p>
                <i>{this.props.tree.description}</i>
                <br />
                Sold by: {this.props.tree.seller.username}
              </p>
              <br />
              &#8364;{this.props.tree.price}{" "}
              {this.props.tree.buyerId && !this.props.isSeller ? (
                ""
              ) : (
                <Button
                  onClick={this.handleClick}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  BUY
                </Button>
              )}
              <br />
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${this.props.tree.locationX},${this.props.tree.locationY}`}
              >
                <img src={locationImg} alt="location of the tree" />
                <p>
                  <br />
                  <br />
                  {this.props.tree.locationX}, {this.props.tree.locationY}
                </p>
              </a>
            </div>
            <div className="LinkBack">
              <Link to="/trees"> &#8592; To Tree Listings</Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    tree: reduxState.trees.treeDetails,
    isSeller: reduxState.auth.isSeller
  };
}

export default connect(mapStateToProps)(TreeDetails);
