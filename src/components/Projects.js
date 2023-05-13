import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectItem
              src="images/test.jpeg"
              title="Project 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
            <ProjectItem
              src="images/test.jpeg"
              title="Project 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
            <ProjectItem
              src="images/test.jpeg"
              title="Project 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
          </ul>
          <ul className="projects__items">
            <ProjectItem
              src="images/test.jpeg"
              title="Project 4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
            <ProjectItem
              src="images/test.jpeg"
              title="Project 5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
            <ProjectItem
              src="images/test.jpeg"
              title="Project 6"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="https://github.com/Kearsle"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
