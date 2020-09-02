import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";
import RowTags from "./row-tags";

import "./style.css";

const dateFormat = new Intl.DateTimeFormat("UK", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const Row = ({ text, link, tags, dateCreated, className, external }) => {
  const customClassName = classNames("row", className, {});
  const date = dateCreated ? dateFormat.format(Date.parse(dateCreated)) : null;
  const hostname = external
    ? new URL(link).hostname.replace(/^www\./, "")
    : null;

  return (
    <li className={customClassName}>
      {external ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {dateCreated ? <span className="row-date">{date}</span> : null}
          <span className="row-text">{text}</span>
          {hostname ? <span className="row-hostname">{hostname}</span> : null}
          {tags ? <RowTags tags={tags} /> : null}
        </a>
      ) : (
        <Link to={link}>
          {dateCreated ? <span className="row-date">{date}</span> : null}
          <span className="row-text">{text}</span>
          {tags ? <RowTags tags={tags} /> : null}
        </Link>
      )}
    </li>
  );
};

Row.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dateCreated: PropTypes.string,
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  external: PropTypes.bool,
};

Row.defaultProps = {
  className: null,
  dateCreated: null,
  external: false,
  tags: null,
};

export default Row;
