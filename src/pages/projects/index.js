import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import Grid from "components/grid";
import ProjectCard from "components/project-card";

import "./style.css";

function useQuery(search) {
  return new URLSearchParams(search);
}

const Projects = ({ data, location }) => {
  const query = useQuery(location.search);
  const category = query.get("category");

  const projects = data.bejoistic.allProjects.edges.filter(({ node }) => {
    if (node.publish === false) return false;
    if (category === null) return true;
    if (node.category.slug !== category) return false;
    return true;
  });

  const categories = data.bejoistic.allProjectCategories;

  return (
    <Layout className="projects-page">
      <SEO title="Projects" />
      <div className="wrapper">
        <ul className="projects-category-nav">
          <li>
            <Link
              className={category == null ? "-active" : null}
              to="/projects"
            >
              All
            </Link>
          </li>
          {categories.map(node => {
            const { name, slug } = node;
            return (
              <li key={slug}>
                <Link
                  className={category === slug ? "-active" : null}
                  to={`/projects?category=${slug}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Grid className="projects-grid">
          {projects.map(({ node }) => {
            const { id, image, slug, name } = node;
            return (
              <ProjectCard
                key={id}
                id={id}
                slug={slug}
                name={name}
                image={image}
              />
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};

Projects.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    bejoistic: PropTypes.shape({
      allProjectCategories: PropTypes.arrayOf(PropTypes.shape({})),
      allProjects: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string,
              name: PropTypes.string,
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
      allProjectCategories {
        slug
        name
      }
      allProjects {
        edges {
          node {
            id
            name
            slug
            image
            publish
            category {
              slug
            }
          }
        }
      }
    }
  }
`;

export default Projects;
