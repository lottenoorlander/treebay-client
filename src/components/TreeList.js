import React from "react";
import "./TreeList.css";
import Card from "react-bootstrap/Card";

function TreeList(props) {
  return (
    <Card>
      <Card.Header>
        <strong>{props.type}</strong>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> {props.description} </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">&#8364;{props.price}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    // <div className="ListComponent">
    //   {/* <img className="ListImg" src={props.img} alt={props.type} /> */}
    //   <div className="ListText">
    //     <p>
    //       <strong>{props.type}</strong>
    //       <br />
    //       <i>{props.description} </i>
    //     </p>
    //     <p className="ListPrice">
    //       {" "}
    //       <br />
    //       &#8364;{props.price}
    //     </p>
    //   </div>
    // </div>
  );
}

export default TreeList;
