import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import remarkIframe from "remark-iframes";
import Iframe from "./iframe";
import "regenerator-runtime/runtime";

import "./style.css";

const renderParagraph = ({ children }) => {
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    // rendering media without p wrapper

    return children;
  }

  return <p>{children}</p>;
};

const renderBlockQuote = ({ children }) => {
  return <blockquote className="box -shadow">{children}</blockquote>;
};

const ytOptions = {
  "www.youtube.com": {
    tag: "iframe",
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ["watch?v=", "embed/"],
      ["http://", "https://"],
    ],
    thumbnail: {
      format: "http://img.youtube.com/vi/{id}/0.jpg",
      id: ".+/(.+)$",
    },
    removeAfter: "&",
  },
};

const plugins = [[remarkIframe, ytOptions]];

const RichText = ({ text, limit, className, ...rest }) => {
  const customClassName = classNames("rich-text", className, {
    "-limit": limit,
  });

  return (
    <ReactMarkdown
      className={customClassName}
      source={text}
      plugins={plugins}
      renderers={{
        iframe: props => <Iframe {...props} />,
        paragraph: renderParagraph,
        blockquote: renderBlockQuote,
      }}
      {...rest}
    />
  );
};

RichText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  limit: PropTypes.bool,
};

RichText.defaultProps = {
  className: undefined,
  text: undefined,
  limit: false,
};

export default RichText;
