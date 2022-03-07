const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            url
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.url}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        url: edge.node.url,
      },
    })
  })
}