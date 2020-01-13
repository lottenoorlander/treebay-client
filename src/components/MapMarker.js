import React, { Component } from "react";
import treeIcon from "../images/Greentree.svg";
import "./MapMarker.css";

class MapMarker extends Component {
  render() {
    return (
      <div className="mapMarker">
        <img src={treeIcon} alt="tree" />
      </div>
    );
  }
}

export default MapMarker;
