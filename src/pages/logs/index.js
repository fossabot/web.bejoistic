import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import Row from "components/row";

import "./style.css";

const Logs = ({ data }) => {
  const logs = data.bejoistic.allPosts.edges.filter(({ node }) => {
    if (!node.publish) return false;
    const tags = new Set(node.tags);
    if (tags.has("detras-del-pixel")) return false;
    return true;
  });

  return (
    <Layout>
      <SEO title="Logs" />
      <div className="wrapper">
        <ul className="log-list">
          {logs.map(({ node }) => {
            const { id, slug, title: text, dateCreated } = node;
            const link = `/logs/${slug}`;
            return (
              <Row key={id} link={link} text={text} dateCreated={dateCreated} />
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

Logs.propTypes = {
  data: PropTypes.shape({
    bejoistic: PropTypes.shape({
      allPosts: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              dateCreated: PropTypes.string,
              id: PropTypes.string,
              title: PropTypes.string,
              slug: PropTypes.string,
              image: PropTypes.string,
              publish: PropTypes.bool,
            }),
          })
        ),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    bejoistic {
      allPosts {
        edges {
          node {
            tags
            id
            title
            slug
            image
            publish
            dateCreated
          }
        }
      }
    }
  }
`;

export default Logs;
