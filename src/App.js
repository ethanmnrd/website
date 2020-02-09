import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

// Pages
import { Home, About, Projects } from "./pages";

// Stylesheets
import "./styles/App.scss";
import pyramid from "./img/pyramid.png";

export default function App() {
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav-container">
          <ul>
            <li>
              <Link to="/"><img className="logo" src={pyramid} alt="Logo"></img></Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          </div>
        </nav>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/:id" component={User} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  );
}
