/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Facebook from "./fb";
import Twitter from "./tw";
import getSchemaOrg from "./shchema-org";

function SEO({ description, meta, keywords, title, image, pathName }) {
  const { site, buildTime } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            author
            image
            ogLanguage
            siteLanguage
            siteUrl
          }
        }
      }
    `
  );

  const author = "Ahmad Ainul Rizki";
  const { siteMetadata } = site;

  const seo = {
    title,
    description: description || siteMetadata.description,
    image: image || siteMetadata.image,
    url: `${siteMetadata.siteUrl}${pathName || ""}`,
  };

  const link = [
    {
      type: "application/rss+xml",
      rel: "alternate",
      title: "bejoistic logs",
      href: "https://feeds.bejoistic.com/bejoistic-logs",
    },
  ];

  const metaArr = [{}, ...meta].concat(
    keywords.length > 0
      ? {
          name: `keywords`,
          content: keywords.join(`, `),
        }
      : []
  );

  const schemaOrgWebPage = getSchemaOrg({
    title,
    seo,
    author,
    buildTime,
    ...siteMetadata,
  });

  return (
    <>
      <Helmet
        title={title}
        titleTemplate="%s | bejoistic"
        meta={metaArr}
        link={link}
      >
        <html lang={siteMetadata.siteLanguage} />
        <meta name="description" content={seo.description} />
        <link rel="alternate" type="application/rss+xml" title="Logs feed" href="https://feeds.bejoistic.com/bejoistic-logs" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      </Helmet>
      <Facebook
        description={seo.description}
        image={seo.image}
        title={seo.title}
        url={seo.url}
        locale={siteMetadata.ogLanguage}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username="bejoistic"
      />
    </>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  pathName: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.shape({})),
};

SEO.defaultProps = {
  image: undefined,
  description: undefined,
  meta: [],
  keywords: [],
  pathName: undefined,
};

export default SEO;
