require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    `gatsby-plugin-offline`,
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
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'track.bejoistic.com'
      }
    },
    {
      resolve: "gatsby-plugin-webmention",
      options: {
        username: `https://bejoistic.com`,
        identity: {
          twitter: `bejoistic`,
          github: `bejoistic`,
          email: `hey@bejoistic.com`,
        },
        mentions: true,
        pingbacks: true,
        forwardPingbacksAsWebmentions: 'https://brid.gy',
        domain: 'bejoistic.com',
        fetchLimit: 10000,
        token: process.env.WEBMENTION_IO_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-valine`,
      options: {
        serverURLs: process.env.LEANCLOUD_URL,
        appId: process.env.LEANCLOUD_APP_ID,
        appKey: process.env.LEANCLOUD_APP_KEY,
        requiredFields: ['nick', 'mail'],
        avatar: `robohash`,
        lang: 'en',
        pageSize: '6',
      },
    },
    {
      resolve: 'gatsby-plugin-security-txt',
      options: {
        contact: 'mailto:hey@bejoistic.com',
        encryption: 'https://bejoistic.com/pgp/pgp_keys.asc',
        canonical: 'https://bejoistic.com/.well-known/security.txt',
        languages: 'en'
      }
    }
  ],
};
