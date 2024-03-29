module.exports = {
  siteMetadata: {
    title: `Lovedogs London`,
    description: `Dog Walking services in West London`,
    author: `Fran Rodriguez <fran.rodriguez@inferente.com>`,
    siteUrl: `https://lovedogs.london/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `minigallery`,
        path: `${__dirname}/src/images/minigallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/images/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `SocialMedia`,
        path: `${__dirname}/src/images/SocialMedia`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `TAC`,
        path: `${__dirname}/src/files`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lovedogs London`,
        short_name: `Lovedogs London`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
