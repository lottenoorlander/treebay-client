import React from "react";
import "./TreeList.css";

function TreeList(props) {
  return (
    <div className="ListComponent">
      {props.type} - {props.price}
    </div>
  );
}

export default TreeList;
