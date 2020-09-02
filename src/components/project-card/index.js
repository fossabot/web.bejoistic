import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const ProjectCard = ({ id, slug, name, image, className }) => {
  const customClassName = classNames("project-card", className, {});
  return (
    <article className={customClassName} key={id}>
      <Link to={`/projects/${slug}`}>
        <img className="project-card-img" src={image} alt={name} />
        <div className="project-card-info">{name}</div>
      </Link>
    </article>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProjectCard.defaultProps = {
  className: null,
};

export default ProjectCard;
