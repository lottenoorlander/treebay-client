import React from "react";
import "./TreeList.css";

function TreeList(props) {
  return (
    <div className="ListComponent">
      <img className="ListImg" src={props.img} alt={props.type} />
      <div className="ListText">
        <p>
          <strong>{props.type}</strong>
          <br />
          <i>{props.description} </i>
        </p>
        <p className="ListPrice">
          {" "}
          <br />
          &#8364;{props.price}
        </p>
      </div>
    </div>
  );
}

export default TreeList;
