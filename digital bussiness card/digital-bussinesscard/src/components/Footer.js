import React from "react";
import X from "../img/x.png";
import insta from "../img/insta.png";
import fb from "../img/fb.png";
import gh from "../img/gh.png";
export default function Footer() {
  return (
    <div className="Footer--container">
      <ul className="Footer--list">
        <li>
          {" "}
          <a className="Footer--icon_X" href="">
            <img className="Footer--icon_X_icon" src={X} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="Footer--icon_insta" href="">
            <img className="Footer--icon_insta_icon" src={insta} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="Footer--icon_fb" href="">
            <img className="Footer--icon_fb_icon" src={fb} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="Footer--icon_Gh" href="">
            <img className="Footer--icon_Gh_icon" src={gh} />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}
