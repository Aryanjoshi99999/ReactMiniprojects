import React from "react";
// import img from "../img/c1.png";
// import star from "/img/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={props.item.coverImg} />
      <div className="card--stats">
        <img src="/img/star.png" className="card--star" />
        <span className="card--rating">{props.item.rating}</span>
        <span className="gray"> ({props.item.reviewcount}) </span>
        <span className="gray"> {props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">from {props.item.price}</span> / person
      </p>
    </div>
  );
}
