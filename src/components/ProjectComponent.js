import React, { Component } from "react";
import GitHubButton from "react-github-btn";

export default class ProjectComponent extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.name}>
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>
              <div className="project-title">{project.name}</div>
              <div className="project-source">
                <GitHubButton href={project.source}>Source</GitHubButton>
              </div>
            </div>
            <div className="project-description">{project.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
