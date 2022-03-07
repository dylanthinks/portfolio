require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
      title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-styled-components", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  "gatsby-transformer-remark",
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
    },
    forceFullSync: true
  },
],
};