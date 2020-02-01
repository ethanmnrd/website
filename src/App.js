import React from "react";

// Stylesheets
import "./styles/App.scss";
import pie from "./img/pie.png";

export default function App() {
  return (
    <div className="content">
      <h5>
        This website is currently under maintenance! Please check back later for
        awesome features!
      </h5>
      <h1>😭</h1>
      <br />
      <br />
      <br />
      <h6 style={{ color: "navy" }}>For now, enjoy some pie!</h6>
      <img src={pie}></img>
    </div>
  );
}
