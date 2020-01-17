import React, { Component } from "react";
import { connect } from "react-redux";
import ToolBar from "./ToolBar";

class Header extends Component {
  render() {
    return (
      <div>
        <ToolBar />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {}
export default connect(mapStateToProps)(Header);
