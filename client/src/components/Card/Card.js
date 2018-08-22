import React from "react";

const Card = props => (
  <div className="card mt-5">
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
