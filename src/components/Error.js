import React from "react";
import { connect } from "react-redux";
import { clearError } from "../store/error/actions";
import "./Error.css";

function Error(props) {
  const handleClick = () => props.dispatch(clearError());
  return (
    <div>
      {props.error ? (
        <div className="error">
          <h3>Oh Snap you got an Error!</h3>
          <p>{props.error.message}</p>
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
