import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Grid = ({ children, className }) => {
  const customClassName = classNames("grid", className, {});
  return <section className={customClassName}>{children}</section>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Grid.defaultProps = {
  className: "",
};

export default Grid;
