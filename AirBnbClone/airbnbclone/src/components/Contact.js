import React from "react";

export default function Contact(props) {
  return (
    <div className="contacts">
      <img src={props.img} className="contacts"/>
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./img/logo.webp" />
        <p>{props.phoneno}</p>
      </div>
      <div className="info-group">
        <img src="./img/logo.webp" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
