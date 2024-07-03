import React from "react";
import img from "../img/IMG-1.jpg";
import img1 from "../img/email.png";
import img2 from "../img/IMG-2.png";
export default function Info() {
  return (
    <div className="Info-container">
      <img className="Info-img" src={img} />
      <h1 className="Info-name">Aryan Joshi</h1>
      <h3 className="Info-job">Web Developer</h3>
      <h5 className="Info-Website">AryanJoshi.website</h5>
      <button className="Info--button_email" type="button">
        <img src={img1} height="10px" width="15px" />
        Email
      </button>
      <button className="Info--button_linkedIn" type="button">
        <img src={img2} height="10px" width="15px" />
        Email
      </button>
    </div>
  );
}
