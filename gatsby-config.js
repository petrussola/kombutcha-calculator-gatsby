require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.kombutcha.club",
    title: "Kombucha - Receipe and Ingredient Calculator",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.GATSBY_ADSENSE_PUBLISHER_ID,
      },
    },
  ],
};
