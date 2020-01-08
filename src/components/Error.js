import React, { Component } from "react";
import { connect } from "react-redux";
import { clearError } from "../store/error/actions";

function Error(props) {
  const handleClick = () => props.dispatch(clearError());
  return (
    <div>
      {props.error ? (
        <div>
          <p>{props.error.message}!</p>
          <button onClick={handleClick}>[Close]</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error
  };
}

export default connect(mapStateToProps)(Error);
