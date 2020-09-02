import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const RowTags = ({ tags, className }) => {
  const customClassName = classNames("row-tags", className, {});
  return (
    <ul className={customClassName}>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

RowTags.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

RowTags.defaultProps = {
  className: null,
  tags: null,
};

export default RowTags;
