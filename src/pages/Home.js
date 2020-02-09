import React, { Component } from "react";
import headshot from "../img/ethanmaynard.jpg";

export default function Home() {
  return (
    <div>
      <h1>Meet Ethan.</h1>
      <img className='circular' src={headshot} alt='Headshot'></img>
    </div>
  );
}
