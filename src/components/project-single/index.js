import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import truncate from "truncate";

import Box from "components/box";
import RichText from "components/rich-text";
import Layout from "components/layout";
import SEO from "components/seo";

import "./style.css";

const ProjectSingle = props => {
  const { data, location } = props;
  const { project } = data.bejoistic;
  const { description, name, image, dateCreated, imageSet } = project;

  const truncateText = truncate(project.description, 140);
  const gallery = imageSet.filter(item => {
    return item.imgType === "GAL";
  });

  return (
    <Layout className="project-single">
      <SEO
        description={truncateText}
        title={name}
        image={image}
        pathName={location.pathName}
      />
      <div className="wrapper">
        <Box className="title-box">
          {image ? <img src={image} alt={name} /> : null}
          <div className="project-attributes">
            <h1>{name}</h1>
            <span className="mono">{dateCreated}</span>
          </div>
        </Box>
        <RichText text={description} limit />
        <section className="project-gallery">
          {gallery.map(({ image: src }, i) => {
            return <img key={i} src={src} alt={name} />;
          })}
        </section>
      </div>
    </Layout>
  );
};

ProjectSingle.propTypes = {
  location: PropTypes.shape({
    pathName: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    bejoistic: PropTypes.shape({
      project: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        imageSet: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.string,
          })
        ),
        dateCreated: PropTypes.string.isRequired,
      }),
      next: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              slug: PropTypes.string,
              name: PropTypes.string,
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
              name: PropTypes.string,
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
    bejoistic {
      project(id: $id) {
        slug
        description
        name
        image
        imageSet {
          image
          imgType
        }
        dateCreated
      }
      prev: allProjects(after: $cursor, first: 1) {
        edges {
          cursor
          node {
            slug
            name
            image
          }
        }
      }
      next: allProjects(before: $cursor, last: 1) {
        edges {
          cursor
          node {
            slug
            name
            image
          }
        }
      }
    }
  }
`;

export default ProjectSingle;
