import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.rememberClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    {/* <span onClick={() => props.rememberClick(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
