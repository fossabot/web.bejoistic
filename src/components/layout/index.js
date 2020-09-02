import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Header from "components/header";
import Footer from "components/footer";
import "./style.css";

const Layout = ({ children, className }) => {
  const customClassName = classNames("layout", className);
  return (
    <div className={customClassName}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  className: null,
};

export default Layout;
