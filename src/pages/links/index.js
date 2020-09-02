import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import Row from "components/row";

import "./style.css";

const dateFormat = new Intl.DateTimeFormat("en-UK", {
  year: "numeric",
  month: "long",
});

const Links = ({ data }) => {
  const list = data.bejoistic.allLink.edges.reduce((acc, { node }) => {
    const key = dateFormat.format(Date.parse(node.dateCreated));
    const group = acc[key] || [];
    group.push(node);
    acc[key] = group;
    return acc;
  }, {});

  return (
    <Layout className="links-page">
      <SEO title="Links" />
      <div className="wrapper">
        {Object.entries(list).map(([key, value]) => {
          return (
            <section key={key} className="links-section">
              <header className="links-section-header">
                <h2>{key}</h2>
              </header>
              <ul className="links-list">
                {value.map(node => {
                  const { id, link, tags, name: text } = node;
                  return (
                    <Row
                      link={link}
                      key={id}
                      text={
                        text.length > 50 ? `${text.substring(0, 50)}...` : text
                      }
                      tags={tags.filter(tag => !tag.includes("from"))}
                      // dateCreated={dateCreated}
                      className="links-row"
                      external
                    />
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </Layout>
  );
};

Links.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    bejoistic: PropTypes.shape({
      allLink: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string,
              name: PropTypes.string,
              link: PropTypes.string,
              dateCreated: PropTypes.string,
              tags: PropTypes.arrayOf(PropTypes.string),
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
      allLink {
        edges {
          node {
            id
            link
            name
            dateCreated
            tags
          }
        }
      }
    }
  }
`;

export default Links;
