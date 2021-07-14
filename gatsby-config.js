require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    url: "https://www.kombutcha.club",
    title: "Kombucha - Receipe and Ingredient Calculator",
    titleTemplate: "%s · Kombucha Receipe and Ingredient Proportion Calculator",
    description:
      "Kombucha receipes and ingredient proportions calculator for the Kombucha receipe so you add the right amount of sugar, tea and vinegar.",
    image: "/images/kombucha.jpg",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
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
