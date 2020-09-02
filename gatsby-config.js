module.exports = {
  siteMetadata: {
    title: `bejoistic`,
    description: `A place without shape, the habitat for work, experiments and creativity.`,
    author: `@bejoistic`,
    siteUrl: `https://bejoistic.com`,
    image: "/img/preview.png",
    siteLanguage: "en",
    ogLanguage: "en-us",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bejoistic`,
        short_name: `bejoistic`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "bejoisticType",
        fieldName: "bejoistic",
        url: "https://api.bejoistic.com/graphql",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Barlow:300,500,700", "Roboto Mono"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "-dark",
        classNameLight: "-light",
      },
    },
  ],
};
