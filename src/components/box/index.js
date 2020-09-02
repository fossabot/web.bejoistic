import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const Box = ({ children, className, shadow, animate }) => {
  const customClassName = classNames("box", className, {
    "-shadow": shadow,
    "-animate": animate,
  });
  return <div className={customClassName}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  animate: PropTypes.bool,
};

Box.defaultProps = {
  className: "",
  shadow: true,
  animate: false,
};

export default Box;
