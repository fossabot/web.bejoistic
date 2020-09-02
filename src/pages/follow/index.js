import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import RichText from "components/rich-text";
import Box from "components/box";

import "./style.css";

const text = `
Subscribe to the rss feeds to get all the updates on the new projects and creative work made @ bejoistic.com.
`;

const Follow = () => {
  return (
    <Layout className="follow-page">
      <SEO title="Follow" />
      <div className="wrapper">
        <Box>
          <RichText source={text} />
        </Box>
      </div>
    </Layout>
  );
};

export default Follow;
