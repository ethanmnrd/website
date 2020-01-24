import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Projects from "./pages/Projects.js";

export default function App() {
  return (
    <div className="container">
      <Link to="/">Ethan Maynard</Link>
      <br />
      <Link to="/about">About Me</Link>
      <br />
      <Link to="/projects">Projects</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={User} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}
