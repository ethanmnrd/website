import React, { Component } from "react";
import ProjectComponent from "../components/ProjectComponent";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h3>Personal Projects</h3>
      <ProjectComponent projects={projects}></ProjectComponent>
    </div>
  );
}
