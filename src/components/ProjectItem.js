import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(props) {
  return (
    <>
      <li className="projects__item">
        <Link className="projects__item__link" to={props.path}>
          <figure className="projects__item__pic-wrap">
            <img src={props.src} alt="Project" className="projects__item__img" />
          </figure>
          <div className="projects__item__info">
            <h5 className="projects__item__title">{props.title}</h5>
            <p className="projects__item__text">{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;
