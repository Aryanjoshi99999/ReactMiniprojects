import React from "react";
export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="top-text" className="form--input" />
        <input type="text" placeholder="bottom-text" className="form--input" />
        <button className="form--button">Get a new meme image</button>
        <img className="meme--image"></img>
      </div>
    </main>
  );
}
