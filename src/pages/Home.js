import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Ethan Maynard</h1>
      <p>
        <Link to="/ethanmnrd">ethanmnrd</Link> on Github.
      </p>
    </div>
  );
}
