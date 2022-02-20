module.exports = {
  siteMetadata: {
      title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", 
  "gatsby-plugin-styled-components", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp",
{
  resolve: "gatsby-source-filesystem",
  options: {
    name: `blog`,
    path: `${__dirname}/blog`,
  }
},
],
};