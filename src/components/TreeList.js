import React from "react";

function TreeList(props) {
  return (
    <div>
      {props.type} - {props.price}
    </div>
  );
}

export default TreeList;
