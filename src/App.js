import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

// Pages
import { Home, About, Projects } from "./pages";

// Stylesheets
import "./styles/App.scss";
import pie from "./img/pie.png";

export default function App() {
  return (
    <div>
      <div id="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img className="logo" src={pie} alt="Pie!"></img><span>Ethan Maynard</span>
              </Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
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
