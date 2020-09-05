import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import truncate from "truncate";
import { Helmet } from "react-helmet";
import { withPrefix, Link } from "gatsby"

import Commento from "components/commento";
import Valine from "gatsby-plugin-valine";
import Box from "components/box";
import RichText from "components/rich-text";
import Layout from "components/layout";
import SEO from "components/seo";
import LogAttributes from "components/log-attributes";
import { getDiscussUrl, getCommentUrl } from "lib";

import "./style.css";

const LogSingle = props => {
  const { data, location } = props;
  const { post } = data.bejoistic;
  const { siteUrl } = data.site.siteMetadata;
  const { text, title, image, dateCreated } = post;

  const truncateText = truncate(post.text, 140);

  const discussUrl = getDiscussUrl({
    siteUrl,
    pathName: location.pathname,
  });
  const commentUrl = getCommentUrl({
    siteUrl,
    pathName: location.pathname,
  });

  return (
    <Layout className="log-single">
      <Helmet>
        <script src={withPrefix('js/prism.min.js.js')} type="text/javascript" />
      </Helmet>
      <SEO
        description={truncateText}
        title={title}
        image={image}
        pathName={location.pathName}
      />
      <div className="log-cover">
        <div className="log-image-wrapper">
          {image ? <img src={image} alt={title} /> : null}
        </div>
        <div className="log-info wrapper">
          <Box>
            <h1>{title}</h1>
            <LogAttributes text={text} date={dateCreated} />
          </Box>
        </div>
      </div>
      <div className="wrapper">
        <RichText text={text} limit />
        <div className="log-extras rich-text">
          <a
            className="log-discuss"
            href={discussUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comment on Twitter
          </a>
        </div>
        <br />
        <Commento
          endPoint="https://webmention.bejoistic.com"
          tarGet={commentUrl}
        />
        <br />
        <Valine />
      </div>
    </Layout>
  );
};

LogSingle.propTypes = {
  location: PropTypes.shape({
    pathName: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string,
      }).isRequired,
    }),
    bejoistic: PropTypes.shape({
      post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        dateCreated: PropTypes.string.isRequired,
      }),
      next: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              slug: PropTypes.string,
              title: PropTypes.string,
              image: PropTypes.string,
            }),
          })
        ),
      }),
      prev: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              slug: PropTypes.string,
              title: PropTypes.string,
              image: PropTypes.string,
            }),
          })
        ),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query($id: ID!, $cursor: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    bejoistic {
      post(id: $id) {
        slug
        text
        title
        image
        dateCreated
        author
        authorUrl
      }
      prev: allPosts(after: $cursor, first: 1, tags_Name: "detras-del-pixel") {
        edges {
          cursor
          node {
            slug
            title
            image
          }
        }
      }
      next: allPosts(before: $cursor, last: 1, tags_Name: "detras-del-pixel") {
        edges {
          cursor
          node {
            slug
            title
            image
          }
        }
      }
    }
  }
`;

export default LogSingle;
