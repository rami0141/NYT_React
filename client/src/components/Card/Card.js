import React from "react";

const Card = props => (
  <div className="card">
    <div className="card-header">
      <h3>
        <strong>
          {props.title}
        </strong>
      </h3>
    </div>
    <div className="card-body"> {props.children}</div>
  </div>
);

export default Card;
