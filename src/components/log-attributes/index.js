import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { getDesktopDate, getMobileDate } from "lib";
import readingTime from "reading-time";

import "./style.css";

const LogAttributes = ({ text, date, vertical, className }) => {
  const stats = text ? readingTime(text) : undefined;
  const customClassName = classNames("log-attributes", className, {
    "-vertical": vertical,
  });
  return (
    <div className={customClassName}>
      <div className="log-time-attributes">
        <span className="log-date -mono -hide-mobile">
          {getDesktopDate(date)}
        </span>
        <span className="log-date -mono -hide-desktop">
          {getMobileDate(date)}
        </span>
        {stats ? (
          <div className="log-time-wrapper">
            It may take you{" "}
            <span className="-mono"> {Math.floor(stats.minutes)}</span> minutes
            to read.
          </div>
        ) : null}
      </div>
    </div>
  );
};

LogAttributes.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

LogAttributes.defaultProps = {
  text: undefined,
  vertical: false,
  className: undefined,
};

export default LogAttributes;
