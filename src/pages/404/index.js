import React from "react";
import PropTypes from "prop-types";
import SEO from "components/seo";
import Layout from "components/layout";
import RichText from "components/rich-text";
import Box from "components/box";

import "./style.css";

const e404 = ({ location }) => {
  const { pathname } = location;

  const text = `
I don't know where the page \`${pathname}\` is.

Send me a toot [bejoistic@micro.blog](https://micro.blog/bejoistic) and I will try to fix it.
`;

  return (
    <Layout className="e404">
      <SEO title="ERROR" />
      <div className="wrapper">
        <Box>
          <h1>Error 404</h1>
          <RichText text={text} />
        </Box>
      </div>
    </Layout>
  );
};
e404.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};
export default e404;
