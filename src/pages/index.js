import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import RichText from "components/rich-text";
import Box from "components/box";
import Grid from "components/grid";
import ProjectCard from "components/project-card";

import "./home.css";

const description = `
I'm a [Indonesian](https://twitter.com/bejoistic) full-stack developer, I have [done some cool stuff](/projects). I am devoted to make technology _and coding_ more human, fun and playful. I like to make things that I haven’t made before, that's how I learn. I travel to work from anywhere, bootstrap side projects into open startups and only own what fits in my backpack.

Currently improving this site with more features, content and styling. More [about me here](/about).
`;

const IndexPage = ({ data }) => {
  const projects = data.bejoistic.allProjects.edges.filter(
    ({ node }) => node.publish
  );

  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <Box className="home-box">
          <img
            className="avatar"
            src="/img/avatar.jpg"
            alt="avatar"
            title="avatar"
          />
          <RichText text={description} />
        </Box>
        <Grid className="home-project-grid">
          {projects.map(({ node }) => {
            const { id, slug, image, name } = node;
            return (
              <ProjectCard
                key={id}
                id={id}
                name={name}
                image={image}
                slug={slug}
              />
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    bejoistic: PropTypes.shape({
      allProjects: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string,
              slug: PropTypes.string,
              name: PropTypes.string,
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
      allProjects {
        edges {
          node {
            slug
            id
            name
            image
            publish
          }
        }
      }
    }
  }
`;

export default IndexPage;
